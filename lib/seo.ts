import { LOCALE_HTML_LANG, LOCALES, type Locale } from "@/lib/i18n/config";

/**
 * Canonical e hreflang DE CADA PAGINA.
 *
 * Antes isto morava so no layout, com `/${locale}`, e toda pagina herdava: o
 * Projects dizia ao Google que era copia do Sobre. Cada pagina agora passa o
 * proprio caminho.
 */
export function alternatesFor(locale: Locale, path = "") {
  return {
    canonical: `/${locale}${path}`,
    languages: Object.fromEntries(LOCALES.map((l) => [LOCALE_HTML_LANG[l], `/${l}${path}`])),
  };
}
