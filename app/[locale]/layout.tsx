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

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

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

  const site = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    ...(site ? { metadataBase: new URL(site) } : {}),
    title: { default: t.meta.siteTitle, template: `%s · ${t.meta.siteName}` },
    description: t.meta.homeDescription,
    alternates: alternatesFor(locale),
    openGraph: { title: t.meta.siteTitle, description: t.meta.homeDescription, type: "profile" },
    twitter: { card: "summary_large_image" },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const t = await getDictionary(locale);
  const site = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <html lang={LOCALE_HTML_LANG[locale]}>
      <body className="flex min-h-svh flex-col font-sans antialiased">
        {site && (
          <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: serialised from typed content, no user input; `<` is escaped
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
            email: t.nav.email,
            emailSubject: t.nav.emailSubject,
            menu: t.nav.menu,
            language: t.nav.language,
            open: t.nav.open,
            close: t.nav.close,
          }}
        />
        <div className="flex-1">{children}</div>
        <SiteFooter location={t.home.location} source={t.footer.source} />
      </body>
    </html>
  );
}
