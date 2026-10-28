"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { type DialogLabels, ProjectDialog } from "@/components/project-dialog";
import type { ProjectView } from "@/lib/content/view";
import type { Locale } from "@/lib/i18n/config";

export interface GridLabels extends DialogLabels {
  readonly other: string;
  readonly moreCoursework: string;
  readonly flagship: string;
}

function StackBlock({ item, big }: { item: ProjectView; big?: boolean }) {
  return (
    <div className="flex h-full w-full flex-wrap content-center items-center justify-center gap-4 bg-sunken p-5">
      {item.stack.slice(0, big ? 8 : 5).map((tech) => (
        <svg
          key={tech.key}
          viewBox="0 0 24 24"
          role="img"
          aria-label={tech.title}
          className={`${big ? "size-7" : "size-5"} text-ink-faint`}
          fill="currentColor"
        >
          <title>{tech.title}</title>
          <path d={tech.path} />
        </svg>
      ))}
    </div>
  );
}

const stackIcons = (item: ProjectView, max: number) =>
  item.stack.slice(0, max).map((tech) => (
    <svg
      key={tech.key}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-3.5"
      fill="currentColor"
    >
      <path d={tech.path} />
    </svg>
  ));

export function ProjectGrid({
  items,
  locale,
  labels,
}: {
  items: readonly ProjectView[];
  locale: Locale;
  labels: GridLabels;
}) {
  const live = items.filter((i) => i.status === "live" || i.status === "building");
  const rest = items.filter((i) => i.status !== "live" && i.status !== "building");
  const main = rest.filter((i) => !i.minor);
  const minor = rest.filter((i) => i.minor);
  const href = (item: ProjectView) => `/${locale}/projects/${item.slug}`;

  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const open = openSlug ? (items.find((i) => i.slug === openSlug) ?? null) : null;

  const show = useCallback((slug: string | null) => {
    setOpenSlug(slug);
    const url = new URL(window.location.href);
    if (slug) url.searchParams.set("p", slug);
    else url.searchParams.delete("p");
    window.history.replaceState(null, "", url);
  }, []);

  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("p");
    if (slug && items.some((i) => i.slug === slug)) setOpenSlug(slug);
  }, [items]);

  const step = (delta: -1 | 1) => {
    if (!open) return;
    const index = items.findIndex((i) => i.slug === open.slug);
    show(items[(index + delta + items.length) % items.length].slug);
  };

  const link = (item: ProjectView) => (
    <a
      href={href(item)}
      onClick={(event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
        event.preventDefault();
        show(item.slug);
      }}
      className="after:absolute after:inset-0 after:content-[''] focus:outline-none"
    >
      {item.name}
    </a>
  );

  const tile = (item: ProjectView, featured = false, cell?: string) => (
    <li key={item.slug} className={cell}>
      <div className={featured ? "flagship-ring h-full rounded-xl p-[2px]" : "h-full"}>
        <article
          className={`group relative flex h-full w-full flex-col overflow-hidden ${featured ? "rounded-[10px] bg-canvas/95" : "rounded-xl border border-line bg-canvas hover:border-line-strong"} transition-all duration-300 [transition-timing-function:var(--ease-out-soft)] hover:-translate-y-0.5 hover:shadow-sm has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent`}
        >
          <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-sunken">
            {item.shots.length > 0 ? (
              <Image
                src={item.shots[0].src}
                alt=""
                className="h-full w-full object-cover object-left-top transition-transform duration-500 [transition-timing-function:var(--ease-out-soft)] group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, 400px"
              />
            ) : (
              <StackBlock item={item} />
            )}
            {item.shots.length > 1 && (
              <span className="absolute right-2 bottom-2 rounded-full bg-ink/75 px-2 py-0.5 font-mono text-[0.625rem] text-ink-inverse">
                {item.shots.length}
              </span>
            )}
          </div>
          <div className="flex flex-1 flex-col gap-1 p-4">
            <div className="flex items-center gap-2">
              {item.status === "live" && (
                <span className="size-1.5 shrink-0 rounded-full bg-ok" aria-hidden="true" />
              )}
              {item.status === "building" && (
                <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              )}
              <h3 className="text-base font-semibold tracking-tight">{link(item)}</h3>
            </div>
            <p className="text-sm leading-relaxed text-ink-subtle">{item.tagline}</p>
            <div className="mt-auto flex items-center gap-2 pt-2 text-ink-faint">
              {stackIcons(item, 5)}
              {featured && (
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-accent px-2.5 py-1 text-[0.6875rem] font-semibold tracking-tight text-on-accent shadow-sm">
                  <svg
                    viewBox="0 0 24 24"
                    className="size-3"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2l2.6 6.6L21.5 9l-5.3 4.6L17.8 21 12 17.3 6.2 21l1.6-7.4L2.5 9l6.9-.4z" />
                  </svg>
                  {labels.flagship}
                </span>
              )}
            </div>
          </div>
        </article>
      </div>
    </li>
  );

  const row = (item: ProjectView) => (
    <li key={item.slug}>
      <article className="group relative flex w-full items-center gap-3 px-3 py-2.5 transition-colors duration-200 hover:bg-subtle/60 has-[:focus-visible]:bg-subtle/60">
        <span className="relative hidden h-9 w-14 shrink-0 overflow-hidden rounded border border-line bg-sunken sm:block">
          {item.shots.length > 0 ? (
            <Image
              src={item.shots[0].src}
              alt=""
              className="h-full w-full object-cover object-left-top"
              sizes="56px"
            />
          ) : (
            <StackBlock item={item} />
          )}
        </span>
        <span className="min-w-0 flex-1">
          <h3 className="truncate text-sm font-medium tracking-tight">{link(item)}</h3>
          <span className="block truncate text-xs text-ink-subtle">{item.tagline}</span>
        </span>
        <span className="hidden shrink-0 items-center gap-2 text-ink-faint md:flex">
          {stackIcons(item, 4)}
        </span>
        <span className="hidden shrink-0 font-mono text-[0.625rem] text-ink-subtle tabular-nums sm:block">
          {item.period}
        </span>
      </article>
    </li>
  );

  const heading = (text: string) => (
    <h3 className="font-mono text-xs tracking-wide text-ink-subtle uppercase">{text}</h3>
  );

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-6">
        {live.map((item, i) => tile(item, i === 0, i < 3 ? "sm:col-span-2" : "sm:col-span-3"))}
      </ul>

      {rest.length > 0 && (
        <section className="mt-8">
          {heading(labels.other)}
          <ul className="mt-3 divide-y divide-line overflow-hidden rounded-xl border border-line bg-canvas">
            {main.map(row)}
          </ul>
          {minor.length > 0 && (
            <details className="group mt-3">
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 rounded-lg px-1 py-1 text-sm text-ink-muted transition-colors hover:text-ink [&::-webkit-details-marker]:hidden">
                <svg
                  viewBox="0 0 16 16"
                  className="size-3.5 transition-transform group-open:rotate-90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  aria-hidden="true"
                >
                  <path d="M6 3l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {labels.moreCoursework.replace("{n}", String(minor.length))}
              </summary>
              <ul className="mt-2 divide-y divide-line overflow-hidden rounded-xl border border-line bg-canvas">
                {minor.map(row)}
              </ul>
            </details>
          )}
        </section>
      )}

      <ProjectDialog
        item={open}
        locale={locale}
        labels={labels}
        onClose={() => show(null)}
        onStep={step}
      />
    </>
  );
}
