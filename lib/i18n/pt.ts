import type { Dictionary } from "./dictionaries";

/** PORTUGUES DO BRASIL. Acento obrigatorio nos valores. Ver `en.ts`. */
export const pt: Dictionary = {
  meta: {
    aboutTitle: "João Marcos Bueno",
    aboutDescription:
      "Desenvolvedor full stack na Gold Coast, Austrália. Construo e opero os sistemas de uma operação real de frete e armazém.",
    skillsTitle: "Skills",
    skillsDescription:
      "Linguagens, frameworks, dados, infraestrutura e ferramentas, com o quanto eu realmente uso cada uma.",
    softTitle: "Soft skills",
    softDescription: "Comunicação, liderança, pesquisa e feedback, com onde cada uma aconteceu.",
    projectsTitle: "Projetos",
    projectsDescription: "Sistemas em produção, ferramentas internas, mobile e trabalho de curso.",
  },
  nav: {
    about: "Sobre",
    skills: "Skills",
    soft: "Soft skills",
    projects: "Projetos",
    skipToContent: "Pular para o conteúdo",
    language: "Idioma",
    theme: "Trocar o tema",
    menu: "Menu",
    contact: "Contato",
  },
  sidebar: {
    role: "Desenvolvedor full stack",
    location: "Gold Coast, Austrália",
    photoAlt: "Foto de perfil",
    open: "Abrir menu",
    close: "Fechar menu",
  },
  stats: {
    systems: "sistemas rodando em produção",
    commits: "commits somando os três",
    integrations: "sistemas externos integrados",
    since: "dentro da operação desde",
  },
  about: {
    title: "Sobre",
    intro:
      "Sou desenvolvedor de software na Gold Coast, Austrália. Trabalho dentro de uma operação de frete e armazém e construo os sistemas em que ela roda: um sistema de transporte, um app de motorista e as ferramentas que o chão de armazém usa. Comecei nesse chão em 2023, e por isso quase toda feature que eu entrego substitui alguma coisa que eu fazia na mão.",
    nowTitle: "Agora",
    now: "Construindo e operando três sistemas em produção, e estudando o que o próximo problema pedir.",
    languagesTitle: "Idiomas",
    languages: "Português (nativo), inglês (profissional).",
  },
  skills: {
    title: "Skills",
    lead: "O que eu usei em coisa real. Ordenado pelo quanto eu uso.",
    scaleNote:
      "Cinco quer dizer que eu abro quase todo dia. Um quer dizer que já usei o bastante para resolver.",
    groups: {
      language: "Linguagens",
      backend: "Backend",
      frontend: "Frontend",
      data: "Dados",
      ops: "Nuvem, deploy e operação",
      tools: "Integrações e ferramentas",
    },
    levelLabel: "Nível",
  },
  soft: {
    title: "Soft skills",
    lead: "Quatro anos atendendo no banco, três no chão de armazém, e um time pequeno para tocar. Foi daí que saiu isto.",
  },
  projects: {
    title: "Projetos",
    lead: "Clique num card para abrir.",
    inProduction: "Em produção",
    other: "Ferramentas, mobile e trabalho de curso",
    close: "Fechar",
    roleLabel: "Papel",
    periodLabel: "Período",
    stackLabel: "Stack",
    previous: "Projeto anterior",
    next: "Próximo projeto",
    status: {
      live: "Em produção",
      shipped: "Entregue",
      parked: "Parado",
      study: "Trabalho de curso",
    },
    domains: {
      production: "Produção",
      mobile: "Mobile",
      tools: "Ferramentas internas",
      platform: "Plataforma",
      academic: "Formação",
    },
    present: "hoje",
    noShot: "Sem captura publicada. As capturas reais têm dado de cliente.",
  },
  footer: {
    source: "Código",
  },
};
