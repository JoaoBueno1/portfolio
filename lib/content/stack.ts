import {
  siAnthropic,
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
  siLinux,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNginx,
  siNodedotjs,
  siPandas,
  siPhp,
  siPostgresql,
  siPython,
  siR,
  siReact,
  siSentry,
  siSqlite,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
  siVite,
  siZod,
  siZoho,
} from "simple-icons";

/**
 * O muro de logos da home.
 *
 * REGRA: so entra tecnologia que aparece em projeto DESTE site. Muro de logo
 * e uma afirmacao — "eu trabalhei com isso" — e cada uma precisa de um
 * projeto que a prove. Nada de encher com o que se leu num tutorial.
 *
 * Os icones vem do pacote `simple-icons`, empacotado no build. Nenhum CDN:
 * um muro de 30 logos via CDN sao 30 requisicoes de terceiro, e o site
 * passaria a depender de um host que nao e nosso.
 *
 * Carrier e ERP nao existem no simple-icons; esses vem de SVG proprio em
 * `public/logos/` e moram na faixa de integracoes da pagina do TMS, nao aqui.
 */
export interface Tech {
  readonly title: string;
  /** Caminho SVG do simple-icons, ja em viewBox 24x24. */
  readonly path: string;
  /** Onde isso foi usado — aparece no title do icone. */
  readonly usedIn: string;
}

const TECH = {
  python: { title: "Python", path: siPython.path, usedIn: "TMS" },
  typescript: { title: "TypeScript", path: siTypescript.path, usedIn: "Driver app, portal" },
  javascript: { title: "JavaScript", path: siNodedotjs.path, usedIn: "Rapid Labels" },
  php: { title: "PHP", path: siPhp.path, usedIn: "Study projects" },
  r: { title: "R", path: siR.path, usedIn: "Study projects" },

  flask: { title: "Flask", path: siFlask.path, usedIn: "TMS" },
  jinja: { title: "Jinja2", path: siJinja.path, usedIn: "TMS" },
  react: { title: "React", path: siReact.path, usedIn: "Portal, driver app" },
  nextjs: { title: "Next.js", path: siNextdotjs.path, usedIn: "Portal, this site" },
  expo: { title: "React Native / Expo", path: siExpo.path, usedIn: "Driver app" },
  express: { title: "Express", path: siExpress.path, usedIn: "Rapid Labels" },
  django: { title: "Django", path: siDjango.path, usedIn: "Study projects" },
  tailwind: { title: "Tailwind CSS", path: siTailwindcss.path, usedIn: "Portal, this site" },
  vite: { title: "Vite", path: siVite.path, usedIn: "React front-end" },
  zod: { title: "Zod", path: siZod.path, usedIn: "Portal" },

  postgresql: { title: "PostgreSQL", path: siPostgresql.path, usedIn: "TMS, Labels, portal" },
  supabase: { title: "Supabase", path: siSupabase.path, usedIn: "TMS, Labels, portal" },
  sqlite: { title: "SQLite", path: siSqlite.path, usedIn: "Van booking, tests" },
  mysql: { title: "MySQL", path: siMysql.path, usedIn: "Study projects" },
  mongodb: { title: "MongoDB", path: siMongodb.path, usedIn: "Study projects" },
  pandas: { title: "pandas", path: siPandas.path, usedIn: "Reconciliation" },

  git: { title: "Git", path: siGit.path, usedIn: "Everywhere" },
  github: { title: "GitHub", path: siGithub.path, usedIn: "Everywhere" },
  actions: { title: "GitHub Actions", path: siGithubactions.path, usedIn: "Labels sync jobs" },
  vercel: { title: "Vercel", path: siVercel.path, usedIn: "Labels, portal, this site" },
  render: { title: "Render", path: siNodedotjs.path, usedIn: "TMS" },
  docker: { title: "Docker", path: siDocker.path, usedIn: "TMS, front-end" },
  nginx: { title: "NGINX", path: siNginx.path, usedIn: "Front-end container" },
  linux: { title: "Linux", path: siLinux.path, usedIn: "Servers, CI" },
  sentry: { title: "Sentry", path: siSentry.path, usedIn: "TMS, driver app" },

  googlemaps: {
    title: "Google Maps Platform",
    path: siGooglemaps.path,
    usedIn: "Routing, geocoding",
  },
  zoho: { title: "Zoho", path: siZoho.path, usedIn: "Monthly billing" },
  claude: { title: "Claude / Anthropic", path: siAnthropic.path, usedIn: "Portal AI module" },
} satisfies Record<string, Tech>;

export type StackKey = keyof typeof TECH;

export const STACK: Record<StackKey, Tech> = TECH;

/** As cinco trilhas do muro, na ordem em que aparecem. */
export const STACK_GROUPS = [
  { id: "language", keys: ["python", "typescript", "javascript", "php", "r"] },
  {
    id: "framework",
    keys: [
      "flask",
      "jinja",
      "react",
      "nextjs",
      "expo",
      "express",
      "django",
      "tailwind",
      "vite",
      "zod",
    ],
  },
  { id: "data", keys: ["postgresql", "supabase", "sqlite", "mysql", "mongodb", "pandas"] },
  {
    id: "ops",
    keys: ["git", "github", "actions", "vercel", "render", "docker", "nginx", "linux", "sentry"],
  },
  { id: "integration", keys: ["googlemaps", "zoho", "claude"] },
] as const satisfies readonly { id: string; keys: readonly StackKey[] }[];

export type StackGroupId = (typeof STACK_GROUPS)[number]["id"];
