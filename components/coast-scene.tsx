import Image from "next/image";
import coast from "@/public/art/coast.webp";

/**
 * A CENA DA COLUNA DA ESQUERDA: a costa ao por do sol, com reflexos na agua
 * do rodape. Mesmo mecanismo de `ambient-scene.tsx`: imagem e efeito dentro
 * de um palco com a proporcao da arte, ancorado no rodape, e um SVG cujo
 * `viewBox` e o proprio tamanho da arte. Um reflexo vive numa coordenada da
 * ilustracao, nao da tela.
 *
 * Coordenadas medidas no arquivo de 667x2000, por amostragem de cor: o
 * horizonte fica em y~1808, a agua vai dai ate a praia por volta de y=1930,
 * e o rastro do sol desce em x~450. A baia da esquerda entra na agua a
 * partir de y~1850.
 *
 * Os reflexos sao segmentos horizontais de 3 unidades de altura, no grid da
 * arte, que so variam de opacidade. Nada se move: e a agua que "brilha". As
 * duracoes sao todas diferentes para o rodape nunca piscar em conjunto.
 */
const ART_W = 667;
const ART_H = 2000;

/* x, y, largura, duracao, atraso. Os seis primeiros seguem o rastro do sol;
   os demais espalham-se pela baia. */
const GLINTS = [
  [448, 1818, 16, 6.2, 0],
  [444, 1838, 24, 7.4, 1.1],
  [452, 1858, 12, 5.6, 2.3],
  [446, 1878, 20, 8.1, 0.6],
  [454, 1898, 10, 6.8, 3.4],
  [450, 1916, 14, 7.0, 1.9],
  [560, 1826, 14, 8.6, 0.4],
  [600, 1848, 12, 6.4, 2.9],
  [500, 1882, 10, 7.8, 1.5],
  [100, 1852, 12, 5.9, 3.8],
  [190, 1862, 16, 6.6, 0.9],
  [240, 1884, 10, 8.3, 2.1],
  [300, 1896, 18, 7.2, 3.0],
  [360, 1904, 12, 6.1, 1.3],
] as const;

export function CoastScene() {
  return (
    <div className="scene" aria-hidden="true">
      <div
        className="scene-stage scene-stage--coast"
        style={{ "--art-w": ART_W, "--art-h": ART_H } as React.CSSProperties}
      >
        {/* `unoptimized`: o arquivo e WebP SEM PERDA e vai para o browser byte
            a byte. Pixel art nao sobrevive a recompressao: o otimizador do
            Next reencodava em qualidade 75 e borrava o contorno dos pixels. */}
        <Image src={coast} alt="" fill sizes="22rem" unoptimized className="object-cover" />
        <svg
          viewBox={`0 0 ${ART_W} ${ART_H}`}
          className="ambient absolute inset-0 h-full w-full"
          aria-hidden="true"
          focusable="false"
          shapeRendering="crispEdges"
        >
          <g fill="var(--art-glint)">
            {GLINTS.map(([x, y, width, duration, delay]) => (
              <rect
                key={`${x}-${y}`}
                x={x}
                y={y}
                width={width}
                height="3"
                className="water-glint"
                style={{ animationDuration: `${duration}s`, animationDelay: `${delay}s` }}
              />
            ))}
          </g>
        </svg>
      </div>
      {/* Veu da cor da coluna atras do topo (foto, nome, cargo, menu), que
          se dissolve antes da paisagem. No escuro o ceu da arte escurecido
          vira um cinza quase da cor do texto pequeno, e "Full stack
          developer" sumia. Em cima do veu o texto le com o contraste que
          foi medido para a coluna. */}
      <div className="scene-veil scene-veil--coast" />
    </div>
  );
}
