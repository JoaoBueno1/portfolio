/**
 * Os idiomas do site.
 *
 * `en` e a FONTE DA VERDADE: o tipo do dicionario sai do objeto ingles
 * (ver `lib/i18n/dictionaries.ts`), entao uma chave que falta em `pt`
 * quebra o `tsc`. Traducao pela metade nao chega a producao.
 */
export const LOCALES = ["en", "pt"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

/** Rotulo no seletor de idioma — cada lingua escrita NA propria lingua. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

/** O que vai no atributo `lang` e no `hreflang`. */
export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en-AU",
  pt: "pt-BR",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
