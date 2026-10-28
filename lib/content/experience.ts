import type { I18nText } from "./types";

const t = (en: string, pt: string): I18nText => ({ en, pt });

export interface Role {
  readonly title: I18nText;
  readonly org: I18nText;
  readonly place: I18nText;
  readonly from: string;
  readonly to?: string;
  readonly points: readonly I18nText[];
}

export const CURRENT_EMPLOYER = t("Wholesale distribution company", "Distribuidora atacadista");
const GOLD_COAST = t("Gold Coast, QLD, Australia", "Gold Coast, QLD, Austrália");

export const EXPERIENCE: readonly Role[] = [
  {
    title: t("Web Administrator", "Web Administrator"),
    org: CURRENT_EMPLOYER,
    place: GOLD_COAST,
    from: "2023-11",
    points: [
      t(
        "Built and maintain the company's freight platform (Python, Flask, PostgreSQL), integrating 9 external systems: carrier APIs, the ERP, maps and routing. 10,000+ external-carrier consignments booked between April and October 2026.",
        "Construí e mantenho a plataforma de frete (Python, Flask, PostgreSQL), com 9 sistemas externos integrados: APIs de transportadoras, ERP, mapas e roteirização. Mais de 10.000 consignments reservados entre abril e outubro de 2026.",
      ),
      t(
        "Designed and built a partner-facing carrier API under an OpenAPI 3.1 contract, with a sandbox and 613 automated tests.",
        "Projetei uma API de transportadora para parceiros sob contrato OpenAPI 3.1, com sandbox e 613 testes automatizados.",
      ),
      t(
        "Built the warehouse platform (20+ features, 20+ scheduled sync jobs), the driver app for iOS and Android, and an operations portal with a read-only AI assistant over the company's databases.",
        "Construí a plataforma de armazém (20+ features, 20+ jobs de sincronização), o app de motorista para iOS e Android e um portal com assistente de IA só de leitura sobre os bancos da empresa.",
      ),
      t(
        "Own deployments on AWS and Vercel, databases, access control and monitoring; support and train dispatch, warehouse, drivers and management.",
        "Cuido de deploy (AWS e Vercel), bancos, controle de acesso e monitoramento; suporte e treinamento a despacho, armazém, motoristas e gestão.",
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

export const CV_PDF: Record<"en" | "pt", string> = {
  en: "/cv/joao-marcos-cv-en.pdf",
  pt: "/cv/joao-marcos-cv-pt.pdf",
};

const MONTHS = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
} as const;

export function formatMonth(iso: string, locale: "en" | "pt"): string {
  const [year, m] = iso.split("-");
  return `${MONTHS[locale][Number(m) - 1]} ${year}`;
}

export function formatPeriod(
  role: Pick<Role, "from" | "to">,
  locale: "en" | "pt",
  present: string,
): string {
  const from = formatMonth(role.from, locale);
  return `${from} – ${role.to ? formatMonth(role.to, locale) : present}`;
}
