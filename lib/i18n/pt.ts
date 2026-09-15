import type { Dictionary } from "./dictionaries";

/**
 * PORTUGUES DO BRASIL. Precisa satisfazer `Dictionary` — ver `en.ts`.
 *
 * ACENTO OBRIGATORIO NOS VALORES. Comentario de codigo neste repo vai sem
 * acento por convencao, mas isto aqui e texto que uma PESSOA le: "operacao"
 * sem cedilha num portfolio nao parece escolha tecnica, parece descuido.
 */
export const pt: Dictionary = {
  meta: {
    title: "João Marcos Bueno — Desenvolvedor de software",
    description:
      "Construo e opero o software que roda uma operação real de frete e armazém na Austrália: um TMS multi-transportadora, um app de motorista e as ferramentas de armazém por trás deles.",
    workTitle: "Projetos — João Marcos Bueno",
    workDescription:
      "Todo sistema que eu construí e operei: um sistema de transporte, um app de motorista, ferramentas de armazém, um portal de autenticação e o trabalho acadêmico por trás deles.",
  },
  nav: {
    work: "Projetos",
    about: "Sobre",
    studies: "Formação",
    skipToContent: "Pular para o conteúdo",
    language: "Idioma",
    theme: "Trocar o tema",
    home: "Início",
  },
  hero: {
    name: "João Marcos Bueno",
    role: "Desenvolvedor de software · Gold Coast, Austrália",
    headline: "Eu construo o software que roda uma operação de logística de verdade.",
    body: "Não são projetos paralelos. Um sistema de transporte que cota quatro transportadoras e reserva frete de verdade, um app de motorista dentro das vans e as ferramentas de armazém por baixo — tudo em produção, usado todo dia útil, onde um clique errado custa dinheiro.",
    ctaWork: "Ver os projetos",
    ctaContact: "Falar comigo",
  },
  stats: {
    systems: "sistemas rodando em produção",
    commits: "commits somando os três",
    integrations: "sistemas externos integrados",
    since: "dentro da operação desde",
  },
  stack: {
    title: "O que eu de fato usei",
    lead: "Só o que aparece em algum projeto deste site. Muro de logo é uma afirmação, e cada uma destas tem alguma coisa atrás.",
    groups: {
      language: "Linguagens",
      framework: "Frameworks e bibliotecas",
      data: "Dados",
      ops: "Nuvem e operação",
      integration: "Integrações",
    },
    usedIn: "Usado em",
  },
  work: {
    title: "Os projetos",
    lead: "Ordenados pelo que carregam, não por quando aconteceram.",
    seeAll: "Ver todos os projetos",
    filterLabel: "Filtrar por tipo",
    empty: "Nada neste filtro ainda.",
    readCase: "Ler o case study",
    casePending: "Case study em construção",
    domains: {
      all: "Todos",
      production: "Sistemas em produção",
      mobile: "Mobile",
      tools: "Ferramentas internas",
      platform: "Plataforma e IA",
      academic: "Formação",
    },
    status: {
      live: "Em produção",
      shipped: "Entregue",
      parked: "Parado",
      study: "Trabalho de curso",
    },
    present: "hoje",
    noShot: "Sem captura publicada — as capturas reais têm dado de cliente.",
  },
  how: {
    title: "Como eu trabalho",
    lead: "Quatro coisas que eu gostaria que alguém conferisse, com onde conferir.",
    items: {
      honest: {
        title: "Minha documentação diz o que NÃO existe",
        body: "Todo README que eu escrevo tem uma seção listando o que está quebrado, faltando ou parado, com a evidência. Um deles abre corrigindo o README anterior, que descrevia um diretório que nunca existiu. Escrever isso não custa nada e economiza uma semana da próxima pessoa.",
      },
      incident: {
        title: "Toda regra dura aponta para o dia em que doeu",
        body: "Os repositórios guardam relatório de incidente, e as regras citam a data. Travar uma sessão só-leitura contra um pooler em modo transação derrubou produção uma vez; hoje isso é regra escrita, não coisa que alguém lembra.",
      },
      floor: {
        title: "Os requisitos eu levantei estando lá",
        body: "Fiz pick e pack naquele armazém por três anos antes de escrever software para ele. Toda feature do TMS está documentada pelo trabalho manual que ela substitui, porque eu fiz esse trabalho manual.",
      },
      lead: {
        title: "Já dirigi pessoas e já dirijo agentes",
        body: "No começo o desenvolvimento teve time — um designer e outras pessoas, organizados no Notion, num trabalho pago — e eu definia o escopo e revisava o que voltava. Também conduzi um estagiário fazendo pesquisa de concorrente e comparativo de produto. Hoje boa parte da delegação é para agentes de IA, e exige a mesma coisa: escrever a regra e depois conferir o resultado.",
      },
    },
  },
  timeline: {
    title: "A versão curta",
    entries: {
      bank: "Banco de varejo no Bradesco, no Brasil. KYC, compliance, e quatro anos explicando um sistema para quem estava usando ele.",
      floor:
        "Chão de armazém na Austrália. Separação, embalagem, pedido de projeto — e devagar virando a pessoa a quem perguntavam quando o software fazia coisa estranha.",
      firstApp:
        "Primeira coisa que construí: um app pequeno em Node para o agendamento das vans parar de viver numa planilha compartilhada.",
      tms: "O TMS começa. Transportadoras, etiquetas, despacho, rastreio, reconciliação — e o app do motorista ao lado.",
      portal:
        "Um login na frente dos três sistemas, e um módulo de IA que só pode rodar consulta que alguém escreveu à mão.",
    },
  },
  cta: {
    title: "Procurando alguém que já botou a coisa para rodar em produção?",
    body: "Estou aberto a conversar sobre vagas de software na Austrália. O jeito mais rápido de saber se eu sirvo é me perguntar sobre uma decisão de qualquer um dos sistemas acima.",
    email: "Me mandar um e-mail",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    builtWith: "Feito com Next.js e Tailwind.",
    sourceLink: "O código deste site é público.",
    rights: "Todos os direitos reservados.",
    noData:
      "Nenhum dado de cliente aparece em lugar nenhum deste site. As capturas são feitas contra dado semeado e fictício.",
  },
};
