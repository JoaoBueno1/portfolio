import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { StackKey } from "./stack";

export type I18nText = Record<Locale, string>;

export type MatrixLevel = "full" | "work" | "use" | "view" | "grant";

export type Domain = "production" | "mobile" | "tools" | "data" | "platform" | "academic";

export type Status = "live" | "building" | "shipped" | "study";

export interface Metric {
  readonly value: string | I18nText;
  readonly label: I18nText;
}

export interface Shot {
  readonly src: StaticImageData;
  readonly alt: I18nText;
  readonly caption: I18nText;
}

export interface ProjectCopy {
  readonly tagline: string;
  readonly summary: string;
  readonly role: string;
}

export interface Project {
  readonly slug: string;
  readonly name: string;
  readonly order: number;
  readonly domain: Domain;
  readonly status: Status;
  readonly period: { readonly from: string; readonly to?: string };
  readonly stack: readonly StackKey[];
  readonly metrics: readonly Metric[];
  readonly points?: readonly I18nText[];
  readonly shots: readonly Shot[];
  readonly link?: string;
  readonly minor?: boolean;
  readonly copy: Record<Locale, ProjectCopy>;
}
