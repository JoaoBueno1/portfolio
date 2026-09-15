import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WorkGrid } from "@/components/work-grid";
import { projectCards } from "@/lib/content/view";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: PageProps<"/[locale]/work">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  return {
    title: t.meta.workTitle,
    description: t.meta.workDescription,
    alternates: { canonical: `/${locale}/work` },
  };
}

export default async function WorkPage({ params }: PageProps<"/[locale]/work">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);

  // Sem `limit`: aqui entra tudo. Esta pagina existe justamente para quem
  // quis ver alem dos quatro da home.
  const cards = projectCards(locale, t.work.present);

  return (
    <main id="main" className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{t.work.title}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink-muted text-pretty">{t.work.lead}</p>

      <div className="mt-12">
        <WorkGrid
          items={cards}
          labels={{
            status: t.work.status,
            domain: t.work.domains,
            readCase: t.work.readCase,
            casePending: t.work.casePending,
            noShot: t.work.noShot,
            filterLabel: t.work.filterLabel,
            empty: t.work.empty,
          }}
        />
      </div>
    </main>
  );
}
