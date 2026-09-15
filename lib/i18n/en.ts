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
    title: "João Marcos Bueno — Software developer",
    description:
      "I build and operate the software that runs a real freight and warehouse operation in Australia: a multi-carrier TMS, a driver app, and the warehouse tools behind them.",
    workTitle: "Work — João Marcos Bueno",
    workDescription:
      "Every system I have built and operated: a transport management system, a driver app, warehouse tools, an auth portal, and the study work behind them.",
  },
  nav: {
    work: "Work",
    about: "About",
    studies: "Studies",
    skipToContent: "Skip to content",
    language: "Language",
    theme: "Switch theme",
    home: "Home",
  },
  hero: {
    name: "João Marcos Bueno",
    role: "Software developer · Gold Coast, Australia",
    headline: "I build software that runs a real logistics operation.",
    body: "Not side projects. A transport management system that quotes four carriers and books real freight, a driver app in the vans, and the warehouse tools underneath — all in production, used every working day, where a wrong click costs money.",
    ctaWork: "See the work",
    ctaContact: "Get in touch",
  },
  stats: {
    systems: "systems running in production",
    commits: "commits across them",
    integrations: "external systems integrated",
    since: "working inside the operation since",
  },
  stack: {
    title: "What I have actually used",
    lead: "Only what appears in a project on this site. A wall of logos is a claim, and every one of these has something behind it.",
    groups: {
      language: "Languages",
      framework: "Frameworks & libraries",
      data: "Data",
      ops: "Cloud & operations",
      integration: "Integrations",
    },
    usedIn: "Used in",
  },
  work: {
    title: "The work",
    lead: "Ordered by what it carries, not by when it happened.",
    seeAll: "See all work",
    filterLabel: "Filter by kind",
    empty: "Nothing in this filter yet.",
    readCase: "Read the case study",
    casePending: "Case study in progress",
    domains: {
      all: "All",
      production: "Production systems",
      mobile: "Mobile",
      tools: "Internal tools",
      platform: "Platform & AI",
      academic: "Study",
    },
    status: {
      live: "In production",
      shipped: "Shipped",
      parked: "Parked",
      study: "Coursework",
    },
    present: "now",
    noShot: "No screenshot published — the real captures contain customer data.",
  },
  how: {
    title: "How I work",
    lead: "Four things I would want someone to check, with where to check them.",
    items: {
      honest: {
        title: "My documentation says what does not exist",
        body: "Every README I write has a section listing what is broken, missing or parked, with the evidence. One of them opens by correcting the previous README, which described a directory that was never there. It costs nothing to write and it saves the next person a week.",
      },
      incident: {
        title: "Every hard rule points at the day it hurt",
        body: "The repositories carry incident write-ups, and the rules reference them by date. Locking a read-only session against a transaction-mode pooler took production down once; that is now a written rule, not a thing someone remembers.",
      },
      floor: {
        title: "I got the requirements by standing there",
        body: "I picked and packed on that warehouse floor for three years before I wrote software for it. Every feature in the TMS is documented by the manual work it replaces, because I did that manual work.",
      },
      lead: {
        title: "I have directed people and agents",
        body: "Early on the build had a team — a designer and others, organised in Notion, on a paid engagement — and I set the scope and reviewed what came back. I also ran an intern doing competitor research and product comparison. Today a lot of the delegation is to AI agents, which needs the same thing: write the rule down, then check the work.",
      },
    },
  },
  timeline: {
    title: "The short version",
    entries: {
      bank: "Retail banking at Bradesco, in Brazil. KYC, compliance, and four years of explaining a system to the person using it.",
      floor:
        "Warehouse floor in Australia. Picking, packing, project orders — and slowly becoming the person people asked when the software did something strange.",
      firstApp:
        "First thing I built: a small Node app so van bookings stopped living in a shared spreadsheet.",
      tms: "The TMS starts. Carriers, labels, dispatch, tracking, reconciliation — and the driver app beside it.",
      portal:
        "One login in front of all three systems, and an AI module that is only allowed to run queries someone wrote by hand.",
    },
  },
  cta: {
    title: "Looking for someone who has already run the thing in production?",
    body: "I am open to conversations about software roles in Australia. The fastest way to know whether I fit is to ask me about a decision in any of the systems above.",
    email: "Email me",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    builtWith: "Built with Next.js and Tailwind.",
    sourceLink: "The source of this site is public.",
    rights: "All rights reserved.",
    noData:
      "No client data appears anywhere on this site. Screenshots are taken against seeded, fictional data.",
  },
};
