import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { StackKey } from "./stack";

/** Texto que muda de idioma. Os tres sao obrigatorios: falta um, nao compila. */
export type I18nText = Record<Locale, string>;

/**
 * A gaveta do projeto. Nao ha "outros": projeto que nao cabe em nenhuma
 * destas provavelmente nao deveria estar no portfolio.
 */
export type Domain = "production" | "mobile" | "tools" | "data" | "platform" | "academic";

/**
 * O estado, dito sem eufemismo.
 * - `live`     roda hoje, todo dia util, com usuario de verdade.
 * - `building` esta sendo construido agora. Nao e promessa, e obra em curso.
 * - `shipped`  foi entregue e cumpriu o papel; pode nao rodar mais.
 * - `study`    trabalho academico.
 */
export type Status = "live" | "building" | "shipped" | "study";

/**
 * Um numero com a fonte junto.
 *
 * ARREDONDADO DE PROPOSITO. "1.155 commits" convida a ser conferido contra um
 * repositorio que e privado e que ninguem vai poder abrir; "1,100+" diz a
 * mesma coisa e e verdade por muito mais tempo. Nenhum numero aqui descreve
 * cliente, receita ou contrato.
 */
export interface Metric {
  /** Texto quando o valor tem palavra ("read only") ou decimal (1.7 / 1,7). */
  readonly value: string | I18nText;
  readonly label: I18nText;
}

/**
 * Uma captura da galeria.
 *
 * `shots` e uma LISTA e nao um campo unico porque uma imagem so nao mostra um
 * sistema. Vazia nao e pendencia esquecida: significa que ainda nao existe
 * captura com dado sintetico daquele sistema, e o dialogo diz isso em texto.
 * Video entra nesta mesma lista quando existir.
 */
export interface Shot {
  readonly src: StaticImageData;
  readonly alt: I18nText;
  readonly caption: I18nText;
}

/**
 * OS GRAFICOS DO ESTUDO DE CASO, desenhados pelo proprio site.
 *
 * Por que nao so o recorte do PDF: a pagina do relatorio e A4, em ingles e com
 * letra de impressao. Num dialogo de 900px ela vira borrao, no celular vira
 * nada, e em portugues fica em ingles. O grafico daqui usa os tokens do tema
 * (claro e escuro), o idioma da pagina e o mesmo dado agregado do relatorio.
 * A pagina original continua a um clique, como prova.
 *
 * Todo numero aqui saiu do gerador do relatorio, nao foi copiado a olho.
 */
export type InsightChart =
  | {
      /** Mapa de calor do chao: estantes A a H, posicoes 1 a 17. */
      readonly kind: "bays";
      readonly racks: readonly { readonly rack: string; readonly picks: readonly number[] }[];
      /** A estante que tem um corredor logo abaixo dela. */
      readonly aisleAfter: readonly string[];
      readonly moves: readonly {
        readonly from: readonly string[];
        readonly to: readonly string[];
        readonly label: I18nText;
      }[];
      readonly unit: I18nText;
      readonly benches: I18nText;
      readonly aisle: I18nText;
      readonly fewer: I18nText;
      readonly more: I18nText;
    }
  | {
      /** Pares vendidos juntos e guardados longe. */
      readonly kind: "pairs";
      readonly rows: readonly {
        readonly a: I18nText;
        readonly b: I18nText;
        /** Fracao dos pedidos com `a` que tambem levaram `b`. */
        readonly share: number;
        readonly perMonth: number;
        readonly from: string;
        readonly to: string;
      }[];
      readonly also: I18nText;
      readonly perMonth: I18nText;
    }
  | {
      /** Pedidos por hora, media de cada dia util. */
      readonly kind: "hours";
      readonly firstHour: number;
      readonly rows: readonly {
        readonly day: I18nText;
        readonly values: readonly number[];
        readonly total: number;
      }[];
      readonly totalLabel: I18nText;
    }
  | {
      /** Repesagem por transportadora, e o tamanho medido contra o reservado. */
      readonly kind: "reweigh";
      readonly carriers: readonly {
        readonly name: string;
        readonly reweighed: number;
        readonly shipments: number;
        readonly note?: I18nText;
      }[];
      readonly byCarrier: I18nText;
      readonly of: I18nText;
      readonly sizes: readonly {
        readonly label: I18nText;
        readonly booked: string;
        readonly cases: I18nText;
        /** Mediana e quartis de medido / reservado, por caixa. */
        readonly median: number;
        readonly p25: number;
        readonly p75: number;
      }[];
      readonly sizesTitle: I18nText;
      readonly bookedLabel: I18nText;
      readonly measuredLabel: I18nText;
      readonly rangeNote: I18nText;
    }
  | {
      /** Prazo de entrega por transportadora, em faixas de dias uteis. */
      readonly kind: "delivery";
      readonly rows: readonly {
        readonly name: string;
        /** Todos os consignments, entregues ou nao: e a base da fatia de volume. */
        readonly consignments: number;
        /** So os entregues, por faixa de prazo. */
        readonly bands: readonly number[];
      }[];
      readonly bands: readonly I18nText[];
      readonly shareLabel: I18nText;
      readonly fastLabel: I18nText;
    }
  | {
      /** As etapas de um processo, em ordem. */
      readonly kind: "process";
      readonly steps: readonly { readonly title: I18nText; readonly body: I18nText }[];
      /** Etapas que se repetem, contadas a partir de 1. */
      readonly loop?: { readonly from: number; readonly to: number; readonly label: I18nText };
    }
  | {
      /**
       * Um kit de testes (colecao Postman, por exemplo): cada pasta, quantas
       * requisicoes e verificacoes tem, e o que ela prova.
       */
      readonly kind: "suite";
      readonly rows: readonly {
        readonly name: I18nText;
        readonly requests: number;
        readonly checks: number;
        readonly proves: I18nText;
      }[];
      readonly requestsLabel: I18nText;
      readonly checksLabel: I18nText;
      readonly totalLabel: I18nText;
    }
  | {
      /**
       * Um sistema no centro e o que ele alcanca, cada ligacao com o acesso
       * EXATO que tem. Existe para responder "conecta em que, e pode o que?"
       * sem diagrama de nuvem bonito e vago.
       */
      readonly kind: "connections";
      readonly hub: { readonly title: I18nText; readonly body: I18nText };
      readonly links: readonly {
        readonly title: I18nText;
        readonly body: I18nText;
        readonly access: I18nText;
        readonly tone: "read" | "model" | "own";
      }[];
    };

/**
 * Uma figura do estudo de caso: o grafico do site, a pagina original, ou os
 * dois (grafico na frente, pagina a um clique).
 */
export interface InsightFigure {
  /** O achado, numa frase. Vai em cima da figura, como titulo. */
  readonly takeaway: I18nText;
  /** Descreve o que se ve, para quem nao ve. */
  readonly alt: I18nText;
  /** De onde vem e o recorte do dado. */
  readonly caption: I18nText;
  readonly chart?: InsightChart;
  readonly page?: StaticImageData;
}

/**
 * Um estudo de caso feito sobre o dado real do sistema.
 *
 * NAO e captura de tela do sistema: e pagina de relatorio, com numero
 * AGREGADO e anonimizada antes do recorte (ver `insights.ts`). Fica fora da
 * galeria de proposito. A galeria mostra o sistema; isto mostra o que o
 * sistema permitiu descobrir, e abre num topico recolhido dentro do dialogo.
 *
 * A ordem de leitura e a de um estudo de caso: o titulo ja e o achado, tres
 * numeros resumem, cada figura vem com a frase que ela prova, e o metodo
 * fecha. Quem so passa os olhos leva o titulo e os numeros.
 */
export interface Insights {
  /** O achado principal, nao o nome do relatorio. */
  readonly title: I18nText;
  /** Uma ou duas frases: de onde veio e para quem foi escrito. */
  readonly intro: I18nText;
  /** Tres no maximo. Numero arredondado, com o que ele mede no rotulo. */
  readonly highlights: readonly Metric[];
  readonly figures: readonly InsightFigure[];
  /** Como foi feito e conferido. Uma frase cada. */
  readonly method: readonly I18nText[];
  /** Titulo da lista acima, quando nao for "como foi feito" (ex.: protecoes). */
  readonly methodLabel?: I18nText;
  /**
   * Os rotulos do painel quando ele NAO e "resultados de producao": o selo do
   * card, a linha de cima do painel e a contagem. Ausente = o padrao do
   * dicionario, que fala de resultados.
   */
  readonly frame?: {
    readonly chip: I18nText;
    readonly eyebrow: I18nText;
    readonly count: I18nText;
  };
}

export interface ProjectCopy {
  /** Uma linha. Aparece embaixo do nome. */
  readonly tagline: string;
  /** Duas ou tres frases. E o que decide se o visitante abre. */
  readonly summary: string;
  /** O papel exercido, em uma linha. */
  readonly role: string;
}

export interface Project {
  readonly slug: string;
  /**
   * NOME GENERICO, sempre.
   *
   * Nunca o nome do produto, da empresa nem do repositorio. O que interessa a
   * quem le e o TIPO de sistema, e o nome interno so serve para amarrar um
   * empregador a um portfolio pessoal.
   */
  readonly name: string;
  /** Ordem na vitrine. Menor primeiro. Impacto manda, nao cronologia. */
  readonly order: number;
  readonly domain: Domain;
  readonly status: Status;
  /** `to` ausente = ainda em curso. */
  readonly period: { readonly from: string; readonly to?: string };
  readonly stack: readonly StackKey[];
  readonly metrics: readonly Metric[];
  readonly shots: readonly Shot[];
  /** Ausente = o projeto nao tem analise publicada. */
  readonly insights?: Insights;
  /**
   * O endereco publico do sistema, quando ele TEM um. So o portal tem: os
   * outros sao internos e ficam atras de login da empresa. Dominio proprio,
   * nunca `*.vercel.app`, porque o link e parte da credibilidade.
   */
  readonly link?: string;
  readonly copy: Record<Locale, ProjectCopy>;
}
