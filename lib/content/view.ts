import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n/config";
import { PROJECTS } from "./projects";
import { STACK, type StackKey } from "./stack";
import type { Domain, Metric, Shot, Status } from "./types";

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
  readonly points: readonly string[];
  readonly stack: readonly {
    readonly key: StackKey;
    readonly title: string;
    readonly path: string;
  }[];
  readonly shots: readonly ShotView[];
  readonly link: { readonly url: string; readonly host: string } | null;
  readonly minor: boolean;
}

function month(iso: string, locale: Locale): string {
  const [year, m] = iso.split("-");
  const date = new Date(Number(year), Number(m) - 1, 1);
  return new Intl.DateTimeFormat(locale, { month: "short", year: "numeric" }).format(date);
}

function metricValue(m: Metric, locale: Locale): string {
  return typeof m.value === "string" ? m.value : m.value[locale];
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
        minor: p.minor ?? false,
        domain: p.domain,
        status: p.status,
        period: from === to ? from : `${from} – ${to}`,
        tagline: copy.tagline,
        summary: copy.summary,
        role: copy.role,
        metrics: p.metrics.map((m) => ({ value: metricValue(m, locale), label: m.label[locale] })),
        points: (p.points ?? []).map((point) => point[locale]),
        stack: p.stack.map((key) => ({ key, title: STACK[key].title, path: STACK[key].path })),
        shots: p.shots.map((shot) => shotView(shot, locale)),
        link: p.link ? { url: p.link, host: new URL(p.link).host } : null,
      };
    });
}
