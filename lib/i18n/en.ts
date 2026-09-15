/**
 * INGLES — a fonte da verdade.
 *
 * O tipo `Dictionary` e derivado deste objeto. Adicionar uma chave aqui
 * quebra o build ate que `pt.ts` e `es.ts` tambem a tenham, e e exatamente
 * esse o ponto.
 *
 * Termo tecnico de logistica NAO se traduz em lingua nenhuma: dispatch,
 * booking, consignment, manifest e carrier ficam como estao nos tres
 * idiomas, porque e assim que a industria fala.
 *
 * SEM `as const` AQUI, DE PROPOSITO. Com ele, cada texto vira um tipo
 * literal e o compilador passa a exigir que `pt.ts` repita a frase EM
 * INGLES — o contrario do que se quer. Sem ele, o tipo guarda a ESTRUTURA
 * (quais chaves existem) e deixa o conteudo livre, que e a regra certa:
 * chave faltando quebra o build, traducao diferente nao.
 */
export const en = {
  meta: {
    title: "Joao Marcos Bueno — Software developer",
    description:
      "I build and operate the software that runs a real freight and warehouse operation in Australia: a multi-carrier TMS, a driver app, and the warehouse tools behind them.",
  },
  nav: {
    work: "Work",
    about: "About",
    studies: "Studies",
    skipToContent: "Skip to content",
    language: "Language",
  },
  hero: {
    name: "Joao Marcos Bueno",
    role: "Software developer · Brisbane / Gold Coast, Australia",
    headline: "I build software that runs a real logistics operation.",
    body: "Not side projects. A multi-carrier transport management system, a driver app on the stores, and the warehouse tools underneath — all of it in production, used every working day, where a wrong click books a real billable freight job.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
  },
  footer: {
    builtWith: "Built with Next.js and Tailwind. Source is public.",
    rights: "All rights reserved.",
  },
};
