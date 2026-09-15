import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { PROJECTS } from "./projects";
import { STACK, type StackKey } from "./stack";
import type { Domain, Status } from "./types";

/**
 * O projeto ja resolvido para UM idioma.
 *
 * Por que isto existe: a vitrine tem estado (o dialogo aberto) e portanto e
 * um componente de cliente. Se ela recebesse `PROJECTS` cru, o bundle levaria
 * os TRES idiomas de todo texto de todo projeto para o browser. Achatar aqui,
 * no servidor, manda so o que aquela pagina mostra.
 */
export interface ShotView {
  readonly src: StaticImageData;
  readonly alt: string;
  readonly caption: string;
}

export interface ProjectView {
  readonly slug: string;
  readonly name: string;
  readonly domain: Domain;
  readonly status: Status;
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
  readonly shots: readonly ShotView[];
}

/** "2025-06" -> "Jun 2025", no idioma pedido. */
function month(iso: string, locale: Locale): string {
  const [year, m] = iso.split("-");
  const date = new Date(Number(year), Number(m) - 1, 1);
  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(date);
}

export function projectViews(locale: Locale, present: string): readonly ProjectView[] {
  return [...PROJECTS]
    .sort((a, b) => a.order - b.order)
    .map((p) => {
      const copy = p.copy[locale];
      const from = month(p.period.from, locale);
      const to = p.period.to ? month(p.period.to, locale) : present;
      return {
        slug: p.slug,
        name: p.name,
        domain: p.domain,
        status: p.status,
        period: from === to ? from : `${from} — ${to}`,
        tagline: copy.tagline,
        summary: copy.summary,
        role: copy.role,
        metrics: p.metrics.map((m) => ({ value: m.value, label: m.label[locale] })),
        stack: p.stack.map((key) => ({ key, title: STACK[key].title, path: STACK[key].path })),
        shots: p.shots.map((shot) => ({
          src: shot.src,
          alt: shot.alt[locale],
          caption: shot.caption[locale],
        })),
      };
    });
}
