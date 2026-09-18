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
    intro: [
      "Construo software que vai para produção e fica lá. Quatro sistemas em uso diário, entre web, mobile e dados, cada um desenhado, entregue e mantido de ponta a ponta.",
    ],
    nowTitle: "Agora",
    now: "Construindo a camada de analytics e IA sobre os sistemas acima.",
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
    lead: "",
    inProduction: "Rodando em produção",
    other: "Trabalho anterior e formação",
    close: "Fechar",
    roleLabel: "Papel",
    periodLabel: "Período",
    stackLabel: "Stack",
    previous: "Projeto anterior",
    next: "Próximo projeto",
    previousShot: "Captura anterior",
    zoom: "Abrir esta captura em tamanho real",
    closeZoom: "Fechar a visão em tamanho real",
    shotPosition: "Captura {n} de {total}",
    nextShot: "Próxima captura",
    shotCount: "Captura",
    status: {
      live: "Em produção",
      building: "Em construção",
      shipped: "Entregue",
      study: "Trabalho de curso",
    },
    domains: {
      production: "Produção",
      mobile: "Mobile",
      tools: "Ferramentas internas",
      data: "Dados e BI",
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
