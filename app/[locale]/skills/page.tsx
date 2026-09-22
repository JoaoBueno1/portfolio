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

  // Ancorado no topo, e nao centrado: a cena do fundo vive no rodape da tela,
  // e centrar empurrava as ultimas linhas para cima da cidade.
  return (
    <main id="main" className="flex min-h-svh flex-col justify-start px-6 py-12 lg:px-14 lg:py-16">
      <div className="max-w-5xl">
        <h1 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
          {t.skills.title}
        </h1>
        <p className="mt-3 text-base text-ink">{t.skills.lead}</p>

        {/* Cada grupo num card, como os de Soft skills: fundo translucido com
            desfoque. E o que faz a lista ler por cima da cena do fundo sem
            precisar de veu na cena inteira. */}
        <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <section
              key={group.id}
              className="rounded-xl border border-line bg-canvas/70 p-4 backdrop-blur-sm"
            >
              <h2 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
                {t.skills.groups[group.id]}
              </h2>
              <ul className="mt-2 divide-y divide-line">
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
