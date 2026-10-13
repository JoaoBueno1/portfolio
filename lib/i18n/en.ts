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
    aboutTitle: "João Silva",
    /** O titulo da primeira pagina e o padrao do site: nome e cargo juntos. */
    siteTitle: "João Silva · Full Stack Developer, Gold Coast",
    aboutDescription:
      "Full stack developer on the Gold Coast, Australia. Web, backend, mobile, data and integrations, with software in daily production use: Python, Flask, TypeScript, PostgreSQL, AWS.",
    skillsTitle: "Skills",
    skillsDescription:
      "Python, Flask, TypeScript, PostgreSQL, Supabase, REST APIs, AWS and the rest of the stack, rated by how much I actually use each one.",
    softTitle: "Soft skills",
    softDescription:
      "Technical communication, project coordination, requirements gathering, user training and feedback, with where each one happened.",
    projectsTitle: "Projects",
    projectsDescription:
      "Case studies of systems in production: a transport management system, a warehouse operations platform, an AI data assistant, a carrier API and a driver app, plus study work.",
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
    focus: "Business systems and automation",
    location: "Gold Coast, Australia",
    photoAlt: "Profile photo",
    open: "Open menu",
    close: "Close menu",
  },
  about: {
    title: "About",
    headline: "Full stack developer | Business systems and automation",
    intro: [
      "I'm a software developer based on the Gold Coast, Australia. I build software that people rely on at work: web applications, backend services, mobile apps, databases and the integrations that tie them together. What I like most is taking a process that lives in people's heads and spreadsheets and turning it into a system that runs on its own.",
      "I like work that goes end to end: understanding how people actually do the job, designing the flow, writing the code, shipping it and seeing it used. Lately that has meant data, automation and AI inside everyday business tools. I hold a Diploma of Information Technology in Database and Data Management.",
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
    lead: "What I use in real work, marked by how often.",
    capabilitiesTitle: "What I do with them",
    capabilities: [
      "Production web applications, from requirements to deployment and support",
      "REST API design and integration, with contracts partners can test against",
      "ERP and carrier integrations for warehouse and freight operations",
      "Business process automation: scheduled jobs, labels, reconciliation and reporting",
      "SQL and data processing over PostgreSQL, with Excel and Power Query on top",
      "Cloud deployment and maintenance on AWS and Vercel, with monitoring and alerts",
    ],
    groups: {
      language: "Languages",
      backend: "Backend",
      frontend: "Frontend",
      data: "Data",
      ops: "Cloud, deploy and operations",
      tools: "Integrations and tools",
    },
    usage: { daily: "Daily", often: "Often", occasional: "Occasional" },
  },
  soft: {
    title: "Soft skills",
    lead: "Four years at a bank counter, three on a warehouse floor, and a small project team to coordinate. This is what came out of that.",
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
    insightsEyebrow: "From production · results",
    insightsCount: "{figures} charts from the live data",
    seeOriginal: "See the original page",
    caseStudy: "Live results",
    visitSite: "Visit the live site",
    sections: {
      overview: "Overview",
      challenge: "The challenge",
      solution: "The solution",
      impact: "Impact",
      highlights: "Technical highlights",
    },
    methodLabel: "How it was done",
    zoomFigure: "Open this page full size",
    insightsNote:
      "Real data, aggregated and anonymised. Carriers are letters, and no customer, order, address or money value appears.",
  },
  footer: {
    source: "Source",
  },
};
