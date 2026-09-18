import { notFound } from "next/navigation";
import { StackMarquee } from "@/components/stack-marquee";
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
 * Repetir gastaria a linha mais valiosa da tela para dizer o que ja foi dito.
 *
 * Nao tem timeline nem formacao. Isso e assunto de LinkedIn e de entrevista,
 * e aqui rouba o espaco de quem so quer saber o que eu construo.
 */
export default async function AboutPage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);

  return (
    <div className="flex min-h-svh flex-col justify-between gap-10 px-6 py-12 lg:px-14 lg:py-16">
      <main id="main" className="flex flex-1 flex-col justify-center py-2">
        <div className="max-w-2xl">
          <h1 className="font-mono text-xs tracking-wide text-ink-faint uppercase">
            {t.about.title}
          </h1>
          {/* O PRIMEIRO PARAGRAFO E MAIOR QUE OS OUTROS.
              E ele que decide se alguem le o segundo, entao carrega o peso
              tipografico junto com o argumento. Os seguintes voltam ao corpo
              normal, senao a pagina inteira grita e nada se destaca. */}
          <div className="mt-6 flex max-w-2xl flex-col gap-5">
            {t.about.intro.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 32)}
                className={
                  i === 0
                    ? "text-lg leading-relaxed text-ink text-pretty sm:text-xl sm:leading-relaxed"
                    : "text-[0.9375rem] leading-relaxed text-ink-muted text-pretty"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-10 grid max-w-2xl gap-6 sm:grid-cols-2">
          <div>
            <p className="font-mono text-[0.625rem] tracking-wide text-ink-faint uppercase">
              {t.about.nowTitle}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t.about.now}</p>
          </div>
          <div>
            <p className="font-mono text-[0.625rem] tracking-wide text-ink-faint uppercase">
              {t.about.languagesTitle}
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{t.about.languages}</p>
          </div>
        </div>
      </main>

      {/* Sem borda e sem fundo: o carrossel termina a pagina em vez de virar
          um rodape separado dela. */}
      <StackMarquee />
    </div>
  );
}
