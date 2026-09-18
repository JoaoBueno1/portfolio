import type { Dictionary } from "./dictionaries";

/** ESPANHOL. Acento e signo de abertura obrigatorios. Ver `en.ts`. */
export const es: Dictionary = {
  meta: {
    aboutTitle: "João Marcos Bueno",
    aboutDescription:
      "Desarrollador full stack en Gold Coast, Australia. Construyo y opero los sistemas de una operación real de transporte y almacén.",
    skillsTitle: "Skills",
    skillsDescription:
      "Lenguajes, frameworks, datos, infraestructura y herramientas, con cuánto uso realmente cada una.",
    softTitle: "Soft skills",
    softDescription:
      "Comunicación, liderazgo, investigación y feedback, con dónde ocurrió cada una.",
    projectsTitle: "Proyectos",
    projectsDescription: "Sistemas en producción, herramientas internas, móvil y trabajo de curso.",
  },
  nav: {
    about: "Sobre mí",
    skills: "Skills",
    soft: "Soft skills",
    projects: "Proyectos",
    skipToContent: "Saltar al contenido",
    language: "Idioma",
    theme: "Cambiar el tema",
    menu: "Menú",
    contact: "Contacto",
  },
  sidebar: {
    role: "Desarrollador full stack",
    location: "Gold Coast, Australia",
    photoAlt: "Foto de perfil",
    open: "Abrir menú",
    close: "Cerrar menú",
  },
  stats: {
    systems: "sistemas en producción",
    commits: "commits sumando los tres",
    integrations: "sistemas externos integrados",
    since: "dentro de la operación desde",
  },
  about: {
    title: "Sobre mí",
    intro: [
      "Casi todo lo que construyo tiene una factura detrás. Un clic equivocado en el sistema de transporte reserva un envío real, y alguien lo paga. Eso cambia la forma de escribir código.",
      "Soy desarrollador full stack en Gold Coast. Python y Flask atrás, React y Next adelante, React Native en la mano del conductor, Postgres debajo, y nueve sistemas externos conectados: cuatro transportistas, un ERP, mapas, notificaciones push, facturación. Cerca de 1.100 commits solo en el sistema de transporte.",
      "No llegué aquí desde un título en ciencias de la computación. Llegué del piso del almacén, donde hice picking y packing durante tres años y aprendí exactamente qué parte del día se desperdiciaba, porque yo era quien la desperdiciaba. Casi cada función que entregué desde entonces reemplaza algo que yo hacía a mano.",
      "Antes de Australia, cuatro años atendiendo en un banco en Brasil. KYC, compliance, y una fila de gente que necesitaba algo complicado explicado una sola vez, con claridad. Resultó ser el entrenamiento más útil que tuve.",
      "Estoy abierto a puestos full stack en Australia. La forma más rápida de saber si encajo es preguntarme por una decisión de cualquiera de los sistemas de aquí. Te cuento por qué cada uno es como es, incluidos los que hice mal.",
    ],
    nowTitle: "Ahora",
    now: "Construyendo y operando tres sistemas en producción, y estudiando lo que pida el próximo problema.",
    languagesTitle: "Idiomas",
    languages: "Portugués (nativo), inglés (profesional).",
  },
  skills: {
    title: "Skills",
    lead: "Lo que he usado en algo real. Ordenado por cuánto lo uso.",
    scaleNote:
      "Cinco significa que lo abro casi todos los días. Uno significa que lo he usado lo suficiente para resolver.",
    groups: {
      language: "Lenguajes",
      backend: "Backend",
      frontend: "Frontend",
      data: "Datos",
      ops: "Nube, despliegue y operación",
      tools: "Integraciones y herramientas",
    },
    levelLabel: "Nivel",
  },
  soft: {
    title: "Soft skills",
    lead: "Cuatro años atendiendo en el banco, tres en el piso del almacén, y un equipo pequeño que dirigir. De ahí salió esto.",
  },
  projects: {
    title: "Proyectos",
    lead: "",
    inProduction: "Funcionando en producción",
    other: "Trabajo anterior y formación",
    close: "Cerrar",
    roleLabel: "Rol",
    periodLabel: "Período",
    stackLabel: "Stack",
    previous: "Proyecto anterior",
    next: "Proyecto siguiente",
    previousShot: "Captura anterior",
    zoom: "Abrir esta captura a tamaño real",
    closeZoom: "Cerrar la vista a tamaño real",
    shotPosition: "Captura {n} de {total}",
    nextShot: "Captura siguiente",
    shotCount: "Captura",
    status: {
      live: "En producción",
      building: "En construcción",
      shipped: "Entregado",
      study: "Trabajo de curso",
    },
    domains: {
      production: "Producción",
      mobile: "Móvil",
      tools: "Herramientas internas",
      data: "Datos y BI",
      platform: "Plataforma",
      academic: "Formación",
    },
    present: "hoy",
    noShot: "Sin captura publicada. Las capturas reales contienen datos de clientes.",
  },
  footer: {
    source: "Código",
  },
};
