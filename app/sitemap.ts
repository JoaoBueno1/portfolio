import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/content/projects";
import { LOCALE_HTML_LANG, LOCALES } from "@/lib/i18n/config";

const PAGES = ["", "/experience", "/about"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  if (!site) return [];
  const paths: { path: string; priority: number }[] = [
    ...PAGES.map((path) => ({ path, priority: path === "" ? 1 : 0.8 })),
    ...PROJECTS.map((p) => ({
      path: `/projects/${p.slug}`,
      priority: p.status === "live" ? 0.7 : 0.4,
    })),
  ];
  return paths.flatMap(({ path, priority }) =>
    LOCALES.map((locale) => ({
      url: `${site}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [LOCALE_HTML_LANG[l], `${site}/${l}${path}`]),
        ),
      },
    })),
  );
}
