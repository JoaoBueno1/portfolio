import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { SkillMeter, usageOf } from "@/components/skill-meter";
import { STACK, skillGroups } from "@/lib/content/stack";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/skills">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  return {
    title: t.meta.skillsTitle,
    description: t.meta.skillsDescription,
    alternates: alternatesFor(locale, "/skills"),
    openGraph: { title: t.meta.skillsTitle, description: t.meta.skillsDescription },
  };
}

export default async function SkillsPage({ params }: PageProps<"/[locale]/skills">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  const groups = skillGroups();

  // Ancorado no topo, e nao centrado: a pagina e mais alta que a tela, e
  // centrar faria o cabecalho pular conforme o tamanho da janela.
  return (
    <main id="main" className="flex min-h-svh flex-col justify-start px-6 py-12 lg:px-14 lg:py-16">
      <div className="max-w-5xl">
        <PageHeader eyebrow={t.skills.title} title={t.skills.lead} />

        {/* O QUE EU FACO COM ELAS. A lista de logos diz as ferramentas; esta
            diz o trabalho: API, integracao com ERP, automacao, nuvem. E o que
            uma vaga pede por nome e o que um leitor automatico procura, e nao
            dava para deduzir de uma grade de icones. Seis linhas, sem logo. */}
        <section className="mt-6 max-w-4xl rounded-xl border border-line bg-canvas/70 p-4 backdrop-blur-sm">
          <h2 className="font-mono text-xs tracking-wide text-ink-subtle uppercase">
            {t.skills.capabilitiesTitle}
          </h2>
          <ul className="mt-2 grid gap-x-6 gap-y-1.5 sm:grid-cols-2">
            {t.skills.capabilities.map((line) => (
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

        {/* Cada grupo num card, como os de Soft skills. */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <section
              key={group.id}
              className="rounded-xl border border-line bg-canvas/70 p-4 backdrop-blur-sm"
            >
              <h2 className="font-mono text-xs tracking-wide text-ink-subtle uppercase">
                {t.skills.groups[group.id]}
              </h2>
              <ul className="mt-2 divide-y divide-line">
                {group.keys.map((key) => {
                  const tech = STACK[key];
                  return (
                    <li
                      key={key}
                      className="flex items-center gap-2.5 py-2"
                      // Nome e frequencia lidos juntos, como uma frase so.
                      aria-label={`${tech.title}: ${t.skills.usage[usageOf(tech.level)]}`}
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
                        <SkillMeter level={tech.level} labels={t.skills.usage} />
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
