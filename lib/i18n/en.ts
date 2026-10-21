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
    /** O que vai depois do " · " no titulo de toda pagina. */
    siteName: "João Marcos",
    /** O titulo da primeira pagina e o padrao do site: nome e cargo juntos. */
    siteTitle: "João Marcos · Software Developer, Gold Coast",
    homeDescription:
      "Software developer on the Gold Coast, Australia. I build the production systems a distribution business runs on: a TMS, a warehouse platform, a driver app, a partner API and an operations portal with an AI assistant. Python, Flask, TypeScript, PostgreSQL, AWS.",
    projectsTitle: "Projects",
    projectsDescription:
      "Systems in production, each with screens, architecture and results: a transport management system, an operations portal with an AI assistant, a carrier API, a warehouse platform and a driver app, plus coursework.",
    experienceTitle: "Experience",
    experienceDescription:
      "Ten years of work, from a bank counter in Brazil to the systems a distribution business on the Gold Coast runs on, plus education and languages.",
    aboutTitle: "About",
    aboutDescription:
      "Who I am, the tools I use every day and how I work with the people who use the systems: Python, Flask, TypeScript, PostgreSQL, AWS, Claude.",
    cvTitle: "CV",
    cvDescription:
      "CV of João Marcos Bueno da Silva, software developer on the Gold Coast, Australia.",
  },
  nav: {
    projects: "Projects",
    experience: "Experience",
    about: "About",
    contact: "Contact",
    cv: "Download CV",
    skipToContent: "Skip to content",
    language: "Language",
    menu: "Menu",
    open: "Open menu",
    close: "Close menu",
  },
  home: {
    eyebrow: "Software developer · Gold Coast, Australia",
    headline: "Building business software, APIs and",
    headlineAccent: "intelligent automation.",
    lead: "I build production systems that connect operations, data and technology: backend services and integrations, cloud infrastructure, and AI tools with guardrails. Five of them run a wholesale distributor's daily operation today.",
    ctaProjects: "Explore projects",
    ctaCv: "Download CV",
    capabilities: [
      { title: "Backend development", tools: "Python · Flask · Node.js" },
      { title: "API integrations", tools: "REST · Webhooks · ERP · Carriers" },
      { title: "Data and automation", tools: "SQL · PostgreSQL · Power Query" },
      { title: "Cloud and AI", tools: "AWS · Claude API · AI tools" },
    ],
    featuredTitle: "Featured projects",
    featuredLead: "Systems in daily use, with screens, architecture and results.",
    viewAll: "View all projects",
    skillsTitle: "What I work with",
    skillsLead: "Marked by how often each one is in my hands.",
    skillsMore: "All skills and how I work",
    experienceTitle: "Experience",
    experienceLead:
      "Ten years of work, from a bank counter to the systems a distribution business runs on.",
    viewExperience: "Full experience",
    contactTitle: "Let's talk",
    contactLead:
      "Open to conversations about backend, integrations, data and AI work on the Gold Coast or remote.",
    emailMe: "Email me",
    location: "Gold Coast, Australia",
  },
  projects: {
    title: "Projects",
    headline: "Systems that run a real operation today, and the coursework before them.",
    inProduction: "Running in production",
    other: "Coursework and earlier work",
    moreCoursework: "More coursework ({n})",
    all: "All projects",
    roleLabel: "Role",
    periodLabel: "Period",
    stackLabel: "Stack",
    screensTitle: "Screens",
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
  about: {
    title: "About",
    headline: "Software developer, from inside the operation.",
    intro: [
      "I'm João Marcos, a software developer on the Gold Coast. I build and run the production systems a wholesale distributor works on every day: a transport management system, a warehouse platform, a driver app, a partner API and an operations portal with an AI assistant. Before software, four years in banking in Brazil taught me to explain complicated things once, clearly.",
      "The people who use my systems are dispatchers, warehouse staff, drivers and managers, so every feature starts by watching someone do the job by hand. Diploma of Information Technology, Database and Data Management.",
    ],
    nowTitle: "Right now",
    now: "An AI assistant for the team that answers questions across the company's databases, only from reviewed queries, with the table behind every answer.",
    languagesTitle: "Languages",
    languages: "Portuguese (native), English (professional).",
    skillsTitle: "Skills",
    skillsLead: "What I use in real work, marked by how often.",
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
    softTitle: "How I work",
    softLead:
      "Four years at a bank counter, then a warehouse operation, and a small project team to coordinate. This is what came out of that.",
  },
  experience: {
    title: "Experience",
    headline:
      "Ten years of work, from a bank counter to the systems a distribution business runs on.",
    lead: "The current employer is not named on this public site. Everything else is as it happened.",
    present: "now",
    earlierTitle: "Before that",
    educationTitle: "Education",
    languagesTitle: "Languages",
    cvLink: "Download CV (PDF)",
  },
  cv: {
    role: "Software developer",
    summaryTitle: "Summary",
    summary:
      "Software developer on the Gold Coast. I build and run the production systems a wholesale distributor works on every day: a transport management system, a warehouse platform, a driver app, a partner API and an operations portal with an AI assistant. Backend, integrations, data and AI with guardrails. Before software, four years in banking. Diploma of Information Technology, Database and Data Management.",
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
    built: "Built with Next.js. No tracking, no cookies.",
  },
};
