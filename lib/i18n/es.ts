import type { Dictionary } from "./dictionaries";

/**
 * ESPANHOL. Precisa satisfazer `Dictionary` — ver `en.ts`.
 *
 * ACENTO E SIGNO DE ABERTURA OBRIGATORIOS NOS VALORES. Pergunta em espanhol
 * sem `¿` e exclamacao sem `¡` sao erro de ortografia, nao estilo.
 */
export const es: Dictionary = {
  meta: {
    title: "João Marcos Bueno — Desarrollador de software",
    description:
      "Construyo y opero el software que hace funcionar una operación real de transporte y almacén en Australia: un TMS multi-transportista, una app para conductores y las herramientas de almacén detrás de todo.",
    workTitle: "Proyectos — João Marcos Bueno",
    workDescription:
      "Cada sistema que he construido y operado: un sistema de transporte, una app para conductores, herramientas de almacén, un portal de autenticación y el trabajo académico detrás.",
  },
  nav: {
    work: "Proyectos",
    about: "Sobre mí",
    studies: "Formación",
    skipToContent: "Saltar al contenido",
    language: "Idioma",
    theme: "Cambiar el tema",
    home: "Inicio",
  },
  hero: {
    name: "João Marcos Bueno",
    role: "Desarrollador de software · Gold Coast, Australia",
    headline: "Construyo el software que hace funcionar una operación logística real.",
    body: "No son proyectos paralelos. Un sistema de transporte que cotiza cuatro transportistas y reserva envíos reales, una app para conductores dentro de las furgonetas y las herramientas de almacén por debajo — todo en producción, usado cada día hábil, donde un clic equivocado cuesta dinero.",
    ctaWork: "Ver los proyectos",
    ctaContact: "Contactar",
  },
  stats: {
    systems: "sistemas en producción",
    commits: "commits sumando los tres",
    integrations: "sistemas externos integrados",
    since: "dentro de la operación desde",
  },
  stack: {
    title: "Lo que realmente he usado",
    lead: "Solo lo que aparece en algún proyecto de este sitio. Un muro de logos es una afirmación, y cada uno de estos tiene algo detrás.",
    groups: {
      language: "Lenguajes",
      framework: "Frameworks y librerías",
      data: "Datos",
      ops: "Nube y operación",
      integration: "Integraciones",
    },
    usedIn: "Usado en",
  },
  work: {
    title: "Los proyectos",
    lead: "Ordenados por lo que cargan, no por cuándo ocurrieron.",
    seeAll: "Ver todos los proyectos",
    filterLabel: "Filtrar por tipo",
    empty: "Nada en este filtro todavía.",
    readCase: "Leer el case study",
    casePending: "Case study en construcción",
    domains: {
      all: "Todos",
      production: "Sistemas en producción",
      mobile: "Móvil",
      tools: "Herramientas internas",
      platform: "Plataforma e IA",
      academic: "Formación",
    },
    status: {
      live: "En producción",
      shipped: "Entregado",
      parked: "Detenido",
      study: "Trabajo de curso",
    },
    present: "hoy",
    noShot: "Sin captura publicada — las capturas reales contienen datos de clientes.",
  },
  how: {
    title: "Cómo trabajo",
    lead: "Cuatro cosas que me gustaría que alguien verificara, con dónde verificarlas.",
    items: {
      honest: {
        title: "Mi documentación dice lo que NO existe",
        body: "Cada README que escribo tiene una sección que lista lo roto, lo que falta y lo detenido, con la evidencia. Uno de ellos abre corrigiendo al README anterior, que describía un directorio que nunca existió. Escribirlo no cuesta nada y le ahorra una semana a la siguiente persona.",
      },
      incident: {
        title: "Cada regla dura apunta al día en que dolió",
        body: "Los repositorios guardan informes de incidentes, y las reglas los citan por fecha. Fijar una sesión de solo lectura contra un pooler en modo transacción tumbó producción una vez; hoy eso es una regla escrita, no algo que alguien recuerda.",
      },
      floor: {
        title: "Los requisitos los levanté estando ahí",
        body: "Hice pick y pack en ese almacén durante tres años antes de escribir software para él. Cada función del TMS está documentada por el trabajo manual que reemplaza, porque yo hice ese trabajo manual.",
      },
      lead: {
        title: "He dirigido personas y dirijo agentes",
        body: "Al principio el desarrollo tuvo equipo — un diseñador y otras personas, organizados en Notion, en un trabajo pagado — y yo definía el alcance y revisaba lo que volvía. También guié a un pasante haciendo investigación de competencia y comparativa de producto. Hoy buena parte de la delegación es a agentes de IA, y exige lo mismo: escribir la regla y después revisar el resultado.",
      },
    },
  },
  timeline: {
    title: "La versión corta",
    entries: {
      bank: "Banca minorista en Bradesco, en Brasil. KYC, compliance, y cuatro años explicando un sistema a quien lo estaba usando.",
      floor:
        "Piso de almacén en Australia. Picking, packing, pedidos de proyecto — y poco a poco convirtiéndome en la persona a quien preguntaban cuando el software hacía algo raro.",
      firstApp:
        "Lo primero que construí: una pequeña app en Node para que la reserva de furgonetas dejara de vivir en una hoja compartida.",
      tms: "Empieza el TMS. Transportistas, etiquetas, despacho, rastreo, conciliación — y la app del conductor al lado.",
      portal:
        "Un login delante de los tres sistemas, y un módulo de IA que solo puede ejecutar consultas escritas a mano.",
    },
  },
  cta: {
    title: "¿Buscas a alguien que ya puso la cosa a funcionar en producción?",
    body: "Estoy abierto a conversar sobre puestos de software en Australia. La forma más rápida de saber si encajo es preguntarme por una decisión de cualquiera de los sistemas de arriba.",
    email: "Escribirme",
    linkedin: "LinkedIn",
    github: "GitHub",
  },
  footer: {
    builtWith: "Hecho con Next.js y Tailwind.",
    sourceLink: "El código de este sitio es público.",
    rights: "Todos los derechos reservados.",
    noData:
      "Ningún dato de cliente aparece en este sitio. Las capturas se hacen contra datos sembrados y ficticios.",
  },
};
