import ai01 from "@/public/screenshots/g-ai-01.webp";
import ai02 from "@/public/screenshots/g-ai-02.webp";
import ai03 from "@/public/screenshots/g-ai-03.webp";
import api01 from "@/public/screenshots/g-api-01.webp";
import api02 from "@/public/screenshots/g-api-02.webp";
import api03 from "@/public/screenshots/g-api-03.webp";
import api04 from "@/public/screenshots/g-api-04.webp";
import burger01 from "@/public/screenshots/g-burger-01.webp";
import burger02 from "@/public/screenshots/g-burger-02.webp";
import burger03 from "@/public/screenshots/g-burger-03.webp";
import burger04 from "@/public/screenshots/g-burger-04.webp";
import burger05 from "@/public/screenshots/g-burger-05.webp";
import dive01 from "@/public/screenshots/g-dive-01.webp";
import dive02 from "@/public/screenshots/g-dive-02.webp";
import dive03 from "@/public/screenshots/g-dive-03.webp";
import driver00 from "@/public/screenshots/g-driver-00.webp";
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
import ops00 from "@/public/screenshots/g-ops-00.webp";
import ops01 from "@/public/screenshots/g-ops-01.webp";
import ops02 from "@/public/screenshots/g-ops-02.webp";
import ops03 from "@/public/screenshots/g-ops-03.webp";
import ops04 from "@/public/screenshots/g-ops-04.webp";
import ops05 from "@/public/screenshots/g-ops-05.webp";
import ops06 from "@/public/screenshots/g-ops-06.webp";
import ops07 from "@/public/screenshots/g-ops-07.webp";
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
import { type GalleryGroup, t2, toShots } from "./gallery";
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
    altTemplate: t2(
      "{page} screen of a sales data warehouse dashboard.",
      "Tela de {page} de um dashboard sobre data warehouse de vendas.",
    ),
    captionTemplate: t2(
      "{page}, read from the star schema through its own JSON endpoint.",
      "{page}, lida do star schema por um endpoint JSON próprio.",
    ),
    items: [
      {
        src: dwh01,
        page: t2("Dashboard", "Painel"),
        note: t2(
          "Signed in as the admin. The other two roles see this without the last three tiles.",
          "Logado como admin. Os outros dois papéis veem isto sem os três últimos cartões.",
        ),
      },
      {
        src: dwh02,
        page: t2("Total sales over time", "Vendas ao longo do tempo"),
      },
      {
        src: dwh03,
        page: t2("Sales by day of week", "Vendas por dia da semana"),
      },
      {
        src: dwh04,
        page: t2("Sales per product by store", "Venda por produto e loja"),
        note: t2(
          "Height is what the franchise sold. Colour says which store sold it.",
          "A altura é o que a rede vendeu. A cor diz qual loja vendeu.",
        ),
      },
      {
        src: dwh05,
        page: t2("Product presence", "Presença de produto"),
        note: t2(
          "A cell is presence, not volume. Fastest way to spot a gap in a range.",
          "A célula é presença, não volume. Jeito mais rápido de achar um furo no mix.",
        ),
      },
      {
        src: dwh06,
        page: t2("Register user", "Cadastro de usuário"),
        note: t2(
          "Admin only. The password is hashed before it reaches the table.",
          "Só admin. A senha é hasheada antes de chegar na tabela.",
        ),
      },
    ],
  },
  ufo: {
    altTemplate: t2(
      "{page} of a public sightings archive.",
      "{page} de um arquivo público de avistamentos.",
    ),
    captionTemplate: t2("{page}.", "{page}."),
    items: [
      { src: ufo01, page: t2("Home", "Home") },
      {
        src: ufo02,
        page: t2("The sightings table", "A tabela de avistamentos"),
        note: t2(
          "80,126 records across 802 pages, paginated on the server. Scroll to see how far the page runs.",
          "80.126 registros em 802 páginas, paginados no servidor. Role para ver até onde a página vai.",
        ),
      },
    ],
  },
  starwars: {
    altTemplate: t2(
      "{page} of a reference archive built over a nine-table schema.",
      "{page} de um arquivo de consulta sobre um schema de nove tabelas.",
    ),
    captionTemplate: t2(
      "{page}, loaded live from its own table.",
      "{page}, carregada ao vivo da própria tabela.",
    ),
    items: [
      { src: starwars01, page: t2("Home", "Home") },
      { src: starwars02, page: t2("Jedi section", "Seção Jedi") },
      {
        src: starwars03,
        page: t2("Characters section", "Seção de personagens"),
      },
      {
        src: starwars04,
        page: t2("Summary", "Resumo"),
        note: t2(
          "Tabs switch without reloading, and the row count per table is how you notice a half-finished import.",
          "As abas trocam sem recarregar, e a contagem por tabela é como se percebe importação pela metade.",
        ),
      },
    ],
  },
  burger: {
    altTemplate: t2(
      "{page} of a four-step ordering flow.",
      "{page} de um fluxo de pedido em quatro passos.",
    ),
    captionTemplate: t2("{page}.", "{page}."),
    items: [
      {
        src: burger01,
        page: t2("Step one, the main", "Passo um, o principal"),
        note: t2(
          "Four steps with the progress shown at the top. Each choice has to survive the next page.",
          "Quatro passos com o progresso no topo. Cada escolha precisa sobreviver à próxima página.",
        ),
      },
      {
        src: burger02,
        page: t2("Step two, the side", "Passo dois, o acompanhamento"),
        note: t2(
          "Back and next both work, and going back must not lose what was already chosen.",
          "Voltar e avançar funcionam, e voltar não pode perder o que já foi escolhido.",
        ),
      },
      {
        src: burger03,
        page: t2("Step three, the drink", "Passo três, a bebida"),
      },
      {
        src: burger04,
        page: t2("Step four, the dessert", "Passo quatro, a sobremesa"),
      },
      {
        src: burger05,
        page: t2("The order summary", "O resumo do pedido"),
        note: t2(
          "Anything skipped reads as not chosen rather than quietly disappearing, which is the difference between a form and a record.",
          "O que foi pulado aparece como não escolhido em vez de sumir calado, que é a diferença entre um formulário e um registro.",
        ),
      },
    ],
  },
  dive: {
    altTemplate: t2("{page} of a dive school site.", "{page} de um site de escola de mergulho."),
    captionTemplate: t2("{page}.", "{page}."),
    items: [
      { src: dive01, page: t2("Home", "Home") },
      {
        src: dive02,
        page: t2("A short history of the sport", "Uma breve história do esporte"),
        note: t2(
          "A dated timeline running from 1535, written rather than filled with placeholder text.",
          "Uma linha do tempo datada começando em 1535, escrita de verdade e não preenchida com texto de rascunho.",
        ),
      },
      { src: dive03, page: t2("Gallery", "Galeria") },
    ],
  },
  reel: {
    altTemplate: t2(
      "{page} of a film reference site.",
      "{page} de um site de referência de cinema.",
    ),
    captionTemplate: t2("{page}.", "{page}."),
    items: [
      {
        src: reel01,
        page: t2("Home", "Home"),
        note: t2(
          "Six performers, each with their own page. The layout repeats so the site reads as one thing.",
          "Seis artistas, cada um com a própria página. O layout se repete, então o site lê como uma coisa só.",
        ),
      },
      {
        src: reel02,
        page: t2("A performer profile", "Um perfil de artista"),
        note: t2(
          "Biography plus a dated filmography, both written rather than borrowed.",
          "Biografia mais filmografia datada, as duas escritas e não emprestadas.",
        ),
      },
      { src: reel03, page: t2("A second profile", "Um segundo perfil") },
    ],
  },
  driver: {
    altTemplate: t2(
      "{page} of the driver app, on a phone.",
      "{page} do app do motorista, num celular.",
    ),
    captionTemplate: t2("{page}.", "{page}."),
    items: [
      // A CAPA: as tres telas que contam o dia do motorista, montadas lado a
      // lado a partir das capturas ja aprovadas. A tela de login, que era a
      // capa, nao dizia nada do produto e foi para o fim.
      {
        src: driver00,
        page: t2("A day on the road", "Um dia de entregas"),
        alt: t2(
          "Three phones side by side showing the driver app: starting a run of twelve stops, the route drawn on a map of the Gold Coast, and the proof of delivery screen.",
          "Três celulares lado a lado com o app do motorista: o início de uma rota de doze paradas, o caminho desenhado no mapa da Gold Coast e a tela de comprovante de entrega.",
        ),
        note: t2(
          "Start the run, follow the route, prove the delivery: the three moments of a driver's day, in the order they happen.",
          "Começar a rota, seguir o caminho, comprovar a entrega: os três momentos do dia do motorista, na ordem em que acontecem.",
        ),
      },
      {
        src: driver02,
        page: t2("Before the van leaves", "Antes da van sair"),
        note: t2(
          "Three checks before anything is marked in transit, because a run that starts wrong stays wrong all day.",
          "Três checagens antes de qualquer coisa ser marcada em trânsito, porque rota que começa errada continua errada o dia todo.",
        ),
      },
      {
        src: driver03,
        page: t2("The route for the day", "A rota do dia"),
        note: t2(
          "Stops in optimised order, drawn on the map the driver navigates from.",
          "Paradas na ordem otimizada, desenhadas no mapa por onde o motorista navega.",
        ),
      },
      {
        src: driver04,
        page: t2("Proof of delivery", "Comprovante de entrega"),
        note: t2(
          "Scan the parcels first. Name, signature and photo are optional, the scan is not.",
          "Ler os volumes primeiro. Nome, assinatura e foto são opcionais, a leitura não.",
        ),
      },
      { src: driver05, page: t2("Settings", "Ajustes") },
      {
        src: driver01,
        page: t2("Signing in", "Entrando"),
        note: t2(
          "Driver ID, username and password, with biometric sign in once the device is trusted.",
          "ID do motorista, usuário e senha, com entrada por biometria depois que o aparelho é confiável.",
        ),
      },
    ],
  },
  linux: {
    altTemplate: t2(
      "{page}, on a server built from scratch.",
      "{page}, num servidor montado do zero.",
    ),
    captionTemplate: t2("{page}.", "{page}."),
    items: [
      {
        src: linux01,
        page: t2("Installing the file sharing service", "Instalando o serviço de compartilhamento"),
        note: t2(
          "A fresh server, updated, then given the one service it exists to run.",
          "Um servidor novo, atualizado, e então recebendo o único serviço que ele existe para rodar.",
        ),
      },
      {
        src: linux02,
        page: t2("Fixing the time zone", "Consertando o fuso"),
        note: t2(
          "The first attempt fails because the zone name is case sensitive. The screen keeps the failure and the fix together, which is the useful part.",
          "A primeira tentativa falha porque o nome do fuso diferencia maiúscula. A tela guarda o erro e a correção juntos, que é a parte útil.",
        ),
      },
      {
        src: linux03,
        page: t2("Writing the shares by hand", "Escrevendo os compartilhamentos à mão"),
        note: t2(
          "Two shares in the config file, each with its own path, its own browse flag and its own write permission.",
          "Dois compartilhamentos no arquivo de configuração, cada um com caminho, visibilidade e permissão de escrita próprios.",
        ),
      },
      {
        src: linux04,
        page: t2("Restarting the service", "Reiniciando o serviço"),
      },
      {
        src: linux05,
        page: t2("Opening it from another machine", "Abrindo de outra máquina"),
        note: t2(
          "The share mounts in the file browser of a different operating system. That is the only proof that matters.",
          "O compartilhamento monta no navegador de arquivos de outro sistema operacional. É a única prova que importa.",
        ),
      },
      {
        src: linux06,
        page: t2("Installing the web server", "Instalando o servidor web"),
      },
      {
        src: linux07,
        page: t2("Serving a page of my own", "Servindo uma página minha"),
        note: t2(
          "Not the default welcome page. A page written by hand, dropped into the web root, and answered by the server that was just built.",
          "Não é a página padrão de boas-vindas. É uma página escrita à mão, colocada na raiz do site, e respondida pelo servidor recém-montado.",
        ),
      },
    ],
  },
  wh: {
    altTemplate: t2(
      "{page} of a warehouse operations tool.",
      "{page} de uma ferramenta de operação de armazém.",
    ),
    captionTemplate: t2("{page}.", "{page}."),
    items: [
      {
        src: wh01,
        page: t2("Floor dashboard", "Painel do chão"),
        note: t2(
          "Counters are secondary. The exceptions block is the point: those are the orders that cannot leave.",
          "Os contadores são secundários. O bloco de exceções é o ponto: são os pedidos que não conseguem sair.",
        ),
      },
      {
        src: wh02,
        page: t2("Pick list", "Lista de separação"),
        note: t2(
          "Walk order follows the shelves, not the order lines, and a short line raises an exception instead of being quietly reduced.",
          "A ordem de caminhada segue as prateleiras, não as linhas do pedido, e uma linha em falta vira exceção em vez de ser reduzida em silêncio.",
        ),
      },
      {
        src: wh03,
        page: t2("Replenishment", "Reposição"),
        note: t2(
          "Sorted by days of cover, not by quantity. Twenty units is plenty of one item and three days of another.",
          "Ordenado por dias de cobertura, não por quantidade. Vinte unidades é muito de um item e três dias de outro.",
        ),
      },
      {
        src: wh04,
        page: t2("Cyclic count", "Contagem cíclica"),
        note: t2(
          "A first count never writes to stock. A variance is counted again, by someone else, with the reason recorded.",
          "Uma primeira contagem nunca escreve no estoque. A diferença é contada de novo, por outra pessoa, com o motivo registrado.",
        ),
      },
    ],
  },
  // A REFERENCIA DA API renderizada do proprio openapi.json (Redoc), com o
  // nome da empresa, os dominios e o prefixo de conta trocados por genericos.
  // Os exemplos do documento ja eram ficticios (Acme, example.com). A ultima
  // e a saida real da suite de testes de 13/10/2026; so o caminho da pasta
  // local foi encurtado.
  api: {
    altTemplate: t2(
      "{page} of the carrier integration API.",
      "{page} da API de integração de transportadora.",
    ),
    captionTemplate: t2("{page}.", "{page}."),
    items: [
      {
        src: api01,
        page: t2("Booking a consignment", "Reservando um consignment"),
        note: t2(
          "The reference is generated from the OpenAPI document the API serves. Every field says its limits, and the order of the checks is written down.",
          "A referência é gerada do documento OpenAPI que a própria API serve. Cada campo diz os seus limites, e a ordem das validações está escrita.",
        ),
      },
      {
        src: api02,
        page: t2("One shape for every error", "Um formato para todo erro"),
        note: t2(
          "Every problem comes back at once, each with the field it points to, whether a retry can help, and the request id to quote to support.",
          "Todos os problemas voltam de uma vez, cada um com o campo a que se refere, se tentar de novo adianta, e o id da requisição para citar ao suporte.",
        ),
      },
      {
        src: api03,
        page: t2("Tracking up to 50 at once", "Rastreando até 50 de uma vez"),
        note: t2(
          "Status is a closed set that never moves backwards, and each event has a stable id, so a partner can merge updates without duplicates.",
          "O status é um conjunto fechado que nunca anda para trás, e cada evento tem um id estável, então o parceiro junta atualizações sem duplicar.",
        ),
      },
      {
        src: api04,
        page: t2("The test suite", "A suíte de testes"),
        note: t2(
          "The real run of 13 October 2026. The five skipped tests run against the development Postgres and are switched on by hand.",
          "A execução real de 13 de outubro de 2026. Os cinco testes pulados rodam contra o Postgres de desenvolvimento e são ligados à mão.",
        ),
      },
    ],
  },
  // O PORTAL, na ordem em que uma pessoa o encontra: entrar, escolher o
  // sistema, ler o painel, perguntar a IA, e o lado de quem administra. Telas
  // reais renderizadas com dado inventado, num ambiente sem banco nem modelo:
  // pessoas, filiais, transportadoras e valores sao ficticios. O nome do
  // produto foi trocado por um neutro.
  ops: {
    altTemplate: t2(
      "{page}: the operations portal, with invented data.",
      "{page}: o portal de operações, com dado inventado.",
    ),
    captionTemplate: t2("{page}.", "{page}."),
    items: [
      {
        src: ops00,
        page: t2("Three screens of the portal", "Três telas do portal"),
        alt: t2(
          "Three windows of the operations portal: the analytics board on the left, the AI assistant on the right, and in front the hub where each person picks a system.",
          "Três janelas do portal de operações: o painel de analytics à esquerda, o assistente de IA à direita, e na frente o hub onde cada pessoa escolhe um sistema.",
        ),
        note: t2(
          "The hub in front, the analytics board and the AI assistant behind it. Every name and number in these screens is invented.",
          "O hub na frente, o painel de analytics e o assistente de IA atrás dele. Todo nome e número nestas telas é inventado.",
        ),
      },
      {
        src: ops01,
        page: t2("Signing in once", "Entrando uma vez"),
        note: t2(
          "One sign-in for the whole operation, with email or username. Someone with a single module goes straight into it; anyone with more lands on the hub.",
          "Um login para a operação inteira, com e-mail ou usuário. Quem tem um módulo só vai direto para ele; quem tem mais cai no hub.",
        ),
      },
      {
        src: ops02,
        page: t2("The hub, for an administrator", "O hub, para um administrador"),
        note: t2(
          "Five modules. Two are separate systems opened from here, three live inside the portal, and each card says which. A card exists only if the database says this person may open it.",
          "Cinco módulos. Dois são sistemas separados abertos daqui, três vivem dentro do portal, e cada card diz qual é qual. Um card só existe se o banco diz que essa pessoa pode abri-lo.",
        ),
      },
      {
        src: ops03,
        page: t2("The same hub, for an operator", "O mesmo hub, para um operador"),
        note: t2(
          "Same page, another person: two modules, because the operator role opens the warehouse app and the TMS and nothing else by default. Nothing is greyed out; what you cannot open is simply not there.",
          "Mesma página, outra pessoa: dois módulos, porque o papel de operador abre o app do armazém e o TMS e nada mais por padrão. Nada fica cinza; o que você não pode abrir simplesmente não está ali.",
        ),
      },
      {
        src: ops04,
        page: t2("Analytics, ready to read", "Analytics, pronto para ler"),
        note: t2(
          "The monthly review the directors used to assemble by hand in spreadsheets and slides, drawn from the data every time it opens. The only choice is the period. Every card is a query you can sort, chart or download, and Explain with AI opens the assistant with the question already written.",
          "A revisão mensal que a diretoria montava à mão em planilha e slide, desenhada a partir do dado toda vez que abre. A única escolha é o período. Cada card é uma consulta que dá para ordenar, virar gráfico ou baixar, e o Explain with AI abre o assistente com a pergunta já escrita.",
        ),
      },
      {
        src: ai01,
        page: t2("An answer with its evidence", "Uma resposta com a evidência"),
        note: t2(
          "The table under the answer is the query that produced it, with the period and the business rules it applied. Sort it, filter it or download it; nothing is retyped by the model.",
          "A tabela embaixo da resposta é a consulta que a produziu, com o período e as regras de negócio aplicadas. Dá para ordenar, filtrar ou baixar; o modelo não redigita nada.",
        ),
      },
      {
        src: ai02,
        page: t2("Freight, from the other database", "Frete, do outro banco"),
        note: t2(
          "This question reads the freight system, the previous one read the warehouse database. The same result can be drawn as a chart without asking again.",
          "Esta pergunta lê o sistema de frete; a anterior leu o banco do armazém. O mesmo resultado vira gráfico sem perguntar de novo.",
        ),
      },
      {
        src: ai03,
        page: t2("What you can ask", "O que dá para perguntar"),
        note: t2(
          'Shortcuts grouped by subject. The box takes any wording; a question the catalogue cannot answer gets "I can\'t answer that", not a guess.',
          'Atalhos agrupados por assunto. A caixa aceita qualquer frase; uma pergunta que o catálogo não responde recebe "não sei responder isso", não um palpite.',
        ),
      },
      {
        src: ops05,
        page: t2("Who holds what", "Quem tem o quê"),
        note: t2(
          "One person's page: what they hold, where each permission comes from, and the rule the database applies, written on the screen instead of in a manual.",
          "A página de uma pessoa: o que ela tem, de onde vem cada permissão, e a regra que o banco aplica, escrita na tela em vez de num manual.",
        ),
      },
      {
        src: ops06,
        page: t2("An exception, in red", "Uma exceção, em vermelho"),
        note: t2(
          "A denial set on this person beats the role, so changing the role will not bring it back. The row says why, since when, and the note left by whoever set it.",
          "Uma negação nesta pessoa vence o papel, então trocar o papel não traz a permissão de volta. A linha diz por quê, desde quando, e a nota de quem a definiu.",
        ),
      },
      {
        src: ops07,
        page: t2("The actions that change real data", "As ações que mudam dado real"),
        note: t2(
          "Booking freight, completing a transfer, committing a count: these write outside the portal, so they sit in their own block, and none of them comes with the operator role.",
          "Reservar frete, concluir uma transferência, aplicar uma contagem: isso escreve fora do portal, então fica num bloco próprio, e nenhuma delas vem com o papel de operador.",
        ),
      },
    ],
  },
} satisfies Record<string, GalleryGroup>;

export type GalleryKey = keyof typeof GALLERIES;

export function gallery(key: GalleryKey): readonly Shot[] {
  return toShots(GALLERIES[key]);
}
