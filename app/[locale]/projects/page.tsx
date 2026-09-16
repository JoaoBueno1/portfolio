import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectBrowser } from "@/components/project-browser";
import { projectViews } from "@/lib/content/view";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  return { title: t.meta.projectsTitle, description: t.meta.projectsDescription };
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

  return (
    <main id="main" className="flex min-h-svh flex-col justify-center px-6 py-12 lg:px-14 lg:py-16">
      <div className="max-w-5xl">
        <h1 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {t.projects.title}
        </h1>

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
            }}
          />
        </div>
      </div>
    </main>
  );
}
