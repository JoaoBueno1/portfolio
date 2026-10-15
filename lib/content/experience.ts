import type { I18nText } from "./types";

const t = (en: string, pt: string): I18nText => ({ en, pt });

/**
 * A TRAJETORIA, para a pagina Experiencia e para o curriculo em PDF.
 *
 * O cargo descreve o TRABALHO, e a data e a de quando ele comecou de fato:
 * os sistemas comecaram enxutos em novembro de 2023, junto com o trabalho no
 * armazem, e e dai que conta o desenvolvimento. Nada aqui e inventado: o
 * armazem continua na linha do tempo, sem data de fim, porque ele foi sendo
 * substituido aos poucos pelos sistemas, e nao terminou num dia.
 *
 * O empregador atual nao e nomeado (regra do site inteiro); os anteriores sao.
 */
export interface Role {
  readonly title: I18nText;
  readonly org: I18nText;
  readonly place: I18nText;
  /** `YYYY-MM`. */
  readonly from: string;
  /** Ausente = atual. */
  readonly to?: string;
  /**
   * So o comeco, sem fim nem "hoje": um trabalho que foi sendo substituido
   * aos poucos por outro, em vez de terminar numa data.
   */
  readonly fromOnly?: boolean;
  readonly points: readonly I18nText[];
}

export const CURRENT_EMPLOYER = t("Wholesale distribution company", "Distribuidora atacadista");
const GOLD_COAST = t("Gold Coast, QLD, Australia", "Gold Coast, QLD, Austrália");

export const EXPERIENCE: readonly Role[] = [
  {
    title: t(
      "Full Stack Developer, internal systems",
      "Desenvolvedor full stack, sistemas internos",
    ),
    org: CURRENT_EMPLOYER,
    place: GOLD_COAST,
    from: "2023-11",
    points: [
      t(
        "Design, build and run the company's operational systems: a transport management system, a warehouse platform, a driver app, a partner API and an operations portal with an AI assistant.",
        "Projeto, construo e mantenho os sistemas operacionais da empresa: um TMS, uma plataforma de armazém, um app de motorista, uma API para parceiros e um portal de operações com assistente de IA.",
      ),
      t(
        "Started lean in November 2023, alongside my work on the warehouse floor, and grew the systems into daily production.",
        "Comecei enxuto em novembro de 2023, junto com o trabalho no chão do armazém, e levei os sistemas até a produção do dia a dia.",
      ),
      t(
        "Own deployments, databases, access control and monitoring, and the integrations with the ERP and the freight carriers.",
        "Cuido de deploy, bancos de dados, controle de acesso e monitoramento, e das integrações com o ERP e com as transportadoras.",
      ),
      t(
        "Support and train the people who use the systems every day: dispatch, warehouse, drivers and management.",
        "Dou suporte e treinamento a quem usa os sistemas todo dia: despacho, armazém, motoristas e gestão.",
      ),
    ],
  },
  {
    title: t("Warehouse Operations", "Operações de armazém"),
    org: CURRENT_EMPLOYER,
    place: GOLD_COAST,
    from: "2023-03",
    fromOnly: true,
    points: [
      t(
        "Receiving, picking, dispatch and inventory, then supervisory duties.",
        "Recebimento, separação, despacho e inventário, depois funções de supervisão.",
      ),
      t(
        "Seeing the daily work up close is where every system came from. The floor work was gradually replaced by building the software for it.",
        "Ver o trabalho do dia a dia de perto é de onde veio cada sistema. O chão do armazém foi sendo substituído, aos poucos, pela construção do software para ele.",
      ),
    ],
  },
  {
    title: t("Bank Officer, Client Relationship", "Escriturário, relacionamento com clientes"),
    org: t("Banco Bradesco", "Banco Bradesco"),
    place: t("Jundiaí, São Paulo, Brazil", "Jundiaí, São Paulo, Brasil"),
    from: "2018-10",
    to: "2022-11",
    points: [
      t(
        "Started as a teller and moved into commercial account management: client portfolios, account opening, credit, insurance and investment products.",
        "Comecei no caixa e passei à gestão comercial de contas: carteira de clientes, abertura de conta, crédito, seguros e investimentos.",
      ),
      t(
        "Worked to sales and service targets under compliance, KYC and security procedures, on core banking and CRM systems every day.",
        "Trabalhei com metas de venda e atendimento, seguindo compliance, KYC e normas de segurança, nos sistemas bancários e no CRM todos os dias.",
      ),
    ],
  },
];

/** O comeco, numa linha cada: conta a historia sem disputar espaco. */
export const EARLIER: readonly Role[] = [
  {
    title: t("Checkout Supervisor", "Supervisor de frente de caixa"),
    org: t("Supermarket group", "Rede de supermercados"),
    place: t("Morungaba, São Paulo, Brazil", "Morungaba, São Paulo, Brasil"),
    from: "2017-10",
    to: "2018-11",
    points: [
      t(
        "Cashier team, rosters, daily balancing and reconciliation across the registers.",
        "Equipe de caixas, escalas, fechamento e conciliação diária dos caixas.",
      ),
    ],
  },
  {
    title: t("Administrative Apprentice", "Jovem aprendiz administrativo"),
    org: t(
      "São Paulo State Cancer Institute (ICESP)",
      "Instituto do Câncer do Estado de São Paulo (ICESP)",
    ),
    place: t("São Paulo, Brazil", "São Paulo, Brasil"),
    from: "2016-03",
    to: "2017-03",
    points: [
      t(
        "Patient records in the hospital's electronic medical record system: my first work with data.",
        "Registros de pacientes no prontuário eletrônico do hospital: meu primeiro trabalho com dados.",
      ),
    ],
  },
];

export interface Course {
  readonly title: I18nText;
  readonly school: I18nText;
  readonly place: I18nText;
  readonly from: string;
  readonly to: string;
  readonly note: I18nText;
}

export const EDUCATION: readonly Course[] = [
  {
    title: t(
      "Diploma of Information Technology (ICT50220), Database and Data Management",
      "Diploma of Information Technology (ICT50220), Banco de Dados e Gestão de Dados",
    ),
    school: t("Mindroom Institute", "Mindroom Institute"),
    place: GOLD_COAST,
    from: "2024-04",
    to: "2026-06",
    note: t(
      "Web development, database design, data warehousing, REST APIs, NoSQL, cyber security and technical documentation.",
      "Desenvolvimento web, modelagem de banco, data warehouse, APIs REST, NoSQL, segurança da informação e documentação técnica.",
    ),
  },
];

export const LANGUAGES = t(
  "Portuguese (native), English (professional)",
  "Português (nativo), inglês (profissional)",
);

/** Os PDFs do curriculo, gerados a partir de `/[locale]/cv` (ver README). */
export const CV_PDF: Record<"en" | "pt", string> = {
  en: "/cv/joao-silva-cv-en.pdf",
  pt: "/cv/joao-silva-cv-pt.pdf",
};

/*
 * Mes escrito a mao, e nao pelo `Intl`: o `en-AU` abrevia julho como "July" e
 * setembro como "Sept", e o `pt-BR` escreve "jul. de 2026". Numa coluna de
 * datas o comprimento tem de ser o mesmo em toda linha.
 */
const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
} as const;

/** `2026-07` vira "Jul 2026" ou "jul 2026". */
export function formatMonth(iso: string, locale: "en" | "pt"): string {
  const [year, m] = iso.split("-");
  return `${MONTHS[locale][Number(m) - 1]} ${year}`;
}

/** "Nov 2023 – now", "Oct 2018 – Nov 2022" ou "From Mar 2023". */
export function formatPeriod(
  role: Pick<Role, "from" | "to" | "fromOnly">,
  locale: "en" | "pt",
  labels: { readonly present: string; readonly since: string },
): string {
  const from = formatMonth(role.from, locale);
  if (role.fromOnly) return `${labels.since} ${from}`;
  return `${from} – ${role.to ? formatMonth(role.to, locale) : labels.present}`;
}
