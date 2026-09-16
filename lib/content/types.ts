import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { StackKey } from "./stack";

/** Texto que muda de idioma. Os tres sao obrigatorios: falta um, nao compila. */
export type I18nText = Record<Locale, string>;

/**
 * A gaveta do projeto. Nao ha "outros": projeto que nao cabe em nenhuma
 * destas provavelmente nao deveria estar no portfolio.
 */
export type Domain = "production" | "mobile" | "tools" | "data" | "platform" | "academic";

/**
 * O estado, dito sem eufemismo.
 * - `live`     roda hoje, todo dia util, com usuario de verdade.
 * - `building` esta sendo construido agora. Nao e promessa, e obra em curso.
 * - `shipped`  foi entregue e cumpriu o papel; pode nao rodar mais.
 * - `study`    trabalho academico.
 */
export type Status = "live" | "building" | "shipped" | "study";

/**
 * Um numero com a fonte junto.
 *
 * ARREDONDADO DE PROPOSITO. "1.155 commits" convida a ser conferido contra um
 * repositorio que e privado e que ninguem vai poder abrir; "1,100+" diz a
 * mesma coisa e e verdade por muito mais tempo. Nenhum numero aqui descreve
 * cliente, receita ou contrato.
 */
export interface Metric {
  readonly value: string;
  readonly label: I18nText;
}

/**
 * Uma captura da galeria.
 *
 * `shots` e uma LISTA e nao um campo unico porque uma imagem so nao mostra um
 * sistema. Vazia nao e pendencia esquecida: significa que ainda nao existe
 * captura com dado sintetico daquele sistema, e o dialogo diz isso em texto.
 * Video entra nesta mesma lista quando existir.
 */
export interface Shot {
  readonly src: StaticImageData;
  readonly alt: I18nText;
  readonly caption: I18nText;
}

export interface ProjectCopy {
  /** Uma linha. Aparece embaixo do nome. */
  readonly tagline: string;
  /** Duas ou tres frases. E o que decide se o visitante abre. */
  readonly summary: string;
  /** O papel exercido, em uma linha. */
  readonly role: string;
}

export interface Project {
  readonly slug: string;
  /**
   * NOME GENERICO, sempre.
   *
   * Nunca o nome do produto, da empresa nem do repositorio. O que interessa a
   * quem le e o TIPO de sistema, e o nome interno so serve para amarrar um
   * empregador a um portfolio pessoal.
   */
  readonly name: string;
  /** Ordem na vitrine. Menor primeiro. Impacto manda, nao cronologia. */
  readonly order: number;
  readonly domain: Domain;
  readonly status: Status;
  /** `to` ausente = ainda em curso. */
  readonly period: { readonly from: string; readonly to?: string };
  readonly stack: readonly StackKey[];
  readonly metrics: readonly Metric[];
  readonly shots: readonly Shot[];
  readonly copy: Record<Locale, ProjectCopy>;
}
