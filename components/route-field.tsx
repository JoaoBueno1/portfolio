/**
 * O FUNDO DO SITE INTEIRO.
 *
 * Decisao deliberada: nada de particula, blob ou gradiente animado. Esses
 * fundos sao intercambiaveis entre dez mil portfolios e nao dizem nada sobre
 * quem fez o site.
 *
 * Este e um campo de rotas de frete: nos, trajetos e dois veiculos andando
 * devagar. E o desenho do assunto deste portfolio.
 *
 * Fica FIXO atras de tudo, em todas as paginas, e por isso trocar de aba nao
 * troca o fundo. O site passa a parecer uma superficie so em vez de quatro
 * telas diferentes.
 *
 * Usa apenas tokens de cor, entao acompanha claro e escuro sem uma linha a
 * mais. `aria-hidden` porque e decoracao pura, e a animacao morre inteira sob
 * `prefers-reduced-motion` pela regra global do globals.css.
 */
export function RouteField() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
    >
      <defs>
        {/* Dissolve nas bordas. Sem isto o SVG denuncia que e um retangulo
            colado, e a linha corta reto no canto da tela. */}
        <radialGradient id="rf-fade" cx="55%" cy="42%" r="78%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="55%" stopColor="white" stopOpacity="0.45" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="rf-mask">
          <rect width="1200" height="800" fill="url(#rf-fade)" />
        </mask>
      </defs>

      <g mask="url(#rf-mask)">
        {/* `vector-effect` mantem o traco fino em qualquer escala. Sem ele o
            `slice` engorda a linha quando a tela e larga. */}
        <g
          fill="none"
          stroke="var(--c-line-strong)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.7"
        >
          <path
            id="rf-a"
            d="M -60 560 C 180 500, 260 250, 450 230 S 730 370, 920 250 S 1160 100, 1280 160"
          />
          <path
            id="rf-b"
            d="M -60 210 C 170 170, 320 300, 500 410 S 800 580, 1000 520 S 1200 400, 1280 440"
          />
          <path id="rf-c" d="M 150 810 C 280 600, 400 540, 500 410" />
          <path d="M 920 250 C 950 390, 1020 490, 1000 520" />
          <path d="M 450 230 C 550 140, 680 120, 740 40" />
          <path d="M 250 30 C 310 140, 400 190, 450 230" />
          <path d="M 500 410 C 640 430, 760 380, 920 250" />
        </g>

        {/* Os nos. O preenchimento usa a superficie para o no furar a linha
            que passa por baixo, como um ponto de parada de verdade. */}
        <g
          fill="var(--c-canvas)"
          stroke="var(--c-line-strong)"
          strokeWidth="1.25"
          vectorEffect="non-scaling-stroke"
        >
          {[
            [450, 230],
            [920, 250],
            [500, 410],
            [1000, 520],
            [740, 40],
            [250, 30],
            [150, 810],
          ].map(([cx, cy], index) => (
            <circle
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              r="4.5"
              className="route-node"
              style={{ animationDelay: `${index * 1.4}s` }}
            />
          ))}
        </g>

        {/* Os veiculos. Traco curto correndo pelo trajeto: o unico movimento
            da tela, e lento de proposito. */}
        <g
          fill="none"
          stroke="var(--c-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          opacity="0.5"
        >
          <use href="#rf-a" className="route-runner route-runner--a" />
          <use href="#rf-b" className="route-runner route-runner--b" />
          <use href="#rf-c" className="route-runner route-runner--c" />
        </g>
      </g>
    </svg>
  );
}
