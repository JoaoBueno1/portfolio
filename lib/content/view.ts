import type { StaticImageData } from "next/image";
import { LOCALES, type Locale } from "@/lib/i18n/config";
import { PROJECTS } from "./projects";
import { STACK, type StackKey } from "./stack";
import type { CaseStudy, Domain, I18nText, InsightChart, Metric, Shot, Status } from "./types";

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

/**
 * Troca cada `I18nText` de uma estrutura pela string do idioma, mantendo o
 * resto (numero, codigo de posicao, nome de transportadora) como esta.
 */
export type Resolved<T> = T extends I18nText
  ? string
  : T extends readonly (infer U)[]
    ? readonly Resolved<U>[]
    : T extends object
      ? { readonly [K in keyof T]: Resolved<T[K]> }
      : T;

export type InsightChartView = Resolved<InsightChart>;

export interface InsightFigureView {
  readonly takeaway: string;
  readonly alt: string;
  readonly caption: string;
  readonly chart: InsightChartView | null;
  readonly page: StaticImageData | null;
}

export interface InsightsView {
  /** Os graficos formatam numero no idioma da pagina (6.5% / 6,5%). */
  readonly locale: Locale;
  readonly title: string;
  readonly intro: string;
  readonly highlights: readonly { readonly value: string; readonly label: string }[];
  readonly figures: readonly InsightFigureView[];
  readonly method: readonly string[];
  readonly methodLabel: string | null;
  readonly frame: {
    readonly chip: string;
    readonly eyebrow: string;
    readonly count: string;
  } | null;
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
  readonly insights: InsightsView | null;
  readonly caseStudy: CaseStudyView | null;
  readonly link: { readonly url: string; readonly host: string } | null;
}

export interface CaseStudyView {
  readonly challenge: string | null;
  readonly solution: string | null;
  readonly impact: string | null;
  readonly highlights: readonly string[];
}

function caseStudyView(cs: CaseStudy, locale: Locale): CaseStudyView {
  return {
    challenge: cs.challenge?.[locale] ?? null,
    solution: cs.solution?.[locale] ?? null,
    impact: cs.impact?.[locale] ?? null,
    highlights: (cs.highlights ?? []).map((h) => h[locale]),
  };
}

/** "2025-06" -> "Jun 2025", no idioma pedido. */
function month(iso: string, locale: Locale): string {
  const [year, m] = iso.split("-");
  const date = new Date(Number(year), Number(m) - 1, 1);
  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(date);
}

function metricValue(m: Metric, locale: Locale): string {
  return typeof m.value === "string" ? m.value : m.value[locale];
}

function isI18nText(value: object): value is I18nText {
  const keys = Object.keys(value);
  return (
    keys.length === LOCALES.length &&
    LOCALES.every((l) => typeof (value as Record<string, unknown>)[l] === "string")
  );
}

function resolve<T>(value: T, locale: Locale): Resolved<T> {
  if (Array.isArray(value)) return value.map((v) => resolve(v, locale)) as Resolved<T>;
  if (value !== null && typeof value === "object") {
    if (isI18nText(value)) return value[locale] as Resolved<T>;
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value)) out[k] = resolve(v, locale);
    return out as Resolved<T>;
  }
  return value as Resolved<T>;
}

function shotView(shot: Shot, locale: Locale): ShotView {
  return { src: shot.src, alt: shot.alt[locale], caption: shot.caption[locale] };
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
        metrics: p.metrics.map((m) => ({ value: metricValue(m, locale), label: m.label[locale] })),
        stack: p.stack.map((key) => ({ key, title: STACK[key].title, path: STACK[key].path })),
        shots: p.shots.map((shot) => shotView(shot, locale)),
        insights: p.insights
          ? {
              title: p.insights.title[locale],
              intro: p.insights.intro[locale],
              highlights: p.insights.highlights.map((m) => ({
                value: metricValue(m, locale),
                label: m.label[locale],
              })),
              locale,
              figures: p.insights.figures.map((fig) => ({
                takeaway: fig.takeaway[locale],
                alt: fig.alt[locale],
                caption: fig.caption[locale],
                chart: fig.chart ? resolve(fig.chart, locale) : null,
                page: fig.page ?? null,
              })),
              method: p.insights.method.map((m) => m[locale]),
              methodLabel: p.insights.methodLabel?.[locale] ?? null,
              frame: p.insights.frame
                ? {
                    chip: p.insights.frame.chip[locale],
                    eyebrow: p.insights.frame.eyebrow[locale],
                    count: p.insights.frame.count[locale],
                  }
                : null,
            }
          : null,
        caseStudy: p.caseStudy ? caseStudyView(p.caseStudy, locale) : null,
        link: p.link ? { url: p.link, host: new URL(p.link).host } : null,
      };
    });
}
