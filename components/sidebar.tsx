"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { PROFILE } from "@/lib/content/profile";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/lib/i18n/config";
import { ContactIcon } from "./brand-icons";
import { ThemeToggle } from "./theme-toggle";

/**
 * A COLUNA DA ESQUERDA.
 *
 * Nao e menu de sistema: e um cartao de apresentacao que tambem navega. A
 * foto ocupa uma linha inteira e e o primeiro elemento da tela, os quatro
 * destinos ficam centrados no meio vertical, e o contato vira logo em vez de
 * link escrito.
 *
 * Ela usa `--color-sunken` enquanto o conteudo fica sobre `--color-canvas`.
 * Sao dois tons da mesma familia, o suficiente para separar as duas areas sem
 * uma borda pesada no meio da tela.
 *
 * Em tela pequena vira barra no topo com gaveta: um `<aside>` de 28% num
 * celular nao deixa conteudo nenhum.
 */
/**
 * So o que a coluna usa, e nao o dicionario inteiro.
 *
 * Este e um componente de CLIENTE, e tudo que cruza essa fronteira vai
 * serializado dentro do HTML. Recebendo `Dictionary` inteiro, TODO texto do
 * idioma viajava para o browser em toda pagina, incluindo o corpo dos
 * projetos e as legendas das capturas, que a coluna nunca mostra. Foi assim
 * que "external systems integrated" apareceu no HTML da pagina Sobre, onde
 * aquele numero nem existe mais.
 */
export interface SidebarLabels {
  readonly about: string;
  readonly skills: string;
  readonly soft: string;
  readonly projects: string;
  readonly menu: string;
  readonly language: string;
  readonly theme: string;
  readonly role: string;
  readonly location: string;
  readonly photoAlt: string;
  readonly open: string;
  readonly close: string;
}

export function Sidebar({ locale, t }: { locale: Locale; t: SidebarLabels }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const items = [
    { href: `/${locale}`, label: t.about },
    { href: `/${locale}/skills`, label: t.skills },
    { href: `/${locale}/soft-skills`, label: t.soft },
    { href: `/${locale}/projects`, label: t.projects },
  ];

  const contacts = [
    {
      name: "email" as const,
      href: `mailto:${PROFILE.email}`,
      label: PROFILE.email,
      external: false,
    },
    { name: "linkedin" as const, href: PROFILE.linkedin, label: "LinkedIn", external: true },
    { name: "github" as const, href: PROFILE.github, label: "GitHub", external: true },
  ];

  function switchLocale(next: string) {
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${next}${rest ? `/${rest}` : ""}`);
  }

  const avatar = (
    <div
      role="img"
      aria-label={t.photoAlt}
      className="grid size-32 place-items-center rounded-full border border-line-strong bg-canvas font-mono text-2xl font-semibold text-ink-subtle shadow-sm"
    >
      JB
    </div>
  );

  const nav = (
    <nav aria-label={t.menu} className="flex w-full flex-col gap-2">
      {items.map((item) => {
        const active = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`rounded-xl border px-4 py-3 text-center text-[0.9375rem] transition-all duration-200 [transition-timing-function:var(--ease-out-soft)] ${
              active
                ? "border-accent bg-accent text-on-accent shadow-sm"
                : "border-line bg-canvas text-ink-muted hover:border-line-strong hover:text-ink"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  const contactRow = (
    <div className="flex items-center justify-center gap-2">
      {contacts.map((contact) => (
        <a
          key={contact.name}
          href={contact.href}
          title={contact.label}
          {...(contact.external ? { target: "_blank", rel: "me noreferrer" } : {})}
          className="grid size-10 place-items-center rounded-full border border-line bg-canvas text-ink-subtle transition-colors duration-200 hover:border-accent hover:text-accent"
        >
          <ContactIcon name={contact.name} label={contact.label} />
        </a>
      ))}
      <ThemeToggle label={t.theme} />
    </div>
  );

  const localePicker = (
    <label className="flex items-center justify-center gap-2">
      <span className="sr-only">{t.language}</span>
      <select
        value={locale}
        onChange={(event) => switchLocale(event.target.value)}
        className="rounded-lg border border-line bg-canvas px-3 py-1.5 text-center text-xs text-ink-muted transition-colors hover:border-line-strong"
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
    <>
      {/* — Barra do celular — */}
      <div className="sticky top-0 z-40 flex items-center gap-3 border-b border-line bg-sunken/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? t.close : t.open}
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
          <ThemeToggle label={t.theme} />
        </div>
      </div>

      {open && (
        <div className="flex flex-col items-center gap-5 border-b border-line bg-sunken px-5 py-6 lg:hidden">
          {nav}
          {contactRow}
          {localePicker}
        </div>
      )}

      {/* — Coluna fixa do desktop —
          `justify-between` com o bloco de navegacao em `flex-1` e o que
          deixa os quatro botoes centrados no meio vertical, com a foto
          ancorada no topo e o contato no rodape. */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-(--sidebar-w) flex-col items-center justify-between gap-6 overflow-y-auto border-r border-line bg-sunken px-6 py-10 lg:flex">
        <div className="flex flex-col items-center gap-4">
          {avatar}
          <div className="text-center">
            <p className="text-lg font-semibold tracking-tight">{PROFILE.name}</p>
            <p className="mt-1 text-xs text-ink-subtle">{t.role}</p>
            <p className="text-xs text-ink-faint">{t.location}</p>
          </div>
        </div>

        <div className="flex w-full flex-1 items-center">{nav}</div>

        <div className="flex w-full flex-col items-center gap-3">
          {contactRow}
          {localePicker}
        </div>
      </aside>
    </>
  );
}
