"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Domain, Status } from "@/lib/content/types";
import type { ProjectView } from "@/lib/content/view";

interface Labels {
  readonly inProduction: string;
  readonly other: string;
  readonly close: string;
  readonly roleLabel: string;
  readonly stackLabel: string;
  readonly previous: string;
  readonly next: string;
  readonly previousShot: string;
  readonly nextShot: string;
  readonly shotCount: string;
  readonly zoom: string;
  readonly closeZoom: string;
  readonly shotPosition: string;
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
  const zoomRef = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const shot = item.shots[index];
  const total = item.shots.length;

  // Trocar de projeto volta a galeria para a primeira imagem e fecha a tela
  // cheia, senao o proximo projeto abre na terceira tela sem motivo.
  // biome-ignore lint/correctness/useExhaustiveDependencies: o gatilho e a troca de projeto, e `item.slug` e exatamente isso.
  useEffect(() => {
    setIndex(0);
    setZoomed(false);
  }, [item.slug]);

  const step = useCallback(
    (delta: number) => setIndex((c) => (c + delta + total) % total),
    [total],
  );

  // AS SETAS DO TECLADO ANDAM ENTRE IMAGENS, e nao entre projetos. Quem esta
  // olhando uma galeria aberta espera que a seta mostre a proxima TELA; pular
  // para outro projeto ali seria perder o lugar sem pedir.
  useEffect(() => {
    if (total < 2) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, total]);

  // O dialogo de tela cheia e um `<dialog>` PROPRIO, empilhado sobre o do
  // projeto. Dois dialogos nativos empilham de verdade: o Esc fecha o de
  // cima, e o de baixo continua aberto atras, que e o comportamento que o
  // visitante espera de um zoom.
  useEffect(() => {
    const dialog = zoomRef.current;
    if (!dialog) return;
    if (zoomed && !dialog.open) dialog.showModal();
    if (!zoomed && dialog.open) dialog.close();
  }, [zoomed]);

  if (total === 0) {
    return (
      <div className="relative aspect-[16/8] w-full overflow-hidden border-b border-line bg-sunken">
        <StackBlock item={item} big />
      </div>
    );
  }

  const arrows = (size: "sm" | "lg") => (
    <>
      <button
        type="button"
        onClick={() => step(-1)}
        aria-label={labels.previousShot}
        className={`absolute top-1/2 left-3 z-10 grid -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas/90 text-ink-muted shadow-sm backdrop-blur-sm transition-colors hover:text-ink ${size === "lg" ? "size-11" : "size-8"}`}
      >
        <svg
          viewBox="0 0 24 24"
          className={size === "lg" ? "size-5" : "size-4"}
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
        className={`absolute top-1/2 right-3 z-10 grid -translate-y-1/2 place-items-center rounded-full border border-line bg-canvas/90 text-ink-muted shadow-sm backdrop-blur-sm transition-colors hover:text-ink ${size === "lg" ? "size-11" : "size-8"}`}
      >
        <svg
          viewBox="0 0 24 24"
          className={size === "lg" ? "size-5" : "size-4"}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </>
  );

  const position = labels.shotPosition
    .replace("{n}", String(index + 1))
    .replace("{total}", String(total));

  return (
    <div className="relative border-b border-line">
      {/* A imagem inteira cabe na moldura, sem corte e sem rolagem: a captura
          e feita numa janela de 1440x1120, que da proporcao 0,78. Clicar abre
          em tela cheia, para quem quiser ler o texto pequeno. */}
      <button
        type="button"
        onClick={() => setZoomed(true)}
        aria-label={labels.zoom}
        className="group/zoom flex h-[62vh] w-full cursor-zoom-in items-center justify-center bg-sunken"
      >
        <Image
          src={shot.src}
          alt={shot.alt}
          className="h-full w-auto max-w-full object-contain"
          sizes="(max-width: 1024px) 100vw, 1000px"
          priority={index === 0}
        />
        <span className="pointer-events-none absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-xs text-ink-inverse opacity-0 transition-opacity group-hover/zoom:opacity-100">
          <svg
            viewBox="0 0 24 24"
            className="size-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path
              d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {labels.zoom}
        </span>
      </button>

      {total > 1 && arrows("sm")}

      <div className="flex flex-col gap-3 px-5 py-3">
        <div className="flex items-baseline gap-3">
          <p className="flex-1 text-xs leading-relaxed text-ink-muted">{shot.caption}</p>
          {total > 1 && (
            <span className="shrink-0 font-mono text-[0.625rem] text-ink-faint tabular-nums">
              {position}
            </span>
          )}
        </div>
        {total > 1 && (
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

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: o Esc do <dialog> nativo e o equivalente de teclado, tratado em onClose. */}
      <dialog
        ref={zoomRef}
        onClose={() => setZoomed(false)}
        onClick={(event) => {
          if (event.target === zoomRef.current) setZoomed(false);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink/95 p-0 backdrop:bg-ink/80"
      >
        {zoomed && (
          <div className="relative flex h-dvh w-screen flex-col items-center justify-center gap-4 px-14 py-12">
            <Image
              src={shot.src}
              alt={shot.alt}
              className="max-h-[82vh] w-auto max-w-full object-contain"
              sizes="100vw"
            />
            <p className="max-w-3xl text-center text-sm text-ink-inverse/80">{shot.caption}</p>
            {total > 1 && arrows("lg")}
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label={labels.closeZoom}
              className="absolute top-5 right-5 grid size-10 place-items-center rounded-full border border-ink-inverse/25 text-ink-inverse/80 transition-colors hover:text-ink-inverse"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
            {total > 1 && (
              <span className="absolute top-6 left-6 font-mono text-xs text-ink-inverse/70 tabular-nums">
                {position}
              </span>
            )}
          </div>
        )}
      </dialog>
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

  // Producao e obra em curso na MESMA secao. O que distingue os dois ja e a
  // pastilha e o ponto colorido dentro do card, e uma secao so para um item
  // criava um degrau de hierarquia que nao existe na pratica.
  const live = items.filter((i) => i.status === "live" || i.status === "building");
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
        className="m-auto w-[min(62rem,calc(100vw-2rem))] rounded-2xl border border-line bg-canvas p-0 text-ink backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
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
