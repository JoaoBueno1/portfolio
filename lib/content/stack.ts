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
  siOpenapiinitiative,
  siPandas,
  siPhp,
  siPostgresql,
  siPostman,
  siPytest,
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

export interface Tech {
  readonly title: string;
  readonly path: string;
  readonly level: 1 | 2 | 3 | 4 | 5;
}

const MICROSOFT_PATH =
  "M1 1h10.2v10.2H1zM12.8 1H23v10.2H12.8zM1 12.8h10.2V23H1zM12.8 12.8H23V23H12.8z";

const CLOUD_PATH =
  "M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z";

const TECH = {
  python: { title: "Python", path: siPython.path, level: 5 },
  javascript: { title: "JavaScript", path: siNodedotjs.path, level: 5 },
  sql: { title: "SQL", path: siPostgresql.path, level: 5 },
  typescript: { title: "TypeScript", path: siTypescript.path, level: 4 },

  flask: { title: "Flask", path: siFlask.path, level: 5 },
  express: { title: "Node.js / Express", path: siExpress.path, level: 4 },
  sqlalchemy: { title: "SQLAlchemy", path: siSqlalchemy.path, level: 4 },
  rest: { title: "REST APIs / JWT", path: siJsonwebtokens.path, level: 4 },

  react: { title: "React", path: siReact.path, level: 4 },
  nextjs: { title: "Next.js", path: siNextdotjs.path, level: 4 },
  tailwind: { title: "Tailwind CSS", path: siTailwindcss.path, level: 4 },
  expo: { title: "React Native / Expo", path: siExpo.path, level: 3 },

  postgresql: { title: "PostgreSQL", path: siPostgresql.path, level: 5 },
  supabase: { title: "Supabase", path: siSupabase.path, level: 5 },
  sqlite: { title: "SQLite", path: siSqlite.path, level: 4 },
  pandas: { title: "pandas", path: siPandas.path, level: 3 },

  git: { title: "Git / GitHub", path: siGit.path, level: 5 },
  actions: { title: "GitHub Actions", path: siGithubactions.path, level: 4 },
  aws: { title: "AWS", path: CLOUD_PATH, level: 4 },
  vercel: { title: "Vercel", path: siNextdotjs.path, level: 4 },
  sentry: { title: "Sentry", path: siSentry.path, level: 4 },
  docker: { title: "Docker", path: siDocker.path, level: 4 },
  linux: { title: "Linux", path: siLinux.path, level: 4 },

  claude: { title: "Claude / AI tooling", path: siAnthropic.path, level: 5 },
  googlemaps: { title: "Google Maps Platform", path: siGooglemaps.path, level: 4 },
  microsoft: { title: "Excel / Power Query", path: MICROSOFT_PATH, level: 4 },
  zebra: { title: "Zebra ZPL", path: siZebratechnologies.path, level: 4 },

  github: { title: "GitHub", path: siGithub.path, level: 5 },
  jinja: { title: "Jinja2", path: siJinja.path, level: 4 },
  zod: { title: "Zod", path: siZod.path, level: 3 },
  php: { title: "PHP", path: siPhp.path, level: 3 },
  mysql: { title: "MySQL", path: siMysql.path, level: 3 },
  django: { title: "Django", path: siDjango.path, level: 2 },
  mongodb: { title: "MongoDB", path: siMongodb.path, level: 2 },
  chartjs: { title: "Chart.js", path: siChartdotjs.path, level: 3 },
  r: { title: "R", path: siR.path, level: 2 },
  openapi: { title: "OpenAPI 3.1", path: siOpenapiinitiative.path, level: 4 },
  postman: { title: "Postman / Newman", path: siPostman.path, level: 4 },
  pytest: { title: "pytest", path: siPytest.path, level: 4 },
} satisfies Record<string, Tech>;

export type StackKey = keyof typeof TECH;

export const STACK: Record<StackKey, Tech> = TECH;

export const STACK_GROUPS = [
  { id: "language", keys: ["python", "javascript", "sql", "typescript"] },
  { id: "backend", keys: ["flask", "express", "sqlalchemy", "rest"] },
  { id: "frontend", keys: ["react", "nextjs", "tailwind", "expo"] },
  { id: "data", keys: ["postgresql", "supabase", "sqlite", "pandas"] },
  { id: "ops", keys: ["git", "actions", "aws", "docker", "linux", "vercel", "sentry"] },
  { id: "tools", keys: ["claude", "googlemaps", "microsoft", "zebra"] },
] as const satisfies readonly { id: string; keys: readonly StackKey[] }[];

export type StackGroupId = (typeof STACK_GROUPS)[number]["id"];

export function skillGroups() {
  return STACK_GROUPS.map((group) => ({
    id: group.id,
    keys: [...group.keys].sort((a, b) => STACK[b].level - STACK[a].level),
  }));
}

export const ALL_KEYS = STACK_GROUPS.flatMap((group) => group.keys).sort(
  (a, b) => STACK[b].level - STACK[a].level,
) as StackKey[];
