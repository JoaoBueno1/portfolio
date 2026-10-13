import type { MetadataRoute } from "next";
import { LOCALE_HTML_LANG, LOCALES } from "@/lib/i18n/config";

/**
 * O mapa do site para buscador: as quatro paginas nos tres idiomas, cada uma
 * apontando as irmas de idioma. Sem o dominio no ambiente (dev, preview) sai
 * vazio, para nunca anunciar o endereco de um deploy temporario.
 */
const PAGES = ["", "/projects", "/skills", "/soft-skills"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  if (!site) return [];
  return PAGES.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${site}/${locale}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [LOCALE_HTML_LANG[l], `${site}/${l}${path}`]),
        ),
      },
    })),
  );
}
