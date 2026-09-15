"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { PROFILE } from "@/lib/content/profile";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import { ThemeToggle } from "./theme-toggle";

/**
 * A COLUNA DA ESQUERDA.
 *
 * Quatro destinos, so. O site inteiro cabe neles, entao nao existe menu que
 * abre menu, nem breadcrumb, nem "voltar".
 *
 * Em telas pequenas ela vira uma barra no topo com uma gaveta. Um `<aside>`
 * de 28% num celular nao sobra tela para conteudo nenhum.
 */
export function Sidebar({ locale, t }: { locale: Locale; t: Dictionary }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const items = [
    { href: `/${locale}`, label: t.nav.about },
    { href: `/${locale}/skills`, label: t.nav.skills },
    { href: `/${locale}/soft-skills`, label: t.nav.soft },
    { href: `/${locale}/projects`, label: t.nav.projects },
  ];

  function switchLocale(next: string) {
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${next}${rest ? `/${rest}` : ""}`);
  }

  const nav = (
    <nav aria-label={t.nav.menu} className="flex flex-col gap-0.5">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            // Fechar a gaveta no proprio clique, e nao num efeito que observa
            // a rota: o efeito rodava tambem na primeira renderizacao e em
            // toda troca de idioma, para nada.
            onClick={() => setOpen(false)}
            className={`relative rounded-lg px-3 py-2 text-sm transition-colors duration-200 [transition-timing-function:var(--ease-out-soft)] ${
              active
                ? "bg-subtle font-medium text-ink"
                : "text-ink-muted hover:bg-subtle/60 hover:text-ink"
            }`}
          >
            {active && (
              <span
                className="absolute top-2 bottom-2 left-0 w-0.5 rounded-full bg-accent"
                aria-hidden="true"
              />
            )}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  const identity = (
    <div className="flex items-center gap-3">
      {/* O circulo fica vazio ate existir foto. Um avatar generico de
          silhueta e pior que a inicial: parece conta sem dono. */}
      <div
        className="grid size-12 shrink-0 place-items-center rounded-full border border-line-strong bg-sunken font-mono text-sm font-semibold text-ink-subtle"
        aria-label={t.sidebar.photoAlt}
        role="img"
      >
        JB
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold tracking-tight">{PROFILE.name}</p>
        <p className="truncate text-xs text-ink-subtle">{t.sidebar.role}</p>
      </div>
    </div>
  );

  const bottom = (
    <div className="flex flex-col gap-4">
      <label className="flex flex-col gap-1.5">
        <span className="font-mono text-[0.625rem] tracking-wide text-ink-faint uppercase">
          {t.nav.language}
        </span>
        <select
          value={locale}
          onChange={(event) => switchLocale(event.target.value)}
          className="rounded-lg border border-line bg-canvas px-2.5 py-1.5 text-sm text-ink transition-colors hover:border-line-strong"
        >
          {LOCALES.map((value) => (
            <option key={value} value={value}>
              {LOCALE_LABELS[value]}
            </option>
          ))}
        </select>
      </label>

      <div className="flex flex-col gap-1">
        <span className="font-mono text-[0.625rem] tracking-wide text-ink-faint uppercase">
          {t.nav.contact}
        </span>
        <a
          href={`mailto:${PROFILE.email}`}
          className="truncate text-sm text-ink-muted hover:text-accent"
        >
          {PROFILE.email}
        </a>
        <div className="flex gap-3 text-sm">
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="me noreferrer"
            className="text-ink-muted hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={PROFILE.github}
            target="_blank"
            rel="me noreferrer"
            className="text-ink-muted hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-line pt-3">
        <a
          href={PROFILE.repo}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-ink-faint underline underline-offset-2 hover:text-ink-muted"
        >
          {t.footer.source}
        </a>
        <ThemeToggle label={t.nav.theme} />
      </div>
    </div>
  );

  return (
    <>
      {/* — Barra do celular — */}
      <div className="sticky top-0 z-40 flex items-center gap-3 border-b border-line bg-canvas/90 px-4 py-3 backdrop-blur-md lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? t.sidebar.close : t.sidebar.open}
          className="grid size-9 place-items-center rounded-md border border-line text-ink-muted"
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
        <p className="text-sm font-semibold tracking-tight">{PROFILE.name}</p>
        <div className="ml-auto">
          <ThemeToggle label={t.nav.theme} />
        </div>
      </div>

      {open && (
        <div className="border-b border-line bg-canvas px-4 py-5 lg:hidden">
          <div className="flex flex-col gap-6">
            {nav}
            {bottom}
          </div>
        </div>
      )}

      {/* — Coluna fixa do desktop — */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-(--sidebar-w) flex-col justify-between gap-8 overflow-y-auto border-r border-line bg-canvas px-7 py-8 lg:flex">
        <div className="flex flex-col gap-8">
          {identity}
          {nav}
        </div>
        {bottom}
      </aside>
    </>
  );
}
