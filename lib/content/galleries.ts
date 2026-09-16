import an01 from "@/public/screenshots/g-an-01.webp";
import an02 from "@/public/screenshots/g-an-02.webp";
import burger01 from "@/public/screenshots/g-burger-01.webp";
import burger02 from "@/public/screenshots/g-burger-02.webp";
import burger03 from "@/public/screenshots/g-burger-03.webp";
import burger04 from "@/public/screenshots/g-burger-04.webp";
import burger05 from "@/public/screenshots/g-burger-05.webp";
import dive01 from "@/public/screenshots/g-dive-01.webp";
import dive02 from "@/public/screenshots/g-dive-02.webp";
import dive03 from "@/public/screenshots/g-dive-03.webp";
import driver01 from "@/public/screenshots/g-driver-01.webp";
import driver02 from "@/public/screenshots/g-driver-02.webp";
import driver03 from "@/public/screenshots/g-driver-03.webp";
import driver04 from "@/public/screenshots/g-driver-04.webp";
import driver05 from "@/public/screenshots/g-driver-05.webp";
import dwh01 from "@/public/screenshots/g-dwh-01.webp";
import dwh02 from "@/public/screenshots/g-dwh-02.webp";
import dwh03 from "@/public/screenshots/g-dwh-03.webp";
import dwh04 from "@/public/screenshots/g-dwh-04.webp";
import dwh05 from "@/public/screenshots/g-dwh-05.webp";
import dwh06 from "@/public/screenshots/g-dwh-06.webp";
import linux01 from "@/public/screenshots/g-linux-02.webp";
import linux02 from "@/public/screenshots/g-linux-03.webp";
import linux03 from "@/public/screenshots/g-linux-04.webp";
import linux04 from "@/public/screenshots/g-linux-05.webp";
import linux05 from "@/public/screenshots/g-linux-06.webp";
import linux06 from "@/public/screenshots/g-linux-07.webp";
import linux07 from "@/public/screenshots/g-linux-08.webp";
import portal01 from "@/public/screenshots/g-portal-01.webp";
import portal02 from "@/public/screenshots/g-portal-02.webp";
import portal03 from "@/public/screenshots/g-portal-03.webp";
import reel01 from "@/public/screenshots/g-reel-01.webp";
import reel02 from "@/public/screenshots/g-reel-02.webp";
import reel03 from "@/public/screenshots/g-reel-03.webp";
import starwars01 from "@/public/screenshots/g-starwars-01.webp";
import starwars02 from "@/public/screenshots/g-starwars-02.webp";
import starwars03 from "@/public/screenshots/g-starwars-03.webp";
import starwars04 from "@/public/screenshots/g-starwars-04.webp";
import ufo01 from "@/public/screenshots/g-ufo-01.webp";
import ufo02 from "@/public/screenshots/g-ufo-02.webp";
import wh01 from "@/public/screenshots/g-wh-01.webp";
import wh02 from "@/public/screenshots/g-wh-02.webp";
import wh03 from "@/public/screenshots/g-wh-03.webp";
import wh04 from "@/public/screenshots/g-wh-04.webp";
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
        page: t3("Step one, the main", "Passo um, o principal", "Paso uno, el principal"),
        note: t3(
          "Four steps with the progress shown at the top. Each choice has to survive the next page.",
          "Quatro passos com o progresso no topo. Cada escolha precisa sobreviver à próxima página.",
          "Cuatro pasos con el progreso arriba. Cada elección tiene que sobrevivir a la página siguiente.",
        ),
      },
      {
        src: burger02,
        page: t3(
          "Step two, the side",
          "Passo dois, o acompanhamento",
          "Paso dos, el acompañamiento",
        ),
        note: t3(
          "Back and next both work, and going back must not lose what was already chosen.",
          "Voltar e avançar funcionam, e voltar não pode perder o que já foi escolhido.",
          "Atrás y siguiente funcionan, y volver no puede perder lo ya elegido.",
        ),
      },
      {
        src: burger03,
        page: t3("Step three, the drink", "Passo três, a bebida", "Paso tres, la bebida"),
      },
      {
        src: burger04,
        page: t3("Step four, the dessert", "Passo quatro, a sobremesa", "Paso cuatro, el postre"),
      },
      {
        src: burger05,
        page: t3("The order summary", "O resumo do pedido", "El resumen del pedido"),
        note: t3(
          "Anything skipped reads as not chosen rather than quietly disappearing, which is the difference between a form and a record.",
          "O que foi pulado aparece como não escolhido em vez de sumir calado, que é a diferença entre um formulário e um registro.",
          "Lo omitido aparece como no elegido en vez de desaparecer callado, que es la diferencia entre un formulario y un registro.",
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
        page: t3("Signing in", "Entrando", "Iniciando sesión"),
        note: t3(
          "Driver ID, username and password, with biometric sign in once the device is trusted.",
          "ID do motorista, usuário e senha, com entrada por biometria depois que o aparelho é confiável.",
          "ID del conductor, usuario y contraseña, con acceso biométrico una vez que el dispositivo es de confianza.",
        ),
      },
      {
        src: driver02,
        page: t3("Before the van leaves", "Antes da van sair", "Antes de que salga la furgoneta"),
        note: t3(
          "Three checks before anything is marked in transit, because a run that starts wrong stays wrong all day.",
          "Três checagens antes de qualquer coisa ser marcada em trânsito, porque rota que começa errada continua errada o dia todo.",
          "Tres verificaciones antes de marcar nada en tránsito, porque una ruta que empieza mal sigue mal todo el día.",
        ),
      },
      {
        src: driver03,
        page: t3("The route for the day", "A rota do dia", "La ruta del día"),
        note: t3(
          "Stops in optimised order, drawn on the map the driver navigates from.",
          "Paradas na ordem otimizada, desenhadas no mapa por onde o motorista navega.",
          "Paradas en orden optimizado, dibujadas en el mapa por donde navega el conductor.",
        ),
      },
      {
        src: driver04,
        page: t3("Proof of delivery", "Comprovante de entrega", "Comprobante de entrega"),
        note: t3(
          "Scan the parcels first. Name, signature and photo are optional, the scan is not.",
          "Ler os volumes primeiro. Nome, assinatura e foto são opcionais, a leitura não.",
          "Escanear los bultos primero. Nombre, firma y foto son opcionales, el escaneo no.",
        ),
      },
      { src: driver05, page: t3("Settings", "Ajustes", "Ajustes") },
    ],
  },
  linux: {
    altTemplate: t3(
      "{page}, on a server built from scratch.",
      "{page}, num servidor montado do zero.",
      "{page}, en un servidor armado desde cero.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      {
        src: linux01,
        page: t3(
          "Installing the file sharing service",
          "Instalando o serviço de compartilhamento",
          "Instalando el servicio de compartición",
        ),
        note: t3(
          "A fresh server, updated, then given the one service it exists to run.",
          "Um servidor novo, atualizado, e então recebendo o único serviço que ele existe para rodar.",
          "Un servidor nuevo, actualizado, y luego con el único servicio que existe para ejecutar.",
        ),
      },
      {
        src: linux02,
        page: t3("Fixing the time zone", "Consertando o fuso", "Arreglando la zona horaria"),
        note: t3(
          "The first attempt fails because the zone name is case sensitive. The screen keeps the failure and the fix together, which is the useful part.",
          "A primeira tentativa falha porque o nome do fuso diferencia maiúscula. A tela guarda o erro e a correção juntos, que é a parte útil.",
          "El primer intento falla porque el nombre distingue mayúsculas. La pantalla guarda el error y la corrección juntos, que es lo útil.",
        ),
      },
      {
        src: linux03,
        page: t3(
          "Writing the shares by hand",
          "Escrevendo os compartilhamentos à mão",
          "Escribiendo los recursos a mano",
        ),
        note: t3(
          "Two shares in the config file, each with its own path, its own browse flag and its own write permission.",
          "Dois compartilhamentos no arquivo de configuração, cada um com caminho, visibilidade e permissão de escrita próprios.",
          "Dos recursos en el archivo de configuración, cada uno con su ruta, su visibilidad y su permiso de escritura.",
        ),
      },
      {
        src: linux04,
        page: t3("Restarting the service", "Reiniciando o serviço", "Reiniciando el servicio"),
      },
      {
        src: linux05,
        page: t3(
          "Opening it from another machine",
          "Abrindo de outra máquina",
          "Abriéndolo desde otra máquina",
        ),
        note: t3(
          "The share mounts in the file browser of a different operating system. That is the only proof that matters.",
          "O compartilhamento monta no navegador de arquivos de outro sistema operacional. É a única prova que importa.",
          "El recurso monta en el explorador de archivos de otro sistema operativo. Es la única prueba que importa.",
        ),
      },
      {
        src: linux06,
        page: t3(
          "Installing the web server",
          "Instalando o servidor web",
          "Instalando el servidor web",
        ),
      },
      {
        src: linux07,
        page: t3(
          "Serving a page of my own",
          "Servindo uma página minha",
          "Sirviendo una página propia",
        ),
        note: t3(
          "Not the default welcome page. A page written by hand, dropped into the web root, and answered by the server that was just built.",
          "Não é a página padrão de boas-vindas. É uma página escrita à mão, colocada na raiz do site, e respondida pelo servidor recém-montado.",
          "No es la página de bienvenida por defecto. Es una página escrita a mano, puesta en la raíz del sitio, y respondida por el servidor recién montado.",
        ),
      },
    ],
  },
  wh: {
    altTemplate: t3(
      "{page} of a warehouse operations tool.",
      "{page} de uma ferramenta de operação de armazém.",
      "{page} de una herramienta de operación de almacén.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      {
        src: wh01,
        page: t3("Floor dashboard", "Painel do chão", "Panel del piso"),
        note: t3(
          "Counters are secondary. The exceptions block is the point: those are the orders that cannot leave.",
          "Os contadores são secundários. O bloco de exceções é o ponto: são os pedidos que não conseguem sair.",
          "Los contadores son secundarios. El bloque de excepciones es el punto: son los pedidos que no pueden salir.",
        ),
      },
      {
        src: wh02,
        page: t3("Pick list", "Lista de separação", "Lista de picking"),
        note: t3(
          "Walk order follows the shelves, not the order lines, and a short line raises an exception instead of being quietly reduced.",
          "A ordem de caminhada segue as prateleiras, não as linhas do pedido, e uma linha em falta vira exceção em vez de ser reduzida em silêncio.",
          "El orden de recorrido sigue los estantes, no las líneas del pedido, y una línea corta genera una excepción en vez de reducirse en silencio.",
        ),
      },
      {
        src: wh03,
        page: t3("Replenishment", "Reposição", "Reposición"),
        note: t3(
          "Sorted by days of cover, not by quantity. Twenty units is plenty of one item and three days of another.",
          "Ordenado por dias de cobertura, não por quantidade. Vinte unidades é muito de um item e três dias de outro.",
          "Ordenado por días de cobertura, no por cantidad. Veinte unidades es mucho de un ítem y tres días de otro.",
        ),
      },
      {
        src: wh04,
        page: t3("Cyclic count", "Contagem cíclica", "Conteo cíclico"),
        note: t3(
          "A first count never writes to stock. A variance is counted again, by someone else, with the reason recorded.",
          "Uma primeira contagem nunca escreve no estoque. A diferença é contada de novo, por outra pessoa, com o motivo registrado.",
          "Un primer conteo nunca escribe en stock. La diferencia se cuenta de nuevo, por otra persona, con el motivo registrado.",
        ),
      },
    ],
  },
  an: {
    altTemplate: t3(
      "{page} of the analytics and AI layer.",
      "{page} da camada de analytics e IA.",
      "{page} de la capa de analytics e IA.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      {
        src: an01,
        page: t3("The monthly review", "A revisão mensal", "La revisión mensual"),
        note: t3(
          "Built around the decisions each area actually makes. The last column names why the month leaked, which is the only part anyone acts on.",
          "Construída em volta das decisões que cada área de fato toma. A última coluna diz por que o mês vazou, que é a única parte em que alguém age.",
          "Construida alrededor de las decisiones que cada área realmente toma. La última columna dice por qué se fugó el mes, que es la única parte donde alguien actúa.",
        ),
      },
      {
        src: an02,
        page: t3("Asking the data a question", "Perguntando aos dados", "Preguntando a los datos"),
        note: t3(
          "The second answer is a refusal. No catalogue query matches and the data sits outside the role, so it says it does not know rather than producing a plausible number.",
          "A segunda resposta é uma recusa. Nenhuma consulta do catálogo serve e o dado está fora do papel, então ele diz que não sabe em vez de produzir um número plausível.",
          "La segunda respuesta es un rechazo. Ninguna consulta del catálogo sirve y el dato queda fuera del rol, así que dice que no sabe en vez de producir un número plausible.",
        ),
      },
    ],
  },
  portal: {
    altTemplate: t3(
      "{page} of the access portal.",
      "{page} do portal de acesso.",
      "{page} del portal de acceso.",
    ),
    captionTemplate: t3("{page}.", "{page}.", "{page}."),
    items: [
      {
        src: portal01,
        page: t3("Signing in once", "Entrando uma vez", "Iniciando sesión una vez"),
        note: t3(
          "One door to the whole operation. The wordmark is blurred here; everything else is the real screen.",
          "Uma porta para a operação inteira. A marca está borrada aqui; o resto é a tela real.",
          "Una puerta a toda la operación. La marca está difuminada aquí; el resto es la pantalla real.",
        ),
      },
      {
        src: portal02,
        page: t3(
          "The modules you may reach",
          "Os módulos que você alcança",
          "Los módulos que puedes alcanzar",
        ),
        note: t3(
          "Two are separate systems reached by handoff, three live inside the portal, and the card says which. The difference changes what happens when you click.",
          "Dois são sistemas separados alcançados por handoff, três vivem dentro do portal, e o card diz qual é qual. A diferença muda o que acontece no clique.",
          "Dos son sistemas separados alcanzados por handoff, tres viven dentro del portal, y la tarjeta dice cuál es cuál. La diferencia cambia lo que pasa al hacer clic.",
        ),
      },
      {
        src: portal03,
        page: t3(
          "Asking across both systems",
          "Perguntando aos dois sistemas",
          "Preguntando a ambos sistemas",
        ),
        note: t3(
          "Every category carries the roles allowed to ask it. The empty state is honest too: with no assistant configured, it says so instead of pretending.",
          "Cada categoria carrega os papéis que podem perguntar. O estado vazio também é honesto: sem assistente configurado, ele avisa em vez de fingir.",
          "Cada categoría lleva los roles que pueden preguntar. El estado vacío también es honesto: sin asistente configurado, lo dice en vez de fingir.",
        ),
      },
    ],
  },
} satisfies Record<string, GalleryGroup>;

export type GalleryKey = keyof typeof GALLERIES;

export function gallery(key: GalleryKey): readonly Shot[] {
  return toShots(GALLERIES[key]);
}
