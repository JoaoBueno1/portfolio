import { CASE_STUDIES } from "./case-studies";
import { gallery } from "./galleries";
import { INSIGHTS } from "./insights";
import { SHOTS } from "./shots";
import { studyShots } from "./shots-study";
import type { Project } from "./types";

/**
 * A VITRINE.
 *
 * Ordenada por IMPACTO e nao por data: quem abre tem poucos segundos, e o
 * primeiro card precisa ser o sistema que roda uma operacao de verdade.
 *
 * DUAS REGRAS QUE NAO SE NEGOCIAM AQUI:
 *
 * 1. NOME E TEXTO GENERICOS. Nenhum nome de empresa, de produto interno nem
 *    de repositorio. O recrutador quer saber que TIPO de sistema e; o nome
 *    interno so serviria para amarrar um empregador a um portfolio pessoal.
 * 2. NUMERO ARREDONDADO. "1,100+" em vez de "1.155". O numero exato convida
 *    a ser conferido contra um repositorio privado que ninguem vai abrir, e
 *    envelhece no dia seguinte. Nenhum numero descreve cliente ou receita.
 */
export const PROJECTS: readonly Project[] = [
  {
    slug: "operations-portal",
    name: "Operations Portal and AI Assistant",
    order: 1,
    domain: "platform",
    status: "live",
    period: { from: "2026-09" },
    stack: ["typescript", "nextjs", "claude", "postgresql", "supabase", "react", "tailwind", "sql"],
    shots: gallery("ops"),
    insights: INSIGHTS.operationsPortal,
    caseStudy: CASE_STUDIES.operationsPortal,
    // `link` volta aqui (o endereco publico do portal) quando o subdominio
    // existir no DNS. Botao para endereco que nao abre tira credibilidade.
    metrics: [
      {
        value: "5",
        label: {
          en: "modules behind one sign-in",
          pt: "módulos atrás de um login só",
        },
      },
      {
        value: "4",
        label: {
          en: "roles, then allow or deny per person",
          pt: "papéis, e depois permitir ou negar por pessoa",
        },
      },
      {
        value: "22",
        label: {
          en: "hand-written queries; the AI never writes SQL",
          pt: "consultas escritas à mão; a IA nunca escreve SQL",
        },
      },
      {
        value: "0",
        label: {
          en: "admin bypass on any permission",
          pt: "atalho de admin em qualquer permissão",
        },
      },
    ],
    copy: {
      en: {
        tagline:
          "One door to every system: sign-in, permissions, ready-made analytics and an AI assistant for the team",
        summary:
          "The warehouse platform and the freight TMS grew up as separate systems, each with its own login. This portal puts one sign-in and one permission model over both: four roles, any module allowed or denied person by person, every check asked of the database, and no admin bypass. People see only the tools they may open, managers get an analytics board that is already built, and the team asks an AI assistant in plain English, which answers from 22 queries written by hand and shows the table behind every answer.",
        role: "Sole developer. Architecture, permissions, data access, the AI layer and every screen.",
      },
      pt: {
        tagline:
          "Uma porta para todos os sistemas: login, permissões, analytics pronto e um assistente de IA para o time",
        summary:
          "A plataforma do armazém e o TMS de frete cresceram como sistemas separados, cada um com o próprio login. Este portal põe um login e um modelo de permissões sobre os dois: quatro papéis, qualquer módulo permitido ou negado pessoa a pessoa, toda checagem perguntada ao banco, e nenhum atalho de admin. Cada pessoa vê só as ferramentas que pode abrir, a gestão recebe um painel de analytics já montado, e o time pergunta em linguagem simples a um assistente de IA, que responde a partir de 22 consultas escritas à mão e mostra a tabela por trás de cada resposta.",
        role: "Desenvolvedor único. Arquitetura, permissões, acesso a dados, a camada de IA e todas as telas.",
      },
    },
  },
  {
    slug: "tms",
    name: "Transport Management System",
    order: 2,
    domain: "production",
    status: "live",
    // O codigo foi para o git em junho de 2025; o sistema comecou enxuto,
    // rodando local, em novembro de 2023.
    period: { from: "2023-11" },
    stack: [
      "python",
      "flask",
      "jinja",
      "postgresql",
      "supabase",
      "pandas",
      "zebra",
      "googlemaps",
      "aws",
      "sentry",
    ],
    shots: [
      SHOTS.dispatch,
      SHOTS.orders,
      SHOTS.manifest,
      SHOTS.fleet,
      SHOTS.run,
      SHOTS.open,
      SHOTS.analytics,
      SHOTS.tracking,
    ],
    insights: INSIGHTS.tms,
    caseStudy: CASE_STUDIES.tms,
    metrics: [
      { value: "1,200+", label: { en: "commits", pt: "commits" } },
      {
        value: "4",
        label: {
          en: "carriers quoted in parallel",
          pt: "transportadoras cotadas em paralelo",
        },
      },
      {
        value: "9",
        label: {
          en: "external systems integrated",
          pt: "sistemas externos integrados",
        },
      },
      {
        value: "60+",
        label: {
          en: "database migrations",
          pt: "migrations de banco",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Quoting, booking and dispatching freight, plus the company's own vans",
        summary:
          "Four carriers get quoted at once, the cheapest gets booked, the thermal label prints, and weeks later the carrier invoice gets matched line by line against what was quoted. The company's own vans compete for the same jobs on the same rate card, so dispatch, live tracking and run sheets live in here too. A wrong click books real, billable freight, which is why the repository carries a written policy on which tests may touch the outside world.",
        role: "Sole developer. Requirements, architecture, build, deploy and on-call.",
      },
      pt: {
        tagline: "Cotar, reservar e despachar frete, mais as vans da própria empresa",
        summary:
          "Quatro transportadoras são cotadas de uma vez, a mais barata é reservada, a etiqueta térmica sai na impressora, e semanas depois a fatura da transportadora é conferida linha a linha contra o que foi cotado. As vans da própria empresa disputam os mesmos trabalhos pela mesma tabela, então despacho, rastreio ao vivo e folha de rota também moram aqui. Um clique errado reserva frete faturável de verdade, e por isso o repositório tem política escrita sobre quais testes podem tocar o mundo externo.",
        role: "Desenvolvedor único. Requisitos, arquitetura, construção, deploy e plantão.",
      },
    },
  },
  {
    slug: "partner-api",
    name: "Carrier Integration API",
    order: 3,
    domain: "platform",
    status: "live",
    period: { from: "2026-09" },
    stack: ["python", "flask", "postgresql", "openapi", "postman", "pytest"],
    shots: gallery("api"),
    insights: INSIGHTS.partnerApi,
    caseStudy: CASE_STUDIES.partnerApi,
    metrics: [
      {
        value: "613",
        label: {
          en: "automated tests, all passing",
          pt: "testes automatizados, todos passando",
        },
      },
      {
        value: "8",
        label: {
          en: "endpoints under a versioned contract",
          pt: "endpoints sob um contrato versionado",
        },
      },
      {
        value: "80",
        label: {
          en: "Postman checks partners run themselves",
          pt: "verificações Postman que o parceiro roda sozinho",
        },
      },
      {
        value: "0",
        label: {
          en: "vans moved by a sandbox booking",
          pt: "vans movidas por uma reserva no sandbox",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Turns the company's own vans into a carrier other freight systems can book",
        summary:
          "Freight platforms book carriers through APIs. This one makes the company's own vans one of those carriers: quote, book, print the label, track and cancel, from any system that integrates it. It has a written, versioned contract and an OpenAPI 3.1 document the tests hold responses to. Partners get a sandbox that plays whole deliveries on request, from a delivery with proof to a failed attempt, and a Postman kit of 63 requests that proves their integration before anything real is booked. In production, with the sandbox alongside for partners still integrating.",
        role: "Sole developer. The contract, the API, its security, the tests and the partner kit.",
      },
      pt: {
        tagline:
          "Transforma as vans da própria empresa numa transportadora que outros sistemas de frete reservam",
        summary:
          "Plataformas de frete reservam transportadoras por API. Esta faz das vans da própria empresa uma dessas transportadoras: cotar, reservar, imprimir a etiqueta, rastrear e cancelar, de qualquer sistema que a integre. Tem um contrato escrito e versionado e um documento OpenAPI 3.1 contra o qual os testes conferem as respostas. O parceiro recebe um sandbox que encena entregas inteiras sob demanda, da entrega com comprovante à tentativa que falhou, e um kit Postman de 63 requisições que prova a integração antes de qualquer reserva real. Em produção, com o sandbox ao lado para quem ainda está integrando.",
        role: "Desenvolvedor único. O contrato, a API, a segurança, os testes e o kit do parceiro.",
      },
    },
  },
  {
    slug: "driver-app",
    name: "Driver App",
    order: 4,
    domain: "mobile",
    status: "live",
    period: { from: "2025-06" },
    stack: ["typescript", "react", "expo", "supabase", "googlemaps", "sentry"],
    shots: gallery("driver"),
    caseStudy: CASE_STUDIES.driverApp,
    metrics: [
      { value: "15", label: { en: "screens", pt: "telas" } },
      {
        value: "iOS + Android",
        label: {
          en: "built and released with EAS",
          pt: "build e publicação com EAS",
        },
      },
      { value: "100+", label: { en: "commits", pt: "commits" } },
    ],
    copy: {
      en: {
        tagline: "What the driver holds while the van is moving",
        summary:
          "The driver claims a run, sees the stops in optimised order, navigates, checks the load, captures a photo and a signature at the door, and closes the stop. It keeps working when the signal drops: deliveries queue on the phone and sync when it comes back, and photos have their own upload queue. Location keeps reporting with the screen off, which was the part that took longest to get right on iOS.",
        role: "Sole developer. App, store releases and the API it talks to.",
      },
      pt: {
        tagline: "O que o motorista segura enquanto a van anda",
        summary:
          "O motorista assume a rota, vê as paradas na ordem otimizada, navega, confere a carga, tira a foto e colhe a assinatura na porta, e fecha a parada. Continua funcionando quando o sinal cai: a entrega fica em fila no celular e sobe quando ele volta, e a foto tem fila própria de upload. A localização segue reportando com a tela apagada, e essa foi a parte que mais deu trabalho no iOS.",
        role: "Desenvolvedor único. App, publicação nas lojas e a API com que ele conversa.",
      },
    },
  },
  {
    slug: "warehouse",
    name: "Warehouse Operations Platform",
    order: 5,
    domain: "tools",
    status: "live",
    period: { from: "2025-07" },
    stack: ["javascript", "express", "postgresql", "supabase", "vercel", "actions"],
    shots: gallery("wh"),
    insights: INSIGHTS.warehouse,
    caseStudy: CASE_STUDIES.warehouse,
    metrics: [
      {
        value: "20+",
        label: { en: "warehouse features", pt: "features de armazém" },
      },
      { value: "750+", label: { en: "commits", pt: "commits" } },
      {
        value: "20+",
        label: {
          en: "scheduled sync jobs",
          pt: "jobs de sync agendados",
        },
      },
    ],
    copy: {
      en: {
        tagline: "The software the warehouse floor runs on",
        summary:
          "Started as a container label printer and grew into the layer the floor works from: pick and pack, replenishment against live demand, cycle counting, returns, picking anomalies and stock planning. Deliberately plain, with server-rendered pages, no framework and no build step, because it runs on a tablet held by someone wearing gloves and every second of load time is a second somebody stands still.",
        role: "Sole developer, and the person who watched it being used to know what to fix.",
      },
      pt: {
        tagline: "O software em que o chão de armazém trabalha",
        summary:
          "Nasceu impressor de etiqueta de container e virou a camada em que o chão trabalha: pick e pack, reposição contra demanda viva, contagem cíclica, devoluções, anomalias de picking e planejamento de estoque. Simples de propósito, com páginas renderizadas no servidor, sem framework e sem build, porque roda num tablet segurado por alguém de luva e cada segundo de carregamento é um segundo de gente parada.",
        role: "Desenvolvedor único, e a pessoa que via o sistema em uso para saber o que consertar.",
      },
    },
  },
  {
    slug: "data-warehouse",
    name: "Sales Data Warehouse",
    order: 7,
    domain: "academic",
    status: "study",
    period: { from: "2026-03", to: "2026-04" },
    stack: ["php", "mysql", "sql", "chartjs"],
    shots: gallery("dwh"),
    metrics: [
      {
        value: "1 + 6",
        label: {
          en: "fact and dimension tables",
          pt: "tabelas fato e dimensão",
        },
      },
      {
        value: "11",
        label: {
          en: "JSON endpoints, one per chart",
          pt: "endpoints JSON, um por gráfico",
        },
      },
      {
        value: "3",
        label: {
          en: "roles, each seeing something different",
          pt: "papéis, cada um vendo algo diferente",
        },
      },
    ],
    copy: {
      en: {
        tagline:
          "A star schema, a dashboard over it, and three roles who each see something different",
        summary:
          "Coursework with the shape of the real job. Sales load into a star schema, a reporting site reads it through a single connection function, and every chart is split into a JSON endpoint and a page so the query never mixes with the presentation. A second pass added multi-role login with hashed passwords, an admin area, and pages only one store can reach.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Um star schema, um dashboard em cima e três papéis que veem coisas diferentes",
        summary:
          "Trabalho de curso com a forma do trabalho real. As vendas entram num star schema, um site de relatório lê por uma única função de conexão, e cada gráfico é partido em endpoint JSON e página, para a consulta nunca se misturar com a apresentação. Uma segunda entrega acrescentou login multi-papel com senha hasheada, área de admin e páginas que só uma loja alcança.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "ufo-archive",
    name: "Sightings Archive",
    order: 9,
    minor: true,
    domain: "academic",
    status: "study",
    period: { from: "2025-08", to: "2026-05" },
    stack: ["php", "mysql", "sql", "javascript"],
    shots: gallery("ufo"),
    metrics: [
      {
        value: "80,126",
        label: { en: "records loaded", pt: "registros carregados" },
      },
      {
        value: "802",
        label: {
          en: "pages, paginated server side",
          pt: "páginas, paginadas no servidor",
        },
      },
      {
        value: "bcrypt",
        label: { en: "password hashing", pt: "hash de senha" },
      },
    ],
    copy: {
      en: {
        tagline: "Eighty thousand public records, and an admin who can correct them",
        summary:
          "A public dataset loaded into MySQL and served as a readable table. Behind a login an administrator adds, edits, resolves and deletes records, and passwords are hashed rather than stored. The interesting part was never the CRUD. It was making eighty thousand rows readable, which meant paginating on the server instead of sending every row to the browser and hoping.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Oitenta mil registros públicos, e um admin que pode corrigi-los",
        summary:
          "Um dataset público carregado no MySQL e servido como tabela legível. Atrás de um login, um administrador acrescenta, edita, resolve e apaga registro, e a senha é hasheada em vez de guardada. A parte interessante nunca foi o CRUD. Foi tornar oitenta mil linhas legíveis, o que exigiu paginar no servidor em vez de mandar toda linha para o browser e torcer.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "trilogy-archive",
    name: "Original Trilogy Archive",
    order: 10,
    minor: true,
    domain: "academic",
    status: "study",
    period: { from: "2025-08", to: "2026-05" },
    stack: ["php", "mysql", "sql", "javascript"],
    shots: gallery("starwars"),
    metrics: [
      { value: "9", label: { en: "linked tables", pt: "tabelas ligadas" } },
      {
        value: "1",
        label: {
          en: "shared connection function",
          pt: "função de conexão compartilhada",
        },
      },
      {
        value: "admin",
        label: {
          en: "area for maintaining records",
          pt: "área para manter registros",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Nine linked sections over one schema, with an admin area behind them",
        summary:
          "Every section reads from its own table through one shared connection function, so adding a section means adding a table and a page rather than rewriting the site. An admin area maintains the records, and the summary page switches between films with tabs that never reload. The page I used most was that summary, because a row count per table is how you notice an import stopped half way.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Nove seções ligadas sobre um schema, com área de admin atrás",
        summary:
          "Cada seção lê da própria tabela por uma função de conexão compartilhada, então acrescentar uma seção é acrescentar uma tabela e uma página, não reescrever o site. Uma área de admin mantém os registros, e a página de resumo troca entre filmes com abas que nunca recarregam. A página que eu mais usava era esse resumo, porque contagem de linha por tabela é como se percebe importação que parou no meio.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "linux-server",
    name: "Linux Server and File Sharing",
    order: 8,
    domain: "academic",
    status: "study",
    period: { from: "2025-08", to: "2025-08" },
    stack: ["linux", "docker", "php"],
    shots: gallery("linux"),
    metrics: [
      {
        value: "2",
        label: {
          en: "services stood up and verified",
          pt: "serviços no ar e verificados",
        },
      },
      {
        value: "2",
        label: {
          en: "operating systems talking to each other",
          pt: "sistemas operacionais conversando",
        },
      },
    ],
    copy: {
      en: {
        tagline: "A server built from an empty disk until another machine can use it",
        summary:
          "A virtual machine, an Ubuntu Server install, then the part that actually counts: packages installed, the time zone corrected after the first attempt failed on a case-sensitive name, two file shares written by hand into the config, and the share opened from a completely different operating system. Then a web server installed and reached from a browser. Nothing here is clicked through a wizard.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Um servidor montado de um disco vazio até outra máquina conseguir usar",
        summary:
          "Uma máquina virtual, uma instalação de Ubuntu Server, e então a parte que de fato conta: pacote instalado, fuso corrigido depois de a primeira tentativa falhar por causa de maiúscula no nome, dois compartilhamentos escritos à mão no arquivo de configuração, e o compartilhamento aberto de um sistema operacional completamente diferente. Depois um servidor web instalado e alcançado por um navegador. Nada aqui é assistente com botão de próximo.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "rest-api",
    name: "REST API and Documentation",
    order: 11,
    domain: "academic",
    status: "study",
    period: { from: "2026-06", to: "2026-08" },
    stack: ["python", "django", "rest", "sqlite"],
    shots: studyShots("api"),
    metrics: [
      {
        value: "12",
        label: {
          en: "endpoints documented",
          pt: "endpoints documentados",
        },
      },
      {
        value: "5",
        label: {
          en: "apps, one per category",
          pt: "apps, um por categoria",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Documenting an authentication API the way a developer needs to read it",
        summary:
          "A site that documents twelve endpoints of an authentication framework, with one application per category: authentication, registration, user management, token management and social login. Each page carries the description, an example request and an example response. The endpoints were then turned into a checklist and validated against the site, which is how you find the ones you forgot.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Documentar uma API de autenticação do jeito que um dev precisa ler",
        summary:
          "Um site que documenta doze endpoints de um framework de autenticação, com uma aplicação por categoria: autenticação, registro, gestão de usuário, gestão de token e login social. Cada página traz a descrição, um exemplo de requisição e um de resposta. Depois os endpoints viraram checklist e foram validados contra o próprio site, que é como se acha o que ficou faltando.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "nosql",
    name: "NoSQL and Database Hardening",
    order: 12,
    domain: "academic",
    status: "study",
    period: { from: "2025-10", to: "2025-11" },
    stack: ["mongodb", "php", "linux"],
    shots: studyShots("mongo"),
    metrics: [
      {
        value: "9",
        label: {
          en: "exercises, each on its own instance",
          pt: "exercícios, cada um na própria instância",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Turning authentication on, watching the app break, then fixing it",
        summary:
          "Nine exercises on document databases, each running its own server with its own config. The one that mattered went in this order: the site connects with no authentication at all, authentication gets enabled on the database, the site breaks on purpose, and only then does the credential enter the connection. Scaling comes up too, vertical against horizontal, and what each one actually costs.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Ligar a autenticação, ver o app quebrar, e então consertar",
        summary:
          "Nove exercícios sobre banco de documento, cada um rodando o próprio servidor com a própria configuração. O que importou seguiu esta ordem: o site conecta sem autenticação nenhuma, a autenticação é ligada no banco, o site quebra de propósito, e só então a credencial entra na conexão. Escala também aparece, vertical contra horizontal, e o que cada uma custa de verdade.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "data-cleaning",
    name: "Data Cleaning and Reporting in R",
    order: 13,
    minor: true,
    domain: "academic",
    status: "study",
    period: { from: "2025-11", to: "2025-12" },
    stack: ["r", "sql"],
    shots: studyShots("r"),
    metrics: [
      {
        value: "2",
        label: {
          en: "datasets, before and after on disk",
          pt: "datasets, antes e depois no disco",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Finding the broken rows before they reach the average",
        summary:
          "Two small projects in R with dplyr. The first reads a film dataset, flags rows whose rating is not a number or falls outside its own scale, and only then produces top ten by revenue and average by director. The second cleans a student dataset: coercing types, stripping stray characters from numbers, and writing the cleaned file out beside the original so the difference stays visible.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Achar a linha quebrada antes que ela entre na média",
        summary:
          "Dois projetos pequenos em R com dplyr. O primeiro lê um dataset de filmes, sinaliza linha cuja nota não é número ou está fora da própria escala, e só então produz top dez por bilheteria e média por diretor. O segundo limpa um dataset de alunos: coerção de tipo, remoção de caractere solto no meio do número, e escrita do arquivo limpo ao lado do original, para a diferença ficar visível.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "order-flow",
    name: "Multi-Step Order Flow",
    order: 14,
    minor: true,
    domain: "academic",
    status: "study",
    period: { from: "2025-08", to: "2026-05" },
    stack: ["php", "javascript", "sql"],
    shots: gallery("burger"),
    metrics: [
      {
        value: "4",
        label: {
          en: "steps, with progress shown",
          pt: "passos, com progresso à vista",
        },
      },
      {
        value: "session",
        label: {
          en: "state carried across pages",
          pt: "estado levado entre páginas",
        },
      },
    ],
    copy: {
      en: {
        tagline: "An order built across four pages, and it has to survive every jump",
        summary:
          "A menu where the order is assembled one step at a time: main, side, drink, dessert, then a summary. It looks simple and it is the one that taught the most, because a choice made on page one has to still be there on page four. That is session state, not a page that merely looks right, and anything skipped has to show as not chosen rather than quietly vanish.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Um pedido montado em quatro páginas, e ele precisa sobreviver a cada pulo",
        summary:
          "Um cardápio em que o pedido se monta um passo por vez: principal, acompanhamento, bebida, sobremesa, e então o resumo. Parece simples e foi o que mais ensinou, porque uma escolha feita na página um precisa continuar lá na página quatro. Isso é estado de sessão, não página que só parece certa, e o que foi pulado precisa aparecer como não escolhido em vez de sumir calado.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "dive-school",
    name: "Dive School Site",
    order: 15,
    minor: true,
    domain: "academic",
    status: "study",
    period: { from: "2025-08", to: "2026-05" },
    stack: ["php", "javascript"],
    shots: gallery("dive"),
    metrics: [
      {
        value: "1535",
        label: {
          en: "earliest entry on the timeline",
          pt: "entrada mais antiga da linha do tempo",
        },
      },
      {
        value: "4",
        label: {
          en: "pages sharing one header and footer",
          pt: "páginas com header e footer comuns",
        },
      },
    ],
    copy: {
      en: {
        tagline: "A written site, not a filled-in template",
        summary:
          "Four pages for a dive school: what the sport is, a history that runs from a diving bell in 1535 to the modern regulator, a photo gallery and a contact page with a map. Every word on it was written for the brief. It is the difference between a site that is finished and a site that is laid out.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Um site escrito, não um template preenchido",
        summary:
          "Quatro páginas para uma escola de mergulho: o que é o esporte, uma história que vai de um sino de mergulho em 1535 até o regulador moderno, uma galeria de fotos e um contato com mapa. Cada palavra foi escrita para o briefing. É a diferença entre um site pronto e um site diagramado.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "film-reference",
    name: "Film Reference Site",
    order: 16,
    minor: true,
    domain: "academic",
    status: "study",
    period: { from: "2025-08", to: "2026-05" },
    stack: ["php", "javascript"],
    shots: gallery("reel"),
    metrics: [
      {
        value: "6",
        label: {
          en: "profiles, one page each",
          pt: "perfis, uma página cada",
        },
      },
      {
        value: "filmography",
        label: { en: "dated, per person", pt: "datada, por pessoa" },
      },
    ],
    copy: {
      en: {
        tagline: "Six profiles, each with a biography and a dated filmography",
        summary:
          "An editorial layout over a repeated structure: one page per performer, a written biography, and a filmography listed by year. The header carries the active state so you always know where you are. It is the most finished of the static sites, and the one where the writing does as much work as the CSS.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Seis perfis, cada um com biografia e filmografia datada",
        summary:
          "Um layout editorial sobre uma estrutura repetida: uma página por artista, biografia escrita e filmografia listada por ano. O cabeçalho carrega o estado ativo, então você sempre sabe onde está. É o mais acabado dos sites estáticos, e aquele em que o texto trabalha tanto quanto o CSS.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
