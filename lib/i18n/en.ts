/**
 * INGLES, a fonte da verdade.
 *
 * O tipo `Dictionary` sai deste objeto, entao chave faltando em `pt.ts`
 * quebra o build.
 *
 * REGRAS DE ESCRITA DESTE SITE, e elas valem para os dois idiomas:
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
      "Full stack developer on the Gold Coast, Australia. I build the operational systems a distribution business runs on: a TMS, a warehouse platform, a driver app, a partner API and an AI operations portal. Python, Flask, TypeScript, PostgreSQL, AWS.",
    skillsTitle: "Skills",
    skillsDescription:
      "Python, Flask, TypeScript, PostgreSQL, Supabase, REST APIs, AWS and the rest of the stack, rated by how much I actually use each one.",
    softTitle: "Soft skills",
    softDescription:
      "Technical communication, project coordination, requirements gathering, user training and feedback, with where each one happened.",
    experienceTitle: "Experience",
    experienceDescription:
      "Ten years of work, from a bank counter in Brazil to the systems a distribution business on the Gold Coast runs on, plus education and languages.",
    cvTitle: "CV",
    cvDescription: "CV of João Silva, full stack developer on the Gold Coast, Australia.",
    projectsTitle: "Projects",
    projectsDescription:
      "Case studies of systems in production: a transport management system, a warehouse operations platform, an AI data assistant, a carrier API and a driver app, plus study work.",
  },
  nav: {
    about: "About",
    experience: "Experience",
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
    headline: "I build the operational software a distribution business runs on every day.",
    intro: [
      "Full stack developer on the Gold Coast, building software since 2022. In 2023 I joined a wholesale distributor on the warehouse floor. I proposed software to digitise the daily operation, and then built it: a transport management system, a warehouse platform, a driver app, a partner API and an operations portal with an AI assistant, all in production today. Before that, four years in banking in Brazil. Diploma of Information Technology, Database and Data Management.",
    ],
    linkProjects: "See what I have built",
    nowTitle: "Right now",
    now: "An operations portal where the team asks questions in plain English, and the AI answers only from reviewed queries, with the table behind every answer.",
    emailMe: "Email me",
    downloadCv: "Download CV (PDF)",
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
    headline:
      "Four years at a bank counter, three on a warehouse floor, and a small project team to coordinate.",
    lead: "This is what came out of that.",
  },
  projects: {
    title: "Projects",
    headline: "Systems that run a real operation today, and the coursework before them.",
    inProduction: "Running in production",
    other: "Coursework and earlier work",
    moreCoursework: "More coursework ({n})",
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
    flagship: "Flagship project",
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
  experience: {
    title: "Experience",
    headline:
      "Ten years of work, from a bank counter to the systems a distribution business runs on.",
    lead: "The current employer is not named on this public site. Everything else is as it happened.",
    present: "now",
    since: "From",
    earlierTitle: "Before that",
    educationTitle: "Education",
    languagesTitle: "Languages",
    cvLink: "Download CV (PDF)",
  },
  cv: {
    role: "Full stack developer",
    summaryTitle: "Summary",
    summary:
      "Full stack developer on the Gold Coast, building software since 2022. I joined a wholesale distributor on the warehouse floor in 2023, proposed software to digitise the daily operation, and built it: a transport management system, a warehouse platform, a driver app, a partner API and an operations portal with an AI assistant, all in production. Before that, four years in banking. Diploma of Information Technology, Database and Data Management.",
    experienceTitle: "Experience",
    projectsTitle: "Systems in production",
    skillsTitle: "Skills",
    dailyLabel: "Daily",
    oftenLabel: "Often",
    educationTitle: "Education",
    languagesTitle: "Languages",
    portfolioLabel: "Portfolio",
    print: "Print or save as PDF",
  },
  footer: {
    source: "Source",
  },
};
