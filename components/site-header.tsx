"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { CV_PDF } from "@/lib/content/experience";
import { PROFILE } from "@/lib/content/profile";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/lib/i18n/config";
import { ThemeToggle } from "./theme-toggle";

/**
 * A BARRA DO TOPO.
 *
 * Substituiu a coluna fixa da esquerda em 21/10/2026. A coluna ocupava um
 * quarto da tela com um menu de cinco itens; o que o visitante vem ver sao
 * telas e diagramas, e eles precisam dessa largura. A barra tem tres
 * destinos, o curriculo como botao e o nome como caminho de volta.
 *
 * So o que a barra usa cruza a fronteira de cliente, nao o dicionario inteiro
 * (ver o comentario que a coluna antiga carregava sobre isso).
 */
export interface HeaderLabels {
  readonly projects: string;
  readonly experience: string;
  readonly about: string;
  readonly contact: string;
  readonly cv: string;
  readonly menu: string;
  readonly language: string;
  readonly theme: string;
  readonly open: string;
  readonly close: string;
}

export function SiteHeader({ locale, t }: { locale: Locale; t: HeaderLabels }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const items = [
    { href: `/${locale}/projects`, label: t.projects },
    { href: `/${locale}/experience`, label: t.experience },
    { href: `/${locale}/about`, label: t.about },
    { href: `/${locale}#contact`, label: t.contact },
  ];

  function isActive(href: string): boolean {
    if (href.includes("#")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function switchLocale(next: string) {
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${next}${rest ? `/${rest}` : ""}`);
  }

  const links = (vertical: boolean) =>
    items.map((item) => {
      const active = isActive(item.href);
      return (
        <Link
          key={item.href}
          href={item.href}
          aria-current={active ? "page" : undefined}
          onClick={() => setOpen(false)}
          className={`rounded-md px-3 py-2 text-sm transition-colors ${vertical ? "block" : ""} ${
            active ? "font-semibold text-ink" : "text-ink-muted hover:text-ink"
          }`}
        >
          {item.label}
        </Link>
      );
    });

  const cvButton = (
    <a
      href={CV_PDF[locale]}
      className="inline-flex items-center gap-2 rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-hover"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {t.cv}
    </a>
  );

  const localePicker = (
    <label className="flex items-center">
      <span className="sr-only">{t.language}</span>
      <select
        value={locale}
        onChange={(event) => switchLocale(event.target.value)}
        className="rounded-lg border border-line bg-canvas px-2.5 py-1.5 text-xs text-ink-muted transition-colors hover:border-line-strong"
      >
        {LOCALES.map((value) => (
          <option key={value} value={value}>
            {LOCALE_LABELS[value]}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/85 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-6">
        <Link
          href={`/${locale}`}
          className="text-base font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {PROFILE.name}
        </Link>

        <nav aria-label={t.menu} className="ml-auto hidden items-center gap-1 md:flex">
          {links(false)}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {cvButton}
          {localePicker}
          <ThemeToggle label={t.theme} />
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? t.close : t.open}
          className="ml-auto grid size-9 place-items-center rounded-md border border-line text-ink-muted md:hidden"
        >
          <svg
            viewBox="0 0 24 24"
            className="size-4.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            {open ? (
              <path d="M5 5l14 14M19 5L5 19" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-canvas px-6 py-4 md:hidden">
          <nav aria-label={t.menu} className="flex flex-col">
            {links(true)}
          </nav>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            {cvButton}
            {localePicker}
            <ThemeToggle label={t.theme} />
          </div>
        </div>
      )}
    </header>
  );
}
