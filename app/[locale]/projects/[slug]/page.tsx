import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectDetail } from "@/components/project-detail";
import { PROJECTS } from "@/lib/content/projects";
import { projectViews } from "@/lib/content/view";
import { isLocale, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/seo";

const OG_SLUGS = new Set(["tms", "operations-portal", "partner-api", "warehouse", "driver-app"]);

export function generateStaticParams() {
  return LOCALES.flatMap((locale) => PROJECTS.map((p) => ({ locale, slug: p.slug })));
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/projects/[slug]">): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);
  const item = projectViews(locale, t.projects.present).find((p) => p.slug === slug);
  if (!item) return {};
  return {
    title: item.name,
    description: item.tagline,
    alternates: alternatesFor(locale, `/projects/${slug}`),
    ...(OG_SLUGS.has(slug)
      ? {
          openGraph: {
            title: item.name,
            description: item.tagline,
            images: [{ url: `/og/${slug}.png`, width: 1200, height: 630, alt: item.tagline }],
          },
          twitter: { card: "summary_large_image", images: [`/og/${slug}.png`] },
        }
      : { openGraph: { title: item.name, description: item.tagline } }),
  };
}

export default async function ProjectPage({ params }: PageProps<"/[locale]/projects/[slug]">) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  const items = projectViews(locale, t.projects.present);
  const index = items.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const item = items[index];
  const prev = items[(index - 1 + items.length) % items.length];
  const next = items[(index + 1) % items.length];

  return (
    <main id="main" className="mx-auto max-w-5xl px-6 py-8 sm:py-10">
      <Link
        href={`/${locale}#projects`}
        className="inline-flex items-center gap-2 rounded-lg py-1 text-sm text-ink-muted transition-colors hover:text-ink"
      >
        <span aria-hidden="true">←</span> {t.projects.back}
      </Link>

      <div className="mt-6">
        <ProjectDetail
          item={item}
          heading="h1"
          labels={{
            status: t.projects.status,
            domains: t.projects.domains,
            roleLabel: t.projects.roleLabel,
            pointsLabel: t.projects.pointsLabel,
            stackLabel: t.projects.stackLabel,
            visitSite: t.projects.visitSite,
            noShot: t.projects.noShot,
            previousShot: t.projects.previousShot,
            nextShot: t.projects.nextShot,
            shotCount: t.projects.shotCount,
            zoom: t.projects.zoom,
            closeZoom: t.projects.closeZoom,
            shotPosition: t.projects.shotPosition,
          }}
        />
      </div>

      <nav
        aria-label={t.projects.title}
        className="mt-10 flex items-center justify-between border-t border-line pt-5 text-sm"
      >
        <Link
          href={`/${locale}/projects/${prev.slug}`}
          className="text-ink-muted hover:text-accent"
        >
          <span aria-hidden="true">←</span> {prev.name}
        </Link>
        <Link
          href={`/${locale}/projects/${next.slug}`}
          className="text-right text-ink-muted hover:text-accent"
        >
          {next.name} <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </main>
  );
}
