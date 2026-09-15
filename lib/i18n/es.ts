import type { Dictionary } from "./dictionaries";

/** ESPANHOL. Acento e signo de abertura obrigatorios. Ver `en.ts`. */
export const es: Dictionary = {
  meta: {
    aboutTitle: "João Marcos Bueno",
    aboutDescription:
      "Desarrollador de software en Gold Coast, Australia. Construyo y opero los sistemas de una operación real de transporte y almacén.",
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
    role: "Desarrollador de software",
    location: "Gold Coast, Australia",
    photoAlt: "Foto de perfil",
    open: "Abrir menú",
    close: "Cerrar menú",
  },
  about: {
    title: "Sobre mí",
    intro:
      "Soy desarrollador de software en Gold Coast, Australia. Trabajo dentro de una operación de transporte y almacén y construyo los sistemas sobre los que funciona: un sistema de transporte, una app para conductores y las herramientas que usa el piso del almacén. Empecé en ese piso en 2023, y por eso casi cada función que entrego reemplaza algo que yo hacía a mano.",
    nowTitle: "Ahora",
    now: "Construyendo y operando tres sistemas en producción, y estudiando lo que pida el próximo problema.",
    pathTitle: "Cómo llegué aquí",
    languagesTitle: "Idiomas",
    languages: "Portugués (nativo), inglés (profesional), español (lectura y escritura).",
    educationTitle: "Formación",
    education:
      "Diploma of Information Technology, Database and Data Management. Mindroom Institute, Queensland, 2024 a 2026.",
    timeline: {
      bank: "Ejecutivo de cuentas en Bradesco, Brasil. KYC, compliance, y cuatro años explicando un sistema a la persona que tenía enfrente.",
      floor:
        "Piso de almacén en Australia. Picking, packing y pedidos de proyecto, y poco a poco convirtiéndome en la persona a quien preguntaban cuando el software hacía algo raro.",
      firstApp:
        "Lo primero que construí. Una app pequeña en Node para que la reserva de furgonetas dejara de vivir en una hoja compartida.",
      tms: "Empieza el TMS. Transportistas, etiquetas, despacho, rastreo y conciliación de facturas, con la app del conductor al lado.",
      portal:
        "Un login delante de los tres sistemas, y un módulo de IA limitado a consultas escritas a mano.",
    },
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
    lead: "Haz clic en una tarjeta para abrirla.",
    inProduction: "En producción",
    other: "Herramientas, móvil y trabajo de curso",
    close: "Cerrar",
    roleLabel: "Rol",
    periodLabel: "Período",
    stackLabel: "Stack",
    previous: "Proyecto anterior",
    next: "Proyecto siguiente",
    status: {
      live: "En producción",
      shipped: "Entregado",
      parked: "Detenido",
      study: "Trabajo de curso",
    },
    domains: {
      production: "Producción",
      mobile: "Móvil",
      tools: "Herramientas internas",
      platform: "Plataforma",
      academic: "Formación",
    },
    present: "hoy",
    noShot: "Sin captura publicada. Las capturas reales contienen datos de clientes.",
  },
  footer: {
    noData:
      "Ningún dato de cliente aparece en este sitio. Las capturas usan datos sembrados y ficticios.",
    source: "Código",
  },
};
