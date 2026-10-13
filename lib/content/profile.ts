/**
 * Dado fixo da pessoa. Nada aqui muda de idioma.
 *
 * O e-mail fica em texto puro de proposito: obfuscacao por JavaScript quebra
 * para quem usa leitor de tela e nao para o raspador, que executa JS ha anos.
 */
export const PROFILE = {
  name: "João Silva",
  location: "Gold Coast, Queensland, Australia",
  email: "joao.buenopc@gmail.com",
  github: "https://github.com/JoaoBueno1",
  linkedin: "https://www.linkedin.com/in/joao-silva-979a4a25a/",
  repo: "https://github.com/JoaoBueno1/portfolio",
} as const;

/**
 * Os tres numeros da faixa de prova, no Sobre.
 *
 * Contados em 13/10/2026: sistemas com status `live` em `projects.ts`, commits
 * somados dos quatro repositorios (1.243 + 785 + 116 + 58 = 2.202, arredondado
 * para baixo) e integracoes externas do TMS. Arredondado de proposito, como os
 * cards: numero exato convida a conferir um repositorio privado.
 */
export const HEADLINE_STATS = [
  { id: "systems", value: 4, plus: false },
  { id: "commits", value: 2200, plus: true },
  { id: "integrations", value: 9, plus: false },
] as const;

export type HeadlineStatId = (typeof HEADLINE_STATS)[number]["id"];
