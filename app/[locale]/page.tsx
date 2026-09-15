import { notFound } from "next/navigation";
import { RouteField } from "@/components/route-field";
import { StackMarquee } from "@/components/stack-marquee";
import { PROFILE } from "@/lib/content/profile";
import { TIMELINE } from "@/lib/content/timeline";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function AboutPage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);

  return (
    <div className="flex min-h-svh flex-col">
      <main id="main" className="flex-1 px-6 py-12 lg:px-12 lg:py-16">
        <div className="max-w-3xl">
          <section className="relative isolate overflow-hidden rounded-2xl border border-line px-7 py-8 lg:px-9 lg:py-10">
            <RouteField />
            <div className="relative">
              <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">{PROFILE.name}</h1>
              <p className="mt-1 text-sm text-ink-subtle">
                {t.sidebar.role} · {t.sidebar.location}
              </p>
              <p className="mt-6 text-base leading-relaxed text-ink-muted text-pretty">
                {t.about.intro}
              </p>
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
              {t.about.nowTitle}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.about.now}</p>
          </section>

          {/* A timeline fica minimalista e encostada a esquerda: ela e
              contexto do "sobre", nao a atracao da pagina. */}
          <section className="mt-10">
            <h2 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
              {t.about.pathTitle}
            </h2>
            <ol className="mt-5 border-l border-line pl-6">
              {TIMELINE.map((entry) => (
                <li key={entry.id} className="group/row relative pb-7 last:pb-0">
                  <span
                    className="absolute top-1.5 -left-[1.5625rem] size-2 rounded-full border border-line-strong bg-canvas transition-colors duration-300 group-hover/row:border-accent group-hover/row:bg-accent"
                    aria-hidden="true"
                  />
                  <p className="font-mono text-xs font-semibold tabular-nums">{entry.year}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted text-pretty">
                    {t.about.timeline[entry.id]}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <h2 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
                {t.about.educationTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.about.education}</p>
            </div>
            <div>
              <h2 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
                {t.about.languagesTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{t.about.languages}</p>
            </div>
          </section>

          <p className="mt-12 max-w-xl text-xs leading-relaxed text-ink-faint">{t.footer.noData}</p>
        </div>
      </main>

      {/* O carrossel fica colado no rodape da coluna. Ele existe no Sobre e
          nas Soft skills; some em Skills (onde os mesmos logos ja estao, com
          nivel) e em Projetos (onde eles ja estao em cada card). */}
      <div className="sticky bottom-0">
        <StackMarquee />
      </div>
    </div>
  );
}
