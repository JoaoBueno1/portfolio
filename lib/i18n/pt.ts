import type { Dictionary } from "./dictionaries";

/** PORTUGUES DO BRASIL. Precisa satisfazer `Dictionary` — ver `en.ts`. */
export const pt: Dictionary = {
  meta: {
    title: "Joao Marcos Bueno — Desenvolvedor de software",
    description:
      "Construo e opero o software que roda uma operacao real de frete e armazem na Australia: um TMS multi-transportadora, um app de motorista e as ferramentas de armazem por tras deles.",
  },
  nav: {
    work: "Projetos",
    about: "Sobre",
    studies: "Formacao",
    skipToContent: "Pular para o conteudo",
    language: "Idioma",
  },
  hero: {
    name: "Joao Marcos Bueno",
    role: "Desenvolvedor de software · Gold Coast, Australia",
    headline: "Eu construo o software que roda uma operacao de logistica de verdade.",
    body: "Nao sao projetos paralelos. Um sistema de gestao de transporte com varias transportadoras, um app de motorista publicado nas lojas e as ferramentas de armazem por baixo — tudo em producao, usado todo dia util, onde um clique errado reserva um frete faturavel de verdade.",
    ctaWork: "Ver os projetos",
    ctaContact: "Falar comigo",
  },
  footer: {
    builtWith: "Feito com Next.js e Tailwind. O codigo deste site e publico.",
    rights: "Todos os direitos reservados.",
  },
};
