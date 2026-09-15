import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { isLocale, LOCALE_HTML_LANG, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

/**
 * Este e o root layout do site: nao existe `app/layout.tsx`.
 *
 * Toda rota vive sob `[locale]`, entao o layout mais alto ja conhece o
 * idioma e consegue escrever `lang` no `<html>` no servidor — sem efeito no
 * cliente, sem flash de idioma errado.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      // hreflang: um recrutador brasileiro que buscar o nome no Google deve
      // cair na versao em portugues, nao na inglesa.
      languages: Object.fromEntries(LOCALES.map((l) => [LOCALE_HTML_LANG[l], `/${l}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  // `params` e uma Promise desde o Next 15 e o valor NAO e validado pelo
  // router: `/xx` chega aqui como string qualquer.
  if (!isLocale(locale)) notFound();

  const t = await getDictionary(locale);

  return (
    <html lang={LOCALE_HTML_LANG[locale]}>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          {t.nav.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
