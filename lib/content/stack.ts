import {
  siAnthropic,
  siBiome,
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
  siNginx,
  siNodedotjs,
  siNotion,
  siPandas,
  siPhp,
  siPostgresql,
  siPython,
  siR,
  siReact,
  siRedis,
  siSentry,
  siSqlalchemy,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTelegram,
  siTypescript,
  siVercel,
  siVite,
  siVitest,
  siZebratechnologies,
  siZod,
  siZoho,
} from "simple-icons";

/**
 * O inventario de ferramenta.
 *
 * REGRA: so entra o que aparece em projeto deste site. Muro de logo e uma
 * afirmacao, e cada uma precisa de um projeto atras.
 *
 * `level` de 1 a 5 e auto-avaliacao, e a pagina de skills diz isso em texto.
 * A escala e de USO, nao de talento: 5 e o que eu abro todo dia, 1 e o que eu
 * usei o bastante para me virar. Nada aqui e 5 so porque soa bem.
 *
 * Icone via `simple-icons`, empacotado no build. Sem CDN: 40 logos de
 * terceiro seriam 40 requisicoes e uma dependencia de um host que nao e meu.
 * O que o pacote nao tem (Microsoft) vem de path proprio logo abaixo.
 */
export interface Tech {
  readonly title: string;
  /** Path SVG em viewBox 24x24. */
  readonly path: string;
  /** 1 a 5. Uso real, nao aspiracao. */
  readonly level: 1 | 2 | 3 | 4 | 5;
}

/** O quadrado de quatro da Microsoft. O pacote tirou as marcas dela. */
const MICROSOFT_PATH =
  "M1 1h10.2v10.2H1zM12.8 1H23v10.2H12.8zM1 12.8h10.2V23H1zM12.8 12.8H23V23H12.8z";

const TECH = {
  // — Linguagens —
  python: { title: "Python", path: siPython.path, level: 5 },
  javascript: { title: "JavaScript", path: siNodedotjs.path, level: 5 },
  typescript: { title: "TypeScript", path: siTypescript.path, level: 4 },
  php: { title: "PHP", path: siPhp.path, level: 3 },
  r: { title: "R", path: siR.path, level: 2 },

  // — Backend —
  flask: { title: "Flask", path: siFlask.path, level: 5 },
  express: { title: "Express", path: siExpress.path, level: 4 },
  sqlalchemy: { title: "SQLAlchemy", path: siSqlalchemy.path, level: 4 },
  jinja: { title: "Jinja2", path: siJinja.path, level: 4 },
  jwt: { title: "JWT / JOSE", path: siJsonwebtokens.path, level: 4 },
  django: { title: "Django", path: siDjango.path, level: 2 },

  // — Frontend —
  react: { title: "React", path: siReact.path, level: 4 },
  nextjs: { title: "Next.js", path: siNextdotjs.path, level: 4 },
  tailwind: { title: "Tailwind CSS", path: siTailwindcss.path, level: 4 },
  expo: { title: "React Native / Expo", path: siExpo.path, level: 3 },
  vite: { title: "Vite", path: siVite.path, level: 3 },
  chartjs: { title: "Chart.js", path: siChartdotjs.path, level: 3 },
  zod: { title: "Zod", path: siZod.path, level: 3 },

  // — Dados —
  postgresql: { title: "PostgreSQL", path: siPostgresql.path, level: 5 },
  supabase: { title: "Supabase", path: siSupabase.path, level: 5 },
  sqlite: { title: "SQLite", path: siSqlite.path, level: 4 },
  pandas: { title: "pandas", path: siPandas.path, level: 3 },
  mysql: { title: "MySQL", path: siMysql.path, level: 3 },
  redis: { title: "Redis", path: siRedis.path, level: 2 },
  mongodb: { title: "MongoDB", path: siMongodb.path, level: 2 },

  // — Nuvem, deploy e operacao —
  git: { title: "Git", path: siGit.path, level: 5 },
  github: { title: "GitHub", path: siGithub.path, level: 5 },
  actions: { title: "GitHub Actions", path: siGithubactions.path, level: 4 },
  vercel: { title: "Vercel", path: siVercel.path, level: 4 },
  render: { title: "Render", path: siNodedotjs.path, level: 4 },
  sentry: { title: "Sentry", path: siSentry.path, level: 4 },
  docker: { title: "Docker", path: siDocker.path, level: 3 },
  linux: { title: "Linux", path: siLinux.path, level: 3 },
  nginx: { title: "NGINX", path: siNginx.path, level: 2 },

  // — Integracao e ferramenta —
  claude: { title: "Claude / Anthropic", path: siAnthropic.path, level: 5 },
  googlemaps: { title: "Google Maps Platform", path: siGooglemaps.path, level: 4 },
  microsoft: { title: "Microsoft 365 / Excel", path: MICROSOFT_PATH, level: 4 },
  zebra: { title: "Zebra ZPL", path: siZebratechnologies.path, level: 4 },
  telegram: { title: "Telegram Bot API", path: siTelegram.path, level: 3 },
  notion: { title: "Notion", path: siNotion.path, level: 3 },
  biome: { title: "Biome", path: siBiome.path, level: 3 },
  vitest: { title: "Vitest", path: siVitest.path, level: 3 },
  zoho: { title: "Zoho", path: siZoho.path, level: 2 },
} satisfies Record<string, Tech>;

export type StackKey = keyof typeof TECH;

export const STACK: Record<StackKey, Tech> = TECH;

/**
 * As trilhas da pagina de skills. Dentro de cada uma a ordem e por `level`
 * decrescente, calculada em `skillGroups()` e nao escrita a mao, para a
 * ordem nunca discordar da nota.
 */
export const STACK_GROUPS = [
  { id: "language", keys: ["python", "javascript", "typescript", "php", "r"] },
  { id: "backend", keys: ["flask", "express", "sqlalchemy", "jinja", "jwt", "django"] },
  { id: "frontend", keys: ["react", "nextjs", "tailwind", "expo", "vite", "chartjs", "zod"] },
  { id: "data", keys: ["postgresql", "supabase", "sqlite", "pandas", "mysql", "redis", "mongodb"] },
  {
    id: "ops",
    keys: ["git", "github", "actions", "vercel", "render", "sentry", "docker", "linux", "nginx"],
  },
  {
    id: "tools",
    keys: [
      "claude",
      "googlemaps",
      "microsoft",
      "zebra",
      "telegram",
      "notion",
      "biome",
      "vitest",
      "zoho",
    ],
  },
] as const satisfies readonly { id: string; keys: readonly StackKey[] }[];

export type StackGroupId = (typeof STACK_GROUPS)[number]["id"];

/** Cada grupo com as chaves ja ordenadas por nivel, do maior para o menor. */
export function skillGroups() {
  return STACK_GROUPS.map((group) => ({
    id: group.id,
    keys: [...group.keys].sort((a, b) => STACK[b].level - STACK[a].level),
  }));
}

/** Tudo, ordenado por nivel. E o que o carrossel roda. */
export const ALL_KEYS = (Object.keys(TECH) as StackKey[]).sort(
  (a, b) => STACK[b].level - STACK[a].level,
);
