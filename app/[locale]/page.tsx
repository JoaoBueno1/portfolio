import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCard } from "@/components/project-card";
import { RouteField } from "@/components/route-field";
import { TechIcon } from "@/components/tech-icon";
import { HEADLINE_STATS, PROFILE } from "@/lib/content/profile";
import { STACK, STACK_GROUPS } from "@/lib/content/stack";
import { TIMELINE } from "@/lib/content/timeline";
import { projectCards } from "@/lib/content/view";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);

  // Na home so os quatro primeiros. Quem quer os oito clica em "ver todos" —
  // uma home que despeja tudo nao hierarquiza nada.
  const cards = projectCards(locale, t.work.present, 4);

  const gridLabels = {
    status: t.work.status,
    domain: t.work.domains,
    readCase: t.work.readCase,
    casePending: t.work.casePending,
    noShot: t.work.noShot,
    filterLabel: t.work.filterLabel,
    empty: t.work.empty,
  };

  return (
    <main id="main">
      {/* ——— Hero ——————————————————————————————————————————————— */}
      <section className="relative isolate overflow-hidden border-b border-line">
        <RouteField />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <p className="font-mono text-xs tracking-wide text-ink-subtle uppercase">{t.hero.role}</p>
          <h1 className="mt-5 max-w-4xl text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted text-pretty">
            {t.hero.body}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href={`/${locale}/work`}
              className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-colors duration-200 [transition-timing-function:var(--ease-out-soft)] hover:bg-accent-hover"
            >
              {t.hero.ctaWork}
            </Link>
            <a
              href={`mailto:${PROFILE.email}`}
              className="rounded-md border border-line-strong px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-ink hover:bg-subtle"
            >
              {t.hero.ctaContact}
            </a>
          </div>
        </div>
      </section>

      {/* ——— Faixa de prova ————————————————————————————————————— */}
      <section aria-label={t.stats.systems} className="border-b border-line bg-sunken">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 sm:grid-cols-4">
          {HEADLINE_STATS.map((stat) => (
            <div key={stat.id}>
              <dd className="font-mono text-3xl font-semibold tracking-tight tabular-nums">
                {stat.value}
              </dd>
              <dt className="mt-1.5 text-xs leading-snug text-ink-subtle">{t.stats[stat.id]}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* ——— Muro de logos ————————————————————————————————————— */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">{t.stack.title}</h2>
        <p className="mt-3 max-w-2xl text-ink-muted text-pretty">{t.stack.lead}</p>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {STACK_GROUPS.map((group) => (
            <div key={group.id}>
              <h3 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
                {t.stack.groups[group.id]}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-4">
                {group.keys.map((key) => (
                  <li key={key} className="group/tech relative">
                    <span className="block text-ink-subtle transition-colors duration-200 group-hover/tech:text-ink">
                      <TechIcon name={key} className="size-7" />
                    </span>
                    {/* O nome so aparece no hover para o muro nao virar uma
                        lista de 33 rotulos. O leitor de tela ja o recebe pelo
                        `aria-label` do proprio SVG. */}
                    <span className="pointer-events-none absolute -top-8 left-1/2 z-10 -translate-x-1/2 rounded bg-ink px-2 py-1 text-xs whitespace-nowrap text-ink-inverse opacity-0 transition-opacity duration-150 group-hover/tech:opacity-100">
                      {STACK[key].title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ——— Vitrine ——————————————————————————————————————————— */}
      <section className="border-t border-line bg-sunken">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{t.work.title}</h2>
              <p className="mt-3 max-w-2xl text-ink-muted">{t.work.lead}</p>
            </div>
            <Link
              href={`/${locale}/work`}
              className="text-sm font-medium text-accent hover:underline"
            >
              {t.work.seeAll} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {cards.map((item) => (
              <ProjectCard key={item.slug} item={item} labels={gridLabels} />
            ))}
          </div>
        </div>
      </section>

      {/* ——— Como eu trabalho ——————————————————————————————————— */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold tracking-tight">{t.how.title}</h2>
        <p className="mt-3 max-w-2xl text-ink-muted text-pretty">{t.how.lead}</p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
          {(["honest", "incident", "floor", "lead"] as const).map((id) => (
            <article key={id} className="bg-canvas p-7">
              <h3 className="text-base font-semibold tracking-tight text-balance">
                {t.how.items[id].title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty">
                {t.how.items[id].body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ——— Timeline curta ————————————————————————————————————— */}
      <section className="border-t border-line bg-sunken">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">{t.timeline.title}</h2>
          <ol className="mt-10 space-y-0">
            {TIMELINE.map((entry, index) => (
              <li
                key={entry.id}
                className="group/row relative grid grid-cols-[4.5rem_1fr] gap-6 sm:grid-cols-[6rem_1fr]"
              >
                <div className="relative pb-10">
                  <span className="font-mono text-sm font-semibold tabular-nums">{entry.year}</span>
                  {/* A linha nao desce depois do ultimo ano: uma linha que
                      termina no vazio sugere que falta alguma coisa. */}
                  {index < TIMELINE.length - 1 && (
                    <span
                      className="absolute top-7 -right-3 bottom-0 w-px bg-line-strong"
                      aria-hidden="true"
                    />
                  )}
                  <span
                    className="absolute top-2 -right-[0.3125rem] size-2.5 rounded-full border border-line-strong bg-canvas transition-colors duration-300 group-hover/row:border-accent group-hover/row:bg-accent"
                    aria-hidden="true"
                  />
                </div>
                <p className="pb-10 text-sm leading-relaxed text-ink-muted text-pretty">
                  {t.timeline.entries[entry.id]}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— CTA ———————————————————————————————————————————————— */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="relative isolate overflow-hidden rounded-2xl border border-line bg-canvas px-8 py-14 sm:px-12">
          <RouteField className="opacity-60" />
          <div className="relative">
            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              {t.cta.title}
            </h2>
            <p className="mt-4 max-w-2xl text-ink-muted text-pretty">{t.cta.body}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-on-accent transition-colors duration-200 hover:bg-accent-hover"
              >
                {t.cta.email}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-line-strong px-5 py-2.5 text-sm font-medium transition-colors duration-200 hover:border-ink hover:bg-subtle"
              >
                {t.cta.linkedin}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
