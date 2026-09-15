import { SHOTS } from "./shots";
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
    slug: "tms",
    name: "Transport Management System",
    order: 1,
    domain: "production",
    status: "live",
    period: { from: "2025-06" },
    stack: [
      "python",
      "flask",
      "jinja",
      "postgresql",
      "supabase",
      "pandas",
      "zebra",
      "googlemaps",
      "render",
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
      SHOTS.trackingMobile,
    ],
    metrics: [
      { value: "1,100+", label: { en: "commits", pt: "commits", es: "commits" } },
      {
        value: "4",
        label: {
          en: "carriers quoted in parallel",
          pt: "transportadoras cotadas em paralelo",
          es: "transportistas cotizados en paralelo",
        },
      },
      {
        value: "9",
        label: {
          en: "external systems integrated",
          pt: "sistemas externos integrados",
          es: "sistemas externos integrados",
        },
      },
      {
        value: "60+",
        label: {
          en: "database migrations",
          pt: "migrations de banco",
          es: "migraciones de base de datos",
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
      es: {
        tagline: "Cotizar, reservar y despachar envíos, más las furgonetas propias",
        summary:
          "Cuatro transportistas se cotizan a la vez, se reserva el más barato, la etiqueta térmica sale por impresora, y semanas después la factura del transportista se compara línea por línea contra lo cotizado. Las furgonetas propias compiten por los mismos trabajos con la misma tarifa, así que despacho, rastreo en vivo y hojas de ruta también viven aquí. Un clic equivocado reserva un envío facturable real, y por eso el repositorio tiene una política escrita sobre qué pruebas pueden tocar el mundo exterior.",
        role: "Único desarrollador. Requisitos, arquitectura, construcción, despliegue y guardia.",
      },
    },
  },
  {
    slug: "driver-app",
    name: "Driver App",
    order: 2,
    domain: "mobile",
    status: "live",
    period: { from: "2025-06" },
    stack: ["typescript", "react", "expo", "supabase", "googlemaps", "sentry"],
    shots: [],
    metrics: [
      { value: "15", label: { en: "screens", pt: "telas", es: "pantallas" } },
      {
        value: "iOS + Android",
        label: {
          en: "built and released with EAS",
          pt: "build e publicação com EAS",
          es: "compilado y publicado con EAS",
        },
      },
      { value: "100+", label: { en: "commits", pt: "commits", es: "commits" } },
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
      es: {
        tagline: "Lo que el conductor sostiene mientras la furgoneta anda",
        summary:
          "El conductor toma la ruta, ve las paradas en orden optimizado, navega, revisa la carga, toma la foto y la firma en la puerta, y cierra la parada. Sigue funcionando cuando se cae la señal: la entrega se encola en el teléfono y sube cuando vuelve, y las fotos tienen su propia cola de subida. La ubicación sigue reportando con la pantalla apagada, y esa fue la parte más difícil en iOS.",
        role: "Único desarrollador. App, publicación en tiendas y la API con la que habla.",
      },
    },
  },
  {
    slug: "warehouse",
    name: "Warehouse Operations Platform",
    order: 3,
    domain: "tools",
    status: "live",
    period: { from: "2025-07" },
    stack: ["javascript", "express", "postgresql", "supabase", "vercel", "actions"],
    shots: [],
    metrics: [
      {
        value: "20+",
        label: { en: "warehouse features", pt: "features de armazém", es: "funciones de almacén" },
      },
      { value: "650+", label: { en: "commits", pt: "commits", es: "commits" } },
      {
        value: "20+",
        label: {
          en: "scheduled sync jobs",
          pt: "jobs de sync agendados",
          es: "trabajos de sincronización",
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
      es: {
        tagline: "El software con el que trabaja el piso del almacén",
        summary:
          "Nació como impresor de etiquetas de contenedor y se convirtió en la capa sobre la que el piso trabaja: pick y pack, reposición contra demanda viva, conteo cíclico, devoluciones, anomalías de picking y planificación de stock. Simple a propósito, con páginas renderizadas en el servidor, sin framework ni build, porque corre en una tablet sostenida por alguien con guantes y cada segundo de carga es un segundo de gente parada.",
        role: "Único desarrollador, y la persona que veía el sistema en uso para saber qué arreglar.",
      },
    },
  },
  {
    slug: "bi-ai",
    name: "BI and AI Data Layer",
    order: 4,
    domain: "data",
    status: "building",
    period: { from: "2026-09" },
    stack: ["microsoft", "postgresql", "sql", "claude", "python", "rest"],
    shots: [],
    metrics: [
      {
        value: "4",
        label: {
          en: "systems being connected",
          pt: "sistemas sendo conectados",
          es: "sistemas en conexión",
        },
      },
      {
        value: "read only",
        label: {
          en: "access the model is given",
          pt: "acesso dado ao modelo",
          es: "acceso dado al modelo",
        },
      },
      {
        value: "per role",
        label: {
          en: "what each person can ask about",
          pt: "o que cada pessoa pode perguntar",
          es: "lo que cada persona puede preguntar",
        },
      },
    ],
    copy: {
      en: {
        tagline: "One question, answered across the ERP, the warehouse and the freight system",
        summary:
          "Real-time dashboards built around the decisions each department actually makes, not around what is easy to chart. Behind them, a hybrid chat that reads across systems that never spoke to each other: stock on hand, what shipped, what sold, and where it went. The model gets read-only access, scoped by the user's role, with no image generation and no write path. One plain question returns what used to take three logins and a spreadsheet.",
        role: "Designing the data layer, the access limits and the dashboards.",
      },
      pt: {
        tagline: "Uma pergunta, respondida através do ERP, do armazém e do sistema de frete",
        summary:
          "Painéis em tempo real construídos em volta das decisões que cada setor realmente toma, e não em volta do que é fácil de plotar. Atrás deles, um chat híbrido que lê sistemas que nunca conversaram entre si: estoque em mãos, o que saiu, o que vendeu e para onde foi. O modelo recebe acesso só de leitura, limitado pelo papel do usuário, sem geração de imagem e sem caminho de escrita. Uma pergunta simples devolve o que antes custava três logins e uma planilha.",
        role: "Desenhando a camada de dados, os limites de acesso e os painéis.",
      },
      es: {
        tagline: "Una pregunta, respondida a través del ERP, el almacén y el sistema de transporte",
        summary:
          "Paneles en tiempo real construidos alrededor de las decisiones que cada área realmente toma, no de lo que es fácil de graficar. Detrás, un chat híbrido que lee sistemas que nunca se hablaron: stock disponible, lo que salió, lo que se vendió y adónde fue. El modelo recibe acceso de solo lectura, limitado por el rol del usuario, sin generación de imágenes y sin camino de escritura. Una pregunta simple devuelve lo que antes costaba tres logins y una hoja de cálculo.",
        role: "Diseñando la capa de datos, los límites de acceso y los paneles.",
      },
    },
  },
  {
    slug: "van-booking",
    name: "Van Booking Tool",
    order: 5,
    domain: "tools",
    status: "shipped",
    period: { from: "2024-11", to: "2024-11" },
    stack: ["javascript", "express", "sqlite"],
    shots: [],
    metrics: [
      {
        value: "2024",
        label: {
          en: "the first thing I shipped",
          pt: "a primeira coisa que entreguei",
          es: "lo primero que entregué",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Where all of this started",
        summary:
          "Still working on the warehouse floor, I built a small browser app on Node, Express and SQLite so van bookings stopped living in a spreadsheet two people edited at once. It ran on one machine and it was enough. Everything above is the same instinct with more years on it: watch the manual work, then delete it.",
        role: "Built on my own initiative, alongside the warehouse job.",
      },
      pt: {
        tagline: "Onde tudo isso começou",
        summary:
          "Ainda no chão de armazém, montei um app de navegador em Node, Express e SQLite para o agendamento das vans parar de viver numa planilha que duas pessoas editavam ao mesmo tempo. Rodava numa máquina só, e era suficiente. Tudo acima é o mesmo instinto com mais anos em cima: olhar o trabalho manual e apagar ele.",
        role: "Feito por iniciativa própria, em paralelo ao trabalho de armazém.",
      },
      es: {
        tagline: "Donde empezó todo esto",
        summary:
          "Todavía en el piso del almacén, armé una pequeña app de navegador en Node, Express y SQLite para que la reserva de furgonetas dejara de vivir en una hoja que dos personas editaban a la vez. Corría en una sola máquina y alcanzaba. Todo lo de arriba es el mismo instinto con más años encima: mirar el trabajo manual y borrarlo.",
        role: "Hecho por iniciativa propia, junto al trabajo de almacén.",
      },
    },
  },
  {
    slug: "data-warehouse",
    name: "Sales Data Warehouse",
    order: 6,
    domain: "academic",
    status: "study",
    period: { from: "2026-03", to: "2026-04" },
    stack: ["php", "mysql", "sql", "chartjs"],
    shots: [],
    metrics: [
      {
        value: "1 + 6",
        label: {
          en: "fact and dimension tables",
          pt: "tabelas fato e dimensão",
          es: "tablas de hechos y dimensiones",
        },
      },
      {
        value: "11",
        label: {
          en: "JSON endpoints, one per chart",
          pt: "endpoints JSON, um por gráfico",
          es: "endpoints JSON, uno por gráfico",
        },
      },
      {
        value: "3",
        label: {
          en: "roles, each seeing something different",
          pt: "papéis, cada um vendo algo diferente",
          es: "roles, cada uno viendo algo distinto",
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
      es: {
        tagline: "Un star schema, un dashboard encima y tres roles que ven cosas distintas",
        summary:
          "Trabajo de curso con la forma del trabajo real. Las ventas entran en un star schema, un sitio de reportes lo lee mediante una única función de conexión, y cada gráfico se parte en endpoint JSON y página, para que la consulta nunca se mezcle con la presentación. Una segunda entrega agregó login multi-rol con contraseña hasheada, área de admin y páginas que solo una tienda alcanza.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "php-apps",
    name: "Database-Backed Web Apps",
    order: 7,
    domain: "academic",
    status: "study",
    period: { from: "2025-08", to: "2026-05" },
    stack: ["php", "mysql", "sql", "javascript"],
    shots: [],
    metrics: [
      {
        value: "2",
        label: {
          en: "full apps with their own admin",
          pt: "apps completos com admin próprio",
          es: "apps completas con admin propio",
        },
      },
      {
        value: "bcrypt",
        label: {
          en: "password hashing, not plain text",
          pt: "hash de senha, não texto puro",
          es: "hash de contraseña, no texto plano",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Two applications with login, an admin area and a real dataset behind them",
        summary:
          "The first loads a public sightings dataset and puts a full record lifecycle on top: create, edit, resolve, delete, with an admin login and a dashboard. The second is a reference site across nine linked sections, with its own admin area for maintaining the records. Both ship with their own schema, and both hash passwords rather than storing them.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Duas aplicações com login, área de admin e um dataset real por trás",
        summary:
          "A primeira carrega um dataset público de avistamentos e coloca um ciclo de vida completo de registro em cima: criar, editar, resolver, apagar, com login de admin e dashboard. A segunda é um site de consulta com nove seções ligadas entre si e área de admin própria para manter os registros. As duas trazem o schema junto, e as duas hasheiam senha em vez de guardar.",
        role: "Diploma of Information Technology, Queensland.",
      },
      es: {
        tagline: "Dos aplicaciones con login, área de admin y un dataset real detrás",
        summary:
          "La primera carga un dataset público de avistamientos y pone encima un ciclo de vida completo de registro: crear, editar, resolver, borrar, con login de admin y dashboard. La segunda es un sitio de consulta con nueve secciones enlazadas y su propia área de admin para mantener los registros. Ambas traen su esquema, y ambas hashean la contraseña en vez de guardarla.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "rest-api",
    name: "REST API and Documentation",
    order: 8,
    domain: "academic",
    status: "study",
    period: { from: "2026-06", to: "2026-08" },
    stack: ["python", "django", "rest", "sqlite"],
    shots: [],
    metrics: [
      {
        value: "12",
        label: {
          en: "endpoints documented",
          pt: "endpoints documentados",
          es: "endpoints documentados",
        },
      },
      {
        value: "5",
        label: {
          en: "apps, one per category",
          pt: "apps, um por categoria",
          es: "apps, una por categoría",
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
      es: {
        tagline: "Documentar una API de autenticación como un dev necesita leerla",
        summary:
          "Un sitio que documenta doce endpoints de un framework de autenticación, con una aplicación por categoría: autenticación, registro, gestión de usuario, gestión de token y login social. Cada página trae la descripción, un ejemplo de petición y uno de respuesta. Luego los endpoints se volvieron checklist y se validaron contra el propio sitio, que es como se encuentra lo que faltó.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "nosql",
    name: "NoSQL and Database Hardening",
    order: 9,
    domain: "academic",
    status: "study",
    period: { from: "2025-10", to: "2025-11" },
    stack: ["mongodb", "php", "linux"],
    shots: [],
    metrics: [
      {
        value: "9",
        label: {
          en: "exercises, each on its own instance",
          pt: "exercícios, cada um na própria instância",
          es: "ejercicios, cada uno en su propia instancia",
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
      es: {
        tagline: "Activar la autenticación, ver romperse la app, y recién ahí arreglarla",
        summary:
          "Nueve ejercicios sobre bases documentales, cada uno con su propio servidor y su propia configuración. El que importó siguió este orden: el sitio conecta sin autenticación alguna, se activa la autenticación en la base, el sitio se rompe a propósito, y recién entonces la credencial entra en la conexión. La escala también aparece, vertical contra horizontal, y lo que cuesta cada una.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "data-cleaning",
    name: "Data Cleaning and Reporting in R",
    order: 10,
    domain: "academic",
    status: "study",
    period: { from: "2025-11", to: "2025-12" },
    stack: ["r", "sql"],
    shots: [],
    metrics: [
      {
        value: "2",
        label: {
          en: "datasets, before and after on disk",
          pt: "datasets, antes e depois no disco",
          es: "datasets, antes y después en disco",
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
      es: {
        tagline: "Encontrar la fila rota antes de que entre en el promedio",
        summary:
          "Dos proyectos pequeños en R con dplyr. El primero lee un dataset de películas, marca la fila cuya nota no es número o queda fuera de su propia escala, y recién entonces produce top diez por recaudación y promedio por director. El segundo limpia un dataset de estudiantes: coerción de tipos, quitar caracteres sueltos dentro del número, y escribir el archivo limpio junto al original, para que la diferencia quede visible.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "client-sites",
    name: "Client Websites",
    order: 11,
    domain: "academic",
    status: "study",
    period: { from: "2025-08", to: "2026-02" },
    stack: ["javascript", "php"],
    shots: [],
    metrics: [
      {
        value: "13",
        label: {
          en: "pages in the largest one",
          pt: "páginas no maior deles",
          es: "páginas en el más grande",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Briefs taken from a client, built, then validated against the brief",
        summary:
          "Multi-page sites built the long way: gather what the client expects, design it, build it, then check the result against what was agreed instead of against taste. The largest runs to thirteen pages for a venue business, with a page per room, pricing, gift certificates and how to find the place.",
        role: "Diploma of Information Technology, Queensland.",
      },
      pt: {
        tagline: "Briefing tirado de um cliente, construído, e depois validado contra o briefing",
        summary:
          "Sites multipágina feitos pelo caminho longo: levantar o que o cliente espera, desenhar, construir, e então conferir o resultado contra o que foi combinado em vez de contra gosto pessoal. O maior chega a treze páginas para um negócio de experiências, com uma página por sala, preço, vale-presente e como chegar.",
        role: "Diploma of Information Technology, Queensland.",
      },
      es: {
        tagline: "Brief tomado de un cliente, construido, y después validado contra el brief",
        summary:
          "Sitios multipágina hechos por el camino largo: levantar lo que el cliente espera, diseñarlo, construirlo, y luego contrastar el resultado con lo acordado en vez de con el gusto personal. El más grande llega a trece páginas para un negocio de experiencias, con una página por sala, precios, vales de regalo y cómo llegar.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
