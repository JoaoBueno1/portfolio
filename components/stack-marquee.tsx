import { ALL_KEYS, STACK } from "@/lib/content/stack";

/**
 * O CARROSSEL INFINITO DE LOGOS.
 *
 * Sem JavaScript. A lista e renderizada DUAS vezes e a faixa anda ate -50%,
 * que e exatamente o comprimento de uma copia: quando a animacao reinicia, o
 * primeiro item da segunda copia esta no mesmo pixel em que estava o da
 * primeira, e a emenda nao existe. Qualquer outro valor produz um salto
 * visivel a cada volta.
 *
 * A segunda copia e `aria-hidden`: para o leitor de tela a lista tem 43
 * itens, nao 86.
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
            className="size-6 text-ink-faint transition-colors duration-300 hover:text-ink"
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
    <div className="marquee relative overflow-hidden border-t border-line bg-canvas py-5">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
      {/* Esfumaca as duas pontas para os logos entrarem e sairem em vez de
          aparecerem cortados na borda. */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-canvas to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-canvas to-transparent" />
    </div>
  );
}
