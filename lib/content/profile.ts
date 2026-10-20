/**
 * Dado fixo da pessoa. Nada aqui muda de idioma.
 *
 * O NOME E O DO LINKEDIN, igual letra por letra: recrutador abre os dois lado
 * a lado, e um nome diferente em cada um e a primeira duvida que ele tem. O
 * curto vai no menu e no titulo da aba; o completo, no curriculo, no rodape e
 * nos dados estruturados.
 *
 * O e-mail fica em texto puro de proposito: obfuscacao por JavaScript quebra
 * para quem usa leitor de tela e nao para o raspador, que executa JS ha anos.
 */
export const PROFILE = {
  name: "João Marcos",
  fullName: "João Marcos Bueno da Silva",
  location: "Gold Coast, Queensland, Australia",
  email: "joao.buenopc@gmail.com",
  github: "https://github.com/JoaoBueno1",
  linkedin: "https://www.linkedin.com/in/joao-marcos-bueno-da-silva-979a4a25a/",
  repo: "https://github.com/JoaoBueno1/portfolio",
} as const;
