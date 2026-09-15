import dispatchCentre from "@/public/screenshots/dispatch-centre.webp";
import fleetLive from "@/public/screenshots/fleet-live.webp";
import ordersBoard from "@/public/screenshots/orders-board.webp";
import type { Project } from "./types";

/**
 * A VITRINE.
 *
 * Ordenada por IMPACTO, nao por data: quem abre o site tem poucos segundos, e
 * o primeiro card precisa ser o sistema que roda uma operacao de verdade. A
 * cronologia existe, mas mora na timeline e na pagina de formacao.
 *
 * TODO numero aqui foi contado por mim no repositorio de origem, nao
 * estimado. Nenhum numero descreve cliente, receita ou contrato — a regra em
 * CLAUDE.md nao abre excecao.
 *
 * `cover` ausente nao e pendencia esquecida: significa que ainda nao existe
 * captura com dado sintetico daquele sistema. As capturas do driver app, por
 * exemplo, tem endereco, telefone e assinatura de cliente real e por isso
 * NUNCA vao entrar.
 */
export const PROJECTS: readonly Project[] = [
  {
    slug: "rapid-tms",
    order: 1,
    domain: "production",
    status: "live",
    featured: true,
    period: { from: "2025-06" },
    stack: [
      "python",
      "flask",
      "jinja",
      "postgresql",
      "supabase",
      "pandas",
      "googlemaps",
      "render",
      "sentry",
    ],
    hasCaseStudy: false,
    cover: dispatchCentre,
    coverAlt: {
      en: "Dispatch Center: an active run with twelve stops listed on the left and the same stops numbered on a map, the route drawn between them.",
      pt: "Dispatch Center: uma rota ativa com doze paradas listadas à esquerda e as mesmas paradas numeradas num mapa, com o caminho desenhado entre elas.",
      es: "Dispatch Center: una ruta activa con doce paradas listadas a la izquierda y las mismas paradas numeradas en un mapa, con el recorrido dibujado entre ellas.",
    },
    metrics: [
      {
        value: "1,155",
        label: {
          en: "commits since June 2025",
          pt: "commits desde junho de 2025",
          es: "commits desde junio de 2025",
        },
      },
      {
        value: "4",
        label: {
          en: "freight carriers integrated",
          pt: "transportadoras integradas",
          es: "transportistas integrados",
        },
      },
      {
        value: "67",
        label: {
          en: "database migrations",
          pt: "migrations de banco",
          es: "migraciones de base de datos",
        },
      },
      {
        value: "119",
        label: { en: "technical documents", pt: "documentos técnicos", es: "documentos técnicos" },
      },
    ],
    copy: {
      en: {
        tagline: "The transport management system that runs the operation",
        summary:
          "Quotes four carriers in parallel, books the cheapest, prints the thermal label, plans the van run, tracks the delivery and reconciles the carrier invoice weeks later. It replaced logging into four carrier portals by hand and checking invoices line by line in a spreadsheet. A wrong click here books a real, billable freight job — so the repo carries a written policy on which tests are allowed to touch the outside world.",
        role: "Sole developer — requirements, architecture, build, deploy and on-call",
      },
      pt: {
        tagline: "O sistema de transporte que roda a operação",
        summary:
          "Cota quatro transportadoras em paralelo, reserva a mais barata, imprime a etiqueta térmica, planeja a rota da van, rastreia a entrega e reconcilia a fatura da transportadora semanas depois. Substituiu logar em quatro portais de carrier na mão e conferir fatura linha a linha no Excel. Um clique errado aqui reserva um frete faturável de verdade — por isso o repositório tem uma política escrita sobre quais testes podem tocar o mundo externo.",
        role: "Desenvolvedor único — requisitos, arquitetura, construção, deploy e plantão",
      },
      es: {
        tagline: "El sistema de transporte que hace funcionar la operación",
        summary:
          "Cotiza cuatro transportistas en paralelo, reserva el más barato, imprime la etiqueta térmica, planifica la ruta de la furgoneta, rastrea la entrega y concilia la factura del transportista semanas después. Reemplazó entrar a cuatro portales a mano y revisar facturas línea por línea en una hoja de cálculo. Un clic equivocado aquí reserva un envío facturable real — por eso el repositorio tiene una política escrita sobre qué pruebas pueden tocar el mundo exterior.",
        role: "Único desarrollador — requisitos, arquitectura, construcción, despliegue y guardia",
      },
    },
  },
  {
    slug: "driver-app",
    order: 2,
    domain: "mobile",
    status: "live",
    featured: true,
    period: { from: "2025-06" },
    stack: ["typescript", "react", "expo", "supabase", "googlemaps", "sentry"],
    hasCaseStudy: false,
    metrics: [
      { value: "15", label: { en: "screens", pt: "telas", es: "pantallas" } },
      { value: "110", label: { en: "commits", pt: "commits", es: "commits" } },
      {
        value: "iOS + Android",
        label: {
          en: "built and shipped with EAS",
          pt: "build e publicação com EAS",
          es: "compilado y publicado con EAS",
        },
      },
    ],
    copy: {
      en: {
        tagline: "What the driver holds while the van is moving",
        summary:
          "The other half of dispatch: the driver claims a run, sees the stops in optimised order, navigates, checks the load, captures a photo and a signature at the door, and closes the stop. It keeps working when the signal drops — deliveries queue locally and sync when the phone comes back, and photos have their own upload queue. Location keeps reporting with the screen off, which is the part that actually took the longest to get right on iOS.",
        role: "Sole developer — app, store releases, and the API it talks to",
      },
      pt: {
        tagline: "O que o motorista segura enquanto a van anda",
        summary:
          "A outra metade do despacho: o motorista assume a rota, vê as paradas na ordem otimizada, navega, confere a carga, tira a foto e colhe a assinatura na porta, e fecha a parada. Continua funcionando quando o sinal cai — entrega fica em fila local e sobe quando o celular volta, e a foto tem fila própria de upload. A localização segue reportando com a tela apagada, e essa foi a parte que mais deu trabalho no iOS.",
        role: "Desenvolvedor único — app, publicação nas lojas e a API com que ele conversa",
      },
      es: {
        tagline: "Lo que el conductor sostiene mientras la furgoneta anda",
        summary:
          "La otra mitad del despacho: el conductor toma la ruta, ve las paradas en orden optimizado, navega, revisa la carga, toma la foto y la firma en la puerta, y cierra la parada. Sigue funcionando cuando se cae la señal — las entregas se encolan localmente y suben cuando el teléfono vuelve, y las fotos tienen su propia cola de subida. La ubicación sigue reportando con la pantalla apagada, y esa fue la parte más difícil en iOS.",
        role: "Único desarrollador — app, publicación en tiendas y la API con la que habla",
      },
    },
  },
  {
    slug: "rapid-labels",
    order: 3,
    domain: "tools",
    status: "live",
    featured: false,
    period: { from: "2025-07" },
    stack: ["javascript", "express", "postgresql", "supabase", "vercel", "actions"],
    hasCaseStudy: false,
    metrics: [
      {
        value: "21",
        label: { en: "warehouse features", pt: "features de armazém", es: "funciones de almacén" },
      },
      { value: "653", label: { en: "commits", pt: "commits", es: "commits" } },
      {
        value: "22",
        label: {
          en: "scheduled sync jobs",
          pt: "jobs de sync agendados",
          es: "trabajos de sincronización",
        },
      },
    ],
    copy: {
      en: {
        tagline: "The software on the warehouse floor",
        summary:
          "Started as a container label printer and grew into the layer the floor actually runs on: pick and pack, replenishment against live demand, cycle counting, returns, picking anomalies and stock planning. Deliberately plain — server-rendered pages, no framework, no build step — because it is used on a tablet by people wearing gloves, and every second of load time is a second someone stands still.",
        role: "Sole developer — and the person who watched it being used to know what to fix",
      },
      pt: {
        tagline: "O software do chão de armazém",
        summary:
          "Nasceu impressor de etiqueta de container e virou a camada em que o chão de fato roda: pick e pack, reposição contra demanda viva, contagem cíclica, devoluções, anomalias de picking e planejamento de estoque. Simples de propósito — páginas renderizadas no servidor, sem framework e sem build — porque quem usa está de luva num tablet, e cada segundo de carregamento é um segundo de gente parada.",
        role: "Desenvolvedor único — e a pessoa que via o sistema sendo usado para saber o que consertar",
      },
      es: {
        tagline: "El software del piso del almacén",
        summary:
          "Nació como impresor de etiquetas de contenedor y se convirtió en la capa sobre la que el piso realmente funciona: pick y pack, reposición contra demanda viva, conteo cíclico, devoluciones, anomalías de picking y planificación de stock. Simple a propósito — páginas renderizadas en el servidor, sin framework ni build — porque quien lo usa lleva guantes y una tablet, y cada segundo de carga es un segundo de gente parada.",
        role: "Único desarrollador — y la persona que veía el sistema en uso para saber qué arreglar",
      },
    },
  },
  {
    slug: "rapid-portal",
    order: 4,
    domain: "platform",
    status: "live",
    featured: false,
    period: { from: "2026-09" },
    stack: ["typescript", "nextjs", "react", "tailwind", "supabase", "zod", "vercel", "claude"],
    hasCaseStudy: false,
    cover: ordersBoard,
    coverAlt: {
      en: "Orders board: twenty-eight orders split across four carriers and two own-fleet runs, with status per consignment.",
      pt: "Quadro de pedidos: vinte e oito pedidos divididos entre quatro transportadoras e duas rotas da frota própria, com status por consignment.",
      es: "Tablero de pedidos: veintiocho pedidos repartidos entre cuatro transportistas y dos rutas de flota propia, con estado por consignment.",
    },
    metrics: [
      {
        value: "3",
        label: {
          en: "systems behind one login",
          pt: "sistemas atrás de um login",
          es: "sistemas detrás de un login",
        },
      },
      {
        value: "EdDSA",
        label: {
          en: "signed, seconds-long handoff token",
          pt: "token de handoff assinado, de segundos",
          es: "token de handoff firmado, de segundos",
        },
      },
    ],
    copy: {
      en: {
        tagline: "One login, three systems, and an AI that is not allowed to improvise",
        summary:
          'Three systems grew separately and each had its own login. The portal authenticates once and hands off: it signs a token that lives for seconds, the target system verifies it against a public key and opens its own session. It also answers questions about the data in plain English — through a closed catalogue of hand-written read-only queries. The model picks a query; it never writes SQL. A question outside the catalogue is answered with "I don\'t know", never with a plausible number.',
        role: "Sole developer — auth, handoff, admin, AI module and the public site",
      },
      pt: {
        tagline: "Um login, três sistemas, e uma IA que não tem permissão de improvisar",
        summary:
          'Três sistemas cresceram separados e cada um tinha o próprio login. O portal autentica uma vez e faz handoff: assina um token que vive segundos, e o sistema de destino valida contra uma chave pública e abre a própria sessão. Ele também responde pergunta sobre os dados em linguagem natural — por um catálogo fechado de consultas só-leitura escritas à mão. O modelo escolhe a consulta; ele nunca escreve SQL. Pergunta fora do catálogo é respondida com "não sei", nunca com um número plausível.',
        role: "Desenvolvedor único — auth, handoff, admin, módulo de IA e o site público",
      },
      es: {
        tagline: "Un login, tres sistemas y una IA que no tiene permiso de improvisar",
        summary:
          'Tres sistemas crecieron por separado y cada uno tenía su propio login. El portal autentica una vez y hace handoff: firma un token que vive segundos, y el sistema destino lo valida contra una clave pública y abre su propia sesión. También responde preguntas sobre los datos en lenguaje natural — mediante un catálogo cerrado de consultas de solo lectura escritas a mano. El modelo elige la consulta; nunca escribe SQL. Una pregunta fuera del catálogo se responde con "no lo sé", nunca con un número plausible.',
        role: "Único desarrollador — auth, handoff, admin, módulo de IA y el sitio público",
      },
    },
  },
  {
    slug: "own-fleet",
    order: 5,
    domain: "production",
    status: "live",
    featured: false,
    period: { from: "2026-04" },
    stack: ["python", "flask", "postgresql", "googlemaps"],
    hasCaseStudy: false,
    cover: fleetLive,
    coverAlt: {
      en: "Fleet Live: two drivers on a map of south-east Queensland, each with progress through their run, the next stop and an estimated finish time.",
      pt: "Fleet Live: dois motoristas num mapa do sudeste de Queensland, cada um com o progresso da rota, a próxima parada e a hora estimada de término.",
      es: "Fleet Live: dos conductores en un mapa del sureste de Queensland, cada uno con el progreso de su ruta, la siguiente parada y la hora estimada de fin.",
    },
    metrics: [
      {
        value: "1/3/5/7 km",
        label: {
          en: "proximity tiers for catching savings",
          pt: "faixas de proximidade para achar economia",
          es: "rangos de proximidad para hallar ahorro",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Treating our own vans as one more carrier",
        summary:
          "The vans the company already owns compete for every job against the four external carriers, priced on the same rate card so the two can never drift apart. The dispatcher builds each run, the stops get ordered for the shortest drive, and once the driver starts, re-ordering is locked — adding a stop is not. That distinction exists because of a specific day in May 2026 when a mid-route re-order scrambled a driver's sequence.",
        role: "Sole developer — pricing, coverage, dispatch and the rules that guard it",
      },
      pt: {
        tagline: "Tratar a frota própria como mais uma transportadora",
        summary:
          "As vans que a empresa já tem competem por cada trabalho contra as quatro transportadoras externas, precificadas pela mesma tabela para que as duas nunca se descolem. O dispatcher monta a rota, as paradas são ordenadas pelo menor trajeto, e assim que o motorista começa, reordenar fica travado — acrescentar parada, não. Essa distinção existe por causa de um dia específico de maio de 2026, quando uma reordenação no meio do caminho embaralhou a sequência de um motorista.",
        role: "Desenvolvedor único — precificação, cobertura, despacho e as regras que protegem isso",
      },
      es: {
        tagline: "Tratar la flota propia como un transportista más",
        summary:
          "Las furgonetas que la empresa ya tiene compiten por cada trabajo contra los cuatro transportistas externos, con la misma tarifa para que ambas nunca se separen. El despachador arma la ruta, las paradas se ordenan por el trayecto más corto, y en cuanto el conductor arranca, reordenar queda bloqueado — agregar una parada, no. Esa distinción existe por un día concreto de mayo de 2026, cuando un reordenamiento a mitad de ruta desordenó la secuencia de un conductor.",
        role: "Único desarrollador — precios, cobertura, despacho y las reglas que lo protegen",
      },
    },
  },
  {
    slug: "ai-engineering",
    order: 6,
    domain: "platform",
    status: "shipped",
    featured: false,
    period: { from: "2026-09", to: "2026-09" },
    stack: ["claude", "git", "github"],
    hasCaseStudy: false,
    metrics: [
      {
        value: "5",
        label: {
          en: "guard rails, one per real incident",
          pt: "travas, uma por incidente real",
          es: "barreras, una por incidente real",
        },
      },
      {
        value: "4",
        label: {
          en: "repositories consuming them",
          pt: "repositórios que as consomem",
          es: "repositorios que las consumen",
        },
      },
    ],
    copy: {
      en: {
        tagline: "Writing down the trap so nobody falls in it twice",
        summary:
          "A shared set of rules that four repositories pull from, where every single rule exists because something already went wrong: the TMS .env points at production, so a local run starts calling real carriers; the warehouse repo serves its own root, so committing a file publishes it; in Next 16 a middleware.ts is ignored in silence and the admin area ships public with a green build. None of that is a lint rule you can buy. Turning an incident into a rule that survives the person who was there is the work.",
        role: "Author — the rules and the incidents they came from",
      },
      pt: {
        tagline: "Escrever a armadilha para ninguém cair nela duas vezes",
        summary:
          "Um conjunto de regras que quatro repositórios consomem, em que cada regra existe porque alguma coisa já deu errado: o .env do TMS aponta para produção, então rodar local passa a chamar transportadora de verdade; o repo do armazém serve a própria raiz, então commitar um arquivo é publicar; no Next 16 um middleware.ts é ignorado em silêncio e a área de admin sobe pública com o build verde. Nada disso é regra de lint que se compra pronta. Transformar incidente em regra que sobrevive a quem estava lá é o trabalho.",
        role: "Autor — as regras e os incidentes de que elas vieram",
      },
      es: {
        tagline: "Escribir la trampa para que nadie caiga dos veces",
        summary:
          "Un conjunto compartido de reglas que consumen cuatro repositorios, donde cada regla existe porque algo ya salió mal: el .env del TMS apunta a producción, así que correr local empieza a llamar transportistas reales; el repo del almacén sirve su propia raíz, así que commitear un archivo es publicarlo; en Next 16 un middleware.ts se ignora en silencio y el área de admin sale pública con el build en verde. Nada de eso es una regla de lint que se compre hecha. Convertir un incidente en una regla que sobreviva a quien estuvo allí es el trabajo.",
        role: "Autor — las reglas y los incidentes de los que vinieron",
      },
    },
  },
  {
    slug: "van-booking",
    order: 7,
    domain: "tools",
    status: "shipped",
    featured: false,
    period: { from: "2024-11", to: "2024-11" },
    stack: ["javascript", "express", "sqlite"],
    hasCaseStudy: false,
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
          "Still working on the warehouse floor, I built a small browser app on Node, Express and SQLite so the van bookings stopped living in a spreadsheet that two people edited at once. It ran on one machine and it was enough. Everything above is the same instinct with more years on it: watch the manual work, then delete it.",
        role: "Built it on my own initiative, alongside the warehouse job",
      },
      pt: {
        tagline: "Onde tudo isso começou",
        summary:
          "Ainda no chão de armazém, montei um app de navegador em Node, Express e SQLite para o agendamento das vans parar de viver numa planilha que duas pessoas editavam ao mesmo tempo. Rodava numa máquina só, e era o suficiente. Tudo acima é o mesmo instinto com mais anos em cima: olhar o trabalho manual e apagar ele.",
        role: "Feito por iniciativa própria, em paralelo ao trabalho de armazém",
      },
      es: {
        tagline: "Donde empezó todo esto",
        summary:
          "Todavía en el piso del almacén, armé una pequeña app de navegador en Node, Express y SQLite para que la reserva de furgonetas dejara de vivir en una hoja de cálculo que dos personas editaban a la vez. Corría en una sola máquina y alcanzaba. Todo lo de arriba es el mismo instinto con más años encima: mirar el trabajo manual y borrarlo.",
        role: "Hecho por iniciativa propia, junto al trabajo de almacén",
      },
    },
  },
  {
    slug: "collectables-dwh",
    order: 8,
    domain: "academic",
    status: "study",
    featured: false,
    period: { from: "2026-03", to: "2026-04" },
    stack: ["php", "mysql"],
    hasCaseStudy: false,
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
        value: "8",
        label: {
          en: "charts, one JSON endpoint each",
          pt: "gráficos, um endpoint JSON cada",
          es: "gráficos, un endpoint JSON cada uno",
        },
      },
    ],
    copy: {
      en: {
        tagline:
          "A star schema, a dashboard over it, and three roles who each see something different",
        summary:
          "Coursework, but the shape of the real job: a sales data warehouse on a star schema, a reporting site that reads it through one connection function, and eight charts each split into a JSON endpoint and a page so the query never mixes with the presentation. A second pass added multi-role login with hashed passwords, an admin area, and pages only one store can reach.",
        role: "Diploma of IT, Mindroom Institute",
      },
      pt: {
        tagline:
          "Um star schema, um dashboard em cima dele, e três papéis que veem coisas diferentes",
        summary:
          "Trabalho de curso, mas com a forma do trabalho real: um data warehouse de vendas em star schema, um site de relatório que lê por uma única função de conexão, e oito gráficos cada um partido em endpoint JSON e página, para a consulta nunca se misturar com a apresentação. Uma segunda entrega acrescentou login multi-papel com senha hasheada, área de admin e páginas que só uma loja alcança.",
        role: "Diploma of IT, Mindroom Institute",
      },
      es: {
        tagline: "Un star schema, un dashboard encima, y tres roles que ven cosas distintas",
        summary:
          "Trabajo de curso, pero con la forma del trabajo real: un data warehouse de ventas en star schema, un sitio de reportes que lo lee mediante una única función de conexión, y ocho gráficos cada uno partido en endpoint JSON y página, para que la consulta nunca se mezcle con la presentación. Una segunda entrega agregó login multi-rol con contraseña hasheada, área de admin y páginas que solo una tienda alcanza.",
        role: "Diploma of IT, Mindroom Institute",
      },
    },
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);

export function projectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}
