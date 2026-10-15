import tmsCarriers from "@/public/screenshots/insight-tms-carriers.webp";
import tmsReweighs from "@/public/screenshots/insight-tms-reweighs.webp";
import whFloor from "@/public/screenshots/insight-wh-floor.webp";
import whTogether from "@/public/screenshots/insight-wh-together.webp";
import whWorkload from "@/public/screenshots/insight-wh-workload.webp";
import type { I18nText, Insights } from "./types";

/**
 * OS ESTUDOS DE CASO, por produto.
 *
 * Saem de uma revisao mensal de armazem e frete escrita para o gerente do
 * armazem, lendo os dados do proprio sistema so com SELECT.
 *
 * DE ONDE VEM CADA NUMERO. Os graficos daqui foram alimentados pelo mesmo
 * gerador que fez o relatorio (um script que dumpa as variaveis dele), nao
 * copiados da pagina a olho. Arredondamento uma vez so, do valor bruto.
 *
 * ANONIMIZADO. Transportadora vira letra (A a E, sempre a mesma letra para a
 * mesma empresa), o segundo predio nao aparece, codigo de produto vira nome de
 * categoria, e o nome da empresa some. As paginas originais foram recortadas
 * por um script que falha se sobrar qualquer nome da lista bloqueada.
 *
 * So numero AGREGADO: contagem, percentual, media. Nenhum cliente, pedido,
 * endereco, consignment ou valor em dinheiro.
 */

const t = (en: string, pt: string): I18nText => ({ en, pt });

export const INSIGHTS = {
  tms: {
    title: t(
      "A re-weigh problem that was really a booking habit",
      "Uma repesagem que era, na verdade, hábito de booking",
    ),
    intro: t(
      "Read from this system's production database: every consignment it booked with an external carrier since April, turned into the monthly report the warehouse manager reads. Carriers are shown as letters.",
      "Lido do banco de produção deste sistema: cada consignment que ele reservou com transportadora externa desde abril, virando o relatório mensal que o gerente do armazém lê. As transportadoras aparecem como letras.",
    ),
    highlights: [
      {
        value: "10k+",
        label: t(
          "consignments read, 1 April to 8 October",
          "consignments lidos, de 1º de abril a 8 de outubro",
        ),
      },
      {
        value: t("1 in 50", "1 em 50"),
        label: t(
          "re-weighed by the carrier, 94% of them by the one that charges by size",
          "repesado pela transportadora, 94% deles pela que cobra por tamanho",
        ),
      },
      {
        value: t("1.7×", "1,7×"),
        label: t(
          "the booked size, median, on parcels booked as the standard box",
          "o tamanho reservado, na mediana, nos volumes reservados como caixa padrão",
        ),
      },
    ],
    figures: [
      {
        takeaway: t(
          "Re-weighs cluster on the carrier that charges by size, and the parcels measured well over what was booked.",
          "A repesagem se concentra na transportadora que cobra por tamanho, e os volumes mediram bem acima do reservado.",
        ),
        alt: t(
          "Horizontal bars of the share of consignments re-weighed by each of five carriers, with Carrier B far above the rest, and two bars comparing the booked size with the measured size: 1.7 times for the standard box and 3.3 times for one typed-in size.",
          "Barras horizontais com a fatia de consignments repesados em cada uma das cinco transportadoras, com a B muito acima das outras, e duas barras comparando o tamanho reservado com o medido: 1,7 vez na caixa padrão e 3,3 vezes numa medida digitada.",
        ),
        caption: t(
          "1 April to 8 October 2026. Much of it traces back to booking habits: the standard box size, or the same small dimensions, typed in instead of the real ones. A habit is cheaper to change than any box.",
          "De 1º de abril a 8 de outubro de 2026. Boa parte vem de hábitos de booking: o tamanho da caixa padrão, ou as mesmas medidas pequenas, digitados no lugar das reais. Mudar um hábito custa menos do que qualquer caixa.",
        ),
        chart: {
          kind: "reweigh",
          byCarrier: t(
            "Consignments re-weighed, by carrier",
            "Consignments repesados, por transportadora",
          ),
          of: t("of", "de"),
          carriers: [
            { name: "Carrier B", reweighed: 199, shipments: 3071 },
            { name: "Carrier C", reweighed: 8, shipments: 546 },
            { name: "Carrier D", reweighed: 5, shipments: 377 },
            {
              name: "Carrier A",
              reweighed: 0,
              shipments: 3750,
              note: t("charges per item", "cobra por volume"),
            },
            {
              name: "Carrier E",
              reweighed: 0,
              shipments: 121,
              note: t("pallets only", "só pallets"),
            },
          ],
          sizesTitle: t(
            "Measured by the carrier, against the size booked",
            "Medido pela transportadora, contra o tamanho reservado",
          ),
          bookedLabel: t("booked", "reservado"),
          measuredLabel: t("measured", "medido"),
          rangeNote: t(
            "Median per carton. The thin line covers the middle half of the measured cartons.",
            "Mediana por caixa. A linha fina cobre a metade central das caixas medidas.",
          ),
          sizes: [
            {
              label: t("Booked as the standard box", "Reservado como caixa padrão"),
              booked: "39 × 26 × 37 cm",
              cases: t("68 re-weighed shipments, 166 cartons", "68 envios repesados, 166 caixas"),
              median: 1.66,
              p25: 1.55,
              p75: 2.19,
            },
            {
              label: t("Typed in as 30 × 20 × 10 cm", "Digitado como 30 × 20 × 10 cm"),
              booked: "30 × 20 × 10 cm",
              cases: t("15 re-weighed shipments, 66 cartons", "15 envios repesados, 66 caixas"),
              median: 3.33,
              p25: 2.83,
              p75: 3.5,
            },
          ],
        },
        page: tmsReweighs,
      },
      {
        takeaway: t(
          "Half the volume goes with one carrier, which delivers almost nine in ten within a business day.",
          "Metade do volume vai com uma transportadora, que entrega quase nove em cada dez em até um dia útil.",
        ),
        alt: t(
          "For each of five carriers, its share of the consignments and a stacked bar of delivery time in business days. Carrier A carries half the volume and delivers 88% in one business day or less; Carrier E delivers 16% that fast.",
          "Para cada uma das cinco transportadoras, a fatia dos consignments e uma barra empilhada do prazo de entrega em dias úteis. A transportadora A leva metade do volume e entrega 88% em até um dia útil; a E entrega 16% nesse prazo.",
        ),
        caption: t(
          "Every consignment booked with an external carrier, 1 April to 8 October 2026, counted in business days from booking to delivery.",
          "Todo consignment reservado com transportadora externa, de 1º de abril a 8 de outubro de 2026, contado em dias úteis do booking até a entrega.",
        ),
        chart: {
          kind: "delivery",
          rows: [
            { name: "Carrier A", consignments: 5108, bands: [4446, 516, 91, 19] },
            { name: "Carrier B", consignments: 3606, bands: [1662, 1160, 583, 111] },
            { name: "Carrier C", consignments: 733, bands: [368, 216, 99, 17] },
            { name: "Carrier D", consignments: 490, bands: [378, 69, 23, 5] },
            { name: "Carrier E", consignments: 180, bands: [28, 58, 61, 28] },
          ],
          bands: [
            t("same or next business day", "mesmo dia ou dia útil seguinte"),
            t("2 business days", "2 dias úteis"),
            t("3 to 4", "3 a 4"),
            t("5 or more", "5 ou mais"),
          ],
          shareLabel: t("of the volume", "do volume"),
          fastLabel: t("in 1 day or less", "em até 1 dia"),
        },
        page: tmsCarriers,
      },
    ],
    method: [
      t(
        "Read only from start to finish. The review never wrote to the booking system.",
        "Só leitura do começo ao fim. A análise nunca escreveu no sistema de booking.",
      ),
      t(
        "Internal freight and cancelled bookings are left out, so only what a carrier really moved is counted.",
        "Frete interno e bookings cancelados ficam de fora, então só conta o que uma transportadora realmente levou.",
      ),
      t(
        "Branch freight totals were checked three ways before going in: the system's own query, an independent recount consignment by consignment, and the report itself. All three matched.",
        "O total de frete das filiais foi conferido de três jeitos antes de entrar: a consulta do próprio sistema, uma recontagem independente consignment por consignment, e o próprio relatório. Os três bateram.",
      ),
    ],
  },
  warehouse: {
    title: t(
      "Where the pickers walk, and what could move",
      "Onde o picking anda, e o que poderia mudar de lugar",
    ),
    intro: t(
      "Read from the ERP mirror this platform keeps in production, for the same monthly report. It suggests changes for the team to judge, not conclusions.",
      "Lido do espelho do ERP que esta plataforma mantém em produção, para o mesmo relatório mensal. Sugere mudanças para a equipe julgar, não conclusões.",
    ),
    highlights: [
      {
        value: "~8%",
        label: t(
          "less walking if the two busiest bays move to the front, by a simple model",
          "menos caminhada se as duas posições mais usadas forem para a frente, por um modelo simples",
        ),
      },
      {
        value: t("7 in 10", "7 em 10"),
        label: t(
          "LED strip orders also carry a driver, stored several bays away",
          "pedidos com fita de LED também levam um driver, guardado a várias posições",
        ),
      },
      {
        value: "~22",
        label: t(
          "fewer restocks in sixteen weeks if the accessories get twice the room, an estimate",
          "reabastecimentos a menos em dezesseis semanas se os acessórios ganharem o dobro de espaço, uma estimativa",
        ),
      },
    ],
    figures: [
      {
        takeaway: t(
          "The two busiest bays are bays 9 and 10, counting from the packing benches.",
          "As duas posições mais usadas são a 9 e a 10, contando a partir das bancadas de embalagem.",
        ),
        alt: t(
          "Heatmap of the warehouse floor: eight racks, A to H, of seventeen bays each, separated by four aisles, shaded by average picks a week. Bays A-9 and A-10 are the darkest, with 80 and 58. Arrow 1 moves them to A-1 and A-2, next to the benches; arrow 2 moves the accessories in B-11 next to the extrusions in D-7 and D-8.",
          "Mapa de calor do chão do armazém: oito estantes, de A a H, com dezessete posições cada, separadas por quatro corredores, sombreadas pela média de picks por semana. As posições A-9 e A-10 são as mais escuras, com 80 e 58. A seta 1 leva as duas para A-1 e A-2, ao lado das bancadas; a seta 2 leva os acessórios da B-11 para perto dos perfis em D-7 e D-8.",
        ),
        caption: t(
          "Average picks a week in each bay, all levels together, 16 June to 8 October 2026. The arrows are the two moves the review suggests; whether they fit on the shelf is for the team to judge.",
          "Média de picks por semana em cada posição, todos os níveis juntos, de 16 de junho a 8 de outubro de 2026. As setas são as duas mudanças que a análise sugere; se cabem na prateleira, quem julga é a equipe.",
        ),
        chart: {
          kind: "bays",
          racks: [
            { rack: "A", picks: [1, 0, 17, 44, 15, 14, 3, 7, 80, 58, 5, 7, 1, 8, 2, 3, 0] },
            { rack: "B", picks: [37, 30, 15, 8, 0, 16, 5, 6, 10, 6, 37, 13, 18, 11, 3, 2, 0] },
            { rack: "C", picks: [1, 2, 7, 12, 0, 6, 5, 9, 6, 3, 1, 8, 4, 16, 14, 1, 0] },
            { rack: "D", picks: [1, 0, 3, 1, 2, 1, 15, 8, 6, 9, 21, 28, 15, 17, 15, 11, 33] },
            { rack: "E", picks: [21, 11, 4, 11, 15, 0, 7, 10, 14, 7, 13, 1, 10, 6, 5, 14, 6] },
            { rack: "F", picks: [19, 23, 7, 11, 20, 1, 17, 15, 14, 7, 8, 7, 3, 2, 4, 6, 3] },
            { rack: "G", picks: [40, 43, 33, 30, 41, 0, 2, 2, 5, 3, 2, 0, 4, 3, 3, 9, 7] },
            { rack: "H", picks: [17, 0, 0, 13, 8, 0, 10, 6, 1, 4, 10, 1, 0, 0, 0, 0, 0] },
          ],
          aisleAfter: ["A", "C", "E", "G"],
          moves: [
            {
              from: ["A-09", "A-10"],
              to: ["A-01", "A-02"],
              label: t(
                "The 24 V drivers to the front of aisle 1: about 8% less walking.",
                "Os drivers de 24 V para a frente do corredor 1: cerca de 8% menos caminhada.",
              ),
            },
            {
              from: ["B-11"],
              to: ["D-07", "D-08"],
              label: t(
                "The accessories next to their extrusions: one aisle instead of two on about 30 orders a month.",
                "Os acessórios ao lado dos perfis: um corredor em vez de dois em cerca de 30 pedidos por mês.",
              ),
            },
          ],
          unit: t("average picks a week", "média de picks por semana"),
          benches: t("Benches", "Bancadas"),
          aisle: t("Aisle", "Corredor"),
          fewer: t("fewer", "menos"),
          more: t("more", "mais"),
        },
        page: whFloor,
      },
      {
        takeaway: t(
          "Products sold together are often stored apart.",
          "Produtos vendidos juntos muitas vezes ficam guardados longe.",
        ),
        alt: t(
          "Six pairs of product ranges, each with a bar for how often orders with the first also had the second, from 64% to 94%, the bays where each is stored, and the orders a month that carry both.",
          "Seis pares de linhas de produto, cada um com uma barra de quantas vezes os pedidos com o primeiro também levaram o segundo, de 64% a 94%, as posições onde cada um fica, e os pedidos por mês que levam os dois.",
        ),
        caption: t(
          "Fourteen months of orders, matched to where each product is picked today. Bays facing each other across one aisle count as close and are left out.",
          "Catorze meses de pedidos, cruzados com onde cada produto é separado hoje. Posições frente a frente no mesmo corredor contam como próximas e ficam de fora.",
        ),
        chart: {
          kind: "pairs",
          also: t("also had", "também levaram"),
          perMonth: t("a month with both", "por mês com os dois"),
          rows: [
            {
              a: t("LED strips", "Fitas de LED"),
              b: t("a 24 V driver", "um driver de 24 V"),
              share: 0.71,
              perMonth: 112,
              from: "A-04, A-06",
              to: "A-09, A-10",
            },
            {
              a: t("Linear extrusions", "Perfis lineares"),
              b: t("their accessories", "os acessórios"),
              share: 0.79,
              perMonth: 30,
              from: "D-07, D-08",
              to: "B-11",
            },
            {
              a: t("3-circuit track", "Trilho de 3 circuitos"),
              b: t("its end caps or joiners", "as tampas ou emendas"),
              share: 0.94,
              perMonth: 27,
              from: "D-07",
              to: "D-12",
            },
            {
              a: t("Single-circuit track parts", "Peças de trilho de 1 circuito"),
              b: t("the track itself", "o próprio trilho"),
              share: 0.86,
              perMonth: 10,
              from: "D-12",
              to: "D-07",
            },
            {
              a: t("Emergency test kits", "Kits de teste de emergência"),
              b: t("an exit or emergency light", "uma luz de saída ou emergência"),
              share: 0.66,
              perMonth: 6,
              from: "H-11",
              to: "G-01 to G-05",
            },
            {
              a: t("High bay reflectors or brackets", "Refletores ou suportes de high bay"),
              b: t("the high bay light", "a luminária high bay"),
              share: 0.64,
              perMonth: 5,
              from: "F-12, F-15",
              to: "F-07",
            },
          ],
        },
        page: whTogether,
      },
      {
        takeaway: t(
          "About 140 orders leave each working day, busiest from 8 to 11 in the morning.",
          "Cerca de 140 pedidos saem por dia útil, com as horas mais cheias entre 8 e 11 da manhã.",
        ),
        alt: t(
          "Heatmap of average orders in each hour from 05:00 to 16:00, Monday to Friday. The darkest cells are 08:00 to 10:00, around 20 orders an hour. Day averages: Monday 140, Tuesday 155, Wednesday 154, Thursday 146, Friday 121.",
          "Mapa de calor da média de pedidos em cada hora, das 05:00 às 16:00, de segunda a sexta. As células mais escuras ficam entre 08:00 e 10:00, perto de 20 pedidos por hora. Média por dia: segunda 140, terça 155, quarta 154, quinta 146, sexta 121.",
        ),
        caption: t(
          "Sales orders and stock transfers counted together, since all of them leave the same building. 83 working days, 16 June to 8 October 2026.",
          "Pedidos de venda e transferências de estoque contados juntos, porque todos saem do mesmo prédio. 83 dias úteis, de 16 de junho a 8 de outubro de 2026.",
        ),
        chart: {
          kind: "hours",
          firstHour: 5,
          totalLabel: t("a day", "por dia"),
          rows: [
            {
              day: t("Mon", "seg"),
              values: [0, 3, 10, 18, 19, 16, 16, 16, 14, 13, 10, 4],
              total: 140,
            },
            {
              day: t("Tue", "ter"),
              values: [1, 3, 11, 19, 18, 20, 17, 18, 18, 15, 11, 3],
              total: 155,
            },
            {
              day: t("Wed", "qua"),
              values: [1, 3, 9, 20, 21, 20, 19, 16, 15, 13, 10, 4],
              total: 154,
            },
            {
              day: t("Thu", "qui"),
              values: [1, 2, 11, 19, 19, 19, 18, 18, 15, 12, 8, 3],
              total: 146,
            },
            {
              day: t("Fri", "sex"),
              values: [1, 3, 9, 16, 19, 16, 15, 15, 14, 10, 4, 0],
              total: 121,
            },
          ],
        },
        page: whWorkload,
      },
    ],
    method: [
      t(
        "A restock counts only stock moved from a reserve location in the racks to the product's own pick bay. Moves from the dock do not count.",
        "Reabastecimento conta só o estoque movido de uma posição de reserva nas estantes para a posição de picking do próprio produto. Movimento vindo da doca não conta.",
      ),
      t(
        "The walking estimate is a simple model: each order walks into every aisle it needs, to the deepest bay and back. It ranks options; it is not a time study.",
        "A estimativa de caminhada é um modelo simples: cada pedido entra em cada corredor que precisa, até a posição mais funda e volta. Serve para ordenar opções; não é estudo de tempo.",
      ),
      t(
        "Ideas worth less than 1% of walking were left out, however tidy they looked.",
        "Ideias que valiam menos de 1% de caminhada ficaram de fora, por mais arrumadas que parecessem.",
      ),
    ],
  },
  // O ASSISTENTE DE IA. Cada frase daqui foi conferida no codigo do portal em
  // 13/10/2026 (catalogo, fontes, permissoes, log), inclusive o que NAO existe
  // ainda: escopo de dado por filial e teto de gasto. Dizer o limite e o que
  // faz o resto ser acreditado.
  operationsPortal: {
    title: t(
      "Separate systems, one door, and an AI that can only read",
      "Sistemas separados, uma porta só, e uma IA que só lê",
    ),
    intro: t(
      "How the portal sits over the warehouse platform and the freight TMS, who reaches what, and how a question to the AI becomes an answer you can check. Every rule below is in the code, and so is what it does not do yet.",
      "Como o portal fica por cima da plataforma do armazém e do TMS de frete, quem alcança o quê, e como uma pergunta à IA vira uma resposta que dá para conferir. Cada regra abaixo está no código, assim como o que ele ainda não faz.",
    ),
    highlights: [
      {
        value: "5",
        label: t(
          "modules behind one sign-in, each shown only to who may open it",
          "módulos atrás de um login, cada um visível só para quem pode abrir",
        ),
      },
      {
        value: "3",
        label: t(
          "checks decide every permission: denied, allowed, then the role",
          "checagens decidem toda permissão: negado, permitido, e então o papel",
        ),
      },
      {
        value: "2",
        label: t(
          "production databases the AI reads, both read only",
          "bancos de produção que a IA lê, os dois só leitura",
        ),
      },
    ],
    figures: [
      {
        takeaway: t(
          "One portal between the people and the systems.",
          "Um portal entre as pessoas e os sistemas.",
        ),
        alt: t(
          "Three layers from top to bottom: four roles of people; the portal with sign-in, the hub, permissions, analytics, the AI assistant and administration; and underneath, the warehouse platform, the freight TMS, the ERP mirror and the portal's own database.",
          "Três camadas de cima para baixo: quatro papéis de pessoas; o portal com login, hub, permissões, analytics, o assistente de IA e a administração; e por baixo, a plataforma do armazém, o TMS de frete, o espelho do ERP e o banco do próprio portal.",
        ),
        caption: t(
          "The warehouse platform and the TMS are separate systems the hub opens. Analytics and the AI read the systems underneath and never write to them.",
          "A plataforma do armazém e o TMS são sistemas separados que o hub abre. O analytics e a IA leem os sistemas de baixo e nunca escrevem neles.",
        ),
        chart: {
          kind: "layers",
          tiers: [
            {
              label: t("Who signs in", "Quem entra"),
              items: [
                {
                  title: t("Admin", "Admin"),
                  body: t("Everything, administration included.", "Tudo, administração incluída."),
                },
                {
                  title: t("Manager", "Gestor"),
                  body: t("Runs a team or a branch.", "Coordena uma equipe ou uma filial."),
                },
                {
                  title: t("Operator", "Operador"),
                  body: t(
                    "Day-to-day warehouse and freight work.",
                    "O dia a dia do armazém e do frete.",
                  ),
                },
                {
                  title: t("Viewer", "Leitor"),
                  body: t("Read-only access.", "Acesso só de leitura."),
                },
              ],
            },
            {
              label: t("The portal", "O portal"),
              items: [
                {
                  title: t("Sign-in", "Login"),
                  body: t(
                    "Email or username and password. Every attempt is logged.",
                    "E-mail ou usuário e senha. Toda tentativa fica registrada.",
                  ),
                  accent: true,
                },
                {
                  title: t("Hub", "Hub"),
                  body: t(
                    "Only the modules the person may open. With a single one, sign-in goes straight to it.",
                    "Só os módulos que a pessoa pode abrir. Com um só, o login vai direto para ele.",
                  ),
                  accent: true,
                },
                {
                  title: t("Permissions", "Permissões"),
                  body: t(
                    "Asked of the database on every request. Deny beats allow, admins included.",
                    "Perguntadas ao banco a cada requisição. Negar vence permitir, admins incluídos.",
                  ),
                  accent: true,
                },
                {
                  title: t("Analytics", "Analytics"),
                  body: t(
                    "The monthly review, already built. The only choice is the period.",
                    "A revisão mensal, já montada. A única escolha é o período.",
                  ),
                  accent: true,
                },
                {
                  title: t("AI assistant", "Assistente de IA"),
                  body: t(
                    "Questions in plain English, answered from 22 reviewed queries.",
                    "Perguntas em linguagem simples, respondidas a partir de 22 consultas revisadas.",
                  ),
                  accent: true,
                },
                {
                  title: t("Administration", "Administração"),
                  body: t(
                    "People, roles, branches, permissions and the audit trail.",
                    "Pessoas, papéis, filiais, permissões e a trilha de auditoria.",
                  ),
                  accent: true,
                },
              ],
            },
            {
              label: t("The systems underneath", "Os sistemas por baixo"),
              items: [
                {
                  title: t("Warehouse platform", "Plataforma do armazém"),
                  body: t(
                    "Stock, picking, transfers and labels. A separate system with its own login today.",
                    "Estoque, separação, transferências e etiquetas. Sistema separado, com login próprio hoje.",
                  ),
                },
                {
                  title: t("Freight TMS", "TMS de frete"),
                  body: t(
                    "Quoting, booking and dispatch. A separate system with its own login today.",
                    "Cotação, reserva e despacho. Sistema separado, com login próprio hoje.",
                  ),
                },
                {
                  title: t("ERP mirror", "Espelho do ERP"),
                  body: t(
                    "Sales, stock and purchasing, kept in sync. Read only for the portal.",
                    "Venda, estoque e compras, mantidos em sincronia. Só leitura para o portal.",
                  ),
                },
                {
                  title: t("Portal database", "Banco do portal"),
                  body: t(
                    "Accounts, roles, permissions and the audit trail. Never business data.",
                    "Contas, papéis, permissões e a trilha de auditoria. Nunca dado do negócio.",
                  ),
                },
              ],
            },
          ],
        },
      },
      {
        takeaway: t(
          "Each role opens a set of modules by default, and any of them can be allowed or denied for one person.",
          "Cada papel abre um conjunto de módulos por padrão, e qualquer um pode ser permitido ou negado para uma pessoa.",
        ),
        alt: t(
          "A table of four roles by five modules. Admin gets everything. Manager works in the warehouse app and the TMS with the operational commits, and opens analytics. Operator does everyday work in both systems. Viewer only looks. Everything else is allowed person by person.",
          "Uma tabela de quatro papéis por cinco módulos. O admin recebe tudo. O gestor trabalha no app do armazém e no TMS com os commits da operação, e abre o analytics. O operador faz o dia a dia nos dois sistemas. O leitor só olha. O resto é liberado pessoa a pessoa.",
        ),
        caption: t(
          "Defaults set in the permission model. The portal checks the five doors on every request; the finer levels inside the warehouse app and the TMS are defined here and travel with the signed handoff once those systems accept it.",
          "Padrões definidos no modelo de permissões. O portal confere as cinco portas a cada requisição; os níveis finos dentro do app do armazém e do TMS estão definidos aqui e viajam com a passagem assinada quando esses sistemas passarem a aceitá-la.",
        ),
        chart: {
          kind: "matrix",
          columns: [
            t("Warehouse app", "App do armazém"),
            t("Freight TMS", "TMS de frete"),
            t("Analytics", "Analytics"),
            t("AI assistant", "Assistente de IA"),
            t("Admin", "Admin"),
          ],
          rows: [
            {
              role: t("Admin", "Admin"),
              note: t("Everything, administration included", "Tudo, administração incluída"),
              cells: ["full", "full", "full", "full", "full"],
            },
            {
              role: t("Manager", "Gestor"),
              note: t("Runs a team or a branch", "Coordena uma equipe ou filial"),
              cells: ["work", "work", "full", "grant", "grant"],
            },
            {
              role: t("Operator", "Operador"),
              note: t("Day-to-day warehouse and freight work", "O dia a dia do armazém e do frete"),
              cells: ["use", "use", "grant", "grant", "grant"],
            },
            {
              role: t("Viewer", "Leitor"),
              note: t("Read only", "Só leitura"),
              cells: ["view", "view", "grant", "grant", "grant"],
            },
          ],
          legend: {
            full: t("Opens it, with every action", "Abre, com todas as ações"),
            work: t(
              "Everyday work plus the operational commits: book, dispatch, complete a transfer",
              "O dia a dia e os commits da operação: reservar, despachar, concluir transferência",
            ),
            use: t(
              "Everyday work; nothing that writes to stock or to a carrier",
              "O dia a dia; nada que escreva no estoque ou na transportadora",
            ),
            view: t("Look only", "Só olhar"),
            grant: t(
              "Not by default; allowed one person at a time",
              "Não por padrão; liberado pessoa a pessoa",
            ),
          },
        },
      },
      {
        takeaway: t(
          'Every answer to "may this person?" comes from the database, in this order.',
          'Toda resposta a "essa pessoa pode?" vem do banco, nesta ordem.',
        ),
        alt: t(
          "Four checks in order: denied for this person wins over everything; then allowed for this person; then what comes with the role; and if none applies, the answer is no.",
          "Quatro checagens em ordem: negado para esta pessoa vence tudo; depois permitido para esta pessoa; depois o que vem com o papel; e se nenhuma se aplica, a resposta é não.",
        ),
        caption: t(
          "There is no administrator shortcut: an admin who is denied a permission does not have it. The hub, the AI and the admin screens all ask the database, which applies the same rule.",
          "Não há atalho de administrador: um admin com uma permissão negada não a tem. O hub, a IA e as telas de admin perguntam ao banco, que aplica a mesma regra.",
        ),
        chart: {
          kind: "process",
          steps: [
            {
              title: t("Denied for this person", "Negado para esta pessoa"),
              body: t("Wins over everything, the role included.", "Vence tudo, inclusive o papel."),
            },
            {
              title: t("Allowed for this person", "Permitido para esta pessoa"),
              body: t(
                "An exception on top of the role. It survives a change of role.",
                "Uma exceção sobre o papel. Sobrevive a uma troca de papel.",
              ),
            },
            {
              title: t("Comes with the role", "Vem com o papel"),
              body: t(
                "The baseline. Change the role and it changes with it.",
                "A base. Troca o papel, troca junto.",
              ),
            },
            {
              title: t("None of them", "Nenhuma delas"),
              body: t(
                "Not granted. A module the person cannot open does not even show.",
                "Não concedido. Um módulo que a pessoa não pode abrir nem aparece.",
              ),
            },
          ],
        },
      },
      {
        takeaway: t(
          "A question becomes one of 22 written queries, never new SQL.",
          "Uma pergunta vira uma de 22 consultas escritas, nunca SQL novo.",
        ),
        alt: t(
          "Five steps in order: ask, check the permission, choose a query from the catalogue, read the database, answer with the table.",
          "Cinco etapas em ordem: perguntar, conferir a permissão, escolher uma consulta do catálogo, ler o banco, responder com a tabela.",
        ),
        caption: t(
          "Steps 3 and 4 can run up to four rounds for one question, for example sales and then margin. After the last round the model has to answer.",
          "As etapas 3 e 4 podem rodar até quatro rodadas numa pergunta, por exemplo venda e depois margem. Depois da última o modelo tem de responder.",
        ),
        chart: {
          kind: "process",
          loop: { from: 3, to: 4, label: t("up to 4 rounds", "até 4 rodadas") },
          steps: [
            {
              title: t("Ask", "Perguntar"),
              body: t(
                "In plain words, inside the portal, after signing in.",
                "Em linguagem simples, dentro do portal, depois do login.",
              ),
            },
            {
              title: t("Check", "Conferir"),
              body: t(
                "The permission is asked of the database, not taken from the session token.",
                "A permissão é perguntada ao banco, não lida do token da sessão.",
              ),
            },
            {
              title: t("Choose", "Escolher"),
              body: t(
                "The model picks a query from the catalogue. Unknown parameters are rejected.",
                "O modelo escolhe uma consulta do catálogo. Parâmetro desconhecido é recusado.",
              ),
            },
            {
              title: t("Read", "Ler"),
              body: t(
                "Read-only role and transaction, 20-second timeout, 200 rows at most.",
                "Papel e transação só leitura, timeout de 20 segundos, 200 linhas no máximo.",
              ),
            },
            {
              title: t("Answer", "Responder"),
              body: t(
                "A short reading on top, the table it came from underneath, and the question logged.",
                "Uma leitura curta em cima, a tabela de onde veio embaixo, e a pergunta registrada.",
              ),
            },
          ],
        },
      },
      {
        takeaway: t(
          "Four connections, each with exactly the access it needs.",
          "Quatro conexões, cada uma com exatamente o acesso de que precisa.",
        ),
        alt: t(
          "The portal in the centre, connected to the warehouse database and the freight database, both read only, to the model provider, which never touches a database, and to its own database for sign-in and the question log.",
          "O portal no centro, ligado ao banco do armazém e ao banco do frete, os dois só leitura, ao provedor do modelo, que nunca toca num banco, e ao próprio banco para login e registro de perguntas.",
        ),
        caption: t(
          "The ERP itself is never called: its data reaches the assistant through the mirror the warehouse platform keeps in sync.",
          "O ERP em si nunca é chamado: o dado dele chega ao assistente pelo espelho que a plataforma do armazém mantém sincronizado.",
        ),
        chart: {
          kind: "connections",
          hub: {
            title: t("Operations portal", "Portal de operações"),
            body: t(
              "Sign-in, permissions, the catalogue of 22 queries and the chat itself.",
              "Login, permissões, o catálogo de 22 consultas e o próprio chat.",
            ),
          },
          links: [
            {
              title: t("Warehouse database", "Banco do armazém"),
              body: t(
                "Sales, stock, product data and purchasing, from the mirror of the ERP.",
                "Vendas, estoque, cadastro de produto e compras, do espelho do ERP.",
              ),
              access: t("read only · one schema", "só leitura · um schema"),
              tone: "read",
            },
            {
              title: t("Freight database", "Banco do frete"),
              body: t(
                "Consignments, carriers, cost and delivery dates from the transport system.",
                "Consignments, transportadoras, custo e datas de entrega do sistema de transporte.",
              ),
              access: t("read only · one table", "só leitura · uma tabela"),
              tone: "read",
            },
            {
              title: t("Model provider", "Provedor do modelo"),
              body: t(
                "Gets the question, who is asking and up to 50 rows of each result. Picks the query and writes the reading.",
                "Recebe a pergunta, quem pergunta e até 50 linhas de cada resultado. Escolhe a consulta e escreve a leitura.",
              ),
              access: t("no database access", "sem acesso a banco"),
              tone: "model",
            },
            {
              title: t("Portal database", "Banco do portal"),
              body: t(
                "Accounts, permissions and the question log. Never business data.",
                "Contas, permissões e o registro de perguntas. Nunca dado do negócio.",
              ),
              access: t("sign-in and audit", "login e auditoria"),
              tone: "own",
            },
          ],
        },
      },
    ],
    frame: {
      chip: t("How it works", "Como funciona"),
      eyebrow: t("How it works · access · AI", "Como funciona · acesso · IA"),
      count: t(
        "5 diagrams, the protections and what is not built yet",
        "5 diagramas, as proteções e o que ainda não existe",
      ),
    },
    methodLabel: t("Protections, and what is not built yet", "Proteções, e o que ainda não existe"),
    method: [
      t(
        "Permission is asked of the database on every request, not read from the session token, so a revoked access stops at the next click. Deny beats allow, and there is no admin bypass.",
        "A permissão é perguntada ao banco a cada requisição, não lida do token da sessão, então um acesso revogado para no próximo clique. Negar vence permitir, e não há atalho de admin.",
      ),
      t(
        "Opening a separate system goes through the portal: the permission is checked live, the crossing is recorded, and the system opens with its own login. The signed handoff is built, a 60-second Ed25519 token naming one destination, and stays off until those systems can receive it.",
        "Abrir um sistema separado passa pelo portal: a permissão é conferida na hora, a travessia é registrada, e o sistema abre com o próprio login. A passagem assinada está construída, um token Ed25519 de 60 segundos que nomeia um destino, e fica desligada até esses sistemas poderem recebê-la.",
      ),
      t(
        "The model never writes SQL. It chooses one of 22 queries written and reviewed by hand; unknown parameters are rejected, and values reach the database only as bound parameters.",
        "O modelo nunca escreve SQL. Ele escolhe uma de 22 consultas escritas e revisadas à mão; parâmetro desconhecido é recusado, e valor só chega ao banco como parâmetro vinculado.",
      ),
      t(
        "A dedicated database role with SELECT only, inside a read-only transaction, with a 20-second timeout and at most 200 rows. The model sees at most 50 rows of each result, never the database, and the provider was picked because it does not train on what it is sent.",
        "Um papel de banco dedicado, só com SELECT, dentro de uma transação só leitura, com timeout de 20 segundos e no máximo 200 linhas. O modelo vê no máximo 50 linhas de cada resultado, nunca o banco, e o provedor foi escolhido porque não treina com o que recebe.",
      ),
      t(
        "Sign-ins, systems opened, permission changes and every AI question go to the audit trail. For the AI: who asked, which queries ran, how long it took and its estimated cost; answers and rows are not stored.",
        "Logins, sistemas abertos, mudanças de permissão e toda pergunta à IA vão para a trilha de auditoria. Da IA: quem perguntou, quais consultas rodaram, quanto tempo levou e o custo estimado; respostas e linhas não são guardadas.",
      ),
      t(
        "Not built yet, and said so: the two older systems still ask for their own login, analytics and the AI do not yet limit a person to their own branch's data, and the AI budget is shown, not enforced.",
        "Ainda não existe, e está dito: os dois sistemas mais antigos ainda pedem o próprio login, o analytics e a IA ainda não limitam a pessoa ao dado da própria filial, e o orçamento da IA é mostrado, não imposto.",
      ),
    ],
  },
  partnerApi: {
    frame: {
      chip: t("How it's built", "Como foi feito"),
      eyebrow: t("How it works · standards", "Como funciona · padrões"),
      count: t(
        "A request from start to finish, and the kit partners test with",
        "Uma requisição do início ao fim, e o kit com que o parceiro testa",
      ),
    },
    title: t(
      "An API built to be integrated by people who will never call us",
      "Uma API feita para ser integrada por quem nunca vai nos ligar",
    ),
    intro: t(
      "A partner's developer reads the contract, gets sandbox keys and has to finish the integration alone. Everything below exists so that works: one predictable path for every request, errors that say exactly what to fix, and a kit that proves each rule.",
      "O desenvolvedor do parceiro lê o contrato, recebe chaves de sandbox e precisa terminar a integração sozinho. Tudo abaixo existe para isso funcionar: um caminho previsível para toda requisição, erros que dizem exatamente o que corrigir, e um kit que prova cada regra.",
    ),
    highlights: [
      {
        value: "613",
        label: t(
          "automated tests passing, 13 October 2026",
          "testes automatizados passando, em 13 de outubro de 2026",
        ),
      },
      {
        value: "80",
        label: t(
          "checks in 63 Postman requests handed to partners",
          "verificações em 63 requisições Postman entregues aos parceiros",
        ),
      },
      {
        value: "8",
        label: t(
          "endpoints, each documented in OpenAPI 3.1",
          "endpoints, cada um documentado em OpenAPI 3.1",
        ),
      },
    ],
    figures: [
      {
        takeaway: t(
          "Every call takes the same five steps, and fails at the first one it does not pass.",
          "Toda chamada passa pelas mesmas cinco etapas, e para na primeira em que não passar.",
        ),
        alt: t(
          "Five steps in order: authenticate, rate limit, validate, book idempotently, answer.",
          "Cinco etapas em ordem: autenticar, limitar, validar, reservar de forma idempotente, responder.",
        ),
        caption: t(
          "If the rate counter cannot be read, the call is refused, not let through.",
          "Se o contador de limite não puder ser lido, a chamada é recusada, não liberada.",
        ),
        chart: {
          kind: "process",
          steps: [
            {
              title: t("Authenticate", "Autenticar"),
              body: t(
                "Account number and key. Only a hash of the key is stored; test and live keys look different.",
                "Número da conta e chave. Só o hash da chave é guardado; chave de teste e de produção são diferentes à vista.",
              ),
            },
            {
              title: t("Limit", "Limitar"),
              body: t(
                "120 calls a minute, 30 bookings, counted in the database, with an exact Retry-After.",
                "120 chamadas por minuto, 30 reservas, contadas no banco, com Retry-After exato.",
              ),
            },
            {
              title: t("Validate", "Validar"),
              body: t(
                "Every problem in one answer, each pointing at its field with a JSON Pointer.",
                "Todo problema numa resposta só, cada um apontando o campo com JSON Pointer.",
              ),
            },
            {
              title: t("Book", "Reservar"),
              body: t(
                "The partner's own id makes a retry safe: the same id returns the same consignment.",
                "O id do próprio parceiro torna o reenvio seguro: o mesmo id devolve o mesmo consignment.",
              ),
            },
            {
              title: t("Answer", "Responder"),
              body: t(
                "A request id on every response, and the label as a signed link.",
                "Um id de requisição em toda resposta, e a etiqueta como link assinado.",
              ),
            },
          ],
        },
      },
      {
        takeaway: t(
          "The Postman kit partners run before going live: eight folders, each proving one part of the contract.",
          "O kit Postman que o parceiro roda antes de entrar no ar: oito pastas, cada uma provando uma parte do contrato.",
        ),
        alt: t(
          "Eight folders of the Postman collection with their request and check counts: Ping, quotes, booking, labels, tracking, cancelling, sandbox simulation and errors.",
          "Oito pastas da coleção Postman com a contagem de requisições e verificações: Ping, cotação, reserva, etiquetas, rastreio, cancelamento, simulação no sandbox e erros.",
        ),
        caption: t(
          "Runs in the Postman app or with Newman. Requests that book or cancel only run with a sandbox key; with a live key they are skipped, never sent.",
          "Roda no app do Postman ou com Newman. As requisições que reservam ou cancelam só rodam com chave de sandbox; com chave de produção são puladas, nunca enviadas.",
        ),
        chart: {
          kind: "suite",
          requestsLabel: t("requests", "requisições"),
          checksLabel: t("checks", "verificações"),
          totalLabel: t("Partner kit, version 1.4", "Kit do parceiro, versão 1.4"),
          rows: [
            {
              name: t("Ping", "Ping"),
              requests: 5,
              checks: 7,
              proves: t(
                "The keys work; a wrong one is refused the same way every time.",
                "As chaves funcionam; uma errada é recusada sempre do mesmo jeito.",
              ),
            },
            {
              name: t("Quotes", "Cotação"),
              requests: 15,
              checks: 16,
              proves: t(
                "Prices add up, and every reason a delivery cannot be served is named.",
                "Os preços fecham, e todo motivo para uma entrega não ser atendida tem nome.",
              ),
            },
            {
              name: t("Booking", "Reserva"),
              requests: 7,
              checks: 9,
              proves: t(
                "A booking returns its connote and label; sending it twice is safe.",
                "A reserva devolve connote e etiqueta; enviar duas vezes é seguro.",
              ),
            },
            {
              name: t("Labels", "Etiquetas"),
              requests: 3,
              checks: 3,
              proves: t(
                "The label PDF, through a signed link or with the keys.",
                "O PDF da etiqueta, por link assinado ou com as chaves.",
              ),
            },
            {
              name: t("Tracking", "Rastreio"),
              requests: 2,
              checks: 2,
              proves: t(
                "Up to 50 consignments a call; an unknown one gets its own error.",
                "Até 50 consignments por chamada; um desconhecido recebe o próprio erro.",
              ),
            },
            {
              name: t("Cancelling", "Cancelamento"),
              requests: 4,
              checks: 4,
              proves: t(
                "Cancel before loading; a second cancel and the withdrawn label are explicit.",
                "Cancelar antes do carregamento; um segundo cancelamento e a etiqueta retirada são explícitos.",
              ),
            },
            {
              name: t("Sandbox simulation", "Simulação no sandbox"),
              requests: 20,
              checks: 32,
              proves: t(
                "Whole deliveries on request: delivered with proof, partial, failed, reversed, rejected.",
                "Entregas inteiras sob demanda: entregue com comprovante, parcial, falha, revertida, recusada.",
              ),
            },
            {
              name: t("Errors", "Erros"),
              requests: 7,
              checks: 7,
              proves: t(
                "Wrong method, broken JSON, tampered links: always a JSON error, never a web page.",
                "Método errado, JSON quebrado, link adulterado: sempre um erro em JSON, nunca uma página web.",
              ),
            },
          ],
        },
      },
    ],
    methodLabel: t("Standards it follows", "Padrões que ela segue"),
    method: [
      t(
        "OpenAPI 3.1 written by hand, published by the API itself. The tests check responses against it and fail on any field or header it does not declare.",
        "OpenAPI 3.1 escrito à mão, publicado pela própria API. Os testes conferem as respostas contra ele e falham em qualquer campo ou cabeçalho que ele não declare.",
      ),
      t(
        "A written contract, versioned, now 1.4, with every change listed. New fields may appear at any time, and partners are told how to treat a value they do not know.",
        "Um contrato escrito e versionado, hoje na 1.4, com cada mudança listada. Campos novos podem aparecer a qualquer momento, e o parceiro sabe como tratar um valor que não conhece.",
      ),
      t(
        "Labels and proof-of-delivery files go out as signed links; a tampered link is refused. Browsers on other sites cannot call the API at all.",
        "Etiquetas e arquivos de comprovante de entrega saem como links assinados; um link adulterado é recusado. Navegadores em outros sites não conseguem chamar a API.",
      ),
      t(
        "A sandbox where a reference like SIM:DELIVERED plays a whole delivery, with tracking events and a proof-of-delivery photo, without a van moving.",
        "Um sandbox em que uma referência como SIM:DELIVERED encena uma entrega inteira, com eventos de rastreio e foto de comprovante, sem nenhuma van sair do lugar.",
      ),
      t(
        "In production, with a separate sandbox so a partner can keep testing without touching real bookings.",
        "Em produção, com um sandbox separado para o parceiro continuar testando sem tocar em reserva real.",
      ),
    ],
  },
} satisfies Record<string, Insights>;
