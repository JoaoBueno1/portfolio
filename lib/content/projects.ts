import { gallery } from "./galleries";
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
    shots: gallery("driver"),
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
    slug: "data-warehouse",
    name: "Sales Data Warehouse",
    order: 5,
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
    slug: "ufo-archive",
    name: "Sightings Archive",
    order: 6,
    domain: "academic",
    status: "study",
    period: { from: "2025-08", to: "2026-05" },
    stack: ["php", "mysql", "sql", "javascript"],
    shots: gallery("ufo"),
    metrics: [
      {
        value: "80,126",
        label: { en: "records loaded", pt: "registros carregados", es: "registros cargados" },
      },
      {
        value: "802",
        label: {
          en: "pages, paginated server side",
          pt: "páginas, paginadas no servidor",
          es: "páginas, paginadas en el servidor",
        },
      },
      {
        value: "bcrypt",
        label: { en: "password hashing", pt: "hash de senha", es: "hash de contraseña" },
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
      es: {
        tagline: "Ochenta mil registros públicos, y un admin que puede corregirlos",
        summary:
          "Un dataset público cargado en MySQL y servido como tabla legible. Detrás de un login, un administrador agrega, edita, resuelve y borra registros, y la contraseña se hashea en vez de guardarse. La parte interesante nunca fue el CRUD. Fue hacer legibles ochenta mil filas, lo que exigió paginar en el servidor en vez de mandar cada fila al navegador y cruzar los dedos.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "trilogy-archive",
    name: "Original Trilogy Archive",
    order: 7,
    domain: "academic",
    status: "study",
    period: { from: "2025-08", to: "2026-05" },
    stack: ["php", "mysql", "sql", "javascript"],
    shots: gallery("starwars"),
    metrics: [
      { value: "9", label: { en: "linked tables", pt: "tabelas ligadas", es: "tablas enlazadas" } },
      {
        value: "1",
        label: {
          en: "shared connection function",
          pt: "função de conexão compartilhada",
          es: "función de conexión compartida",
        },
      },
      {
        value: "admin",
        label: {
          en: "area for maintaining records",
          pt: "área para manter registros",
          es: "área para mantener registros",
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
      es: {
        tagline: "Nueve secciones enlazadas sobre un esquema, con área de admin detrás",
        summary:
          "Cada sección lee de su propia tabla mediante una función de conexión compartida, así que agregar una sección es agregar una tabla y una página, no reescribir el sitio. Un área de admin mantiene los registros, y la página de resumen cambia entre películas con pestañas que nunca recargan. La página que más usaba era ese resumen, porque un conteo de filas por tabla es como se nota una importación a medias.",
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
    shots: studyShots("api"),
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
    shots: studyShots("mongo"),
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
    shots: studyShots("r"),
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
    slug: "order-flow",
    name: "Multi-Step Order Flow",
    order: 11,
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
          es: "pasos, con progreso a la vista",
        },
      },
      {
        value: "session",
        label: {
          en: "state carried across pages",
          pt: "estado levado entre páginas",
          es: "estado llevado entre páginas",
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
      es: {
        tagline: "Un pedido armado en cuatro páginas, y tiene que sobrevivir a cada salto",
        summary:
          "Un menú donde el pedido se arma paso a paso: principal, acompañamiento, bebida, postre, y luego el resumen. Parece simple y fue el que más enseñó, porque una elección hecha en la página uno tiene que seguir ahí en la página cuatro. Eso es estado de sesión, no una página que solo parece correcta, y lo omitido tiene que aparecer como no elegido en vez de desaparecer callado.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "dive-school",
    name: "Dive School Site",
    order: 12,
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
          es: "entrada más antigua de la línea de tiempo",
        },
      },
      {
        value: "4",
        label: {
          en: "pages sharing one header and footer",
          pt: "páginas com header e footer comuns",
          es: "páginas con header y footer comunes",
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
      es: {
        tagline: "Un sitio escrito, no una plantilla rellenada",
        summary:
          "Cuatro páginas para una escuela de buceo: qué es el deporte, una historia que va de una campana de buceo en 1535 hasta el regulador moderno, una galería de fotos y un contacto con mapa. Cada palabra fue escrita para el brief. Es la diferencia entre un sitio terminado y un sitio maquetado.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
  {
    slug: "film-reference",
    name: "Film Reference Site",
    order: 13,
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
          es: "perfiles, una página cada uno",
        },
      },
      {
        value: "filmography",
        label: { en: "dated, per person", pt: "datada, por pessoa", es: "fechada, por persona" },
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
      es: {
        tagline: "Seis perfiles, cada uno con biografía y filmografía fechada",
        summary:
          "Un diseño editorial sobre una estructura repetida: una página por artista, biografía escrita y filmografía listada por año. La cabecera lleva el estado activo, así siempre sabes dónde estás. Es el más terminado de los sitios estáticos, y aquel donde el texto trabaja tanto como el CSS.",
        role: "Diploma of Information Technology, Queensland.",
      },
    },
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
