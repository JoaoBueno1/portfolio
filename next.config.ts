import type { NextConfig } from "next";

/**
 * Cabecalhos de seguranca.
 *
 * Este site nao tem login, nao tem banco e nao guarda nada de ninguem — a
 * superficie e pequena de proposito. Ainda assim os quatro cabecalhos abaixo
 * custam zero e fecham o que sobra:
 *
 * - `frame-ancestors 'none'` impede que alguem enquadre o site num iframe e
 *   use a credibilidade dele para emoldurar outra coisa.
 * - `nosniff` impede o browser de adivinhar o tipo de uma resposta.
 * - `strict-origin-when-cross-origin` e o padrao sensato de referrer: o
 *   destino externo ve o dominio, nao a rota.
 * - HSTS porque o site so existe em https.
 *
 * CSP completo nao entra: o Next injeta script inline de bootstrap e um
 * `script-src` sem nonce quebraria a hidratacao. `frame-ancestors` vale
 * sozinho e nao depende de nonce.
 */
const SECURITY_HEADERS = [
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
] as const;

const nextConfig: NextConfig = {
  images: {
    // As capturas de produto sao as imagens mais pesadas do site; AVIF
    // primeiro corta o peso pela metade, WebP cobre o resto.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // Toda rota vive sob /[locale]. A raiz manda para o ingles, que e a
      // lingua do mercado-alvo.
      //
      // Deliberadamente NAO ha deteccao por `Accept-Language` aqui: ela
      // exigiria `proxy.ts` e tiraria a raiz do caminho estatico. Quando
      // pt e es existirem de verdade, a deteccao entra de proposito, num
      // commit proprio. (E `proxy.ts` — `middleware.ts` e ignorado EM
      // SILENCIO no Next 16 e o build passa verde sem rodar nada.)
      { source: "/", destination: "/en", permanent: false },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS.map(({ key, value }) => ({ key, value })) },
    ];
  },
};

export default nextConfig;
