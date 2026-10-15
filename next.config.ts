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
    // So WebP. AVIF pesa menos, mas o otimizador leva quase um segundo para
    // gerar cada um na PRIMEIRA visita, e num portfolio quase toda visita e
    // a primeira. As capturas das galerias nem passam por aqui (`unoptimized`
    // em project-browser): so as capas dos cards.
    formats: ["image/webp"],
  },
  async redirects() {
    return [
      // Toda rota vive sob /[locale]. A raiz manda para o ingles, que e a
      // lingua do mercado-alvo.
      //
      // Deliberadamente NAO ha deteccao por `Accept-Language` aqui: ela
      // exigiria `proxy.ts` e tiraria a raiz do caminho estatico. Quando
      // a deteccao fizer sentido, ela entra de proposito, num
      // commit proprio. (E `proxy.ts` — `middleware.ts` e ignorado EM
      // SILENCIO no Next 16 e o build passa verde sem rodar nada.)
      { source: "/", destination: "/en", permanent: false },
      // /work existiu por um deploy antes do site virar quatro abas. O
      // endereco pode ter sido aberto ou compartilhado nesse meio tempo, e um
      // 404 num portfolio e pior do que um redirect que ninguem usa.
      { source: "/:locale(en|pt)/work", destination: "/:locale/projects", permanent: true },
      // O espanhol existiu ate 14/10/2026. Link antigo cai no ingles, que e
      // o idioma do mercado-alvo, em vez de um 404.
      { source: "/es", destination: "/en", permanent: true },
      { source: "/es/:path*", destination: "/en/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/:path*", headers: SECURITY_HEADERS.map(({ key, value }) => ({ key, value })) },
    ];
  },
};

export default nextConfig;
