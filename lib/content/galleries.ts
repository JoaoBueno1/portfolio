import burger01 from "@/public/screenshots/g-burger-01.webp";
import burger02 from "@/public/screenshots/g-burger-02.webp";
import burger03 from "@/public/screenshots/g-burger-03.webp";
import burger04 from "@/public/screenshots/g-burger-04.webp";
import burger05 from "@/public/screenshots/g-burger-05.webp";
import dive01 from "@/public/screenshots/g-dive-01.webp";
import dive02 from "@/public/screenshots/g-dive-02.webp";
import dive03 from "@/public/screenshots/g-dive-03.webp";
import dive04 from "@/public/screenshots/g-dive-04.webp";
import dwh01 from "@/public/screenshots/g-dwh-01.webp";
import dwh02 from "@/public/screenshots/g-dwh-02.webp";
import dwh03 from "@/public/screenshots/g-dwh-03.webp";
import dwh04 from "@/public/screenshots/g-dwh-04.webp";
import dwh05 from "@/public/screenshots/g-dwh-05.webp";
import dwh06 from "@/public/screenshots/g-dwh-06.webp";
import dwh07 from "@/public/screenshots/g-dwh-07.webp";
import dwh08 from "@/public/screenshots/g-dwh-08.webp";
import dwh09 from "@/public/screenshots/g-dwh-09.webp";
import dwh10 from "@/public/screenshots/g-dwh-10.webp";
import dwh11 from "@/public/screenshots/g-dwh-11.webp";
import dwh12 from "@/public/screenshots/g-dwh-12.webp";
import dwh13 from "@/public/screenshots/g-dwh-13.webp";
import dwh14 from "@/public/screenshots/g-dwh-14.webp";
import dwh15 from "@/public/screenshots/g-dwh-15.webp";
import dwh16 from "@/public/screenshots/g-dwh-16.webp";
import escape01 from "@/public/screenshots/g-escape-01.webp";
import escape02 from "@/public/screenshots/g-escape-02.webp";
import escape03 from "@/public/screenshots/g-escape-03.webp";
import escape04 from "@/public/screenshots/g-escape-04.webp";
import escape05 from "@/public/screenshots/g-escape-05.webp";
import escape06 from "@/public/screenshots/g-escape-06.webp";
import escape07 from "@/public/screenshots/g-escape-07.webp";
import escape08 from "@/public/screenshots/g-escape-08.webp";
import escape09 from "@/public/screenshots/g-escape-09.webp";
import escape10 from "@/public/screenshots/g-escape-10.webp";
import escape11 from "@/public/screenshots/g-escape-11.webp";
import escape12 from "@/public/screenshots/g-escape-12.webp";
import escape13 from "@/public/screenshots/g-escape-13.webp";
import escape14 from "@/public/screenshots/g-escape-14.webp";
import marvel01 from "@/public/screenshots/g-marvel-01.webp";
import marvel02 from "@/public/screenshots/g-marvel-02.webp";
import marvel03 from "@/public/screenshots/g-marvel-03.webp";
import marvel04 from "@/public/screenshots/g-marvel-04.webp";
import marvel05 from "@/public/screenshots/g-marvel-05.webp";
import marvel06 from "@/public/screenshots/g-marvel-06.webp";
import reel01 from "@/public/screenshots/g-reel-01.webp";
import reel02 from "@/public/screenshots/g-reel-02.webp";
import reel03 from "@/public/screenshots/g-reel-03.webp";
import reel04 from "@/public/screenshots/g-reel-04.webp";
import reel05 from "@/public/screenshots/g-reel-05.webp";
import reel06 from "@/public/screenshots/g-reel-06.webp";
import reel07 from "@/public/screenshots/g-reel-07.webp";
import starwars01 from "@/public/screenshots/g-starwars-01.webp";
import starwars02 from "@/public/screenshots/g-starwars-02.webp";
import starwars03 from "@/public/screenshots/g-starwars-03.webp";
import starwars04 from "@/public/screenshots/g-starwars-04.webp";
import starwars05 from "@/public/screenshots/g-starwars-05.webp";
import starwars06 from "@/public/screenshots/g-starwars-06.webp";
import starwars07 from "@/public/screenshots/g-starwars-07.webp";
import starwars08 from "@/public/screenshots/g-starwars-08.webp";
import starwars09 from "@/public/screenshots/g-starwars-09.webp";
import starwars10 from "@/public/screenshots/g-starwars-10.webp";
import ufo01 from "@/public/screenshots/g-ufo-01.webp";
import ufo02 from "@/public/screenshots/g-ufo-02.webp";
import ufo03 from "@/public/screenshots/g-ufo-03.webp";
import ufo04 from "@/public/screenshots/g-ufo-04.webp";
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
      { src: dwh01, page: t3("Public home", "Home pública", "Home pública") },
      { src: dwh02, page: t3("Login", "Login", "Login") },
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
      { src: dwh05, page: t3("Top products", "Produtos mais vendidos", "Productos más vendidos") },
      { src: dwh06, page: t3("Sales by category", "Vendas por categoria", "Ventas por categoría") },
      { src: dwh07, page: t3("Sales by store", "Vendas por loja", "Ventas por tienda") },
      { src: dwh08, page: t3("Payment methods", "Formas de pagamento", "Formas de pago") },
      {
        src: dwh09,
        page: t3("Sales by day of week", "Vendas por dia da semana", "Ventas por día de la semana"),
      },
      { src: dwh10, page: t3("Hourly sales", "Vendas por hora", "Ventas por hora") },
      { src: dwh11, page: t3("New customers", "Clientes novos", "Clientes nuevos") },
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
        src: dwh13,
        page: t3("Store comparison", "Comparação entre lojas", "Comparación entre tiendas"),
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
      { src: dwh16, page: t3("Add store", "Cadastro de loja", "Alta de tienda") },
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
      {
        src: ufo03,
        page: t3("Sign in", "Entrar", "Entrar"),
        note: t3(
          "Everything past here needs a login. Passwords are hashed, not stored.",
          "Daqui para dentro precisa de login. A senha é hasheada, não guardada.",
          "De aquí en adelante hace falta login. La contraseña se hashea, no se guarda.",
        ),
      },
      { src: ufo04, page: t3("Contact", "Contato", "Contacto") },
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
      { src: starwars03, page: t3("Sith", "Sith", "Sith") },
      { src: starwars04, page: t3("Characters", "Personagens", "Personajes") },
      { src: starwars05, page: t3("Ships", "Naves", "Naves") },
      { src: starwars06, page: t3("Planets", "Planetas", "Planetas") },
      { src: starwars07, page: t3("Alien races", "Raças alienígenas", "Razas alienígenas") },
      { src: starwars08, page: t3("The Force", "A Força", "La Fuerza") },
      { src: starwars09, page: t3("Movies", "Filmes", "Películas") },
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
    items: [
      { src: escape01, page: t3("Home", "Home", "Home") },
      {
        src: escape02,
        page: t3("Experiences", "Experiências", "Experiencias"),
        note: t3(
          "The page the client cared about most, because it is the one that sells.",
          "A página com que o cliente mais se importava, porque é a que vende.",
          "La página que más le importaba al cliente, porque es la que vende.",
        ),
      },
      {
        src: escape03,
        page: t3("Hacker room", "Sala Hacker", "Sala Hacker"),
        note: t3(
          "Seven room pages, same template, different content. That is the point of a template.",
          "Sete páginas de sala, mesmo template, conteúdo diferente. É esse o ponto de um template.",
          "Siete páginas de sala, mismo template, contenido distinto. Ese es el punto de un template.",
        ),
      },
      { src: escape04, page: t3("Basement room", "Sala Porão", "Sala Sótano") },
      { src: escape05, page: t3("Fenn's Gold room", "Sala Fenn's Gold", "Sala Fenn's Gold") },
      {
        src: escape06,
        page: t3("Missing Musician room", "Sala Músico Desaparecido", "Sala Músico Desaparecido"),
      },
      {
        src: escape07,
        page: t3("Reverse Curse room", "Sala Maldição Reversa", "Sala Maldición Inversa"),
      },
      { src: escape08, page: t3("Study room", "Sala Escritório", "Sala Estudio") },
      { src: escape09, page: t3("The Cure room", "Sala A Cura", "Sala La Cura") },
      { src: escape10, page: t3("Gift certificates", "Vale-presente", "Vales de regalo") },
      { src: escape11, page: t3("Merchandise", "Loja", "Tienda") },
      { src: escape12, page: t3("Find us", "Como chegar", "Cómo llegar") },
      { src: escape13, page: t3("About", "Sobre", "Sobre") },
      { src: escape14, page: t3("Contact", "Contato", "Contacto") },
    ],
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
    items: [
      { src: marvel01, page: t3("Home", "Home", "Home") },
      { src: marvel02, page: t3("Iron Man", "Homem de Ferro", "Iron Man") },
      { src: marvel03, page: t3("Thor", "Thor", "Thor") },
      { src: marvel04, page: t3("Captain America", "Capitão América", "Capitán América") },
      { src: marvel05, page: t3("Spider-Man", "Homem-Aranha", "Spider-Man") },
      { src: marvel06, page: t3("Contact", "Contato", "Contacto") },
    ],
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
      { src: burger02, page: t3("Sides", "Acompanhamentos", "Acompañamientos") },
      { src: burger03, page: t3("Drinks", "Bebidas", "Bebidas") },
      { src: burger04, page: t3("Desserts", "Sobremesas", "Postres") },
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
      { src: dive04, page: t3("Contact", "Contato", "Contacto") },
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
      { src: reel04, page: t3("Chuck Norris", "Chuck Norris", "Chuck Norris") },
      {
        src: reel05,
        page: t3("Jean-Claude Van Damme", "Jean-Claude Van Damme", "Jean-Claude Van Damme"),
      },
      { src: reel06, page: t3("Brandon Lee", "Brandon Lee", "Brandon Lee") },
      { src: reel07, page: t3("Sammo Hung", "Sammo Hung", "Sammo Hung") },
    ],
  },
} satisfies Record<string, GalleryGroup>;

export type GalleryKey = keyof typeof GALLERIES;

export function gallery(key: GalleryKey): readonly Shot[] {
  return toShots(GALLERIES[key]);
}
