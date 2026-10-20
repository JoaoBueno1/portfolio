"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { InsightChartBlock } from "@/components/insight-charts";
import type { InsightsView } from "@/lib/content/view";

export interface InsightsLabels {
  readonly insightsEyebrow: string;
  readonly insightsCount: string;
  readonly methodLabel: string;
  readonly zoomFigure: string;
  readonly insightsNote: string;
  readonly seeOriginal: string;
  readonly closeZoom: string;
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

/**
 * O ESTUDO DE CASO do projeto: os graficos desenhados pelo site, com o achado
 * de cada um, os numeros e o metodo. Nao entra na galeria de proposito: a
 * galeria mostra o SISTEMA, e isto mostra o que ele permitiu descobrir.
 *
 * Na pagina do projeto ele nasce ABERTO: e o conteudo mais fundo do case e o
 * que um recrutador tecnico veio ver. Continua um `<details>` para quem quiser
 * recolher. As figuras abrem em tela cheia num `<dialog>` nativo.
 */
export function InsightsPanel({ data, labels }: { data: InsightsView; labels: InsightsLabels }) {
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
    <details
      open
      className="group/insights overflow-hidden rounded-xl border border-line bg-sunken"
    >
      <summary className="flex cursor-pointer list-none items-center gap-4 p-5 transition-colors hover:bg-subtle/60 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="block font-mono text-[0.625rem] tracking-wide text-accent uppercase">
            {data.frame?.eyebrow ?? labels.insightsEyebrow}
          </span>
          <span className="mt-1.5 block text-lg font-semibold tracking-tight text-balance">
            {data.title}
          </span>
          <span className="mt-1 block text-xs text-ink-subtle">{count}</span>
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
                <h3 className="text-sm font-semibold tracking-tight text-pretty">{fig.takeaway}</h3>
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
                        unoptimized
                        className="h-auto max-h-[74vh] w-auto max-w-full"
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
              unoptimized
              className="max-h-[82vh] w-auto max-w-full rounded-lg object-contain"
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
