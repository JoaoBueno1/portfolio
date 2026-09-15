import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { StackKey } from "./stack";

/** Texto que muda de idioma. Os tres sao obrigatorios — falta um, nao compila. */
export type I18nText = Record<Locale, string>;

/**
 * A gaveta em que o projeto cai. E o filtro da vitrine, e nao ha "outros":
 * projeto que nao cabe em nenhuma destas provavelmente nao deveria estar no
 * portfolio.
 */
export type Domain = "production" | "mobile" | "tools" | "platform" | "academic";

/**
 * O estado do projeto, dito sem eufemismo.
 * - `live`    roda hoje, todo dia util, com usuario de verdade.
 * - `shipped` foi entregue e cumpriu o papel; pode nao rodar mais.
 * - `parked`  existe, esta parado, e o site diz por que.
 * - `study`   trabalho academico.
 */
export type Status = "live" | "shipped" | "parked" | "study";

/** Um numero com a fonte junto. Numero sem fonte nao entra no site. */
export interface Metric {
  /** O numero ja formatado. Ex.: "1,155". */
  readonly value: string;
  readonly label: I18nText;
}

export interface ProjectCopy {
  /** Uma linha. Aparece embaixo do nome no card. */
  readonly tagline: string;
  /** Duas ou tres frases. E o que decide se o visitante clica. */
  readonly summary: string;
  /** O papel exercido, em uma linha. */
  readonly role: string;
}

export interface Project {
  readonly slug: string;
  /** Nome proprio do sistema. Nao se traduz, e o mesmo nos tres idiomas. */
  readonly name: string;
  /** Ordem na vitrine. Menor primeiro. Impacto manda, nao cronologia. */
  readonly order: number;
  readonly domain: Domain;
  readonly status: Status;
  /** Ocupa card largo na home. No maximo dois. */
  readonly featured: boolean;
  /** `to` ausente = ainda em curso. */
  readonly period: { readonly from: string; readonly to?: string };
  readonly stack: readonly StackKey[];
  readonly metrics: readonly Metric[];
  readonly copy: Record<Locale, ProjectCopy>;
  /**
   * Captura de capa. Ausente NAO e erro: significa que ainda nao existe
   * captura com dado sintetico, e o card cai no visual gerado. A regra em
   * CLAUDE.md nao abre excecao — captura com dado real nao entra.
   */
  readonly cover?: StaticImageData;
  readonly coverAlt?: I18nText;
  /** Existe pagina de case study propria? Enquanto nao, o card nao linka. */
  readonly hasCaseStudy: boolean;
}
