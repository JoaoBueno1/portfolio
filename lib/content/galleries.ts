import burger01 from "@/public/screenshots/g-burger-01.webp";
import burger05 from "@/public/screenshots/g-burger-05.webp";
import dive01 from "@/public/screenshots/g-dive-01.webp";
import dive02 from "@/public/screenshots/g-dive-02.webp";
import dive03 from "@/public/screenshots/g-dive-03.webp";
import dwh03 from "@/public/screenshots/g-dwh-03.webp";
import dwh04 from "@/public/screenshots/g-dwh-04.webp";
import dwh09 from "@/public/screenshots/g-dwh-09.webp";
import dwh12 from "@/public/screenshots/g-dwh-12.webp";
import dwh14 from "@/public/screenshots/g-dwh-14.webp";
import dwh15 from "@/public/screenshots/g-dwh-15.webp";
import reel01 from "@/public/screenshots/g-reel-01.webp";
import reel02 from "@/public/screenshots/g-reel-02.webp";
import reel03 from "@/public/screenshots/g-reel-03.webp";
import starwars01 from "@/public/screenshots/g-starwars-01.webp";
import starwars02 from "@/public/screenshots/g-starwars-02.webp";
import starwars04 from "@/public/screenshots/g-starwars-04.webp";
import starwars10 from "@/public/screenshots/g-starwars-10.webp";
import ufo01 from "@/public/screenshots/g-ufo-01.webp";
import ufo02 from "@/public/screenshots/g-ufo-02.webp";
import { type GalleryGroup, t3, toShots } from "./gallery";
import type { Shot } from "./types";

/**
 * AS GALERIAS DOS SITES.
 *
 * Todas tiradas com os sistemas RODANDO: banco importado num MariaDB
 * descartavel em container, PHP servido pelo binario embutido, cada tela
 * capturada em 1440x900 com fator 2.
 *
 * Sem risco de dado de cliente: os datasets sao publicos ou inventados.
 *
 * O site inteiro entra, nao uma amostra. Uma galeria de cinco telas nao
 * mostra um site de catorze paginas, e a extensao do trabalho E parte do que
 * se esta mostrando.
 */
export const GALLERIES = {
  dwh: {
    altTemplate: t3(
      "{page} screen of a sales data warehouse dashboard.",
      "Tela de {page} de um dashboard sobre data warehouse de vendas.",
      "Pantalla de {page} de un dashboard sobre data warehouse de ventas.",
    ),
    captionTemplate: t3(
      "{page}, read from the star schema through its own JSON endpoint.",
      "{page}, lida do star schema por um endpoint JSON próprio.",
      "{page}, leída del star schema por un endpoint JSON propio.",
    ),
    items: [
      {
        src: dwh03,
        page: t3("Dashboard", "Painel", "Panel"),
        note: t3(
          "Signed in as the admin. The other two roles see this without the last three tiles.",
          "Logado como admin. Os outros dois papéis veem isto sem os três últimos cartões.",
          "Con sesión de admin. Los otros dos roles ven esto sin las tres últimas tarjetas.",
        ),
      },
      { src: dwh04, page: t3("Total sales", "Vendas totais", "Ventas totales") },
      {
        src: dwh09,
        page: t3("Sales by day of week", "Vendas por dia da semana", "Ventas por día de la semana"),
      },
      {
        src: dwh12,
        page: t3(
          "Sales per product by store",
          "Venda por produto e loja",
          "Venta por producto y tienda",
        ),
        note: t3(
          "Height is what the franchise sold. Colour says which store sold it.",
          "A altura é o que a rede vendeu. A cor diz qual loja vendeu.",
          "La altura es lo que vendió la cadena. El color dice qué tienda lo vendió.",
        ),
      },
      {
        src: dwh14,
        page: t3("Product presence", "Presença de produto", "Presencia de producto"),
        note: t3(
          "A cell is presence, not volume. Fastest way to spot a gap in a range.",
          "A célula é presença, não volume. Jeito mais rápido de achar um furo no mix.",
          "La celda es presencia, no volumen. La forma más rápida de ver un hueco en el surtido.",
        ),
      },
      {
        src: dwh15,
        page: t3("Register user", "Cadastro de usuário", "Registro de usuario"),
        note: t3(
          "Admin only. The password is hashed before it reaches the table.",
          "Só admin. A senha é hasheada antes de chegar na tabela.",
          "Solo admin. La contraseña se hashea antes de llegar a la tabla.",
        ),
      },
    ],
  },
  ufo: {
    altTemplate: t3(
      "{page} screen of a public sightings archive.",
      "Tela de {page} de um arquivo público de avistamentos.",
      "Pantalla de {page} de un archivo público de avistamientos.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      { src: ufo01, page: t3("Home", "Home", "Home") },
      {
        src: ufo02,
        page: t3("Sightings table", "Tabela de avistamentos", "Tabla de avistamientos"),
        note: t3(
          "80,126 records, paginated on the server across 802 pages.",
          "80.126 registros, paginados no servidor em 802 páginas.",
          "80.126 registros, paginados en el servidor en 802 páginas.",
        ),
      },
    ],
  },
  starwars: {
    altTemplate: t3(
      "{page} section of a reference site built over a nine-table schema.",
      "Seção de {page} de um site de consulta sobre um schema de nove tabelas.",
      "Sección de {page} de un sitio de consulta sobre un esquema de nueve tablas.",
    ),
    captionTemplate: t3(
      "{page}, reading from its own table through the shared connection function.",
      "{page}, lendo da própria tabela pela função de conexão compartilhada.",
      "{page}, leyendo de su propia tabla por la función de conexión compartida.",
    ),
    items: [
      { src: starwars01, page: t3("Home", "Home", "Home") },
      { src: starwars02, page: t3("Jedi", "Jedi", "Jedi") },
      { src: starwars04, page: t3("Characters", "Personagens", "Personajes") },
      {
        src: starwars10,
        page: t3("Summary", "Resumo", "Resumen"),
        note: t3(
          "A row count per table. This is how you notice an import stopped half way.",
          "Contagem de linha por tabela. É assim que se percebe importação que parou no meio.",
          "Conteo de filas por tabla. Así se nota una importación que quedó a medias.",
        ),
      },
    ],
  },
  escape: {
    altTemplate: t3(
      "{page} page of a thirteen-page website for an escape room venue.",
      "Página de {page} de um site de treze páginas para um negócio de escape room.",
      "Página de {page} de un sitio de trece páginas para un negocio de escape room.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [],
  },
  marvel: {
    altTemplate: t3(
      "{page} page of a hand-written character site.",
      "Página de {page} de um site de personagens escrito à mão.",
      "Página de {page} de un sitio de personajes escrito a mano.",
    ),
    captionTemplate: t3(
      "{page}. Hand-written HTML and CSS, no framework, which was the constraint.",
      "{page}. HTML e CSS à mão, sem framework, que era a restrição.",
      "{page}. HTML y CSS a mano, sin framework, que era la restricción.",
    ),
    items: [],
  },
  burger: {
    altTemplate: t3(
      "{page} page of a menu site built with PHP includes.",
      "Página de {page} de um site de cardápio feito com includes em PHP.",
      "Página de {page} de un sitio de menú hecho con includes en PHP.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      { src: burger01, page: t3("Burgers", "Hambúrgueres", "Hamburguesas") },
      {
        src: burger05,
        page: t3("Your order", "Seu pedido", "Tu pedido"),
        note: t3(
          "The order survives the jump between pages, which was the whole exercise.",
          "O pedido sobrevive ao pulo entre páginas, que era o exercício inteiro.",
          "El pedido sobrevive al salto entre páginas, que era todo el ejercicio.",
        ),
      },
    ],
  },
  dive: {
    altTemplate: t3(
      "{page} page of a dive school site sharing one header and footer.",
      "Página de {page} de um site de escola de mergulho com header e footer compartilhados.",
      "Página de {page} de un sitio de escuela de buceo con header y footer compartidos.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      { src: dive01, page: t3("Home", "Home", "Home") },
      { src: dive02, page: t3("History", "História", "Historia") },
      { src: dive03, page: t3("Gallery", "Galeria", "Galería") },
    ],
  },
  reel: {
    altTemplate: t3(
      "{page} page of a film reference site with one page per subject.",
      "Página de {page} de um site de referência de cinema com uma página por pessoa.",
      "Página de {page} de un sitio de referencia de cine con una página por persona.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      { src: reel01, page: t3("Home", "Home", "Home") },
      { src: reel02, page: t3("Bruce Lee", "Bruce Lee", "Bruce Lee") },
      { src: reel03, page: t3("Jackie Chan", "Jackie Chan", "Jackie Chan") },
    ],
  },
} satisfies Record<string, GalleryGroup>;

export type GalleryKey = keyof typeof GALLERIES;

export function gallery(key: GalleryKey): readonly Shot[] {
  return toShots(GALLERIES[key]);
}
