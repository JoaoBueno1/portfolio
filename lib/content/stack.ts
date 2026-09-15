import {
  siAnthropic,
  siChartdotjs,
  siDjango,
  siDocker,
  siExpo,
  siExpress,
  siFlask,
  siGit,
  siGithub,
  siGithubactions,
  siGooglemaps,
  siJinja,
  siJsonwebtokens,
  siLinux,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPandas,
  siPhp,
  siPostgresql,
  siPython,
  siR,
  siReact,
  siSentry,
  siSqlalchemy,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siZebratechnologies,
  siZod,
} from "simple-icons";

/**
 * O inventario de ferramenta.
 *
 * ENXUTO DE PROPOSITO. A lista tinha 43 itens e virou 27. Uma lista longa
 * demais nao mostra amplitude, ela dilui: quem le para de distinguir o que
 * eu uso todo dia do que eu encostei uma vez.
 *
 * O CORTE: saiu tudo que so aparece em trabalho de curso (PHP, MySQL,
 * MongoDB, Django, R, Chart.js), tudo que e detalhe de um projeto e nao uma
 * competencia (Jinja2, Zod, Vite, Redis, NGINX, Zoho, Telegram), e o
 * ferramental do proprio repo, que ninguem contrata por (Biome, Vitest,
 * Notion). Nada disso e mentira; e so ruido numa pagina que tem poucos
 * segundos para dizer o que importa.
 *
 * `level` de 1 a 5 e auto-avaliacao, e a pagina diz isso em texto. A escala e
 * de USO: 5 e o que eu abro quase todo dia, 1 e o que eu usei o bastante para
 * resolver. Nada e 5 so porque soa bem.
 *
 * Icone via `simple-icons`, empacotado no build. Sem CDN. O que o pacote nao
 * tem (Microsoft) vem de path proprio.
 */
export interface Tech {
  readonly title: string;
  /** Path SVG em viewBox 24x24. */
  readonly path: string;
  /** 1 a 5. Uso real, nao aspiracao. */
  readonly level: 1 | 2 | 3 | 4 | 5;
}

/** O quadrado de quatro da Microsoft. O pacote removeu as marcas dela. */
const MICROSOFT_PATH =
  "M1 1h10.2v10.2H1zM12.8 1H23v10.2H12.8zM1 12.8h10.2V23H1zM12.8 12.8H23V23H12.8z";

const TECH = {
  // — Linguagens —
  python: { title: "Python", path: siPython.path, level: 5 },
  javascript: { title: "JavaScript", path: siNodedotjs.path, level: 5 },
  sql: { title: "SQL", path: siPostgresql.path, level: 5 },
  typescript: { title: "TypeScript", path: siTypescript.path, level: 4 },

  // — Backend —
  flask: { title: "Flask", path: siFlask.path, level: 5 },
  express: { title: "Node.js / Express", path: siExpress.path, level: 4 },
  sqlalchemy: { title: "SQLAlchemy", path: siSqlalchemy.path, level: 4 },
  rest: { title: "REST APIs / JWT", path: siJsonwebtokens.path, level: 4 },

  // — Frontend —
  react: { title: "React", path: siReact.path, level: 4 },
  nextjs: { title: "Next.js", path: siNextdotjs.path, level: 4 },
  tailwind: { title: "Tailwind CSS", path: siTailwindcss.path, level: 4 },
  expo: { title: "React Native / Expo", path: siExpo.path, level: 3 },

  // — Dados —
  postgresql: { title: "PostgreSQL", path: siPostgresql.path, level: 5 },
  supabase: { title: "Supabase", path: siSupabase.path, level: 5 },
  sqlite: { title: "SQLite", path: siSqlite.path, level: 4 },
  pandas: { title: "pandas", path: siPandas.path, level: 3 },

  // — Nuvem, deploy e operacao —
  git: { title: "Git / GitHub", path: siGit.path, level: 5 },
  actions: { title: "GitHub Actions", path: siGithubactions.path, level: 4 },
  vercel: { title: "Vercel", path: siNextdotjs.path, level: 4 },
  render: { title: "Render", path: siNodedotjs.path, level: 4 },
  sentry: { title: "Sentry", path: siSentry.path, level: 4 },
  docker: { title: "Docker", path: siDocker.path, level: 3 },
  linux: { title: "Linux", path: siLinux.path, level: 3 },

  // — Integracao —
  claude: { title: "Claude / AI tooling", path: siAnthropic.path, level: 5 },
  googlemaps: { title: "Google Maps Platform", path: siGooglemaps.path, level: 4 },
  microsoft: { title: "Microsoft 365 / Excel", path: MICROSOFT_PATH, level: 4 },
  zebra: { title: "Zebra ZPL", path: siZebratechnologies.path, level: 4 },

  // — Fora da pagina de skills, mas necessarias para os projetos —
  //
  // Um projeto precisa mostrar do que ele e feito, e a lista curta de skills
  // nao cobre tudo que ja foi usado. Estas continuam no registro de icones e
  // aparecem no card e no dialogo do projeto; so nao entram em STACK_GROUPS,
  // que e o que a pagina de skills e o carrossel leem. Sem isto, ou a pagina
  // de skills volta a ter 43 itens, ou o card do projeto mente sobre a stack.
  github: { title: "GitHub", path: siGithub.path, level: 5 },
  jinja: { title: "Jinja2", path: siJinja.path, level: 4 },
  zod: { title: "Zod", path: siZod.path, level: 3 },
  php: { title: "PHP", path: siPhp.path, level: 3 },
  mysql: { title: "MySQL", path: siMysql.path, level: 3 },
  django: { title: "Django", path: siDjango.path, level: 2 },
  mongodb: { title: "MongoDB", path: siMongodb.path, level: 2 },
  chartjs: { title: "Chart.js", path: siChartdotjs.path, level: 3 },
  r: { title: "R", path: siR.path, level: 2 },
} satisfies Record<string, Tech>;

export type StackKey = keyof typeof TECH;

export const STACK: Record<StackKey, Tech> = TECH;

/**
 * As trilhas da pagina de skills. Dentro de cada uma a ordem sai do `level`,
 * calculada em `skillGroups()` e nao escrita a mao, para a ordem nunca
 * discordar da nota.
 */
export const STACK_GROUPS = [
  { id: "language", keys: ["python", "javascript", "sql", "typescript"] },
  { id: "backend", keys: ["flask", "express", "sqlalchemy", "rest"] },
  { id: "frontend", keys: ["react", "nextjs", "tailwind", "expo"] },
  { id: "data", keys: ["postgresql", "supabase", "sqlite", "pandas"] },
  { id: "ops", keys: ["git", "actions", "vercel", "render", "sentry", "docker", "linux"] },
  { id: "tools", keys: ["claude", "googlemaps", "microsoft", "zebra"] },
] as const satisfies readonly { id: string; keys: readonly StackKey[] }[];

export type StackGroupId = (typeof STACK_GROUPS)[number]["id"];

/** Cada grupo com as chaves ja ordenadas por nivel, do maior para o menor. */
export function skillGroups() {
  return STACK_GROUPS.map((group) => ({
    id: group.id,
    keys: [...group.keys].sort((a, b) => STACK[b].level - STACK[a].level),
  }));
}

/**
 * O que o carrossel roda: as mesmas 27 da pagina de skills, ordenadas por
 * nivel. Sai de STACK_GROUPS e nao de `Object.keys(TECH)`, senao as chaves
 * que existem so para os projetos voltariam a aparecer no muro.
 */
export const ALL_KEYS = STACK_GROUPS.flatMap((group) => group.keys).sort(
  (a, b) => STACK[b].level - STACK[a].level,
) as StackKey[];
