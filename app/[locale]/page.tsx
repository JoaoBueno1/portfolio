import Link from "next/link";
import { notFound } from "next/navigation";
import { CV_PDF } from "@/lib/content/experience";
import { PROFILE } from "@/lib/content/profile";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

/**
 * O SOBRE, que e a primeira tela.
 *
 * Cabe num viewport, sem rolagem. Isso e restricao de desenho e nao meta de
 * performance: quem abre um portfolio decide em segundos, e o que exige
 * scroll para aparecer nao entra nessa decisao.
 *
 * Nao repete o nome: ele ja esta na coluna da esquerda, grande, com a foto.
 *
 * O H1 E O DIFERENCIAL, nao o cargo. "Full stack developer" ja esta na
 * coluna; a linha mais lida da tela diz o que so eu tenho: o software que
 * uma operacao real usa todo dia. O paragrafo conta a trajetoria de verdade
 * (banco, chao de armazem, os sistemas), na mesma ordem e com as mesmas
 * datas da pagina Experiencia, que e onde a linha do tempo completa mora.
 *
 * O CONTATO E UM BOTAO, nao so um icone na coluna. Recrutador procura duas
 * coisas no primeiro minuto: como falar com a pessoa e o curriculo.
 */
export default async function AboutPage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);

  return (
    <div className="flex min-h-svh flex-col px-6 py-12 lg:px-14 lg:py-16">
      <main id="main" className="flex flex-1 flex-col justify-center py-2">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-wide text-ink-subtle uppercase">
            {t.about.title}
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {t.about.headline}
          </h1>
          <div className="mt-5 flex max-w-2xl flex-col gap-5">
            {t.about.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-lg leading-relaxed text-ink text-pretty sm:text-xl sm:leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* As acoes, em ordem de peso: falar comigo, o curriculo, e o que eu
            construi. O e-mail e o unico botao cheio da tela. */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-hover"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {t.about.emailMe}
          </a>
          <a
            href={CV_PDF[locale]}
            className="inline-flex items-center gap-2 rounded-lg border border-line-strong bg-canvas px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path
                d="M12 4v11m0 0-4-4m4 4 4-4M5 19h14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {t.about.downloadCv}
          </a>
          <Link
            href={`/${locale}/projects`}
            className="ml-1 text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
          >
            {t.about.linkProjects} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>

        <div className="mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">
              {t.about.nowTitle}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t.about.now}</p>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">
              {t.about.languagesTitle}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t.about.languages}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
