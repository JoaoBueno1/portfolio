/**
 * Dado fixo da pessoa. Nada aqui muda de idioma.
 *
 * O e-mail fica em texto puro de proposito: obfuscacao por JavaScript quebra
 * para quem usa leitor de tela e nao para o raspador, que executa JS ha anos.
 */
export const PROFILE = {
  name: "João Marcos Bueno",
  location: "Gold Coast, Queensland, Australia",
  email: "joao.buenopc@gmail.com",
  github: "https://github.com/JoaoBueno1",
  linkedin: "https://www.linkedin.com/in/joao-marcos-bueno",
  repo: "https://github.com/JoaoBueno1/portfolio",
} as const;

/** Os quatro numeros da faixa de prova. Todos contados, nenhum estimado. */
export const HEADLINE_STATS = [
  { id: "systems", value: "3" },
  { id: "commits", value: "1,971" },
  { id: "integrations", value: "9" },
  { id: "since", value: "2023" },
] as const;

export type HeadlineStatId = (typeof HEADLINE_STATS)[number]["id"];
