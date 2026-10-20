"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { ShotView } from "@/lib/content/view";

export interface GalleryLabels {
  readonly previousShot: string;
  readonly nextShot: string;
  readonly shotCount: string;
  readonly zoom: string;
  readonly closeZoom: string;
  readonly shotPosition: string;
}

/**
 * A GALERIA da pagina do projeto.
 *
 * Uma imagem so nao mostra um sistema: mostra uma tela. Por isso `shots` e uma
 * lista, com a imagem grande, uma legenda que diz POR QUE aquela tela importa,
 * e as miniaturas embaixo. As miniaturas sao botoes de verdade, entao a
 * galeria e navegavel por teclado sem nenhum handler proprio.
 *
 * TODAS AS TELAS FICAM MONTADAS, empilhadas, e so a atual aparece: trocar e
 * so mudar a opacidade, sem esperar rede. `unoptimized` porque as capturas ja
 * sao WebP comprimido: a imagem grande, a miniatura e o zoom usam a MESMA URL
 * estatica, um download so.
 */
export function ProjectGallery({
  shots,
  labels,
}: {
  shots: readonly ShotView[];
  labels: GalleryLabels;
}) {
  const [index, setIndex] = useState(0);
  const zoomRef = useRef<HTMLDialogElement>(null);
  const [zoomed, setZoomed] = useState(false);
  const total = shots.length;
  const shot = shots[index];

  const step = useCallback(
    (delta: number) => setIndex((c) => (c + delta + total) % total),
    [total],
  );

  // As setas do teclado andam entre imagens. Com uma figura da analise aberta
  // em tela cheia, a seta nao pode andar a galeria escondida atras dela.
  useEffect(() => {
    if (total < 2) return;
    function onKey(event: KeyboardEvent) {
      if (document.querySelector("dialog[data-figure-zoom][open]")) return;
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step, total]);

  useEffect(() => {
    const dialog = zoomRef.current;
    if (!dialog) return;
    if (zoomed && !dialog.open) dialog.showModal();
    if (!zoomed && dialog.open) dialog.close();
  }, [zoomed]);

  if (total === 0 || !shot) return null;

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
    <div className="relative overflow-hidden rounded-xl border border-line bg-canvas">
      <button
        type="button"
        onClick={() => setZoomed(true)}
        aria-label={labels.zoom}
        className="group/zoom relative flex aspect-[16/11] w-full cursor-zoom-in items-center justify-center overflow-hidden bg-sunken sm:aspect-auto sm:h-[min(62vh,44rem)]"
      >
        {shots.map((s, i) => (
          <Image
            key={s.src.src}
            src={s.src}
            alt={i === index ? s.alt : ""}
            aria-hidden={i === index ? undefined : true}
            unoptimized
            loading="eager"
            fetchPriority={
              i === index
                ? "high"
                : (i - index + total) % total === 1 || (index - i + total) % total === 1
                  ? "auto"
                  : "low"
            }
            className={`absolute inset-0 m-auto h-full w-auto max-w-full object-contain transition-opacity duration-200 [transition-timing-function:var(--ease-out-soft)] ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
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

      <div className="flex flex-col gap-3 border-t border-line px-5 py-3">
        <div className="flex items-baseline gap-3">
          <p className="flex-1 text-sm leading-relaxed text-ink-muted">{shot.caption}</p>
          {total > 1 && (
            <span className="shrink-0 font-mono text-[0.625rem] text-ink-subtle tabular-nums">
              {position}
            </span>
          )}
        </div>
        {total > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {shots.map((thumb, i) => (
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
                  unoptimized
                  className="h-full w-full object-cover object-top"
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
              unoptimized
              className="max-h-[82vh] w-auto max-w-full object-contain"
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
