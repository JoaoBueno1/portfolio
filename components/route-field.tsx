/**
 * O FUNDO DA HOME.
 *
 * Decisao deliberada: nada de particula, blob ou gradiente animado. Esses
 * fundos sao intercambiaveis entre dez mil portfolios e nao dizem nada sobre
 * quem fez o site.
 *
 * Este e um campo de rotas de frete — nos e trajetos, com dois "veiculos"
 * percorrendo devagar. E o desenho do que este portfolio trata. Fica em
 * contraste baixissimo porque o trabalho dele e emoldurar o texto, nao
 * disputar com ele.
 *
 * `aria-hidden`: e decoracao pura, nao carrega informacao nenhuma. E a
 * animacao morre inteira sob `prefers-reduced-motion` pela regra global em
 * globals.css.
 */
export function RouteField({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 620"
      preserveAspectRatio="xMidYMid slice"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    >
      <defs>
        {/* Dissolve nas bordas para o campo nao ter um corte reto em lugar
            nenhum — sem isso o SVG denuncia que e um retangulo colado. */}
        <radialGradient id="rf-fade" cx="50%" cy="38%" r="72%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="58%" stopColor="white" stopOpacity="0.55" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="rf-mask">
          <rect width="1200" height="620" fill="url(#rf-fade)" />
        </mask>
      </defs>

      <g mask="url(#rf-mask)">
        {/* Trajetos. `vector-effect` mantem o traco fino em qualquer escala:
            sem ele o `preserveAspectRatio="slice"` engorda a linha quando a
            tela e larga. */}
        <g
          fill="none"
          stroke="var(--c-line-strong)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.75"
        >
          <path
            id="rf-a"
            d="M -40 430 C 180 380, 250 210, 430 190 S 700 300, 880 210 S 1120 90, 1260 130"
          />
          <path
            id="rf-b"
            d="M -40 180 C 160 150, 300 250, 470 330 S 760 470, 960 420 S 1180 330, 1260 360"
          />
          <path d="M 120 610 C 240 480, 380 470, 470 330" />
          <path d="M 880 210 C 900 330, 980 400, 960 420" />
          <path d="M 430 190 C 520 120, 640 100, 700 40" />
          <path d="M 250 40 C 300 130, 380 160, 430 190" />
        </g>

        {/* Nos — as paradas. O contorno usa a superficie para o no "furar" a
            linha que passa por baixo, como um ponto de parada de verdade. */}
        <g
          fill="var(--c-canvas)"
          stroke="var(--c-line-strong)"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        >
          {[
            [430, 190],
            [880, 210],
            [470, 330],
            [960, 420],
            [700, 40],
            [250, 40],
            [120, 610],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" />
          ))}
        </g>

        {/* Os dois veiculos. Traco curto correndo pelo trajeto — o unico
            movimento da tela, e lento de proposito. */}
        <g
          fill="none"
          stroke="var(--c-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity="0.55"
        >
          <use href="#rf-a" className="route-runner route-runner--a" />
          <use href="#rf-b" className="route-runner route-runner--b" />
        </g>
      </g>
    </svg>
  );
}
