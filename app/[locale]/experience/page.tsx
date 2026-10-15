import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
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
import { isLocale, LOCALES, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/experience">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  return {
    title: t.meta.experienceTitle,
    description: t.meta.experienceDescription,
    alternates: alternatesFor(locale, "/experience"),
    openGraph: { title: t.meta.experienceTitle, description: t.meta.experienceDescription },
  };
}

/**
 * A TRAJETORIA, do mais recente ao mais antigo.
 *
 * As datas ficam numa coluna propria, em fonte mono, para o olho descer por
 * elas sem ler o resto: e assim que um recrutador confere se ha buraco. Os
 * dois cargos na empresa atual aparecem separados, porque foram dois
 * trabalhos diferentes, e a passagem de um para o outro e a historia.
 */
export default async function ExperiencePage({ params }: PageProps<"/[locale]/experience">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);

  const period = (role: Role) => formatPeriod(role, locale, t.experience);

  return (
    <main id="main" className="flex min-h-svh flex-col px-6 py-12 lg:px-14 lg:py-16">
      <div className="max-w-3xl">
        <PageHeader
          eyebrow={t.experience.title}
          title={t.experience.headline}
          lead={t.experience.lead}
        />

        <p className="mt-6">
          <a
            href={CV_PDF[locale]}
            className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-canvas px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.experience.cvLink}
          </a>
        </p>

        <ol className="mt-10 flex flex-col">
          {EXPERIENCE.map((role) => (
            <RoleItem key={role.from} role={role} period={period(role)} locale={locale} />
          ))}
        </ol>

        <h2 className="mt-12 font-mono text-xs tracking-wide text-ink-subtle uppercase">
          {t.experience.earlierTitle}
        </h2>
        <ol className="mt-4 flex flex-col">
          {EARLIER.map((role) => (
            <RoleItem key={role.from} role={role} period={period(role)} locale={locale} compact />
          ))}
        </ol>

        <div className="mt-12 grid gap-8 sm:grid-cols-[2fr_1fr]">
          <section>
            <h2 className="font-mono text-xs tracking-wide text-ink-subtle uppercase">
              {t.experience.educationTitle}
            </h2>
            <ul className="mt-4 flex flex-col gap-4">
              {EDUCATION.map((course) => (
                <li key={course.from} className="rounded-xl border border-line bg-canvas p-4">
                  <p className="font-semibold tracking-tight">{course.title[locale]}</p>
                  <p className="mt-0.5 text-sm text-ink-muted">
                    {course.school[locale]} · {course.place[locale]}
                  </p>
                  <p className="mt-0.5 font-mono text-xs text-ink-subtle">
                    {formatMonth(course.from, locale)} – {formatMonth(course.to, locale)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted text-pretty">
                    {course.note[locale]}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-mono text-xs tracking-wide text-ink-subtle uppercase">
              {t.experience.languagesTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">{LANGUAGES[locale]}</p>
          </section>
        </div>
      </div>
    </main>
  );
}

/**
 * Um cargo: datas a esquerda, o resto a direita, ligado ao proximo por uma
 * linha fina. No celular as datas sobem para cima do titulo.
 */
function RoleItem({
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
  return (
    <li className="grid gap-1 border-l border-line pb-8 pl-5 last:pb-0 sm:grid-cols-[9.5rem_1fr] sm:gap-6 sm:border-l-0 sm:pl-0">
      <p className="font-mono text-xs leading-6 text-ink-subtle sm:text-right">{period}</p>
      <div className="relative sm:border-l sm:border-line sm:pl-6">
        <span
          className={`absolute top-[0.45rem] -left-[1.5rem] size-2 rounded-full ring-4 ring-canvas sm:-left-[4.5px] ${role.to || role.fromOnly ? "bg-line-strong" : "bg-accent"}`}
          aria-hidden="true"
        />
        <h3 className={`font-semibold tracking-tight ${compact ? "text-sm" : "text-base"}`}>
          {role.title[locale]}
        </h3>
        <p className="text-sm text-ink-muted">
          {role.org[locale]} · {role.place[locale]}
        </p>
        <ul className={`flex flex-col gap-1.5 ${compact ? "mt-1.5" : "mt-3"}`}>
          {role.points.map((point) => (
            <li
              key={point.en}
              className="flex gap-2.5 text-sm leading-relaxed text-ink-muted text-pretty"
            >
              {!compact && (
                <span
                  className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-ink-subtle"
                  aria-hidden="true"
                />
              )}
              <span>{point[locale]}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
