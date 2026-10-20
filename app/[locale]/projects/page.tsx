import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { ProjectGrid } from "@/components/project-grid";
import { projectViews } from "@/lib/content/view";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/seo";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  return {
    title: t.meta.projectsTitle,
    description: t.meta.projectsDescription,
    alternates: alternatesFor(locale, "/projects"),
    openGraph: { title: t.meta.projectsTitle, description: t.meta.projectsDescription },
  };
}

/**
 * Os sistemas de producao como lista estruturada (schema.org). Cada item
 * aponta para a pagina do projeto. So com o dominio proprio, como o sitemap.
 */
function projectList(
  site: string,
  locale: string,
  name: string,
  cards: readonly { slug: string; name: string; tagline: string; status: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: cards
      .filter((c) => c.status === "live" || c.status === "building")
      .map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: c.name,
          description: c.tagline,
          applicationCategory: "BusinessApplication",
          url: `${site}/${locale}/projects/${c.slug}`,
          author: { "@id": `${site}/#person` },
        },
      })),
  };
}

export default async function ProjectsPage({ params }: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  const cards = projectViews(locale, t.projects.present);
  const site = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <main id="main" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
      {site && (
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON serializado do conteudo tipado deste repo, sem entrada de usuario; `<` escapado.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              projectList(site, locale, t.projects.inProduction, cards),
            ).replace(/</g, "\\u003c"),
          }}
        />
      )}
      <PageHeader eyebrow={t.projects.title} title={t.projects.headline} />
      <div className="mt-10">
        <ProjectGrid
          items={cards}
          locale={locale}
          mode="all"
          labels={{
            inProduction: t.projects.inProduction,
            other: t.projects.other,
            moreCoursework: t.projects.moreCoursework,
            caseStudy: t.projects.caseStudy,
            flagship: t.projects.flagship,
          }}
        />
      </div>
    </main>
  );
}
