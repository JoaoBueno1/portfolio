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

const t = (en: string, pt: string, es: string): I18nText => ({ en, pt, es });

export const INSIGHTS = {
  tms: {
    title: t(
      "A re-weigh problem that was really a booking habit",
      "Uma repesagem que era, na verdade, hábito de booking",
      "Un problema de repesaje que en realidad era un hábito de booking",
    ),
    intro: t(
      "Read from this system's production database: every consignment it booked with an external carrier since April, turned into the monthly report the warehouse manager reads. Carriers are shown as letters.",
      "Lido do banco de produção deste sistema: cada consignment que ele reservou com transportadora externa desde abril, virando o relatório mensal que o gerente do armazém lê. As transportadoras aparecem como letras.",
      "Leído de la base de producción de este sistema: cada consignment que reservó con un transportista externo desde abril, convertido en el informe mensual que lee el gerente del almacén. Los transportistas aparecen como letras.",
    ),
    highlights: [
      {
        value: "10k+",
        label: t(
          "consignments read, 1 April to 8 October",
          "consignments lidos, de 1º de abril a 8 de outubro",
          "consignments leídos, del 1 de abril al 8 de octubre",
        ),
      },
      {
        value: t("1 in 50", "1 em 50", "1 de 50"),
        label: t(
          "re-weighed by the carrier, 94% of them by the one that charges by size",
          "repesado pela transportadora, 94% deles pela que cobra por tamanho",
          "repesado por el transportista, el 94% por el que cobra por tamaño",
        ),
      },
      {
        value: t("1.7×", "1,7×", "1,7×"),
        label: t(
          "the booked size, median, on parcels booked as the standard box",
          "o tamanho reservado, na mediana, nos volumes reservados como caixa padrão",
          "el tamaño reservado, en la mediana, en los bultos reservados como caja estándar",
        ),
      },
    ],
    figures: [
      {
        takeaway: t(
          "Re-weighs cluster on the carrier that charges by size, and the parcels measured well over what was booked.",
          "A repesagem se concentra na transportadora que cobra por tamanho, e os volumes mediram bem acima do reservado.",
          "El repesaje se concentra en el transportista que cobra por tamaño, y los bultos midieron bastante más de lo reservado.",
        ),
        alt: t(
          "Horizontal bars of the share of consignments re-weighed by each of five carriers, with Carrier B far above the rest, and two bars comparing the booked size with the measured size: 1.7 times for the standard box and 3.3 times for one typed-in size.",
          "Barras horizontais com a fatia de consignments repesados em cada uma das cinco transportadoras, com a B muito acima das outras, e duas barras comparando o tamanho reservado com o medido: 1,7 vez na caixa padrão e 3,3 vezes numa medida digitada.",
          "Barras horizontales con la proporción de consignments repesados en cada uno de los cinco transportistas, con el B muy por encima del resto, y dos barras que comparan el tamaño reservado con el medido: 1,7 veces en la caja estándar y 3,3 veces en una medida escrita a mano.",
        ),
        caption: t(
          "1 April to 8 October 2026. Much of it traces back to booking habits: the standard box size, or the same small dimensions, typed in instead of the real ones. A habit is cheaper to change than any box.",
          "De 1º de abril a 8 de outubro de 2026. Boa parte vem de hábitos de booking: o tamanho da caixa padrão, ou as mesmas medidas pequenas, digitados no lugar das reais. Mudar um hábito custa menos do que qualquer caixa.",
          "Del 1 de abril al 8 de octubre de 2026. Buena parte viene de hábitos de booking: el tamaño de la caja estándar, o las mismas medidas pequeñas, escritos en lugar de los reales. Cambiar un hábito cuesta menos que cualquier caja.",
        ),
        chart: {
          kind: "reweigh",
          byCarrier: t(
            "Consignments re-weighed, by carrier",
            "Consignments repesados, por transportadora",
            "Consignments repesados, por transportista",
          ),
          of: t("of", "de", "de"),
          carriers: [
            { name: "Carrier B", reweighed: 199, shipments: 3071 },
            { name: "Carrier C", reweighed: 8, shipments: 546 },
            { name: "Carrier D", reweighed: 5, shipments: 377 },
            {
              name: "Carrier A",
              reweighed: 0,
              shipments: 3750,
              note: t("charges per item", "cobra por volume", "cobra por bulto"),
            },
            {
              name: "Carrier E",
              reweighed: 0,
              shipments: 121,
              note: t("pallets only", "só pallets", "solo pallets"),
            },
          ],
          sizesTitle: t(
            "Measured by the carrier, against the size booked",
            "Medido pela transportadora, contra o tamanho reservado",
            "Medido por el transportista, contra el tamaño reservado",
          ),
          bookedLabel: t("booked", "reservado", "reservado"),
          measuredLabel: t("measured", "medido", "medido"),
          rangeNote: t(
            "Median per carton. The thin line covers the middle half of the measured cartons.",
            "Mediana por caixa. A linha fina cobre a metade central das caixas medidas.",
            "Mediana por caja. La línea fina cubre la mitad central de las cajas medidas.",
          ),
          sizes: [
            {
              label: t(
                "Booked as the standard box",
                "Reservado como caixa padrão",
                "Reservado como caja estándar",
              ),
              booked: "39 × 26 × 37 cm",
              cases: t(
                "68 re-weighed shipments, 166 cartons",
                "68 envios repesados, 166 caixas",
                "68 envíos repesados, 166 cajas",
              ),
              median: 1.66,
              p25: 1.55,
              p75: 2.19,
            },
            {
              label: t(
                "Typed in as 30 × 20 × 10 cm",
                "Digitado como 30 × 20 × 10 cm",
                "Escrito como 30 × 20 × 10 cm",
              ),
              booked: "30 × 20 × 10 cm",
              cases: t(
                "15 re-weighed shipments, 66 cartons",
                "15 envios repesados, 66 caixas",
                "15 envíos repesados, 66 cajas",
              ),
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
          "La mitad del volumen va con un transportista, que entrega casi nueve de cada diez en un día hábil o menos.",
        ),
        alt: t(
          "For each of five carriers, its share of the consignments and a stacked bar of delivery time in business days. Carrier A carries half the volume and delivers 88% in one business day or less; Carrier E delivers 16% that fast.",
          "Para cada uma das cinco transportadoras, a fatia dos consignments e uma barra empilhada do prazo de entrega em dias úteis. A transportadora A leva metade do volume e entrega 88% em até um dia útil; a E entrega 16% nesse prazo.",
          "Para cada uno de los cinco transportistas, su parte de los consignments y una barra apilada del plazo de entrega en días hábiles. El transportista A lleva la mitad del volumen y entrega el 88% en un día hábil o menos; el E entrega el 16% en ese plazo.",
        ),
        caption: t(
          "Every consignment booked with an external carrier, 1 April to 8 October 2026, counted in business days from booking to delivery.",
          "Todo consignment reservado com transportadora externa, de 1º de abril a 8 de outubro de 2026, contado em dias úteis do booking até a entrega.",
          "Todo consignment reservado con un transportista externo, del 1 de abril al 8 de octubre de 2026, contado en días hábiles desde el booking hasta la entrega.",
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
            t(
              "same or next business day",
              "mesmo dia ou dia útil seguinte",
              "mismo día o día hábil siguiente",
            ),
            t("2 business days", "2 dias úteis", "2 días hábiles"),
            t("3 to 4", "3 a 4", "3 a 4"),
            t("5 or more", "5 ou mais", "5 o más"),
          ],
          shareLabel: t("of the volume", "do volume", "del volumen"),
          fastLabel: t("in 1 day or less", "em até 1 dia", "en 1 día o menos"),
        },
        page: tmsCarriers,
      },
    ],
    method: [
      t(
        "Read only from start to finish. The review never wrote to the booking system.",
        "Só leitura do começo ao fim. A análise nunca escreveu no sistema de booking.",
        "Solo lectura de principio a fin. El análisis nunca escribió en el sistema de booking.",
      ),
      t(
        "Internal freight and cancelled bookings are left out, so only what a carrier really moved is counted.",
        "Frete interno e bookings cancelados ficam de fora, então só conta o que uma transportadora realmente levou.",
        "El transporte interno y los bookings cancelados quedan fuera, así que solo cuenta lo que un transportista realmente llevó.",
      ),
      t(
        "Branch freight totals were checked three ways before going in: the system's own query, an independent recount consignment by consignment, and the report itself. All three matched.",
        "O total de frete das filiais foi conferido de três jeitos antes de entrar: a consulta do próprio sistema, uma recontagem independente consignment por consignment, e o próprio relatório. Os três bateram.",
        "El total de transporte a las sucursales se comprobó de tres formas antes de entrar: la consulta del propio sistema, un recuento independiente consignment por consignment, y el propio informe. Los tres coincidieron.",
      ),
    ],
  },
  warehouse: {
    title: t(
      "Where the pickers walk, and what could move",
      "Onde o picking anda, e o que poderia mudar de lugar",
      "Dónde camina el picking, y qué podría cambiar de lugar",
    ),
    intro: t(
      "Read from the ERP mirror this platform keeps in production, for the same monthly report. It suggests changes for the team to judge, not conclusions.",
      "Lido do espelho do ERP que esta plataforma mantém em produção, para o mesmo relatório mensal. Sugere mudanças para a equipe julgar, não conclusões.",
      "Leído del espejo del ERP que esta plataforma mantiene en producción, para el mismo informe mensual. Sugiere cambios para que el equipo juzgue, no conclusiones.",
    ),
    highlights: [
      {
        value: "~8%",
        label: t(
          "less walking if the two busiest bays move to the front, by a simple model",
          "menos caminhada se as duas posições mais usadas forem para a frente, por um modelo simples",
          "menos caminata si las dos posiciones más usadas pasan al frente, según un modelo simple",
        ),
      },
      {
        value: t("7 in 10", "7 em 10", "7 de 10"),
        label: t(
          "LED strip orders also carry a driver, stored several bays away",
          "pedidos com fita de LED também levam um driver, guardado a várias posições",
          "pedidos con tira LED también llevan un driver, guardado a varias posiciones",
        ),
      },
      {
        value: "~22",
        label: t(
          "fewer restocks in sixteen weeks if the accessories get twice the room, an estimate",
          "reabastecimentos a menos em dezesseis semanas se os acessórios ganharem o dobro de espaço, uma estimativa",
          "reposiciones menos en dieciséis semanas si los accesorios tienen el doble de espacio, una estimación",
        ),
      },
    ],
    figures: [
      {
        takeaway: t(
          "The two busiest bays are bays 9 and 10, counting from the packing benches.",
          "As duas posições mais usadas são a 9 e a 10, contando a partir das bancadas de embalagem.",
          "Las dos posiciones más usadas son la 9 y la 10, contando desde las mesas de embalaje.",
        ),
        alt: t(
          "Heatmap of the warehouse floor: eight racks, A to H, of seventeen bays each, separated by four aisles, shaded by average picks a week. Bays A-9 and A-10 are the darkest, with 80 and 58. Arrow 1 moves them to A-1 and A-2, next to the benches; arrow 2 moves the accessories in B-11 next to the extrusions in D-7 and D-8.",
          "Mapa de calor do chão do armazém: oito estantes, de A a H, com dezessete posições cada, separadas por quatro corredores, sombreadas pela média de picks por semana. As posições A-9 e A-10 são as mais escuras, com 80 e 58. A seta 1 leva as duas para A-1 e A-2, ao lado das bancadas; a seta 2 leva os acessórios da B-11 para perto dos perfis em D-7 e D-8.",
          "Mapa de calor del piso del almacén: ocho estanterías, de la A a la H, con diecisiete posiciones cada una, separadas por cuatro pasillos, sombreadas por el promedio de picks por semana. Las posiciones A-9 y A-10 son las más oscuras, con 80 y 58. La flecha 1 las lleva a A-1 y A-2, junto a las mesas; la flecha 2 lleva los accesorios de B-11 cerca de los perfiles en D-7 y D-8.",
        ),
        caption: t(
          "Average picks a week in each bay, all levels together, 16 June to 8 October 2026. The arrows are the two moves the review suggests; whether they fit on the shelf is for the team to judge.",
          "Média de picks por semana em cada posição, todos os níveis juntos, de 16 de junho a 8 de outubro de 2026. As setas são as duas mudanças que a análise sugere; se cabem na prateleira, quem julga é a equipe.",
          "Promedio de picks por semana en cada posición, todos los niveles juntos, del 16 de junio al 8 de octubre de 2026. Las flechas son los dos cambios que sugiere el análisis; si caben en el estante, lo juzga el equipo.",
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
                "Los drivers de 24 V al frente del pasillo 1: cerca de un 8% menos de caminata.",
              ),
            },
            {
              from: ["B-11"],
              to: ["D-07", "D-08"],
              label: t(
                "The accessories next to their extrusions: one aisle instead of two on about 30 orders a month.",
                "Os acessórios ao lado dos perfis: um corredor em vez de dois em cerca de 30 pedidos por mês.",
                "Los accesorios junto a sus perfiles: un pasillo en lugar de dos en unos 30 pedidos al mes.",
              ),
            },
          ],
          unit: t(
            "average picks a week",
            "média de picks por semana",
            "promedio de picks por semana",
          ),
          benches: t("Benches", "Bancadas", "Mesas"),
          aisle: t("Aisle", "Corredor", "Pasillo"),
          fewer: t("fewer", "menos", "menos"),
          more: t("more", "mais", "más"),
        },
        page: whFloor,
      },
      {
        takeaway: t(
          "Products sold together are often stored apart.",
          "Produtos vendidos juntos muitas vezes ficam guardados longe.",
          "Productos que se venden juntos muchas veces se guardan lejos.",
        ),
        alt: t(
          "Six pairs of product ranges, each with a bar for how often orders with the first also had the second, from 64% to 94%, the bays where each is stored, and the orders a month that carry both.",
          "Seis pares de linhas de produto, cada um com uma barra de quantas vezes os pedidos com o primeiro também levaram o segundo, de 64% a 94%, as posições onde cada um fica, e os pedidos por mês que levam os dois.",
          "Seis pares de líneas de producto, cada uno con una barra de cuántas veces los pedidos con el primero también llevaron el segundo, del 64% al 94%, las posiciones donde se guarda cada uno, y los pedidos al mes que llevan los dos.",
        ),
        caption: t(
          "Fourteen months of orders, matched to where each product is picked today. Bays facing each other across one aisle count as close and are left out.",
          "Catorze meses de pedidos, cruzados com onde cada produto é separado hoje. Posições frente a frente no mesmo corredor contam como próximas e ficam de fora.",
          "Catorce meses de pedidos, cruzados con dónde se prepara hoy cada producto. Las posiciones enfrentadas en el mismo pasillo cuentan como cercanas y quedan fuera.",
        ),
        chart: {
          kind: "pairs",
          also: t("also had", "também levaram", "también llevaron"),
          perMonth: t("a month with both", "por mês com os dois", "al mes con los dos"),
          rows: [
            {
              a: t("LED strips", "Fitas de LED", "Tiras LED"),
              b: t("a 24 V driver", "um driver de 24 V", "un driver de 24 V"),
              share: 0.71,
              perMonth: 112,
              from: "A-04, A-06",
              to: "A-09, A-10",
            },
            {
              a: t("Linear extrusions", "Perfis lineares", "Perfiles lineales"),
              b: t("their accessories", "os acessórios", "sus accesorios"),
              share: 0.79,
              perMonth: 30,
              from: "D-07, D-08",
              to: "B-11",
            },
            {
              a: t("3-circuit track", "Trilho de 3 circuitos", "Riel de 3 circuitos"),
              b: t("its end caps or joiners", "as tampas ou emendas", "sus tapas o uniones"),
              share: 0.94,
              perMonth: 27,
              from: "D-07",
              to: "D-12",
            },
            {
              a: t(
                "Single-circuit track parts",
                "Peças de trilho de 1 circuito",
                "Piezas de riel de 1 circuito",
              ),
              b: t("the track itself", "o próprio trilho", "el propio riel"),
              share: 0.86,
              perMonth: 10,
              from: "D-12",
              to: "D-07",
            },
            {
              a: t(
                "Emergency test kits",
                "Kits de teste de emergência",
                "Kits de prueba de emergencia",
              ),
              b: t(
                "an exit or emergency light",
                "uma luz de saída ou emergência",
                "una luz de salida o emergencia",
              ),
              share: 0.66,
              perMonth: 6,
              from: "H-11",
              to: "G-01 to G-05",
            },
            {
              a: t(
                "High bay reflectors or brackets",
                "Refletores ou suportes de high bay",
                "Reflectores o soportes de high bay",
              ),
              b: t("the high bay light", "a luminária high bay", "la luminaria high bay"),
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
          "Cerca de 140 pedidos salen por día hábil, con las horas de más trabajo entre las 8 y las 11 de la mañana.",
        ),
        alt: t(
          "Heatmap of average orders in each hour from 05:00 to 16:00, Monday to Friday. The darkest cells are 08:00 to 10:00, around 20 orders an hour. Day averages: Monday 140, Tuesday 155, Wednesday 154, Thursday 146, Friday 121.",
          "Mapa de calor da média de pedidos em cada hora, das 05:00 às 16:00, de segunda a sexta. As células mais escuras ficam entre 08:00 e 10:00, perto de 20 pedidos por hora. Média por dia: segunda 140, terça 155, quarta 154, quinta 146, sexta 121.",
          "Mapa de calor del promedio de pedidos en cada hora, de 05:00 a 16:00, de lunes a viernes. Las celdas más oscuras están entre las 08:00 y las 10:00, cerca de 20 pedidos por hora. Promedio por día: lunes 140, martes 155, miércoles 154, jueves 146, viernes 121.",
        ),
        caption: t(
          "Sales orders and stock transfers counted together, since all of them leave the same building. 83 working days, 16 June to 8 October 2026.",
          "Pedidos de venda e transferências de estoque contados juntos, porque todos saem do mesmo prédio. 83 dias úteis, de 16 de junho a 8 de outubro de 2026.",
          "Pedidos de venta y transferencias de stock contados juntos, porque todos salen del mismo edificio. 83 días hábiles, del 16 de junio al 8 de octubre de 2026.",
        ),
        chart: {
          kind: "hours",
          firstHour: 5,
          totalLabel: t("a day", "por dia", "al día"),
          rows: [
            {
              day: t("Mon", "seg", "lun"),
              values: [0, 3, 10, 18, 19, 16, 16, 16, 14, 13, 10, 4],
              total: 140,
            },
            {
              day: t("Tue", "ter", "mar"),
              values: [1, 3, 11, 19, 18, 20, 17, 18, 18, 15, 11, 3],
              total: 155,
            },
            {
              day: t("Wed", "qua", "mié"),
              values: [1, 3, 9, 20, 21, 20, 19, 16, 15, 13, 10, 4],
              total: 154,
            },
            {
              day: t("Thu", "qui", "jue"),
              values: [1, 2, 11, 19, 19, 19, 18, 18, 15, 12, 8, 3],
              total: 146,
            },
            {
              day: t("Fri", "sex", "vie"),
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
        "Una reposición cuenta solo el stock movido de una ubicación de reserva en las estanterías a la posición de picking del propio producto. Lo que viene del muelle no cuenta.",
      ),
      t(
        "The walking estimate is a simple model: each order walks into every aisle it needs, to the deepest bay and back. It ranks options; it is not a time study.",
        "A estimativa de caminhada é um modelo simples: cada pedido entra em cada corredor que precisa, até a posição mais funda e volta. Serve para ordenar opções; não é estudo de tempo.",
        "La estimación de caminata es un modelo simple: cada pedido entra en cada pasillo que necesita, hasta la posición más profunda y vuelve. Sirve para ordenar opciones; no es un estudio de tiempos.",
      ),
      t(
        "Ideas worth less than 1% of walking were left out, however tidy they looked.",
        "Ideias que valiam menos de 1% de caminhada ficaram de fora, por mais arrumadas que parecessem.",
        "Las ideas que valían menos del 1% de caminata quedaron fuera, por ordenadas que parecieran.",
      ),
    ],
  },
  // O ASSISTENTE DE IA. Cada frase daqui foi conferida no codigo do portal em
  // 13/10/2026 (catalogo, fontes, permissoes, log), inclusive o que NAO existe
  // ainda: escopo de dado por filial e teto de gasto. Dizer o limite e o que
  // faz o resto ser acreditado.
  biAi: {
    title: t(
      "An AI that reads production data, and cannot change it",
      "Uma IA que lê o dado de produção, e não consegue alterá-lo",
      "Una IA que lee los datos de producción, y no puede cambiarlos",
    ),
    intro: t(
      "How a question becomes an answer, what the assistant can reach, and the limits around it. Every protection below is in the code, and so are the two things it does not do yet.",
      "Como uma pergunta vira resposta, o que o assistente alcança, e os limites em volta dele. Cada proteção abaixo está no código, assim como as duas coisas que ele ainda não faz.",
      "Cómo una pregunta se convierte en respuesta, qué alcanza el asistente, y los límites a su alrededor. Cada protección de abajo está en el código, igual que las dos cosas que todavía no hace.",
    ),
    highlights: [
      {
        value: "22",
        label: t(
          "queries the model can choose from; it cannot write a new one",
          "consultas que o modelo pode escolher; ele não escreve uma nova",
          "consultas que el modelo puede elegir; no puede escribir una nueva",
        ),
      },
      {
        value: "2",
        label: t(
          "connections to production data, both read only",
          "conexões ao dado de produção, as duas só leitura",
          "conexiones a los datos de producción, ambas solo lectura",
        ),
      },
      {
        value: "200",
        label: t(
          "rows at most per query; the model reads 50 of them",
          "linhas no máximo por consulta; o modelo lê 50 delas",
          "filas como máximo por consulta; el modelo lee 50 de ellas",
        ),
      },
    ],
    figures: [
      {
        takeaway: t(
          "A question becomes one of 22 written queries, never new SQL.",
          "Uma pergunta vira uma de 22 consultas escritas, nunca SQL novo.",
          "Una pregunta se convierte en una de 22 consultas escritas, nunca SQL nuevo.",
        ),
        alt: t(
          "Five steps in order: ask, check the permission, choose a query from the catalogue, read the database, answer with the table.",
          "Cinco etapas em ordem: perguntar, conferir a permissão, escolher uma consulta do catálogo, ler o banco, responder com a tabela.",
          "Cinco pasos en orden: preguntar, comprobar el permiso, elegir una consulta del catálogo, leer la base, responder con la tabla.",
        ),
        caption: t(
          "Steps 3 and 4 can run up to four rounds for one question, for example sales and then margin. After the last round the model has to answer.",
          "As etapas 3 e 4 podem rodar até quatro rodadas numa pergunta, por exemplo venda e depois margem. Depois da última o modelo tem de responder.",
          "Los pasos 3 y 4 pueden repetirse hasta cuatro rondas en una pregunta, por ejemplo ventas y luego margen. Tras la última el modelo tiene que responder.",
        ),
        chart: {
          kind: "process",
          loop: { from: 3, to: 4, label: t("up to 4 rounds", "até 4 rodadas", "hasta 4 rondas") },
          steps: [
            {
              title: t("Ask", "Perguntar", "Preguntar"),
              body: t(
                "In plain words, inside the portal, after signing in.",
                "Em linguagem simples, dentro do portal, depois do login.",
                "En lenguaje simple, dentro del portal, tras iniciar sesión.",
              ),
            },
            {
              title: t("Check", "Conferir", "Comprobar"),
              body: t(
                "The permission is asked of the database, not taken from the session token.",
                "A permissão é perguntada ao banco, não lida do token da sessão.",
                "El permiso se pregunta a la base, no se toma del token de sesión.",
              ),
            },
            {
              title: t("Choose", "Escolher", "Elegir"),
              body: t(
                "The model picks a query from the catalogue. Unknown parameters are rejected.",
                "O modelo escolhe uma consulta do catálogo. Parâmetro desconhecido é recusado.",
                "El modelo elige una consulta del catálogo. Los parámetros desconocidos se rechazan.",
              ),
            },
            {
              title: t("Read", "Ler", "Leer"),
              body: t(
                "Read-only role and transaction, 20-second timeout, 200 rows at most.",
                "Papel e transação só leitura, timeout de 20 segundos, 200 linhas no máximo.",
                "Rol y transacción de solo lectura, límite de 20 segundos, 200 filas como máximo.",
              ),
            },
            {
              title: t("Answer", "Responder", "Responder"),
              body: t(
                "A short reading on top, the table it came from underneath, and the question logged.",
                "Uma leitura curta em cima, a tabela de onde veio embaixo, e a pergunta registrada.",
                "Una lectura breve arriba, la tabla de donde salió abajo, y la pregunta registrada.",
              ),
            },
          ],
        },
      },
      {
        takeaway: t(
          "Four connections, each with exactly the access it needs.",
          "Quatro conexões, cada uma com exatamente o acesso de que precisa.",
          "Cuatro conexiones, cada una con exactamente el acceso que necesita.",
        ),
        alt: t(
          "The portal in the centre, connected to the warehouse database and the freight database, both read only, to the model provider, which never touches a database, and to its own database for sign-in and the question log.",
          "O portal no centro, ligado ao banco do armazém e ao banco do frete, os dois só leitura, ao provedor do modelo, que nunca toca num banco, e ao próprio banco para login e registro de perguntas.",
          "El portal en el centro, conectado a la base del almacén y a la base del transporte, ambas de solo lectura, al proveedor del modelo, que nunca toca una base, y a su propia base para el login y el registro de preguntas.",
        ),
        caption: t(
          "The ERP itself is never called: its data reaches the assistant through the mirror the warehouse platform keeps in sync.",
          "O ERP em si nunca é chamado: o dado dele chega ao assistente pelo espelho que a plataforma do armazém mantém sincronizado.",
          "El ERP nunca se llama directamente: sus datos llegan al asistente por el espejo que la plataforma del almacén mantiene sincronizado.",
        ),
        chart: {
          kind: "connections",
          hub: {
            title: t("Operations portal", "Portal de operações", "Portal de operaciones"),
            body: t(
              "Sign-in, permissions, the catalogue of 22 queries and the chat itself.",
              "Login, permissões, o catálogo de 22 consultas e o próprio chat.",
              "Login, permisos, el catálogo de 22 consultas y el propio chat.",
            ),
          },
          links: [
            {
              title: t("Warehouse database", "Banco do armazém", "Base del almacén"),
              body: t(
                "Sales, stock, product data and purchasing, from the mirror of the ERP.",
                "Vendas, estoque, cadastro de produto e compras, do espelho do ERP.",
                "Ventas, stock, datos de producto y compras, del espejo del ERP.",
              ),
              access: t(
                "read only · one schema",
                "só leitura · um schema",
                "solo lectura · un schema",
              ),
              tone: "read",
            },
            {
              title: t("Freight database", "Banco do frete", "Base del transporte"),
              body: t(
                "Consignments, carriers, cost and delivery dates from the transport system.",
                "Consignments, transportadoras, custo e datas de entrega do sistema de transporte.",
                "Consignments, transportistas, costo y fechas de entrega del sistema de transporte.",
              ),
              access: t(
                "read only · one table",
                "só leitura · uma tabela",
                "solo lectura · una tabla",
              ),
              tone: "read",
            },
            {
              title: t("Model provider", "Provedor do modelo", "Proveedor del modelo"),
              body: t(
                "Gets the question, who is asking and up to 50 rows of each result. Picks the query and writes the reading.",
                "Recebe a pergunta, quem pergunta e até 50 linhas de cada resultado. Escolhe a consulta e escreve a leitura.",
                "Recibe la pregunta, quién pregunta y hasta 50 filas de cada resultado. Elige la consulta y escribe la lectura.",
              ),
              access: t("no database access", "sem acesso a banco", "sin acceso a bases"),
              tone: "model",
            },
            {
              title: t("Portal database", "Banco do portal", "Base del portal"),
              body: t(
                "Accounts, permissions and the question log. Never business data.",
                "Contas, permissões e o registro de perguntas. Nunca dado do negócio.",
                "Cuentas, permisos y el registro de preguntas. Nunca datos del negocio.",
              ),
              access: t("sign-in and audit", "login e auditoria", "login y auditoría"),
              tone: "own",
            },
          ],
        },
      },
    ],
    frame: {
      chip: t("How it works", "Como funciona", "Cómo funciona"),
      eyebrow: t(
        "How it works · protections",
        "Como funciona · proteções",
        "Cómo funciona · protecciones",
      ),
      count: t(
        "2 diagrams, 5 protections and what is not built yet",
        "2 diagramas, 5 proteções e o que ainda não existe",
        "2 diagramas, 5 protecciones y lo que aún no existe",
      ),
    },
    methodLabel: t(
      "Protections, and what is not built yet",
      "Proteções, e o que ainda não existe",
      "Protecciones, y lo que aún no existe",
    ),
    method: [
      t(
        "The model never writes SQL. It chooses one of 22 queries written and reviewed by hand; unknown parameters are rejected, and values reach the database only as bound parameters.",
        "O modelo nunca escreve SQL. Ele escolhe uma de 22 consultas escritas e revisadas à mão; parâmetro desconhecido é recusado, e valor só chega ao banco como parâmetro vinculado.",
        "El modelo nunca escribe SQL. Elige una de 22 consultas escritas y revisadas a mano; los parámetros desconocidos se rechazan, y los valores solo llegan a la base como parámetros vinculados.",
      ),
      t(
        "A dedicated database role with SELECT only. Every query also runs inside a read-only transaction, with a 20-second timeout and at most 200 rows.",
        "Um papel de banco dedicado, só com SELECT. Toda consulta ainda roda dentro de uma transação só leitura, com timeout de 20 segundos e no máximo 200 linhas.",
        "Un rol de base dedicado, solo con SELECT. Cada consulta además corre dentro de una transacción de solo lectura, con límite de 20 segundos y como máximo 200 filas.",
      ),
      t(
        "Access is a permission granted person by person and checked against the database on each request. Deny beats allow, and there is no admin bypass.",
        "O acesso é uma permissão dada pessoa a pessoa e conferida no banco a cada requisição. Negar vence permitir, e não há atalho de admin.",
        "El acceso es un permiso dado persona a persona y comprobado en la base en cada solicitud. Denegar gana a permitir, y no hay atajo de admin.",
      ),
      t(
        "The model sees the question and at most 50 rows of each result, never the database. The provider was picked because it does not train on what it is sent.",
        "O modelo vê a pergunta e no máximo 50 linhas de cada resultado, nunca o banco. O provedor foi escolhido porque não treina com o que recebe.",
        "El modelo ve la pregunta y como máximo 50 filas de cada resultado, nunca la base. El proveedor se eligió porque no entrena con lo que recibe.",
      ),
      t(
        "Every question is logged: who asked, which queries ran, how long it took and its estimated cost. Answers and rows are not stored.",
        "Toda pergunta fica registrada: quem perguntou, quais consultas rodaram, quanto tempo levou e o custo estimado. Respostas e linhas não são guardadas.",
        "Cada pregunta queda registrada: quién preguntó, qué consultas corrieron, cuánto tardó y el costo estimado. Las respuestas y las filas no se guardan.",
      ),
      t(
        "Not built yet, and said so: limiting each person to their own branch's data, and a hard monthly spending cap. Today the budget is shown, not enforced.",
        "Ainda não existe, e está dito: limitar cada pessoa ao dado da própria filial, e um teto rígido de gasto mensal. Hoje o orçamento é mostrado, não imposto.",
        "Aún no existe, y está dicho: limitar a cada persona a los datos de su propia sucursal, y un tope rígido de gasto mensual. Hoy el presupuesto se muestra, no se impone.",
      ),
    ],
  },
  // A API DE INTEGRACAO. Numeros contados em 13/10/2026: a suite de testes de
  // parceiro rodada nesse dia (613 passaram, 5 pulados porque exigem o
  // Postgres de desenvolvimento), a colecao Postman de parceiros contada
  // pasta a pasta, e os limites lidos do codigo (partner_ratelimit.py).
  partnerApi: {
    frame: {
      chip: t("How it's built", "Como foi feito", "Cómo se hizo"),
      eyebrow: t(
        "How it works · standards",
        "Como funciona · padrões",
        "Cómo funciona · estándares",
      ),
      count: t(
        "A request from start to finish, and the kit partners test with",
        "Uma requisição do início ao fim, e o kit com que o parceiro testa",
        "Una solicitud de principio a fin, y el kit con el que prueba el socio",
      ),
    },
    title: t(
      "An API built to be integrated by people who will never call us",
      "Uma API feita para ser integrada por quem nunca vai nos ligar",
      "Una API hecha para que la integre gente que nunca nos va a llamar",
    ),
    intro: t(
      "A partner's developer reads the contract, gets sandbox keys and has to finish the integration alone. Everything below exists so that works: one predictable path for every request, errors that say exactly what to fix, and a kit that proves each rule.",
      "O desenvolvedor do parceiro lê o contrato, recebe chaves de sandbox e precisa terminar a integração sozinho. Tudo abaixo existe para isso funcionar: um caminho previsível para toda requisição, erros que dizem exatamente o que corrigir, e um kit que prova cada regra.",
      "El desarrollador del socio lee el contrato, recibe claves de sandbox y tiene que terminar la integración solo. Todo lo de abajo existe para que eso funcione: un camino predecible para cada solicitud, errores que dicen exactamente qué corregir, y un kit que prueba cada regla.",
    ),
    highlights: [
      {
        value: "613",
        label: t(
          "automated tests passing, 13 October 2026",
          "testes automatizados passando, em 13 de outubro de 2026",
          "pruebas automatizadas aprobadas, el 13 de octubre de 2026",
        ),
      },
      {
        value: "80",
        label: t(
          "checks in 63 Postman requests handed to partners",
          "verificações em 63 requisições Postman entregues aos parceiros",
          "verificaciones en 63 solicitudes Postman entregadas a los socios",
        ),
      },
      {
        value: "8",
        label: t(
          "endpoints, each documented in OpenAPI 3.1",
          "endpoints, cada um documentado em OpenAPI 3.1",
          "endpoints, cada uno documentado en OpenAPI 3.1",
        ),
      },
    ],
    figures: [
      {
        takeaway: t(
          "Every call takes the same five steps, and fails at the first one it does not pass.",
          "Toda chamada passa pelas mesmas cinco etapas, e para na primeira em que não passar.",
          "Cada llamada pasa por los mismos cinco pasos, y se detiene en el primero que no supera.",
        ),
        alt: t(
          "Five steps in order: authenticate, rate limit, validate, book idempotently, answer.",
          "Cinco etapas em ordem: autenticar, limitar, validar, reservar de forma idempotente, responder.",
          "Cinco pasos en orden: autenticar, limitar, validar, reservar de forma idempotente, responder.",
        ),
        caption: t(
          "If the rate counter cannot be read, the call is refused, not let through.",
          "Se o contador de limite não puder ser lido, a chamada é recusada, não liberada.",
          "Si el contador de límite no se puede leer, la llamada se rechaza, no se deja pasar.",
        ),
        chart: {
          kind: "process",
          steps: [
            {
              title: t("Authenticate", "Autenticar", "Autenticar"),
              body: t(
                "Account number and key. Only a hash of the key is stored; test and live keys look different.",
                "Número da conta e chave. Só o hash da chave é guardado; chave de teste e de produção são diferentes à vista.",
                "Número de cuenta y clave. Solo se guarda el hash de la clave; las de prueba y producción se distinguen a simple vista.",
              ),
            },
            {
              title: t("Limit", "Limitar", "Limitar"),
              body: t(
                "120 calls a minute, 30 bookings, counted in the database, with an exact Retry-After.",
                "120 chamadas por minuto, 30 reservas, contadas no banco, com Retry-After exato.",
                "120 llamadas por minuto, 30 reservas, contadas en la base, con Retry-After exacto.",
              ),
            },
            {
              title: t("Validate", "Validar", "Validar"),
              body: t(
                "Every problem in one answer, each pointing at its field with a JSON Pointer.",
                "Todo problema numa resposta só, cada um apontando o campo com JSON Pointer.",
                "Todos los problemas en una sola respuesta, cada uno señalando su campo con JSON Pointer.",
              ),
            },
            {
              title: t("Book", "Reservar", "Reservar"),
              body: t(
                "The partner's own id makes a retry safe: the same id returns the same consignment.",
                "O id do próprio parceiro torna o reenvio seguro: o mesmo id devolve o mesmo consignment.",
                "El id del propio socio hace segura la repetición: el mismo id devuelve el mismo consignment.",
              ),
            },
            {
              title: t("Answer", "Responder", "Responder"),
              body: t(
                "A request id on every response, and the label as a signed link.",
                "Um id de requisição em toda resposta, e a etiqueta como link assinado.",
                "Un id de solicitud en cada respuesta, y la etiqueta como enlace firmado.",
              ),
            },
          ],
        },
      },
      {
        takeaway: t(
          "The Postman kit partners run before going live: eight folders, each proving one part of the contract.",
          "O kit Postman que o parceiro roda antes de entrar no ar: oito pastas, cada uma provando uma parte do contrato.",
          "El kit Postman que el socio ejecuta antes de salir en vivo: ocho carpetas, cada una prueba una parte del contrato.",
        ),
        alt: t(
          "Eight folders of the Postman collection with their request and check counts: Ping, quotes, booking, labels, tracking, cancelling, sandbox simulation and errors.",
          "Oito pastas da coleção Postman com a contagem de requisições e verificações: Ping, cotação, reserva, etiquetas, rastreio, cancelamento, simulação no sandbox e erros.",
          "Ocho carpetas de la colección Postman con su número de solicitudes y verificaciones: Ping, cotización, reserva, etiquetas, seguimiento, cancelación, simulación en sandbox y errores.",
        ),
        caption: t(
          "Runs in the Postman app or with Newman. Requests that book or cancel only run with a sandbox key; with a live key they are skipped, never sent.",
          "Roda no app do Postman ou com Newman. As requisições que reservam ou cancelam só rodam com chave de sandbox; com chave de produção são puladas, nunca enviadas.",
          "Corre en la app de Postman o con Newman. Las solicitudes que reservan o cancelan solo corren con clave de sandbox; con una clave de producción se omiten, nunca se envían.",
        ),
        chart: {
          kind: "suite",
          requestsLabel: t("requests", "requisições", "solicitudes"),
          checksLabel: t("checks", "verificações", "verificaciones"),
          totalLabel: t(
            "Partner kit, version 1.4",
            "Kit do parceiro, versão 1.4",
            "Kit del socio, versión 1.4",
          ),
          rows: [
            {
              name: t("Ping", "Ping", "Ping"),
              requests: 5,
              checks: 7,
              proves: t(
                "The keys work; a wrong one is refused the same way every time.",
                "As chaves funcionam; uma errada é recusada sempre do mesmo jeito.",
                "Las claves funcionan; una incorrecta se rechaza siempre igual.",
              ),
            },
            {
              name: t("Quotes", "Cotação", "Cotización"),
              requests: 15,
              checks: 16,
              proves: t(
                "Prices add up, and every reason a delivery cannot be served is named.",
                "Os preços fecham, e todo motivo para uma entrega não ser atendida tem nome.",
                "Los precios cuadran, y cada motivo por el que una entrega no se atiende tiene nombre.",
              ),
            },
            {
              name: t("Booking", "Reserva", "Reserva"),
              requests: 7,
              checks: 9,
              proves: t(
                "A booking returns its connote and label; sending it twice is safe.",
                "A reserva devolve connote e etiqueta; enviar duas vezes é seguro.",
                "La reserva devuelve connote y etiqueta; enviarla dos veces es seguro.",
              ),
            },
            {
              name: t("Labels", "Etiquetas", "Etiquetas"),
              requests: 3,
              checks: 3,
              proves: t(
                "The label PDF, through a signed link or with the keys.",
                "O PDF da etiqueta, por link assinado ou com as chaves.",
                "El PDF de la etiqueta, por enlace firmado o con las claves.",
              ),
            },
            {
              name: t("Tracking", "Rastreio", "Seguimiento"),
              requests: 2,
              checks: 2,
              proves: t(
                "Up to 50 consignments a call; an unknown one gets its own error.",
                "Até 50 consignments por chamada; um desconhecido recebe o próprio erro.",
                "Hasta 50 consignments por llamada; uno desconocido recibe su propio error.",
              ),
            },
            {
              name: t("Cancelling", "Cancelamento", "Cancelación"),
              requests: 4,
              checks: 4,
              proves: t(
                "Cancel before loading; a second cancel and the withdrawn label are explicit.",
                "Cancelar antes do carregamento; um segundo cancelamento e a etiqueta retirada são explícitos.",
                "Cancelar antes de cargar; una segunda cancelación y la etiqueta retirada son explícitas.",
              ),
            },
            {
              name: t("Sandbox simulation", "Simulação no sandbox", "Simulación en sandbox"),
              requests: 20,
              checks: 32,
              proves: t(
                "Whole deliveries on request: delivered with proof, partial, failed, reversed, rejected.",
                "Entregas inteiras sob demanda: entregue com comprovante, parcial, falha, revertida, recusada.",
                "Entregas completas a pedido: entregada con comprobante, parcial, fallida, revertida, rechazada.",
              ),
            },
            {
              name: t("Errors", "Erros", "Errores"),
              requests: 7,
              checks: 7,
              proves: t(
                "Wrong method, broken JSON, tampered links: always a JSON error, never a web page.",
                "Método errado, JSON quebrado, link adulterado: sempre um erro em JSON, nunca uma página web.",
                "Método incorrecto, JSON roto, enlace alterado: siempre un error en JSON, nunca una página web.",
              ),
            },
          ],
        },
      },
    ],
    methodLabel: t("Standards it follows", "Padrões que ela segue", "Estándares que sigue"),
    method: [
      t(
        "OpenAPI 3.1 written by hand, published by the API itself. The tests check responses against it and fail on any field or header it does not declare.",
        "OpenAPI 3.1 escrito à mão, publicado pela própria API. Os testes conferem as respostas contra ele e falham em qualquer campo ou cabeçalho que ele não declare.",
        "OpenAPI 3.1 escrito a mano, publicado por la propia API. Las pruebas comprueban las respuestas contra él y fallan ante cualquier campo o cabecera que no declare.",
      ),
      t(
        "A written contract, versioned, now 1.4, with every change listed. New fields may appear at any time, and partners are told how to treat a value they do not know.",
        "Um contrato escrito e versionado, hoje na 1.4, com cada mudança listada. Campos novos podem aparecer a qualquer momento, e o parceiro sabe como tratar um valor que não conhece.",
        "Un contrato escrito y versionado, hoy en la 1.4, con cada cambio listado. Pueden aparecer campos nuevos en cualquier momento, y el socio sabe cómo tratar un valor que no conoce.",
      ),
      t(
        "Labels and proof-of-delivery files go out as signed links; a tampered link is refused. Browsers on other sites cannot call the API at all.",
        "Etiquetas e arquivos de comprovante de entrega saem como links assinados; um link adulterado é recusado. Navegadores em outros sites não conseguem chamar a API.",
        "Las etiquetas y los archivos de comprobante de entrega salen como enlaces firmados; un enlace alterado se rechaza. Los navegadores de otros sitios no pueden llamar a la API.",
      ),
      t(
        "A sandbox where a reference like SIM:DELIVERED plays a whole delivery, with tracking events and a proof-of-delivery photo, without a van moving.",
        "Um sandbox em que uma referência como SIM:DELIVERED encena uma entrega inteira, com eventos de rastreio e foto de comprovante, sem nenhuma van sair do lugar.",
        "Un sandbox en el que una referencia como SIM:DELIVERED reproduce una entrega completa, con eventos de seguimiento y foto de comprobante, sin que se mueva ninguna furgoneta.",
      ),
      t(
        "Where it stands: complete and tested in development and in the sandbox. Going live waits for the first partner's side of the connection.",
        "Onde está: completa e testada em desenvolvimento e no sandbox. Entrar no ar depende do lado do primeiro parceiro na conexão.",
        "Dónde está: completa y probada en desarrollo y en el sandbox. Salir en vivo depende del lado del primer socio en la conexión.",
      ),
    ],
  },
} satisfies Record<string, Insights>;
