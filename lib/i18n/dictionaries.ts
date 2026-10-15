import "server-only";
import type { Locale } from "./config";
import { en } from "./en";

/**
 * A forma do dicionario, derivada do ingles. `pt` e obrigado a
 * satisfazer este tipo — nao ha como publicar traducao incompleta.
 */
export type Dictionary = typeof en;

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: async () => en,
  pt: async () => (await import("./pt")).pt,
};

export function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}
