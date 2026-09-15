"use client";

import { useMemo, useState } from "react";
import type { Domain } from "@/lib/content/types";
import type { ProjectCardView } from "@/lib/content/view";
import { ProjectCard } from "./project-card";

type Filter = Domain | "all";

interface Labels {
  readonly status: Record<ProjectCardView["status"], string>;
  readonly domain: Record<Domain, string> & { readonly all: string };
  readonly readCase: string;
  readonly casePending: string;
  readonly noShot: string;
  readonly filterLabel: string;
  readonly empty: string;
}

/**
 * A vitrine filtravel.
 *
 * O filtro e client-side de proposito: sao oito projetos, o dado inteiro ja
 * chegou no HTML, e uma ida ao servidor para esconder tres cards seria
 * latencia sem motivo.
 *
 * So aparecem as gavetas que TEM projeto. Um filtro que devolve lista vazia e
 * uma promessa quebrada; se um dia sobrar um filtro vazio, o estado vazio
 * abaixo explica em vez de mostrar branco.
 */
export function WorkGrid({ items, labels }: { items: readonly ProjectCardView[]; labels: Labels }) {
  const [filter, setFilter] = useState<Filter>("all");

  const available = useMemo(() => {
    const present = new Set(items.map((i) => i.domain));
    return (["production", "mobile", "tools", "platform", "academic"] as const).filter((d) =>
      present.has(d),
    );
  }, [items]);

  const shown = filter === "all" ? items : items.filter((i) => i.domain === filter);

  return (
    <div>
      {/* `fieldset` + `legend`, e nao `div role="group"`: o leitor de tela
          anuncia o proposito do grupo ao entrar nele, o que um `aria-label`
          solto num `div` faz de forma menos confiavel. A legenda fica
          escondida visualmente porque o titulo da secao ja diz do que se
          trata — quem enxerga nao precisa ler duas vezes. */}
      <fieldset className="flex flex-wrap items-center gap-2 border-0 p-0">
        <legend className="sr-only">{labels.filterLabel}</legend>
        {(["all", ...available] as const).map((value) => {
          const active = filter === value;
          return (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              aria-pressed={active}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors duration-200 [transition-timing-function:var(--ease-out-soft)] ${
                active
                  ? "border-ink bg-ink text-ink-inverse"
                  : "border-line text-ink-muted hover:border-line-strong hover:text-ink"
              }`}
            >
              {labels.domain[value]}
            </button>
          );
        })}
      </fieldset>

      {shown.length === 0 ? (
        <p className="mt-10 text-sm text-ink-muted">{labels.empty}</p>
      ) : (
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {shown.map((item) => (
            <ProjectCard key={item.slug} item={item} labels={labels} />
          ))}
        </div>
      )}
    </div>
  );
}
