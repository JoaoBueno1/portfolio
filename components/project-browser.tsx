"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Domain, Status } from "@/lib/content/types";
import type { ProjectView } from "@/lib/content/view";

interface Labels {
  readonly inProduction: string;
  readonly building: string;
  readonly other: string;
  readonly close: string;
  readonly roleLabel: string;
  readonly stackLabel: string;
  readonly previous: string;
  readonly next: string;
  readonly previousShot: string;
  readonly nextShot: string;
  readonly shotCount: string;
  readonly status: Record<Status, string>;
  readonly domains: Record<Domain, string>;
  readonly noShot: string;
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

/**
 * A GALERIA do dialogo.
 *
 * Uma imagem so nao mostra um sistema: mostra uma tela. Por isso `shots` e uma
 * lista, com a imagem grande, uma legenda que diz POR QUE aquela tela importa,
 * e as miniaturas embaixo.
 *
 * As miniaturas sao botoes de verdade, entao a galeria e navegavel por teclado
 * sem nenhum handler proprio. Quando o video entrar, ele vira mais um item
 * desta mesma lista e nada aqui muda de forma.
 */
function Gallery({ item, labels }: { item: ProjectView; labels: Labels }) {
  const [index, setIndex] = useState(0);
  const shot = item.shots[index];

  // Trocar de projeto tem que voltar a galeria para a primeira imagem, senao
  // o proximo projeto abre na terceira tela sem motivo nenhum.
  // biome-ignore lint/correctness/useExhaustiveDependencies: o gatilho e a troca de projeto, e `item.slug` e exatamente isso.
  useEffect(() => {
    setIndex(0);
  }, [item.slug]);

  if (item.shots.length === 0) {
    return (
      <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-line bg-sunken">
        <StackBlock item={item} big />
      </div>
    );
  }

  const step = (delta: number) =>
    setIndex((current) => (current + delta + item.shots.length) % item.shots.length);

  return (
    <div className="relative border-b border-line">
      {/* A CAPTURA INTEIRA, NUNCA CORTADA.
          As telas aqui vao de 0.56 (celular em pe) a 2.77 (manifesto largo).
          Um contentor de proporcao fixa com `object-cover` corta TODAS elas,
          e numa captura de sistema o que se corta e justamente a barra de
          navegacao ou o rodape da tabela, que e a parte que prova o que a
          tela faz. Aqui a altura e limitada e a imagem se contem dentro
          dela, entao cada uma aparece na propria forma. */}
      <div className="flex max-h-[58vh] w-full items-center justify-center overflow-hidden bg-sunken">
        <Image
          src={shot.src}
          alt={shot.alt}
          className="max-h-[58vh] w-auto max-w-full object-contain"
          sizes="56rem"
          priority={index === 0}
        />
        {item.shots.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label={labels.previousShot}
              className="absolute top-1/2 left-3 grid size-8 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas/90 text-ink-muted backdrop-blur-sm hover:text-ink"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M15 5l-7 7 7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label={labels.nextShot}
              className="absolute top-1/2 right-3 grid size-8 -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas/90 text-ink-muted backdrop-blur-sm hover:text-ink"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className="flex flex-col gap-3 px-5 py-3">
        <p className="text-xs leading-relaxed text-ink-muted">{shot.caption}</p>
        {item.shots.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {item.shots.map((thumb, i) => (
              <button
                key={thumb.src.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`${labels.shotCount} ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
                className={`relative aspect-[16/10] w-16 shrink-0 overflow-hidden rounded border-2 transition-colors ${
                  i === index ? "border-accent" : "border-transparent opacity-55 hover:opacity-100"
                }`}
              >
                <Image
                  src={thumb.src}
                  alt=""
                  className="h-full w-full object-cover object-top"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * A VITRINE.
 *
 * Cards pequenos, e o detalhe abre num dialogo em cima. O visitante nunca sai
 * da pagina: fechar devolve exatamente o que ele estava olhando, o que uma
 * pagina de destino nao faz.
 *
 * Usa o `<dialog>` nativo com `showModal()`, que traz de graca o que um modal
 * de mao costuma errar: prende o foco dentro, fecha no Esc, esconde o resto da
 * pagina do leitor de tela e desenha o proprio backdrop.
 *
 * A URL ganha `?p=<slug>` por `history.replaceState`, sem passar pelo router,
 * senao o botao voltar do browser viraria um historico de cada card aberto.
 */
export function ProjectBrowser({
  items,
  labels,
}: {
  items: readonly ProjectView[];
  labels: Labels;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState<number | null>(null);

  const setUrl = useCallback((slug: string | null) => {
    const url = new URL(window.location.href);
    if (slug) url.searchParams.set("p", slug);
    else url.searchParams.delete("p");
    window.history.replaceState(null, "", url);
  }, []);

  // `?p=<slug>` abre aquele projeto. A leitura acontece AQUI e nao no servidor:
  // tocar em `searchParams` no servidor tiraria a pagina do caminho estatico.
  // biome-ignore lint/correctness/useExhaustiveDependencies: leitura unica na montagem; `items` e estavel dentro de uma rota.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("p");
    if (!slug) return;
    const found = items.findIndex((item) => item.slug === slug);
    if (found !== -1) setIndex(found);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index === null) {
      if (dialog.open) dialog.close();
    } else if (!dialog.open) {
      dialog.showModal();
    }
  }, [index]);

  const close = useCallback(() => {
    setIndex(null);
    setUrl(null);
  }, [setUrl]);

  const go = useCallback(
    (delta: number) => {
      setIndex((current) => {
        if (current === null) return current;
        const next = (current + delta + items.length) % items.length;
        setUrl(items[next].slug);
        return next;
      });
    },
    [items, setUrl],
  );

  const open = index === null ? null : items[index];

  const live = items.filter((i) => i.status === "live");
  const building = items.filter((i) => i.status === "building");
  const rest = items.filter((i) => i.status !== "live" && i.status !== "building");

  function openProject(slug: string) {
    const found = items.findIndex((item) => item.slug === slug);
    if (found === -1) return;
    setIndex(found);
    setUrl(slug);
  }

  const tile = (item: ProjectView) => (
    <li key={item.slug}>
      <button
        type="button"
        onClick={() => openProject(item.slug)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-line bg-canvas/70 text-left backdrop-blur-sm transition-all duration-300 [transition-timing-function:var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-line-strong hover:shadow-sm"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-sunken">
          {item.shots.length > 0 ? (
            <Image
              src={item.shots[0].src}
              alt=""
              className="h-full w-full object-cover object-left-top transition-transform duration-500 [transition-timing-function:var(--ease-out-soft)] group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 50vw, 300px"
            />
          ) : (
            <StackBlock item={item} />
          )}
          {item.shots.length > 1 && (
            <span className="absolute right-2 bottom-2 rounded-full bg-ink/75 px-2 py-0.5 font-mono text-[0.625rem] text-ink-inverse">
              {item.shots.length}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-1 p-3">
          <div className="flex items-center gap-2">
            {item.status === "live" && (
              <span className="size-1.5 rounded-full bg-ok" aria-hidden="true" />
            )}
            {item.status === "building" && (
              <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
            )}
            <span className="text-sm font-semibold tracking-tight">{item.name}</span>
          </div>
          <p className="line-clamp-2 text-xs leading-relaxed text-ink-subtle">{item.tagline}</p>
          <div className="mt-auto flex items-center gap-2 pt-2 text-ink-faint">
            {item.stack.slice(0, 5).map((tech) => (
              <svg
                key={tech.key}
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-3.5"
                fill="currentColor"
              >
                <path d={tech.path} />
              </svg>
            ))}
          </div>
        </div>
      </button>
    </li>
  );

  const section = (title: string, list: readonly ProjectView[], first?: boolean) =>
    list.length > 0 && (
      <section className={first ? "" : "mt-8"}>
        <h2 className="font-mono text-xs tracking-wide text-ink-faint uppercase">{title}</h2>
        <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          {list.map(tile)}
        </ul>
      </section>
    );

  return (
    <>
      {section(labels.inProduction, live, true)}
      {section(labels.building, building)}
      {section(labels.other, rest)}

      {/* A regra useKeyWithClickEvents pede um equivalente de teclado para
          todo onClick. Aqui ele ja existe e e melhor do que um sintetico: o
          `<dialog>` nativo fecha no Esc sozinho, e isso chega no `onClose`
          abaixo. O onClick cobre so o clique no backdrop, que nao tem nem
          como receber foco. */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: o Esc do <dialog> nativo e o equivalente de teclado, tratado em onClose. */}
      <dialog
        ref={dialogRef}
        onClose={close}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="m-auto w-[min(56rem,calc(100vw-2rem))] rounded-2xl border border-line bg-canvas p-0 text-ink backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
      >
        {open && (
          <article className="max-h-[88vh] overflow-y-auto">
            <div className="relative">
              <Gallery item={open} labels={labels} />
              <button
                type="button"
                onClick={close}
                aria-label={labels.close}
                className="absolute top-3 right-3 grid size-8 place-items-center rounded-full border border-line bg-canvas/90 text-ink-muted backdrop-blur-sm hover:text-ink"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-5 p-7">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-ink-faint">
                  <span
                    className={`rounded-full px-2 py-0.5 font-medium ${
                      open.status === "live"
                        ? "bg-ok/12 text-ok"
                        : open.status === "building"
                          ? "bg-accent-soft text-accent"
                          : "bg-subtle text-ink-muted"
                    }`}
                  >
                    {labels.status[open.status]}
                  </span>
                  <span>{labels.domains[open.domain]}</span>
                  <span aria-hidden="true">·</span>
                  <span>{open.period}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-balance">
                  {open.name}
                </h3>
                <p className="mt-1 text-sm text-ink-subtle">{open.tagline}</p>
              </div>

              <p className="text-sm leading-relaxed text-ink-muted text-pretty">{open.summary}</p>

              {open.shots.length === 0 && <p className="text-xs text-ink-faint">{labels.noShot}</p>}

              {open.metrics.length > 0 && (
                <dl className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-xl bg-sunken p-5 sm:grid-cols-4">
                  {open.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd className="font-mono text-lg font-semibold tabular-nums">
                        {metric.value}
                      </dd>
                      <dt className="mt-0.5 text-xs leading-snug text-ink-faint">{metric.label}</dt>
                    </div>
                  ))}
                </dl>
              )}

              <div className="grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.625rem] tracking-wide text-ink-faint uppercase">
                    {labels.roleLabel}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{open.role}</p>
                </div>
                <div>
                  <p className="font-mono text-[0.625rem] tracking-wide text-ink-faint uppercase">
                    {labels.stackLabel}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-3 text-ink-subtle">
                    {open.stack.map((tech) => (
                      <li key={tech.key}>
                        <svg
                          viewBox="0 0 24 24"
                          role="img"
                          aria-label={tech.title}
                          className="size-5"
                          fill="currentColor"
                        >
                          <title>{tech.title}</title>
                          <path d={tech.path} />
                        </svg>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-line pt-4">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="text-sm text-ink-muted hover:text-accent"
                >
                  <span aria-hidden="true">←</span> {labels.previous}
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="text-sm text-ink-muted hover:text-accent"
                >
                  {labels.next} <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </article>
        )}
      </dialog>
    </>
  );
}
