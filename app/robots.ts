import type { MetadataRoute } from "next";

/** Tudo indexavel. O mapa so e anunciado quando o dominio proprio esta configurado. */
export default function robots(): MetadataRoute.Robots {
  const site = process.env.NEXT_PUBLIC_SITE_URL;
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(site ? { sitemap: `${site}/sitemap.xml`, host: site } : {}),
  };
}
