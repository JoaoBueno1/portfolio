import carrierManifest from "@/public/screenshots/carrier-manifest.webp";
import dashboard from "@/public/screenshots/dashboard.webp";
import dispatchCentre from "@/public/screenshots/dispatch-centre.webp";
import fleetLive from "@/public/screenshots/fleet-live.webp";
import openOrders from "@/public/screenshots/open-orders.webp";
import ordersBoard from "@/public/screenshots/orders-board.webp";
import ownFleetRun from "@/public/screenshots/own-fleet-run.webp";
import trackingDesktop from "@/public/screenshots/tracking-desktop.webp";
import trackingMobile from "@/public/screenshots/tracking-mobile.webp";
import type { Shot } from "./types";

export const SHOTS = {
  dispatch: {
    src: dispatchCentre,
    alt: {
      en: "Dispatch centre: an active run with twelve stops listed on the left and the same stops numbered on a map, the route drawn between them.",
      pt: "Central de despacho: uma rota ativa com doze paradas listadas à esquerda e as mesmas paradas numeradas num mapa, com o caminho desenhado entre elas.",
    },
    caption: {
      en: "Building a run. Stops get ordered for the shortest drive, and once the driver starts, re-ordering locks.",
      pt: "Montando uma rota. As paradas são ordenadas pelo menor trajeto, e assim que o motorista começa, reordenar trava.",
    },
  },
  orders: {
    src: ordersBoard,
    alt: {
      en: "Orders board: twenty-eight orders split across four carriers and two own-fleet runs, with status per consignment.",
      pt: "Quadro de pedidos: vinte e oito pedidos divididos entre quatro transportadoras e duas rotas da frota própria, com status por consignment.",
    },
    caption: {
      en: "The day in one screen. Own vans sit beside the external carriers, priced on the same card.",
      pt: "O dia numa tela. As vans próprias ficam do lado das transportadoras externas, precificadas pela mesma tabela.",
    },
  },
  manifest: {
    src: carrierManifest,
    alt: {
      en: "A carrier group on the orders board: four booked consignments with charges, ready to close as a manifest before cut-off.",
      pt: "Um grupo de transportadora no quadro de pedidos: quatro consignments reservados com valores, prontos para fechar como manifesto antes do corte.",
    },
    caption: {
      en: "Closing the manifest. Miss the carrier cut-off and the freight waits a day.",
      pt: "Fechando o manifesto. Perder o corte da transportadora custa um dia de atraso.",
    },
  },
  fleet: {
    src: fleetLive,
    alt: {
      en: "Live fleet view: two drivers on a map, each with progress through their run, the next stop and an estimated finish time.",
      pt: "Frota ao vivo: dois motoristas num mapa, cada um com o progresso da rota, a próxima parada e a hora estimada de término.",
    },
    caption: {
      en: "Replaces phoning the driver to ask where they are and how many are left.",
      pt: "Substitui ligar para o motorista e perguntar onde ele está e quantas faltam.",
    },
  },
  run: {
    src: ownFleetRun,
    alt: {
      en: "Own-fleet run sheet: twelve consignments with customer reference, address, item count, status and charge.",
      pt: "Folha de rota da frota própria: doze consignments com referência, endereço, quantidade de itens, status e valor.",
    },
    caption: {
      en: "The sheet the driver gets. It prints, because a phone dies and paper does not.",
      pt: "A folha que o motorista recebe. Ela imprime, porque celular acaba a bateria e papel não.",
    },
  },
  open: {
    src: openOrders,
    alt: {
      en: "Open orders queue, grouped by age, with the ones past their promised date flagged.",
      pt: "Fila de pedidos em aberto, agrupada por idade, com os que passaram da data prometida sinalizados.",
    },
    caption: {
      en: "What has not shipped yet, oldest first.",
      pt: "O que ainda não saiu, do mais antigo para o mais novo.",
    },
  },
  analytics: {
    src: dashboard,
    alt: {
      en: "Monthly dashboard: freight spend by carrier, delivery volume and margin per shipment.",
      pt: "Painel mensal: gasto de frete por transportadora, volume de entregas e margem por remessa.",
    },
    caption: {
      en: "Quoted cost against invoiced cost, per carrier, per month.",
      pt: "Custo cotado contra custo faturado, por transportadora, por mês.",
    },
  },
  tracking: {
    src: trackingDesktop,
    alt: {
      en: "Public tracking page: a delivery timeline with a map and proof of delivery.",
      pt: "Página pública de rastreio: uma linha do tempo de entrega com mapa e comprovante.",
    },
    caption: {
      en: "The page the receiver opens, so the office phone stops ringing.",
      pt: "A página que o destinatário abre, para o telefone do escritório parar de tocar.",
    },
  },
  trackingMobile: {
    src: trackingMobile,
    alt: {
      en: "The same tracking page on a phone, with the timeline stacked and the map above it.",
      pt: "A mesma página de rastreio no celular, com a linha do tempo empilhada e o mapa acima.",
    },
    caption: {
      en: "Most people track a delivery from a phone, so this is the layout that matters.",
      pt: "A maioria rastreia entrega pelo celular, então este é o layout que importa.",
    },
  },
} satisfies Record<string, Shot>;
