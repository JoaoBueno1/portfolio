import Image from "next/image";
import bay from "@/public/art/bay.webp";

/**
 * A CENA DE FUNDO DO CONTEUDO: a baia ao por do sol, em pixel art, com o
 * rastro do sol brilhando na agua. E um TESTE de fundo ilustrado, ligado so
 * na branch dev; o campo de rotas (`route-field.tsx`) continua no repo e
 * volta com uma linha no layout.
 *
 * COMO A IMAGEM E O EFEITO FICAM ALINHADOS
 * Os dois vivem dentro do mesmo "palco" (`.scene-stage`), que tem a proporcao
 * exata da arte. O SVG usa `viewBox` com as dimensoes da arte, entao uma
 * coordenada aqui e um pixel da ilustracao, em qualquer tamanho de tela. Se
 * o sol sai do recorte, o brilho sai junto: nao ha como desalinhar.
 *
 * O ceu ocupa dois tercos da arte e e quase da cor do fundo do site, e o
 * assunto (sol, barcos, cidade) e uma faixa no rodape. Por isso o palco NAO
 * cobre a area: ele ocupa a largura inteira, ancorado embaixo, e o topo do
 * ceu se dissolve no fundo por mascara. A cena inteira aparece sempre, e o
 * texto le sobre ceu vazio.
 *
 * Coordenadas medidas no arquivo de 1672x941, por amostragem de cor: o sol
 * toca a agua em y~795, x~285, e o rastro desce ate y~870. Os reflexos da
 * cidade ficam entre x 900 e 1500, y 805 a 835.
 */
const ART_W = 1672;
const ART_H = 941;

/* x, y, largura, duracao, atraso. Os cinco primeiros seguem o rastro do sol;
   os demais espalham-se pela agua e pelos reflexos da cidade. */
const GLINTS = [
  [280, 806, 18, 6.2, 0],
  [276, 822, 26, 7.4, 1.1],
  [284, 838, 14, 5.6, 2.3],
  [278, 852, 22, 8.1, 0.6],
  [286, 866, 12, 6.8, 3.4],
  [185, 815, 12, 7.0, 1.9],
  [470, 812, 10, 8.6, 0.4],
  [760, 808, 10, 6.4, 2.9],
  [1010, 812, 16, 7.8, 1.5],
  [1180, 818, 12, 5.9, 3.8],
  [1320, 826, 20, 6.6, 0.9],
  [1450, 832, 14, 8.3, 2.1],
] as const;

export function AmbientScene() {
  return (
    <div className="scene" aria-hidden="true">
      <div
        className="scene-stage scene-stage--bay"
        style={{ "--art-w": ART_W, "--art-h": ART_H } as React.CSSProperties}
      >
        {/* `unoptimized`: o arquivo e WebP SEM PERDA e vai para o browser byte
            a byte. Pixel art nao sobrevive a recompressao: o otimizador do
            Next reencodava em qualidade 75 e borrava o contorno dos pixels. */}
        <Image src={bay} alt="" fill priority sizes="100vw" unoptimized className="object-cover" />
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
      <div className="scene-veil" />
    </div>
  );
}
