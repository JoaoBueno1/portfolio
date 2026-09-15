"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/lib/i18n/config";

/**
 * Troca de idioma PRESERVANDO A ROTA.
 *
 * Mandar todo mundo para a home do outro idioma e o erro classico: quem esta
 * lendo um case study em ingles e clica em "Portugues" quer aquele case em
 * portugues, nao a home. Como todo caminho comeca com `/<locale>`, basta
 * trocar o primeiro segmento.
 */
export function LanguageSwitcher({ current, label }: { current: Locale; label: string }) {
  const pathname = usePathname();
  const rest = pathname.split("/").slice(2).join("/");

  return (
    <nav aria-label={label} className="flex items-center gap-0.5">
      {LOCALES.map((locale) => {
        const isCurrent = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}${rest ? `/${rest}` : ""}`}
            hrefLang={locale}
            aria-current={isCurrent ? "true" : undefined}
            title={LOCALE_LABELS[locale]}
            className={`rounded px-1.5 py-1 text-xs font-medium uppercase transition-colors ${
              isCurrent ? "text-ink" : "text-ink-faint hover:text-ink-muted"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
