import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { PROJECTS } from "./projects";
import { STACK, type StackKey } from "./stack";
import type { Domain, Status } from "./types";

/**
 * O card do projeto, ja resolvido para UM idioma.
 *
 * Por que isto existe: a grade com filtro precisa de estado e portanto e um
 * componente de cliente. Se ela recebesse `PROJECTS` cru, o bundle levaria os
 * TRES idiomas de todo texto de todo projeto para o browser. Achatar aqui, no
 * servidor, manda so o que aquela pagina mostra.
 */
export interface ProjectCardView {
  readonly slug: string;
  readonly domain: Domain;
  readonly status: Status;
  readonly featured: boolean;
  readonly period: string;
  readonly tagline: string;
  readonly summary: string;
  readonly role: string;
  readonly metrics: readonly { readonly value: string; readonly label: string }[];
  readonly stack: readonly {
    readonly key: StackKey;
    readonly title: string;
    readonly path: string;
  }[];
  readonly cover?: StaticImageData;
  readonly coverAlt?: string;
  readonly href?: string;
}

/** "2025-06" -> "Jun 2025", no idioma pedido. */
function month(iso: string, locale: Locale): string {
  const [year, m] = iso.split("-");
  const date = new Date(Number(year), Number(m) - 1, 1);
  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(date);
}

export function projectCards(
  locale: Locale,
  present: string,
  limit?: number,
): readonly ProjectCardView[] {
  return [...PROJECTS]
    .sort((a, b) => a.order - b.order)
    .slice(0, limit)
    .map((p) => {
      const copy = p.copy[locale];
      const to = p.period.to ? month(p.period.to, locale) : present;
      const from = month(p.period.from, locale);
      return {
        slug: p.slug,
        domain: p.domain,
        status: p.status,
        featured: p.featured,
        period: from === to ? from : `${from} — ${to}`,
        tagline: copy.tagline,
        summary: copy.summary,
        role: copy.role,
        metrics: p.metrics.map((m) => ({ value: m.value, label: m.label[locale] })),
        stack: p.stack.map((key) => ({ key, title: STACK[key].title, path: STACK[key].path })),
        cover: p.cover,
        coverAlt: p.coverAlt?.[locale],
        href: p.hasCaseStudy ? `/${locale}/work/${p.slug}` : undefined,
      };
    });
}
