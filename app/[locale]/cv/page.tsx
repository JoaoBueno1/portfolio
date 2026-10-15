import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import {
  CV_PDF,
  EARLIER,
  EDUCATION,
  EXPERIENCE,
  formatMonth,
  formatPeriod,
  LANGUAGES,
  type Role,
} from "@/lib/content/experience";
import { PROFILE } from "@/lib/content/profile";
import { PROJECTS } from "@/lib/content/projects";
import { STACK, STACK_GROUPS } from "@/lib/content/stack";
import { isLocale, LOCALES, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/cv">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  return {
    title: t.meta.cvTitle,
    description: t.meta.cvDescription,
    alternates: alternatesFor(locale, "/cv"),
    // A mesma informacao da pagina Experiencia, em formato de papel. Indexar
    // as duas so faria o buscador escolher uma por conta propria.
    robots: { index: false, follow: true },
  };
}

/**
 * O CURRICULO, como uma folha A4.
 *
 * E a FONTE dos PDFs em `public/cv/`: o PDF e esta pagina impressa (ver
 * README). Por isso tudo aqui sai do conteudo tipado do site (cargos,
 * projetos, ferramentas), e o curriculo nunca discorda do portfolio.
 *
 * Duas paginas no maximo. O que nao cabe fica no site, que o cabecalho cita.
 * O telefone e o endereco NAO entram: o arquivo e publico e fica indexado.
 */
export default async function CvPage({ params }: PageProps<"/[locale]/cv">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  const site = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://joaosilva.app").replace(
    /^https?:\/\//,
    "",
  );

  const period = (role: Role) => formatPeriod(role, locale, t.experience);

  const live = [...PROJECTS].filter((p) => p.status === "live").sort((a, b) => a.order - b.order);

  // O que eu uso todo dia e o que uso com frequencia; o ocasional fica no site.
  const keys = STACK_GROUPS.flatMap((g) => g.keys);
  const daily = keys.filter((k) => STACK[k].level >= 5).map((k) => STACK[k].title);
  const often = keys.filter((k) => STACK[k].level === 4).map((k) => STACK[k].title);

  return (
    <main
      id="main"
      className="flex min-h-svh flex-col items-center px-4 py-10 lg:px-14 print:block print:p-0"
    >
      <p className="mb-4 flex w-full max-w-[210mm] justify-end print:hidden">
        <a
          href={CV_PDF[locale]}
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-hover"
        >
          {t.experience.cvLink}
        </a>
      </p>

      <article className="paper w-full max-w-[210mm] rounded-sm bg-canvas px-[14mm] py-[12mm] text-[9.5pt] leading-[1.4] text-ink shadow-lg ring-1 ring-line print:max-w-none print:rounded-none print:p-0 print:shadow-none print:ring-0">
        <header className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1 border-b-2 border-ink pb-3">
          <div>
            <h1 className="text-[20pt] font-bold leading-tight tracking-tight">{PROFILE.name}</h1>
            <p className="text-[11pt] text-ink-muted">{t.cv.role}</p>
          </div>
          <ul className="text-right text-[8.5pt] leading-snug text-ink-muted">
            <li>{t.sidebar.location}</li>
            <li>
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
            </li>
            <li>
              <a href={PROFILE.linkedin}>{PROFILE.linkedin.replace(/^https:\/\/www\./, "")}</a>
            </li>
            <li>
              {t.cv.portfolioLabel}: <a href={`https://${site}/${locale}`}>{site}</a>
            </li>
          </ul>
        </header>

        <Section title={t.cv.summaryTitle}>
          <p className="text-pretty">{t.cv.summary}</p>
        </Section>

        <Section title={t.cv.experienceTitle}>
          <div className="flex flex-col gap-3">
            {EXPERIENCE.map((role) => (
              <CvRole key={role.from} role={role} period={period(role)} locale={locale} />
            ))}
            <div className="flex flex-col gap-0.5">
              {EARLIER.map((role) => (
                <CvRole key={role.from} role={role} period={period(role)} locale={locale} compact />
              ))}
            </div>
          </div>
        </Section>

        <Section title={t.cv.projectsTitle}>
          <ul className="flex flex-col gap-1">
            {live.map((p) => (
              <li key={p.slug} className="break-inside-avoid">
                <span className="font-semibold">{p.name}.</span>{" "}
                <span className="text-ink-muted">{p.copy[locale].tagline}.</span>
              </li>
            ))}
          </ul>
        </Section>

        <Section title={t.cv.skillsTitle}>
          <dl className="grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-1">
            <dt className="font-semibold">{t.cv.dailyLabel}</dt>
            <dd className="text-ink-muted">{daily.join(", ")}</dd>
            <dt className="font-semibold">{t.cv.oftenLabel}</dt>
            <dd className="text-ink-muted">{often.join(", ")}</dd>
          </dl>
        </Section>

        <div className="grid grid-cols-[2fr_1fr] gap-6">
          <Section title={t.cv.educationTitle}>
            {EDUCATION.map((course) => (
              <div key={course.from} className="break-inside-avoid">
                <p className="font-semibold">{course.title[locale]}</p>
                <p className="text-ink-muted">
                  {course.school[locale]} · {course.place[locale]} ·{" "}
                  {formatMonth(course.from, locale)} – {formatMonth(course.to, locale)}
                </p>
              </div>
            ))}
          </Section>
          <Section title={t.cv.languagesTitle}>
            <p className="text-ink-muted">{LANGUAGES[locale]}</p>
          </Section>
        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-3.5">
      <h2 className="mb-1.5 text-[8.5pt] font-bold tracking-[0.12em] text-accent uppercase">
        {title}
      </h2>
      {children}
    </section>
  );
}

function CvRole({
  role,
  period,
  locale,
  compact = false,
}: {
  role: Role;
  period: string;
  locale: Locale;
  compact?: boolean;
}) {
  if (compact) {
    return (
      <div className="flex items-baseline justify-between gap-x-4 break-inside-avoid">
        <p>
          <span className="font-semibold">{role.title[locale]}</span>
          <span className="text-ink-subtle"> · {role.org[locale]}</span>
        </p>
        <p className="shrink-0 font-mono text-[8.5pt] text-ink-subtle">{period}</p>
      </div>
    );
  }
  return (
    <div className="break-inside-avoid">
      <div className="flex items-baseline justify-between gap-x-4">
        <p className="font-semibold">{role.title[locale]}</p>
        <p className="shrink-0 font-mono text-[8.5pt] text-ink-subtle">{period}</p>
      </div>
      <p className="text-[9pt] text-ink-subtle">
        {role.org[locale]} · {role.place[locale]}
      </p>
      <ul className="mt-1 flex list-disc flex-col gap-0.5 pl-4">
        {/* O papel tem uma folha: do armazem, so a primeira linha. A historia
            inteira dele esta na pagina Experiencia. */}
        {(role.fromOnly ? role.points.slice(0, 1) : role.points).map((point) => (
          <li key={point.en} className="text-ink-muted marker:text-ink-subtle">
            {point[locale]}
          </li>
        ))}
      </ul>
    </div>
  );
}
