export const LOCALES = ["en", "pt"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  pt: "Português",
};

export const LOCALE_HTML_LANG: Record<Locale, string> = {
  en: "en-AU",
  pt: "pt-BR",
};

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}
