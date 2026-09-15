import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ locale, t }: { locale: Locale; t: Dictionary }) {
  // `/about` e `/studies` ainda nao existem — enquanto nao existirem, nao
  // aparecem. Link para 404 num portfolio e pior que link faltando.
  const links = [{ href: `/${locale}/work`, label: t.nav.work }];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-6">
        <Link
          href={`/${locale}`}
          className="font-mono text-sm font-semibold tracking-tight hover:text-accent"
          aria-label={t.nav.home}
        >
          jmb<span className="text-accent">.</span>
        </Link>

        <nav aria-label={t.nav.home} className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded px-2.5 py-1.5 text-sm text-ink-muted transition-colors hover:bg-subtle hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <LanguageSwitcher current={locale} label={t.nav.language} />
          <span className="mx-1 h-4 w-px bg-line" aria-hidden="true" />
          <ThemeToggle label={t.nav.theme} />
        </div>
      </div>
    </header>
  );
}
