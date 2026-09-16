import burger01 from "@/public/screenshots/g-burger-01.webp";
import burger02 from "@/public/screenshots/g-burger-02.webp";
import dive01 from "@/public/screenshots/g-dive-01.webp";
import dive02 from "@/public/screenshots/g-dive-02.webp";
import dive03 from "@/public/screenshots/g-dive-03.webp";
import driver01 from "@/public/screenshots/g-driver-01.webp";
import driver02 from "@/public/screenshots/g-driver-02.webp";
import driver03 from "@/public/screenshots/g-driver-03.webp";
import driver04 from "@/public/screenshots/g-driver-04.webp";
import dwh01 from "@/public/screenshots/g-dwh-01.webp";
import dwh02 from "@/public/screenshots/g-dwh-02.webp";
import dwh03 from "@/public/screenshots/g-dwh-03.webp";
import dwh04 from "@/public/screenshots/g-dwh-04.webp";
import dwh05 from "@/public/screenshots/g-dwh-05.webp";
import dwh06 from "@/public/screenshots/g-dwh-06.webp";
import reel01 from "@/public/screenshots/g-reel-01.webp";
import reel02 from "@/public/screenshots/g-reel-02.webp";
import reel03 from "@/public/screenshots/g-reel-03.webp";
import starwars01 from "@/public/screenshots/g-starwars-01.webp";
import starwars02 from "@/public/screenshots/g-starwars-02.webp";
import starwars03 from "@/public/screenshots/g-starwars-03.webp";
import starwars04 from "@/public/screenshots/g-starwars-04.webp";
import ufo01 from "@/public/screenshots/g-ufo-01.webp";
import ufo02 from "@/public/screenshots/g-ufo-02.webp";
import { type GalleryGroup, t3, toShots } from "./gallery";
import type { Shot } from "./types";

/**
 * AS GALERIAS.
 *
 * Capturadas com os sistemas RODANDO, e agora de PAGINA INTEIRA: antes eu
 * fotografava so a area visivel e a tabela terminava no meio de uma linha, o
 * que parecia corte de CSS e nao era.
 *
 * Teto de altura em duas vezes a largura. A tabela de oitenta mil registros
 * sai com quase quatro vezes, e uma imagem nessa proporcao fica ilegivel em
 * qualquer moldura. O que passa do teto e cortado no fim, nao no meio, e o
 * dialogo deixa a imagem alta ROLAR.
 *
 * As do app do motorista sao as da loja de aplicativo, e so as quatro que nao
 * tem endereco, nome, telefone nem marca. A tela de lista de paradas tem
 * endereco residencial real e NAO entra.
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
        src: dwh01,
        page: t3("Dashboard", "Painel", "Panel"),
        note: t3(
          "Signed in as the admin. The other two roles see this without the last three tiles.",
          "Logado como admin. Os outros dois papéis veem isto sem os três últimos cartões.",
          "Con sesión de admin. Los otros dos roles ven esto sin las tres últimas tarjetas.",
        ),
      },
      {
        src: dwh02,
        page: t3(
          "Total sales over time",
          "Vendas ao longo do tempo",
          "Ventas a lo largo del tiempo",
        ),
      },
      {
        src: dwh03,
        page: t3("Sales by day of week", "Vendas por dia da semana", "Ventas por día de la semana"),
      },
      {
        src: dwh04,
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
        src: dwh05,
        page: t3("Product presence", "Presença de produto", "Presencia de producto"),
        note: t3(
          "A cell is presence, not volume. Fastest way to spot a gap in a range.",
          "A célula é presença, não volume. Jeito mais rápido de achar um furo no mix.",
          "La celda es presencia, no volumen. La forma más rápida de ver un hueco en el surtido.",
        ),
      },
      {
        src: dwh06,
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
      "{page} of a public sightings archive.",
      "{page} de um arquivo público de avistamentos.",
      "{page} de un archivo público de avistamientos.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      { src: ufo01, page: t3("Home", "Home", "Home") },
      {
        src: ufo02,
        page: t3("The sightings table", "A tabela de avistamentos", "La tabla de avistamientos"),
        note: t3(
          "80,126 records across 802 pages, paginated on the server. Scroll to see how far the page runs.",
          "80.126 registros em 802 páginas, paginados no servidor. Role para ver até onde a página vai.",
          "80.126 registros en 802 páginas, paginados en el servidor. Desplaza para ver hasta dónde llega la página.",
        ),
      },
    ],
  },
  starwars: {
    altTemplate: t3(
      "{page} of a reference archive built over a nine-table schema.",
      "{page} de um arquivo de consulta sobre um schema de nove tabelas.",
      "{page} de un archivo de consulta sobre un esquema de nueve tablas.",
    ),
    captionTemplate: t3(
      "{page}, loaded live from its own table.",
      "{page}, carregada ao vivo da própria tabela.",
      "{page}, cargada en vivo de su propia tabla.",
    ),
    items: [
      { src: starwars01, page: t3("Home", "Home", "Home") },
      { src: starwars02, page: t3("Jedi section", "Seção Jedi", "Sección Jedi") },
      {
        src: starwars03,
        page: t3("Characters section", "Seção de personagens", "Sección de personajes"),
      },
      {
        src: starwars04,
        page: t3("Summary", "Resumo", "Resumen"),
        note: t3(
          "Tabs switch without reloading, and the row count per table is how you notice a half-finished import.",
          "As abas trocam sem recarregar, e a contagem por tabela é como se percebe importação pela metade.",
          "Las pestañas cambian sin recargar, y el conteo por tabla es como se nota una importación a medias.",
        ),
      },
    ],
  },
  burger: {
    altTemplate: t3(
      "{page} of a four-step ordering flow.",
      "{page} de um fluxo de pedido em quatro passos.",
      "{page} de un flujo de pedido en cuatro pasos.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      {
        src: burger01,
        page: t3(
          "Step one, pick the burger",
          "Passo um, escolher o lanche",
          "Paso uno, elegir la hamburguesa",
        ),
        note: t3(
          "Four steps with a progress indicator. Each choice has to survive the next page.",
          "Quatro passos com indicador de progresso. Cada escolha precisa sobreviver à próxima página.",
          "Cuatro pasos con indicador de progreso. Cada elección tiene que sobrevivir a la página siguiente.",
        ),
      },
      {
        src: burger02,
        page: t3("The order summary", "O resumo do pedido", "El resumen del pedido"),
        note: t3(
          "Anything skipped shows as not chosen rather than silently disappearing.",
          "O que foi pulado aparece como não escolhido em vez de sumir em silêncio.",
          "Lo omitido aparece como no elegido en vez de desaparecer en silencio.",
        ),
      },
    ],
  },
  dive: {
    altTemplate: t3(
      "{page} of a dive school site.",
      "{page} de um site de escola de mergulho.",
      "{page} de un sitio de escuela de buceo.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      { src: dive01, page: t3("Home", "Home", "Home") },
      {
        src: dive02,
        page: t3(
          "A short history of the sport",
          "Uma breve história do esporte",
          "Una breve historia del deporte",
        ),
        note: t3(
          "A dated timeline running from 1535, written rather than filled with placeholder text.",
          "Uma linha do tempo datada começando em 1535, escrita de verdade e não preenchida com texto de rascunho.",
          "Una línea de tiempo fechada desde 1535, escrita de verdad y no rellenada con texto de relleno.",
        ),
      },
      { src: dive03, page: t3("Gallery", "Galeria", "Galería") },
    ],
  },
  reel: {
    altTemplate: t3(
      "{page} of a film reference site.",
      "{page} de um site de referência de cinema.",
      "{page} de un sitio de referencia de cine.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      {
        src: reel01,
        page: t3("Home", "Home", "Home"),
        note: t3(
          "Six performers, each with their own page. The layout repeats so the site reads as one thing.",
          "Seis artistas, cada um com a própria página. O layout se repete, então o site lê como uma coisa só.",
          "Seis artistas, cada uno con su página. El layout se repite, así el sitio se lee como una sola cosa.",
        ),
      },
      {
        src: reel02,
        page: t3("A performer profile", "Um perfil de artista", "Un perfil de artista"),
        note: t3(
          "Biography plus a dated filmography, both written rather than borrowed.",
          "Biografia mais filmografia datada, as duas escritas e não emprestadas.",
          "Biografía más filmografía fechada, ambas escritas y no prestadas.",
        ),
      },
      { src: reel03, page: t3("A second profile", "Um segundo perfil", "Un segundo perfil") },
    ],
  },
  driver: {
    altTemplate: t3(
      "{page} of the driver app, on a phone.",
      "{page} do app do motorista, num celular.",
      "{page} de la app del conductor, en un teléfono.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      {
        src: driver01,
        page: t3("The route for the day", "A rota do dia", "La ruta del día"),
        note: t3(
          "Stops in optimised order, drawn on the map the driver navigates from.",
          "Paradas na ordem otimizada, desenhadas no mapa por onde o motorista navega.",
          "Paradas en orden optimizado, dibujadas en el mapa por donde navega el conductor.",
        ),
      },
      {
        src: driver02,
        page: t3("Starting a run", "Começando a rota", "Iniciando la ruta"),
        note: t3(
          "Three checks before anything is marked in transit, because a run that starts wrong stays wrong.",
          "Três checagens antes de qualquer coisa ser marcada em trânsito, porque rota que começa errada continua errada.",
          "Tres verificaciones antes de marcar nada en tránsito, porque una ruta que empieza mal sigue mal.",
        ),
      },
      {
        src: driver03,
        page: t3("Proof of delivery", "Comprovante de entrega", "Comprobante de entrega"),
        note: t3(
          "Scan the parcels first. Name, signature and photo are optional, the scan is not.",
          "Ler os volumes primeiro. Nome, assinatura e foto são opcionais, a leitura não.",
          "Escanear los bultos primero. Nombre, firma y foto son opcionales, el escaneo no.",
        ),
      },
      { src: driver04, page: t3("Settings", "Ajustes", "Ajustes") },
    ],
  },
} satisfies Record<string, GalleryGroup>;

export type GalleryKey = keyof typeof GALLERIES;

export function gallery(key: GalleryKey): readonly Shot[] {
  return toShots(GALLERIES[key]);
}
