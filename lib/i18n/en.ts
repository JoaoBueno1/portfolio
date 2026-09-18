/**
 * INGLES, a fonte da verdade.
 *
 * O tipo `Dictionary` sai deste objeto, entao chave faltando em `pt.ts` ou
 * `es.ts` quebra o build.
 *
 * REGRAS DE ESCRITA DESTE SITE, e elas valem para os tres idiomas:
 * 1. Frase curta. Se precisa de virgula no meio para respirar, corta em duas.
 * 2. NADA de travessao entre palavras. Virgula, ponto ou dois-pontos.
 * 3. Nada de adjetivo de si mesmo. Diz o que aconteceu e onde.
 * 4. Termo de logistica nao se traduz: dispatch, booking, consignment,
 *    manifest, carrier.
 *
 * SEM `as const`: com ele o tipo vira literal e o compilador passaria a
 * exigir a frase em ingles dentro do arquivo portugues.
 */
export const en = {
  meta: {
    aboutTitle: "João Marcos Bueno",
    aboutDescription:
      "Full stack developer on the Gold Coast, Australia. I build and run the systems behind a real freight and warehouse operation.",
    skillsTitle: "Skills",
    skillsDescription:
      "Languages, frameworks, data, infrastructure and tools, rated by how much I actually use them.",
    softTitle: "Soft skills",
    softDescription:
      "Communication, leadership, research and feedback, with where each one happened.",
    projectsTitle: "Projects",
    projectsDescription: "Systems in production, internal tools, mobile and study work.",
  },
  nav: {
    about: "About",
    skills: "Skills",
    soft: "Soft skills",
    projects: "Projects",
    skipToContent: "Skip to content",
    language: "Language",
    theme: "Switch theme",
    menu: "Menu",
    contact: "Contact",
  },
  sidebar: {
    role: "Full stack developer",
    location: "Gold Coast, Australia",
    photoAlt: "Profile photo",
    open: "Open menu",
    close: "Close menu",
  },
  stats: {
    systems: "systems running in production",
    commits: "commits across them",
    integrations: "external systems integrated",
    since: "inside the operation since",
  },
  about: {
    title: "About",
    intro: [
      "I'm a software developer based on the Gold Coast, Australia. I work across web applications, backend systems, mobile, databases and integrations, and the software I build is in daily production use.",
      "I take work from requirements and workflow design through development and deployment, then stay with it. I hold a Diploma of Information Technology in Database and Data Management.",
    ],
    linkProjects: "See what I have built",
    linkSkills: "See the tools I work with",
    nowTitle: "Right now",
    now: "Working with analytics, AI integrations and connected business systems.",
    languagesTitle: "Languages",
    languages: "Portuguese (native), English (professional).",
  },
  skills: {
    title: "Skills",
    lead: "What I have used in something real. Ordered by how much I use it.",
    scaleNote:
      "Five means I open it most days. One means I have used it enough to get the job done.",
    groups: {
      language: "Languages",
      backend: "Backend",
      frontend: "Frontend",
      data: "Data",
      ops: "Cloud, deploy and operations",
      tools: "Integrations and tools",
    },
    levelLabel: "Level",
  },
  soft: {
    title: "Soft skills",
    lead: "Four years at a bank counter, three on a warehouse floor, and a small team to run. This is what came out of that.",
  },
  projects: {
    title: "Projects",
    lead: "",
    inProduction: "Running in production",
    other: "Earlier work and study",
    close: "Close",
    roleLabel: "Role",
    periodLabel: "Period",
    stackLabel: "Stack",
    previous: "Previous project",
    next: "Next project",
    previousShot: "Previous screenshot",
    zoom: "Open this screenshot full size",
    closeZoom: "Close full size view",
    shotPosition: "Screenshot {n} of {total}",
    nextShot: "Next screenshot",
    shotCount: "Screenshot",
    status: {
      live: "In production",
      building: "In progress",
      shipped: "Shipped",
      study: "Coursework",
    },
    domains: {
      production: "Production",
      mobile: "Mobile",
      tools: "Internal tools",
      data: "Data and BI",
      platform: "Platform",
      academic: "Study",
    },
    present: "now",
    noShot: "No screenshot published. The real captures contain customer data.",
  },
  footer: {
    source: "Source",
  },
};
