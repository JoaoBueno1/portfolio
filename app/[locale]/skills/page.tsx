import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SkillMeter } from "@/components/skill-meter";
import { STACK, skillGroups } from "@/lib/content/stack";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/skills">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  return { title: t.meta.skillsTitle, description: t.meta.skillsDescription };
}

export default async function SkillsPage({ params }: PageProps<"/[locale]/skills">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  const groups = skillGroups();

  return (
    <main id="main" className="flex min-h-svh flex-col justify-center px-6 py-12 lg:px-14 lg:py-16">
      <div className="max-w-5xl">
        <h1 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
          {t.skills.title}
        </h1>
        <p className="mt-3 text-base text-ink">{t.skills.lead}</p>
        <p className="mt-1 text-xs text-ink-faint">{t.skills.scaleNote}</p>

        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <section key={group.id}>
              <h2 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
                {t.skills.groups[group.id]}
              </h2>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {group.keys.map((key) => {
                  const tech = STACK[key];
                  return (
                    <li
                      key={key}
                      className="flex items-center gap-2.5 py-2"
                      // O nivel vai no rotulo da LINHA. As cinco estrelas sao
                      // decoracao: sem isto o leitor de tela anunciaria cinco
                      // graficos por item e nenhum numero.
                      aria-label={`${tech.title}, ${t.skills.levelLabel} ${tech.level}/5`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="size-4 shrink-0 text-ink-subtle"
                        fill="currentColor"
                      >
                        <path d={tech.path} />
                      </svg>
                      <span className="truncate text-sm text-ink-muted">{tech.title}</span>
                      <span className="ml-auto shrink-0">
                        <SkillMeter level={tech.level} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
