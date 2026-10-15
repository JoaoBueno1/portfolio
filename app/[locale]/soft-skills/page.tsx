import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { SoftSkillIcon } from "@/components/soft-skill-icon";
import { SOFT_SKILLS } from "@/lib/content/soft-skills";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/soft-skills">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  return {
    title: t.meta.softTitle,
    description: t.meta.softDescription,
    alternates: alternatesFor(locale, "/soft-skills"),
    openGraph: { title: t.meta.softTitle, description: t.meta.softDescription },
  };
}

export default async function SoftSkillsPage({ params }: PageProps<"/[locale]/soft-skills">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);

  return (
    <div className="flex min-h-svh flex-col justify-between gap-8 px-6 py-12 lg:px-14 lg:py-16">
      <main id="main" className="flex flex-1 flex-col justify-center">
        <div className="max-w-4xl">
          <PageHeader eyebrow={t.soft.title} title={t.soft.headline} lead={t.soft.lead} />

          <ul className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {SOFT_SKILLS.map((skill) => {
              const copy = skill.copy[locale];
              return (
                <li
                  key={skill.id}
                  className="rounded-xl border border-line bg-canvas/70 p-4 backdrop-blur-sm transition-colors duration-300 [transition-timing-function:var(--ease-out-soft)] hover:border-accent"
                >
                  <span className="text-accent">
                    <SoftSkillIcon icon={skill.icon} />
                  </span>
                  {/* A competencia pelo nome que o recrutador procura; a
                      historia embaixo e o que a prova. */}
                  <p className="mt-2.5 font-mono text-[0.625rem] tracking-wide text-accent uppercase">
                    {skill.competency[locale]}
                  </p>
                  <h2 className="mt-1 text-sm font-semibold tracking-tight text-balance">
                    {copy.title}
                  </h2>
                  <p className="mt-1.5 text-xs leading-relaxed text-ink-muted text-pretty">
                    {copy.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
