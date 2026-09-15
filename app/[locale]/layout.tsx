import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { Sidebar } from "@/components/sidebar";
import { isLocale, LOCALE_HTML_LANG, LOCALES } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

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

export async function generateMetadata({ params }: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = await getDictionary(locale);

  return {
    title: { default: t.meta.aboutTitle, template: `%s · ${t.meta.aboutTitle}` },
    description: t.meta.aboutDescription,
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(LOCALES.map((l) => [LOCALE_HTML_LANG[l], `/${l}`])),
    },
    openGraph: { title: t.meta.aboutTitle, description: t.meta.aboutDescription, type: "profile" },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  // `params` e uma Promise desde o Next 15, e o valor NAO e validado pelo
  // router: `/xx` chega aqui como string qualquer.
  if (!isLocale(locale)) notFound();

  const t = await getDictionary(locale);

  return (
    <html lang={LOCALE_HTML_LANG[locale]} suppressHydrationWarning>
      <head>
        {/* biome-ignore lint/security/noDangerouslySetInnerHtml: literal
            constante deste arquivo, sem nenhuma entrada de usuario. E a unica
            forma de aplicar o tema antes da primeira pintura. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          {t.nav.skipToContent}
        </a>
        <Sidebar locale={locale} t={t} />
        <div className="lg:pl-(--sidebar-w)">{children}</div>
      </body>
    </html>
  );
}
