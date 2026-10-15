import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { AmbientMotion } from "@/components/ambient-motion";
import { Sidebar } from "@/components/sidebar";
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
 * A estrutura e uma coluna fixa a esquerda e o conteudo a direita. Sao quatro
 * destinos no site inteiro, e a ideia e que o visitante nunca sinta que
 * navegou: o que muda e o painel da direita.
 */
export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

/**
 * O tema TEM que ser aplicado antes da primeira pintura. Como `useEffect`,
 * quem escolheu escuro veria um lampejo branco a cada navegacao, o pior tipo
 * de bug de tema porque so atinge quem se importa com o assunto.
 *
 * Engole o proprio erro: em janela anonima `localStorage` LANCA ao ser
 * acessado, e um throw aqui derrubaria a pagina inteira.
 */
const THEME_BOOTSTRAP = `try{var t=localStorage.getItem("theme");if(t==="dark"||t==="light"){document.documentElement.dataset.theme=t}}catch(e){}`;

/**
 * Dados estruturados (schema.org) para buscador e leitor automatico: quem e
 * a pessoa, onde esta, o que sabe e onde mais existe na web. O cargo vai em
 * ingles em todo idioma, porque e o que o leitor automatico compara.
 *
 * So entra com o dominio proprio configurado, pelo mesmo motivo do sitemap:
 * `@id` precisa de URL absoluta e nao pode apontar para um deploy temporario.
 */
function structuredData(locale: Locale, site: string, description: string) {
  const person = `${site}/#person`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": person,
        name: PROFILE.name,
        url: `${site}/${locale}`,
        jobTitle: "Full Stack Developer",
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
        name: PROFILE.name,
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

  // O dominio proprio entra por variavel de ambiente na Vercel, e so depois de
  // estar no ar: com ele vazio o Next usa o endereco do deploy, e a previa de
  // link nunca aponta para um dominio que ainda nao resolve.
  const site = process.env.NEXT_PUBLIC_SITE_URL;

  return {
    ...(site ? { metadataBase: new URL(site) } : {}),
    // A primeira pagina leva nome e cargo no titulo; as outras, "Pagina · Nome".
    title: { default: t.meta.siteTitle, template: `%s · ${t.meta.aboutTitle}` },
    description: t.meta.aboutDescription,
    alternates: alternatesFor(locale),
    openGraph: { title: t.meta.siteTitle, description: t.meta.aboutDescription, type: "profile" },
    // A imagem vem de `opengraph-image.png` nesta pasta; aqui so o formato
    // grande, que e o que LinkedIn, Slack e X mostram quando alguem cola o link.
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
    <html lang={LOCALE_HTML_LANG[locale]} suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: literal
            constante deste arquivo, sem nenhuma entrada de usuario. E a unica
            forma de aplicar o tema antes da primeira pintura. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      <body className="font-sans antialiased">
        {site && (
          <script
            type="application/ld+json"
            // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON serializado deste arquivo, sem entrada de usuario; `<` escapado para nunca fechar a tag.
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData(locale, site, t.meta.aboutDescription)).replace(
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
        {/* O CONTEUDO E LISO, de proposito. A cena da praia vive so na coluna
            da esquerda, como um cartao-postal: e a identidade do site e de
            onde eu sou, sem competir com texto, cards e tabelas. Ela ja esteve
            atras do conteudo inteiro e saiu em 15/10/2026: nas paginas densas
            (skills, projetos) a cidade aparecia por tras dos cards. */}
        <AmbientMotion />
        <Sidebar
          locale={locale}
          t={{
            about: t.nav.about,
            experience: t.nav.experience,
            cv: t.about.downloadCv,
            skills: t.nav.skills,
            soft: t.nav.soft,
            projects: t.nav.projects,
            menu: t.nav.menu,
            language: t.nav.language,
            theme: t.nav.theme,
            role: t.sidebar.role,
            focus: t.sidebar.focus,
            location: t.sidebar.location,
            photoAlt: t.sidebar.photoAlt,
            open: t.sidebar.open,
            close: t.sidebar.close,
          }}
        />
        <div className="lg:pl-(--sidebar-w) print:pl-0">{children}</div>
      </body>
    </html>
  );
}
