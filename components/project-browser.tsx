"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { InsightChartBlock } from "@/components/insight-charts";
import type { Domain, Status } from "@/lib/content/types";
import type { InsightsView, ProjectView } from "@/lib/content/view";

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
  readonly insightsEyebrow: string;
  readonly insightsCount: string;
  readonly methodLabel: string;
  readonly zoomFigure: string;
  readonly insightsNote: string;
  readonly seeOriginal: string;
  readonly caseStudy: string;
  readonly visitSite: string;
  /** Os titulos das secoes do estudo de caso dentro do dialogo. */
  readonly sections: {
    readonly overview: string;
    readonly challenge: string;
    readonly solution: string;
    readonly impact: string;
    readonly highlights: string;
  };
}

/** O icone de "abrir em tamanho real", o mesmo da galeria. */
function ZoomIcon() {
  return (
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
  );
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
      // Com uma figura da analise aberta em tela cheia, a seta nao pode andar
      // a galeria escondida atras dela.
      if (document.querySelector("dialog[data-figure-zoom][open]")) return;
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
            <span className="shrink-0 font-mono text-[0.625rem] text-ink-subtle tabular-nums">
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
 * O ESTUDO DE CASO do projeto, num topico recolhido dentro do dialogo.
 *
 * Nao entra na galeria de proposito: a galeria mostra o SISTEMA, e isto mostra
 * o que ele permitiu descobrir. Misturar as duas coisas no mesmo carrossel
 * fazia uma pagina de relatorio parecer uma tela do produto.
 *
 * Fechado, ja vende: o titulo e o achado, e as miniaturas avisam que tem
 * grafico dentro. Aberto, le de cima para baixo como um estudo de caso: tres
 * numeros, cada figura com a frase que ela prova, e o metodo no fim.
 *
 * `<details>` nativo: abre e fecha por teclado, o leitor de tela anuncia o
 * estado, e nenhuma linha de estado propria. As figuras abrem em tela cheia
 * num `<dialog>` empilhado, igual ao zoom da galeria.
 */
function InsightsPanel({ data, labels }: { data: InsightsView; labels: Labels }) {
  const zoomRef = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState<number | null>(null);
  const figure = zoomed === null ? null : data.figures[zoomed];

  useEffect(() => {
    const dialog = zoomRef.current;
    if (!dialog) return;
    if (zoomed !== null && !dialog.open) dialog.showModal();
    if (zoomed === null && dialog.open) dialog.close();
  }, [zoomed]);

  const count =
    data.frame?.count ?? labels.insightsCount.replace("{figures}", String(data.figures.length));

  return (
    <details className="group/insights overflow-hidden rounded-xl border border-line bg-sunken">
      <summary className="flex cursor-pointer list-none items-center gap-4 p-5 transition-colors hover:bg-subtle/60 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="block font-mono text-[0.625rem] tracking-wide text-accent uppercase">
            {data.frame?.eyebrow ?? labels.insightsEyebrow}
          </span>
          <span className="mt-1.5 block text-base font-semibold tracking-tight text-balance">
            {data.title}
          </span>
          <span className="mt-1 block text-xs text-ink-subtle">{count}</span>
        </span>
        <span className="hidden shrink-0 -space-x-5 sm:flex" aria-hidden="true">
          {data.figures
            .flatMap((fig) => (fig.page ? [fig.page] : []))
            .slice(0, 3)
            .map((page) => (
              <span
                key={page.src}
                className="relative h-11 w-16 overflow-hidden rounded-md border border-line bg-canvas shadow-sm"
              >
                <Image
                  src={page}
                  alt=""
                  className="h-full w-full object-cover object-left-top"
                  sizes="64px"
                />
              </span>
            ))}
        </span>
        <span className="grid size-8 shrink-0 place-items-center rounded-full border border-line bg-canvas text-ink-muted transition-transform duration-300 [transition-timing-function:var(--ease-out-soft)] group-open/insights:rotate-180">
          <svg
            viewBox="0 0 24 24"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </summary>

      <div className="flex flex-col gap-8 border-t border-line p-3.5 sm:p-6">
        <p className="max-w-prose text-sm leading-relaxed text-ink-muted text-pretty">
          {data.intro}
        </p>

        {/* `dt` antes de `dd`, como o HTML pede; o `flex-col-reverse` poe o
            numero em cima so na tela. */}
        <dl className="grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
          {data.highlights.map((h) => (
            <div key={h.label} className="flex flex-col-reverse justify-end gap-1 bg-canvas p-4">
              <dt className="text-xs leading-snug text-ink-subtle text-pretty">{h.label}</dt>
              <dd className="font-mono text-xl font-semibold tracking-tight text-accent tabular-nums">
                {h.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="flex flex-col gap-10">
          {data.figures.map((fig, i) => (
            <li key={fig.takeaway}>
              <figure className="flex flex-col gap-3">
                <h4 className="text-sm font-semibold tracking-tight text-pretty">{fig.takeaway}</h4>
                {fig.chart ? (
                  <div className="rounded-lg border border-line bg-canvas p-3 shadow-sm sm:p-5">
                    <InsightChartBlock chart={fig.chart} locale={data.locale} alt={fig.alt} />
                  </div>
                ) : (
                  fig.page && (
                    <button
                      type="button"
                      onClick={() => setZoomed(i)}
                      aria-label={labels.zoomFigure}
                      className="group/fig relative block w-fit max-w-full cursor-zoom-in overflow-hidden rounded-lg border border-line bg-canvas shadow-sm transition-colors hover:border-line-strong"
                    >
                      <Image
                        src={fig.page}
                        alt={fig.alt}
                        className="h-auto max-h-[74vh] w-auto max-w-full"
                        sizes="(max-width: 1024px) 100vw, 900px"
                      />
                      <span className="pointer-events-none absolute top-2.5 right-2.5 flex items-center gap-1.5 rounded-full bg-ink/70 px-2.5 py-1 text-xs text-ink-inverse opacity-0 transition-opacity group-hover/fig:opacity-100 group-focus-visible/fig:opacity-100">
                        <ZoomIcon />
                        {labels.zoomFigure}
                      </span>
                    </button>
                  )
                )}
                <figcaption className="flex flex-col items-start gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="max-w-prose text-xs leading-relaxed text-ink-subtle text-pretty">
                    {fig.caption}
                  </span>
                  {fig.chart && fig.page && (
                    <button
                      type="button"
                      onClick={() => setZoomed(i)}
                      className="flex shrink-0 items-center gap-1.5 rounded-full border border-line bg-canvas px-3 py-1 text-xs text-ink-muted transition-colors hover:border-line-strong hover:text-accent"
                    >
                      <ZoomIcon />
                      {labels.seeOriginal}
                    </button>
                  )}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 border-t border-line pt-5">
          <p className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">
            {data.methodLabel ?? labels.methodLabel}
          </p>
          <ul className="flex flex-col gap-2">
            {data.method.map((line) => (
              <li key={line} className="flex gap-3 text-xs leading-relaxed text-ink-muted">
                <span
                  className="mt-[0.4rem] size-1 shrink-0 rounded-full bg-ink-subtle"
                  aria-hidden="true"
                />
                <span className="text-pretty">{line}</span>
              </li>
            ))}
          </ul>
          {/* A nota de anonimizacao e dos paineis com DADO da operacao. O da IA
              mostra arquitetura, nao numero, e nao leva a nota. */}
          {!data.frame && <p className="text-xs text-ink-subtle">{labels.insightsNote}</p>}
        </div>
      </div>

      {/* biome-ignore lint/a11y/useKeyWithClickEvents: o Esc do <dialog> nativo e o equivalente de teclado, tratado em onClose. */}
      <dialog
        ref={zoomRef}
        data-figure-zoom=""
        onClose={() => setZoomed(null)}
        onClick={(event) => {
          if (event.target === zoomRef.current) setZoomed(null);
        }}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-ink/95 p-0 backdrop:bg-ink/80"
      >
        {figure?.page && (
          <div className="relative flex h-dvh w-screen flex-col items-center justify-center gap-4 overflow-y-auto px-6 py-14 sm:px-14">
            <Image
              src={figure.page}
              alt={figure.alt}
              className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain"
              sizes="100vw"
            />
            <p className="max-w-3xl text-center text-sm text-ink-inverse/80">{figure.caption}</p>
            <button
              type="button"
              onClick={() => setZoomed(null)}
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
          </div>
        )}
      </dialog>
    </details>
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

  /* O PRIMEIRO card de producao e o destaque: ocupa 2x2 celulas da grade de
     quatro colunas, e os outros quatro preenchem as 2x2 restantes. Sao
     exatamente duas linhas, sem card orfao, e a hierarquia aparece sem uma
     palavra. A imagem do destaque cresce junto (`flex-1` em vez de proporcao
     fixa), senao sobraria um bloco de texto vazio embaixo dela. */
  /* QUANDO SOBRA CARD. Com mais de cinco projetos em producao, o que passa
     das duas linhas de quatro colunas divide a terceira linha entre si, em vez
     de ficar um card sozinho num canto. Um que sobra sozinho vira um card
     largo, imagem a esquerda e texto a direita. No celular (duas colunas) a
     mesma regra: um numero impar de cards pequenos alarga o ultimo. */
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

  /* O CARD E UM <article> COM UM <h3> DENTRO, e o botao que abre o dialogo
     mora no h3. Antes o card inteiro era um <button> e o nome do projeto um
     <span>: para um leitor automatico a pagina tinha um h1, dois h2 e nenhum
     nome de sistema era titulo de coisa alguma. O botao continua cobrindo o
     card inteiro, por um pseudo-elemento esticado sobre o <article>
     (`after:absolute after:inset-0`), entao o alvo de clique e o mesmo. O
     anel de foco vai no card, onde o olho procura, e nao so no texto. */
  const tile = (item: ProjectView, featured = false, cell?: string, wide = false) => (
    <li key={item.slug} className={cell}>
      <article
        className={`group relative flex h-full w-full flex-col overflow-hidden rounded-xl border border-line bg-canvas/70 backdrop-blur-sm transition-all duration-300 [transition-timing-function:var(--ease-out-soft)] hover:-translate-y-0.5 hover:border-line-strong hover:shadow-sm has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${wide ? "xl:flex-row" : ""}`}
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
          {/* Avisa ANTES do clique que ali dentro tem estudo de caso com dado
              real. Sem isto, a parte mais funda do projeto so aparecia para
              quem abrisse o card e rolasse ate o fim. */}
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
              <button
                type="button"
                onClick={() => openProject(item.slug)}
                className="text-left after:absolute after:inset-0 after:content-[''] focus:outline-none"
              >
                {item.name}
              </button>
            </h3>
          </div>
          <p
            className={`leading-relaxed text-ink-subtle ${featured ? "text-sm" : "line-clamp-2 text-xs"} ${wide ? "xl:line-clamp-none xl:text-sm" : ""}`}
          >
            {item.tagline}
          </p>
          <div className="mt-auto flex items-center gap-2 pt-2 text-ink-faint">
            {stackIcons(item, 5)}
          </div>
        </div>
      </article>
    </li>
  );

  /* OS TRABALHOS DE ESTUDO SAO LISTA, NAO CARD. Card do mesmo tamanho dava
     ao exercicio de curso o mesmo peso do sistema em producao, e a tese do
     site e o contrario. Uma linha por projeto (miniatura, nome, uma frase,
     stack, periodo) abre o mesmo dialogo, so ocupa um quarto do espaco.
     Mesma estrutura do card: <article>, <h3> e o botao esticado. */
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
            <button
              type="button"
              onClick={() => openProject(item.slug)}
              className="text-left after:absolute after:inset-0 after:content-[''] focus:outline-none"
            >
              {item.name}
            </button>
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

  const titleId = (slug: string) => `project-title-${slug}`;

  /* Uma secao do estudo de caso: rotulo pequeno em cima, texto embaixo. O
     rotulo e um h4 de verdade, abaixo do h3 do nome do projeto. */
  const block = (label: string, text: string) => (
    <section>
      <h4 className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">{label}</h4>
      <p className="mt-1 text-sm leading-relaxed text-ink-muted text-pretty">{text}</p>
    </section>
  );

  return (
    <>
      {live.length > 0 && (
        <section>
          {heading(labels.inProduction)}
          <ul className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
            {live.map((item, i) => {
              const { cell, wide } = placement(i, live.length);
              return tile(item, i === 0, cell, wide);
            })}
          </ul>
        </section>
      )}
      {rest.length > 0 && (
        <section className="mt-8">
          {heading(labels.other)}
          <ul className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line bg-canvas/70 backdrop-blur-sm">
            {rest.map(row)}
          </ul>
        </section>
      )}

      {/* A regra useKeyWithClickEvents pede um equivalente de teclado para
          todo onClick. Aqui ele ja existe e e melhor do que um sintetico: o
          `<dialog>` nativo fecha no Esc sozinho, e isso chega no `onClose`
          abaixo. O onClick cobre so o clique no backdrop, que nao tem nem
          como receber foco. */}
      {/* O TEXTO DE TODO PROJETO ESTA NO HTML, nao so o do dialogo aberto.
          Antes o dialogo so existia depois do clique: resumo, papel, metricas
          e estudo de caso nao apareciam para buscador nem para leitor
          automatico, e a pagina mais importante do site dizia so dezesseis
          nomes e dezesseis frases. Agora cada projeto e um <article> dentro
          do <dialog>, escondido com `hidden` ate ser o aberto. Galeria e
          painel de resultados continuam montados so para o projeto aberto:
          sao eles que pesam, e o texto e o que precisa estar la. */}
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: o Esc do <dialog> nativo e o equivalente de teclado, tratado em onClose. */}
      <dialog
        ref={dialogRef}
        aria-labelledby={open ? titleId(open.slug) : undefined}
        onClose={(event) => {
          // O `close` nativo nao borbulha, mas o React repassa o `onClose` dos
          // dialogos de zoom aqui dentro para este. Sem o filtro, o Esc no zoom
          // fechava o projeto inteiro junto.
          if (event.target === dialogRef.current) close();
        }}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
        className="m-auto w-[min(62rem,calc(100vw-2rem))] rounded-2xl border border-line bg-canvas p-0 text-ink backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
      >
        {items.map((item) => {
          const isOpen = open?.slug === item.slug;
          const study = item.caseStudy;
          return (
            <article key={item.slug} hidden={!isOpen} className="max-h-[88vh] overflow-y-auto">
              {isOpen && (
                <div className="relative">
                  <Gallery item={item} labels={labels} />
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
              )}

              <div className="flex flex-col gap-5 p-5 sm:p-7">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-ink-subtle">
                    <span
                      className={`rounded-full px-2 py-0.5 font-medium ${
                        item.status === "live"
                          ? "bg-ok/12 text-ok"
                          : item.status === "building"
                            ? "bg-accent-soft text-accent"
                            : "bg-subtle text-ink-muted"
                      }`}
                    >
                      {labels.status[item.status]}
                    </span>
                    <span>{labels.domains[item.domain]}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.period}</span>
                  </div>
                  <h3
                    id={titleId(item.slug)}
                    className="mt-3 text-xl font-semibold tracking-tight text-balance"
                  >
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink-subtle">{item.tagline}</p>
                  {/* O unico sistema com endereco publico. O dominio aparece
                      escrito: e o que diz, antes do clique, que aquilo existe. */}
                  {item.link && (
                    <a
                      href={item.link.url}
                      target="_blank"
                      rel="noopener"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
                    >
                      {labels.visitSite}
                      <span className="font-mono text-xs opacity-80">{item.link.host}</span>
                      <svg
                        viewBox="0 0 24 24"
                        className="size-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        aria-hidden="true"
                      >
                        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  )}
                </div>

                {block(labels.sections.overview, item.summary)}

                {item.shots.length === 0 && (
                  <p className="text-xs text-ink-subtle">{labels.noShot}</p>
                )}

                {/* `dt` antes de `dd`, como o HTML pede; o `flex-col-reverse`
                    poe o numero em cima so na tela. */}
                {item.metrics.length > 0 && (
                  <dl className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-xl bg-sunken p-5 sm:grid-cols-4">
                    {item.metrics.map((metric) => (
                      <div key={metric.label} className="flex flex-col-reverse gap-0.5">
                        <dt className="text-xs leading-snug text-ink-subtle">{metric.label}</dt>
                        <dd className="font-mono text-lg font-semibold tabular-nums">
                          {metric.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {/* O ESTUDO DE CASO, na ordem em que se le um: o problema, o
                    papel, a solucao, o que mudou. Dois a dois, porque sao
                    paragrafos curtos e lado a lado se leem como par. */}
                {study && (
                  <div className="grid gap-5 border-t border-line pt-5 sm:grid-cols-2">
                    {study.challenge && block(labels.sections.challenge, study.challenge)}
                    {block(labels.roleLabel, item.role)}
                    {study.solution && block(labels.sections.solution, study.solution)}
                    {study.impact && block(labels.sections.impact, study.impact)}
                  </div>
                )}

                {/* `key` pelo projeto: trocar de projeto remonta o topico, que
                    volta fechado em vez de herdar o estado do anterior. */}
                {isOpen && item.insights && (
                  <InsightsPanel key={item.slug} data={item.insights} labels={labels} />
                )}

                {study && study.highlights.length > 0 && (
                  <section className="border-t border-line pt-5">
                    <h4 className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">
                      {labels.sections.highlights}
                    </h4>
                    <ul className="mt-2 flex flex-col gap-2">
                      {study.highlights.map((line) => (
                        <li
                          key={line}
                          className="flex gap-3 text-sm leading-relaxed text-ink-muted"
                        >
                          <span
                            className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-ink-subtle"
                            aria-hidden="true"
                          />
                          <span className="text-pretty">{line}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                <div className="grid gap-4 border-t border-line pt-5 sm:grid-cols-2">
                  {!study && block(labels.roleLabel, item.role)}
                  <div className={study ? "sm:col-span-2" : undefined}>
                    <h4 className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">
                      {labels.stackLabel}
                    </h4>
                    {/* O icone so no artigo aberto: sao dezesseis artigos no
                        HTML e cada path de logo pesa mais que o texto inteiro
                        do projeto. O nome escrito e o que importa para quem
                        le sem ver, e ele fica sempre. */}
                    <ul className="mt-2 flex flex-wrap gap-3 text-ink-subtle">
                      {item.stack.map((tech) => (
                        <li key={tech.key} className="flex items-center gap-1.5">
                          {isOpen && (
                            <svg
                              viewBox="0 0 24 24"
                              aria-hidden="true"
                              className="size-4"
                              fill="currentColor"
                            >
                              <path d={tech.path} />
                            </svg>
                          )}
                          <span className="text-xs">{tech.title}</span>
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
          );
        })}
      </dialog>
    </>
  );
}
