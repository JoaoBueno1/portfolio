import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { SkillMeter, usageOf } from "@/components/skill-meter";
import { SoftSkillIcon } from "@/components/soft-skill-icon";
import { SOFT_SKILLS } from "@/lib/content/soft-skills";
import { STACK, skillGroups } from "@/lib/content/stack";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/about">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  return {
    title: t.meta.aboutTitle,
    description: t.meta.aboutDescription,
    alternates: alternatesFor(locale, "/about"),
    openGraph: { title: t.meta.aboutTitle, description: t.meta.aboutDescription },
  };
}

/**
 * SOBRE: quem eu sou, as ferramentas e como eu trabalho, numa pagina so.
 * Skills e Soft skills eram paginas proprias ate 21/10/2026; juntas aqui a
 * biografia ganha a prova (as ferramentas) e o jeito (as historias).
 */
export default async function AboutPage({ params }: PageProps<"/[locale]/about">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  const groups = skillGroups();

  return (
    <main id="main" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      <PageHeader eyebrow={t.about.title} title={t.about.headline} />
      <div className="mt-6 flex max-w-3xl flex-col gap-5">
        {t.about.intro.map((paragraph, i) => (
          <p
            key={paragraph.slice(0, 32)}
            className={
              i === 0
                ? "text-lg leading-relaxed text-ink text-pretty"
                : "text-base leading-relaxed text-ink-muted text-pretty"
            }
          >
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-8 grid max-w-3xl gap-6 sm:grid-cols-2">
        <div>
          <p className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">
            {t.about.nowTitle}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t.about.now}</p>
        </div>
        <div>
          <p className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">
            {t.about.languagesTitle}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t.about.languages}</p>
        </div>
      </div>

      <section id="skills" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">{t.about.skillsTitle}</h2>
        <p className="mt-1 text-sm text-ink-muted">{t.about.skillsLead}</p>

        {/* O QUE EU FACO COM ELAS: o trabalho, nao a ferramenta. E o que uma
            vaga pede por nome e o que um leitor automatico procura. */}
        <section className="mt-6 max-w-4xl rounded-xl border border-line bg-canvas p-4">
          <h3 className="font-mono text-xs tracking-wide text-ink-subtle uppercase">
            {t.about.capabilitiesTitle}
          </h3>
          <ul className="mt-2 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {t.about.capabilities.map((line) => (
              <li key={line} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                <span
                  className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-pretty">{line}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <section key={group.id} className="rounded-xl border border-line bg-canvas p-4">
              <h3 className="font-mono text-xs tracking-wide text-ink-subtle uppercase">
                {t.about.groups[group.id]}
              </h3>
              <ul className="mt-2 divide-y divide-line">
                {group.keys.map((key) => {
                  const tech = STACK[key];
                  return (
                    <li
                      key={key}
                      className="flex items-center gap-2.5 py-2"
                      aria-label={`${tech.title}: ${t.about.usage[usageOf(tech.level)]}`}
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
                        <SkillMeter level={tech.level} labels={t.about.usage} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </section>

      <section id="how-i-work" className="mt-16 scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight">{t.about.softTitle}</h2>
        <p className="mt-1 max-w-2xl text-sm text-ink-muted text-pretty">{t.about.softLead}</p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {SOFT_SKILLS.map((skill) => {
            const copy = skill.copy[locale];
            return (
              <li
                key={skill.id}
                className="rounded-xl border border-line bg-canvas p-4 transition-colors duration-300 [transition-timing-function:var(--ease-out-soft)] hover:border-accent"
              >
                <span className="text-accent">
                  <SoftSkillIcon icon={skill.icon} />
                </span>
                <p className="mt-2.5 font-mono text-[0.625rem] tracking-wide text-accent uppercase">
                  {skill.competency[locale]}
                </p>
                <h3 className="mt-1 text-sm font-semibold tracking-tight text-balance">
                  {copy.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-ink-muted text-pretty">
                  {copy.body}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
