import Image from "next/image";
import Link from "next/link";
import type { ProjectView } from "@/lib/content/view";
import type { Locale } from "@/lib/i18n/config";

export interface GridLabels {
  readonly inProduction: string;
  readonly other: string;
  readonly moreCoursework: string;
  readonly caseStudy: string;
  readonly flagship: string;
}

/** Os logos da stack em bloco, quando nao ha captura daquele sistema. */
function StackBlock({ item, big }: { item: ProjectView; big?: boolean }) {
  return (
    <div className="flex h-full w-full flex-wrap content-center items-center justify-center gap-4 bg-sunken p-5">
      {item.stack.slice(0, big ? 8 : 5).map((tech) => (
        <svg
          key={tech.key}
          viewBox="0 0 24 24"
          role="img"
          aria-label={tech.title}
          className={`${big ? "size-7" : "size-5"} text-ink-faint`}
          fill="currentColor"
        >
          <title>{tech.title}</title>
          <path d={tech.path} />
        </svg>
      ))}
    </div>
  );
}

const stackIcons = (item: ProjectView, max: number) =>
  item.stack.slice(0, max).map((tech) => (
    <svg
      key={tech.key}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-3.5"
      fill="currentColor"
    >
      <path d={tech.path} />
    </svg>
  ));

/* O PRIMEIRO card de producao e o destaque: ocupa 2x2 celulas da grade de
   quatro colunas, e os outros quatro preenchem as 2x2 restantes. Sao
   exatamente duas linhas, sem card orfao, e a hierarquia aparece sem uma
   palavra. Com mais de cinco, o que passa divide a terceira linha; um que
   sobra sozinho vira um card largo. */
function placement(i: number, total: number): { cell?: string; wide: boolean } {
  if (i === 0) return { cell: "col-span-2 row-span-2", wide: false };
  const k = i - 1;
  const small = total - 1;
  const parts: string[] = [];
  if (small % 2 === 1 && k === small - 1) parts.push("col-span-2 sm:col-span-1");
  const extra = small - 4;
  let wide = false;
  if (extra > 0 && k >= 4) {
    if (extra === 1) {
      parts.push("xl:col-span-4");
      wide = true;
    } else if (extra === 2 || k === 4) {
      parts.push("xl:col-span-2");
    }
  }
  return { cell: parts.length ? parts.join(" ") : undefined, wide };
}

/**
 * A VITRINE. Cada card e um <article> com um <h3>, e o link para a pagina do
 * projeto mora no h3, esticado sobre o card inteiro por um pseudo-elemento.
 * O destaque ganha a moldura com brilho (`.flagship-ring`) e o selo.
 *
 * Componente de servidor: nao ha estado aqui desde que o dialogo virou pagina
 * (21/10/2026), entao nenhum texto de projeto viaja para o browser duas vezes.
 */
export function ProjectGrid({
  items,
  locale,
  labels,
  mode,
}: {
  items: readonly ProjectView[];
  locale: Locale;
  labels: GridLabels;
  /** `featured` = so os de producao, sem titulos de secao (a home). */
  mode: "featured" | "all";
}) {
  const live = items.filter((i) => i.status === "live" || i.status === "building");
  const rest = items.filter((i) => i.status !== "live" && i.status !== "building");
  const main = rest.filter((i) => !i.minor);
  const minor = rest.filter((i) => i.minor);
  const href = (item: ProjectView) => `/${locale}/projects/${item.slug}`;

  const tile = (item: ProjectView, featured = false, cell?: string, wide = false) => (
    <li key={item.slug} className={cell}>
      <div className={featured ? "flagship-ring h-full rounded-xl p-[2px]" : "h-full"}>
        <article
          className={`group relative flex h-full w-full flex-col overflow-hidden ${featured ? "rounded-[10px] bg-canvas/95" : "rounded-xl border border-line bg-canvas hover:border-line-strong"} transition-all duration-300 [transition-timing-function:var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-sm has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${wide ? "xl:flex-row" : ""}`}
        >
          <div
            className={`relative w-full overflow-hidden border-b border-line bg-sunken ${featured ? "min-h-56 flex-1" : "aspect-[16/10]"} ${wide ? "xl:aspect-[16/8] xl:w-1/2 xl:shrink-0 xl:border-r xl:border-b-0" : ""}`}
          >
            {item.shots.length > 0 ? (
              <Image
                src={item.shots[0].src}
                alt=""
                className="h-full w-full object-cover object-left-top transition-transform duration-500 [transition-timing-function:var(--ease-out-soft)] group-hover:scale-[1.03]"
                sizes={
                  featured || wide
                    ? "(max-width: 1024px) 100vw, 600px"
                    : "(max-width: 1024px) 50vw, 300px"
                }
              />
            ) : (
              <StackBlock item={item} />
            )}
            {item.shots.length > 1 && (
              <span className="absolute right-2 bottom-2 rounded-full bg-ink/75 px-2 py-0.5 font-mono text-[0.625rem] text-ink-inverse">
                {item.shots.length}
              </span>
            )}
            {item.insights && (
              <span className="absolute top-2 left-2 rounded-full border border-line bg-canvas/95 px-2 py-0.5 font-mono text-[0.625rem] tracking-wide text-accent uppercase shadow-sm">
                {item.insights.frame?.chip ?? labels.caseStudy}
              </span>
            )}
          </div>
          <div
            className={`flex flex-col gap-1 ${featured ? "p-4" : "flex-1 p-3"} ${wide ? "xl:justify-center xl:gap-2 xl:p-6" : ""}`}
          >
            <div className="flex items-center gap-2">
              {item.status === "live" && (
                <span className="size-1.5 shrink-0 rounded-full bg-ok" aria-hidden="true" />
              )}
              {item.status === "building" && (
                <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              )}
              <h3 className={`font-semibold tracking-tight ${featured ? "text-base" : "text-sm"}`}>
                <Link
                  href={href(item)}
                  className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
                >
                  {item.name}
                </Link>
              </h3>
            </div>
            <p
              className={`leading-relaxed text-ink-subtle ${featured ? "text-sm" : "line-clamp-2 text-xs"} ${wide ? "xl:line-clamp-none xl:text-sm" : ""}`}
            >
              {item.tagline}
            </p>
            <div className="mt-auto flex items-center gap-2 pt-2 text-ink-faint">
              {stackIcons(item, 5)}
              {featured && (
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[0.6875rem] font-semibold tracking-tight text-on-accent shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-3"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l2.6 6.6L21.5 9l-5.3 4.6L17.8 21 12 17.3 6.2 21l1.6-7.4L2.5 9l6.9-.4z" />
                  </svg>
                  {labels.flagship}
                </span>
              )}
            </div>
          </div>
        </article>
      </div>
    </li>
  );

  /* OS TRABALHOS DE ESTUDO SAO LISTA, NAO CARD: uma linha por projeto. */
  const row = (item: ProjectView) => (
    <li key={item.slug}>
      <article className="group relative flex w-full items-center gap-3 px-3 py-2.5 transition-colors duration-200 hover:bg-subtle/60 has-[:focus-visible]:bg-subtle/60">
        <span className="relative hidden h-9 w-14 shrink-0 overflow-hidden rounded border border-line bg-sunken sm:block">
          {item.shots.length > 0 ? (
            <Image
              src={item.shots[0].src}
              alt=""
              className="h-full w-full object-cover object-left-top"
              sizes="56px"
            />
          ) : (
            <StackBlock item={item} />
          )}
        </span>
        <span className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-medium tracking-tight">
            <Link
              href={href(item)}
              className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
            >
              {item.name}
            </Link>
          </h3>
          <span className="block truncate text-xs text-ink-subtle">{item.tagline}</span>
        </span>
        <span className="hidden shrink-0 items-center gap-2 text-ink-faint md:flex">
          {stackIcons(item, 4)}
        </span>
        <span className="hidden shrink-0 font-mono text-[0.625rem] text-ink-subtle tabular-nums sm:block">
          {item.period}
        </span>
      </article>
    </li>
  );

  const heading = (title: string) => (
    <h2 className="font-mono text-xs tracking-wide text-ink-subtle uppercase">{title}</h2>
  );

  const grid = (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
      {live.map((item, i) => {
        const { cell, wide } = placement(i, live.length);
        return tile(item, i === 0, cell, wide);
      })}
    </ul>
  );

  if (mode === "featured") return grid;

  return (
    <>
      {live.length > 0 && (
        <section>
          {heading(labels.inProduction)}
          <div className="mt-3">{grid}</div>
        </section>
      )}
      {rest.length > 0 && (
        <section className="mt-10">
          {heading(labels.other)}
          <ul className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line bg-canvas">
            {main.map(row)}
          </ul>
          {minor.length > 0 && (
            <details className="group mt-3">
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-lg px-1 py-1 text-sm text-ink-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                <svg
                  viewBox="0 0 16 16"
                  className="size-3.5 transition-transform group-open:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {labels.moreCoursework.replace("{n}", String(minor.length))}
              </summary>
              <ul className="mt-2 divide-y divide-line overflow-hidden rounded-xl border border-line bg-canvas">
                {minor.map(row)}
              </ul>
            </details>
          )}
        </section>
      )}
    </>
  );
}
