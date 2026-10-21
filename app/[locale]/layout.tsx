import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PROFILE } from "@/lib/content/profile";
import { ALL_KEYS, STACK } from "@/lib/content/stack";
import { isLocale, LOCALE_HTML_LANG, LOCALES, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/seo";

/**
 * Este e o root layout: nao existe `app/layout.tsx`. Toda rota vive sob
 * `[locale]`, entao o layout mais alto ja conhece o idioma e escreve `lang`
 * no `<html>` no servidor, sem efeito no cliente e sem flash de idioma errado.
 *
 * A estrutura e a de um site, nao de um app: barra no topo, pagina, rodape.
 * A coluna fixa da esquerda saiu em 21/10/2026 para dar largura as telas e
 * aos diagramas dos projetos, que sao o que o visitante vem ver.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/**
 * Dados estruturados (schema.org) para buscador e leitor automatico. O cargo
 * vai em ingles em todo idioma, porque e o que o leitor automatico compara.
 * So entra com o dominio proprio configurado, pelo mesmo motivo do sitemap.
 */
function structuredData(locale: Locale, site: string, description: string) {
  const person = `${site}/#person`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": person,
        name: PROFILE.fullName,
        alternateName: PROFILE.name,
        url: `${site}/${locale}`,
        jobTitle: "Software Developer",
        description,
        email: `mailto:${PROFILE.email}`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gold Coast",
          addressRegion: "QLD",
          addressCountry: "AU",
        },
        sameAs: [PROFILE.github, PROFILE.linkedin],
        knowsAbout: ALL_KEYS.map((key) => STACK[key].title),
        knowsLanguage: ["pt-BR", "en"],
      },
      {
        "@type": "WebSite",
        "@id": `${site}/#website`,
        url: site,
        name: PROFILE.fullName,
        inLanguage: LOCALE_HTML_LANG[locale],
        author: { "@id": person },
      },
    ],
  };
}

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);

  // O dominio proprio entra por variavel de ambiente na Vercel: com ele vazio
  // o Next usa o endereco do deploy, e a previa de link nunca aponta para um
  // dominio que ainda nao resolve.
  const site = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    ...(site ? { metadataBase: new URL(site) } : {}),
    // A primeira pagina leva nome e cargo no titulo; as outras, "Pagina · Nome".
    title: { default: t.meta.siteTitle, template: `%s · ${t.meta.siteName}` },
    description: t.meta.homeDescription,
    alternates: alternatesFor(locale),
    openGraph: { title: t.meta.siteTitle, description: t.meta.homeDescription, type: "profile" },
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  // `params` e uma Promise desde o Next 15, e o valor NAO e validado pelo
  // router: `/xx` chega aqui como string qualquer.
  if (!isLocale(locale)) notFound();

  const t = await getDictionary(locale);
  const site = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <html lang={LOCALE_HTML_LANG[locale]}>
      <body className="flex min-h-svh flex-col font-sans antialiased">
        {site && (
          <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON serializado deste arquivo, sem entrada de usuario; `<` escapado para nunca fechar a tag.
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData(locale, site, t.meta.homeDescription)).replace(
                /</g,
                "\\u003c",
              ),
            }}
          />
        )}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          {t.nav.skipToContent}
        </a>
        <SiteHeader
          locale={locale}
          t={{
            projects: t.nav.projects,
            experience: t.nav.experience,
            about: t.nav.about,
            contact: t.nav.contact,
            cv: t.nav.cv,
            menu: t.nav.menu,
            language: t.nav.language,
            open: t.nav.open,
            close: t.nav.close,
          }}
        />
        <div className="flex-1">{children}</div>
        <SiteFooter location={t.home.location} source={t.footer.source} built={t.footer.built} />
      </body>
    </html>
  );
}
