import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SoftSkillIcon } from "@/components/soft-skill-icon";
import { StackMarquee } from "@/components/stack-marquee";
import { SOFT_SKILLS } from "@/lib/content/soft-skills";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/soft-skills">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  return { title: t.meta.softTitle, description: t.meta.softDescription };
}

export default async function SoftSkillsPage({ params }: PageProps<"/[locale]/soft-skills">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);

  return (
    <div className="flex min-h-svh flex-col justify-between gap-8 px-6 py-12 lg:px-14 lg:py-16">
      <main id="main" className="flex flex-1 flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
            {t.soft.title}
          </h1>
          <p className="mt-3 max-w-2xl text-base text-ink text-pretty">{t.soft.lead}</p>

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
                  <h2 className="mt-2.5 text-sm font-semibold tracking-tight text-balance">
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

      <StackMarquee />
    </div>
  );
}
