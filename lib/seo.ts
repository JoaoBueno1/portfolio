import { LOCALE_HTML_LANG, LOCALES, type Locale } from "@/lib/i18n/config";

export function alternatesFor(locale: Locale, path = "") {
  return {
    canonical: `/${locale}${path}`,
    languages: Object.fromEntries(LOCALES.map((l) => [LOCALE_HTML_LANG[l], `/${l}${path}`])),
  };
}
