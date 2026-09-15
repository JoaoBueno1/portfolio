import type { Dictionary } from "./dictionaries";

/** ESPANHOL. Precisa satisfazer `Dictionary` — ver `en.ts`. */
export const es: Dictionary = {
  meta: {
    title: "Joao Marcos Bueno — Desarrollador de software",
    description:
      "Construyo y opero el software que hace funcionar una operacion real de transporte y almacen en Australia: un TMS multi-transportista, una app para conductores y las herramientas de almacen detras de todo.",
  },
  nav: {
    work: "Proyectos",
    about: "Sobre mi",
    studies: "Formacion",
    skipToContent: "Saltar al contenido",
    language: "Idioma",
  },
  hero: {
    name: "Joao Marcos Bueno",
    role: "Desarrollador de software · Gold Coast, Australia",
    headline: "Construyo el software que hace funcionar una operacion logistica real.",
    body: "No son proyectos paralelos. Un sistema de gestion de transporte con varios transportistas, una app para conductores publicada en las tiendas y las herramientas de almacen por debajo — todo en produccion, usado cada dia habil, donde un clic equivocado reserva un envio facturable de verdad.",
    ctaWork: "Ver los proyectos",
    ctaContact: "Contactar",
  },
  footer: {
    builtWith: "Hecho con Next.js y Tailwind. El codigo de este sitio es publico.",
    rights: "Todos los derechos reservados.",
  },
};
