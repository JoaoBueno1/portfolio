"use client";

import { useEffect, useRef } from "react";
import { type DetailLabels, ProjectDetail } from "@/components/project-detail";
import type { ProjectView } from "@/lib/content/view";

export interface DialogLabels extends DetailLabels {
  readonly close: string;
  readonly previous: string;
  readonly next: string;
  readonly openPage: string;
}

export function ProjectDialog({
  item,
  locale,
  labels,
  onClose,
  onStep,
}: {
  item: ProjectView | null;
  locale: string;
  labels: DialogLabels;
  onClose: () => void;
  onStep: (delta: -1 | 1) => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const open = item !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    if (open) ref.current?.scrollTo({ top: 0 });
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: runs when the open project changes
  useEffect(() => {
    if (open) ref.current?.scrollTo({ top: 0 });
  }, [item?.slug]);

  const arrow = (delta: -1 | 1, label: string) => (
    <button
      type="button"
      onClick={() => onStep(delta)}
      className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-ink-muted transition-colors hover:bg-subtle hover:text-ink"
    >
      {delta === -1 && <span aria-hidden="true">←</span>}
      {label}
      {delta === 1 && <span aria-hidden="true">→</span>}
    </button>
  );

  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: Esc on the native dialog is the keyboard equivalent, handled in onClose
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
      aria-label={item?.name}
      className="m-auto max-h-[92dvh] w-[min(64rem,calc(100vw-1.5rem))] overflow-y-auto rounded-2xl border border-line bg-canvas p-0 text-ink shadow-xl backdrop:bg-shade/60 backdrop:backdrop-blur-sm"
    >
      {item && (
        <div className="relative px-5 pt-5 pb-4 sm:px-8 sm:pt-7 sm:pb-6">
          <button
            type="button"
            onClick={onClose}
            aria-label={labels.close}
            className="absolute top-4 right-4 grid size-9 place-items-center rounded-full border border-line bg-canvas text-ink-muted transition-colors hover:text-ink sm:top-5 sm:right-5"
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

          <div className="pr-10">
            <ProjectDetail item={item} labels={labels} heading="h2" />
          </div>

          <nav className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t border-line pt-4">
            {arrow(-1, labels.previous)}
            <a
              href={`/${locale}/projects/${item.slug}`}
              className="text-xs text-ink-subtle underline decoration-line underline-offset-4 hover:text-accent"
            >
              {labels.openPage}
            </a>
            {arrow(1, labels.next)}
          </nav>
        </div>
      )}
    </dialog>
  );
}
