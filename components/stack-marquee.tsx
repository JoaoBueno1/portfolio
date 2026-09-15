import { ALL_KEYS, STACK } from "@/lib/content/stack";

/**
 * O CARROSSEL INFINITO DE LOGOS.
 *
 * Sem JavaScript. A lista e renderizada DUAS vezes e a faixa anda ate -50%,
 * que e exatamente o comprimento de uma copia: quando a animacao reinicia, o
 * primeiro item da segunda copia esta no mesmo pixel em que estava o da
 * primeira, e a emenda nao existe. Qualquer outro valor traz um salto visivel
 * a cada volta.
 *
 * A segunda copia e `aria-hidden`: para o leitor de tela a lista tem 27
 * itens, nao 54.
 *
 * SEM BORDA E SEM FUNDO PROPRIO, de proposito. Como bloco separado ele virava
 * mais um retangulo no rodape, e a tela ja tinha caixas demais. As pontas
 * somem por `mask-image`, e nao por um gradiente colorido: mascara apaga de
 * verdade, entao o campo de rotas do fundo continua aparecendo por baixo.
 *
 * Para no hover, porque quem parou o mouse ali quer ler um nome. E nao anda
 * sob `prefers-reduced-motion`, pela regra global do globals.css.
 */
export function StackMarquee() {
  const row = (duplicate: boolean) => (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={duplicate || undefined}>
      {ALL_KEYS.map((key) => (
        <li key={key} className="shrink-0">
          <svg
            viewBox="0 0 24 24"
            role={duplicate ? "presentation" : "img"}
            aria-label={duplicate ? undefined : STACK[key].title}
            className="size-6 text-ink-faint transition-colors duration-300 hover:text-accent"
            fill="currentColor"
          >
            {!duplicate && <title>{STACK[key].title}</title>}
            <path d={STACK[key].path} />
          </svg>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee overflow-hidden py-4">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
