import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { ProjectBrowser } from "@/components/project-browser";
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
 * Os sistemas de producao como lista estruturada (schema.org), para buscador
 * e leitor automatico. Cada item aponta para o endereco que abre o dialogo
 * dele. So com o dominio proprio, como o sitemap.
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
          url: `${site}/${locale}/projects?p=${c.slug}`,
          author: { "@id": `${site}/#person` },
        },
      })),
  };
}

/**
 * DE PROPOSITO SEM `searchParams`.
 *
 * Basta TOCAR em `searchParams` para o Next tirar a pagina do caminho
 * estatico: ela passa a ser renderizada no servidor a cada visita, so para
 * decidir qual dialogo abre. Nao compensa, e esta e a pagina mais vista do
 * site.
 *
 * O link compartilhado continua funcionando. `ProjectBrowser` le a query no
 * browser ao montar e abre o projeto. A diferenca e que o dialogo aparece
 * depois da hidratacao, e a lista de projetos, que e o conteudo de verdade,
 * ja veio pronta no HTML.
 */
export default async function ProjectsPage({ params }: PageProps<"/[locale]/projects">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  const cards = projectViews(locale, t.projects.present);
  const site = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <main id="main" className="flex min-h-svh flex-col justify-center px-6 py-12 lg:px-14 lg:py-16">
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
      <div className="max-w-5xl">
        <PageHeader eyebrow={t.projects.title} title={t.projects.headline} />

        <div className="mt-10">
          <ProjectBrowser
            items={cards}
            labels={{
              inProduction: t.projects.inProduction,
              other: t.projects.other,
              close: t.projects.close,
              roleLabel: t.projects.roleLabel,
              stackLabel: t.projects.stackLabel,
              previous: t.projects.previous,
              next: t.projects.next,
              previousShot: t.projects.previousShot,
              zoom: t.projects.zoom,
              closeZoom: t.projects.closeZoom,
              shotPosition: t.projects.shotPosition,
              nextShot: t.projects.nextShot,
              shotCount: t.projects.shotCount,
              status: t.projects.status,
              domains: t.projects.domains,
              noShot: t.projects.noShot,
              insightsEyebrow: t.projects.insightsEyebrow,
              insightsCount: t.projects.insightsCount,
              methodLabel: t.projects.methodLabel,
              zoomFigure: t.projects.zoomFigure,
              insightsNote: t.projects.insightsNote,
              seeOriginal: t.projects.seeOriginal,
              caseStudy: t.projects.caseStudy,
              visitSite: t.projects.visitSite,
              flagship: t.projects.flagship,
              moreCoursework: t.projects.moreCoursework,
              sections: t.projects.sections,
            }}
          />
        </div>
      </div>
    </main>
  );
}
