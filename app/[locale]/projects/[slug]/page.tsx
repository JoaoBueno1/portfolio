import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InsightsPanel } from "@/components/insights-panel";
import { ProjectGallery } from "@/components/project-gallery";
import { PROJECTS } from "@/lib/content/projects";
import { projectViews } from "@/lib/content/view";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PROJECTS.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  const item = projectViews(locale, t.projects.present).find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: item.name,
    description: item.tagline,
    alternates: alternatesFor(locale, `/projects/${slug}`),
    openGraph: { title: item.name, description: item.tagline },
  };
}

/**
 * A PAGINA DE UM PROJETO: o case inteiro num endereco proprio, que da para
 * mandar a um recrutador e que o buscador indexa. Ate 21/10/2026 isto era um
 * dialogo sobre a vitrine; o conteudo e o mesmo, a leitura e a de uma pagina.
 *
 * Ordem: as telas primeiro (e o que prova que existe), depois o que e, os
 * numeros, o estudo de caso, os graficos e o detalhe tecnico.
 */
export default async function ProjectPage({ params }: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  const items = projectViews(locale, t.projects.present);
  const index = items.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const item = items[index];
  const prev = items[(index - 1 + items.length) % items.length];
  const next = items[(index + 1) % items.length];
  const study = item.caseStudy;

  const block = (label: string, text: string) => (
    <section>
      <h2 className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">{label}</h2>
      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted text-pretty">{text}</p>
    </section>
  );

  return (
    <main id="main" className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
      <nav aria-label="Breadcrumb" className="text-xs text-ink-subtle">
        <Link href={`/${locale}/projects`} className="hover:text-accent">
          {t.projects.all}
        </Link>
        <span aria-hidden="true"> › </span>
        <span>{item.name}</span>
      </nav>

      <header className="mt-6 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-subtle">
          <span
            className={`rounded-full px-2 py-0.5 font-medium ${
              item.status === "live"
                ? "bg-ok/12 text-ok"
                : item.status === "building"
                  ? "bg-accent-soft text-accent"
                  : "bg-subtle text-ink-muted"
            }`}
          >
            {t.projects.status[item.status]}
          </span>
          <span>{t.projects.domains[item.domain]}</span>
          <span aria-hidden="true">·</span>
          <span>{item.period}</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {item.name}
        </h1>
        <p className="mt-2 text-lg text-ink-muted text-pretty">{item.tagline}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <li
              key={tech.key}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-ink-muted"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3" fill="currentColor">
                <path d={tech.path} />
              </svg>
              {tech.title}
            </li>
          ))}
        </ul>
        {item.link && (
          <a
            href={item.link.url}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
          >
            {t.projects.visitSite}
            <span className="font-mono text-xs opacity-80">{item.link.host}</span>
          </a>
        )}
      </header>

      <div className="mt-8">
        {item.shots.length > 0 ? (
          <ProjectGallery
            shots={item.shots}
            labels={{
              previousShot: t.projects.previousShot,
              nextShot: t.projects.nextShot,
              shotCount: t.projects.shotCount,
              zoom: t.projects.zoom,
              closeZoom: t.projects.closeZoom,
              shotPosition: t.projects.shotPosition,
            }}
          />
        ) : (
          <p className="rounded-xl border border-dashed border-line-strong p-6 text-sm text-ink-subtle">
            {t.projects.noShot}
          </p>
        )}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="flex flex-col gap-8">
          {block(t.projects.sections.overview, item.summary)}

          {study && (
            <div className="grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
              {study.challenge && block(t.projects.sections.challenge, study.challenge)}
              {block(t.projects.roleLabel, item.role)}
              {study.solution && block(t.projects.sections.solution, study.solution)}
              {study.impact && block(t.projects.sections.impact, study.impact)}
            </div>
          )}
          {!study && block(t.projects.roleLabel, item.role)}

          {study && study.highlights.length > 0 && (
            <section className="border-t border-line pt-6">
              <h2 className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">
                {t.projects.sections.highlights}
              </h2>
              <ul className="mt-2 flex flex-col gap-2">
                {study.highlights.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span
                      className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-ink-subtle"
                      aria-hidden="true"
                    />
                    <span className="text-pretty">{line}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {item.metrics.length > 0 && (
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-5 rounded-xl border border-line bg-sunken p-5 lg:grid-cols-1">
              {item.metrics.map((metric) => (
                <div key={metric.label} className="flex flex-col-reverse gap-0.5">
                  <dt className="text-xs leading-snug text-ink-subtle">{metric.label}</dt>
                  <dd className="font-mono text-2xl font-semibold tabular-nums">{metric.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        )}
      </div>

      {item.insights && (
        <div className="mt-10">
          <InsightsPanel
            data={item.insights}
            labels={{
              insightsEyebrow: t.projects.insightsEyebrow,
              insightsCount: t.projects.insightsCount,
              methodLabel: t.projects.methodLabel,
              zoomFigure: t.projects.zoomFigure,
              insightsNote: t.projects.insightsNote,
              seeOriginal: t.projects.seeOriginal,
              closeZoom: t.projects.closeZoom,
            }}
          />
        </div>
      )}

      <nav
        aria-label={t.projects.title}
        className="mt-12 flex items-center justify-between border-t border-line pt-6 text-sm"
      >
        <Link
          href={`/${locale}/projects/${prev.slug}`}
          className="text-ink-muted hover:text-accent"
        >
          <span aria-hidden="true">←</span> {prev.name}
        </Link>
        <Link
          href={`/${locale}/projects/${next.slug}`}
          className="text-right text-ink-muted hover:text-accent"
        >
          {next.name} <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </main>
  );
}
