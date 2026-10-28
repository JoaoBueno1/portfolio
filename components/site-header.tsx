"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { siGithub } from "simple-icons";
import { CV_PDF } from "@/lib/content/experience";
import { mailtoHref, PROFILE } from "@/lib/content/profile";
import { LOCALE_LABELS, LOCALES, type Locale } from "@/lib/i18n/config";

export interface HeaderLabels {
  readonly projects: string;
  readonly experience: string;
  readonly about: string;
  readonly contact: string;
  readonly cv: string;
  readonly email: string;
  readonly emailSubject: string;
  readonly menu: string;
  readonly language: string;
  readonly open: string;
  readonly close: string;
}

const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

export function SiteHeader({ locale, t }: { locale: Locale; t: HeaderLabels }) {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const items = [
    { href: `/${locale}#projects`, label: t.projects },
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

  const iconClass =
    "grid size-9 place-items-center rounded-lg text-ink-muted transition-colors hover:bg-subtle hover:text-ink";

  const contacts = (
    <>
      <a
        href={PROFILE.linkedin}
        target="_blank"
        rel="me noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        className={iconClass}
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
          <path d={LINKEDIN_PATH} />
        </svg>
        <span className="sr-only">LinkedIn</span>
      </a>
      <a
        href={PROFILE.github}
        target="_blank"
        rel="me noreferrer"
        aria-label="GitHub"
        title="GitHub"
        className={iconClass}
      >
        <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
          <path d={siGithub.path} />
        </svg>
        <span className="sr-only">GitHub</span>
      </a>
      <a
        href={mailtoHref(t.emailSubject)}
        aria-label={t.email}
        title={t.email}
        className={iconClass}
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          aria-hidden="true"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="sr-only">{t.email}</span>
      </a>
    </>
  );

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
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-6">
        <Link
          href={`/${locale}`}
          className="text-base font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          {PROFILE.headerName}
        </Link>

        <nav aria-label={t.menu} className="ml-auto hidden items-center gap-1 md:flex">
          {links(false)}
        </nav>

        <div className="hidden items-center gap-1 md:flex">
          {contacts}
          <span className="mx-1 h-5 w-px bg-line" aria-hidden="true" />
          {cvButton}
          {localePicker}
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
            <span className="flex items-center gap-1">{contacts}</span>
            {cvButton}
            {localePicker}
          </div>
        </div>
      )}
    </header>
  );
}
