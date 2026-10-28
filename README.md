# joaosilva.app

Personal portfolio of João Marcos Bueno da Silva, backend software developer on the Gold Coast, Australia. Live at [joaosilva.app](https://joaosilva.app).

Static site in two languages (English and Brazilian Portuguese). No database, no login, no tracking.

## Stack

- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS 4 (design tokens in `app/globals.css`)
- Biome for formatting and linting, Vitest for content tests

## Run locally

Requires Node 22 or newer.

```bash
npm ci
npm run dev
```

Opens at http://localhost:3000 and redirects to `/en`. No environment variables are needed.

## Checks

```bash
npm run fix     # format and lint
npm run build   # compile and type-check
npm run test    # content tests
```

## Structure

| Path | Contents |
|---|---|
| `app/[locale]/` | Routes: home, `projects/[slug]`, `experience`, `about`, `cv` |
| `lib/content/` | Typed content: projects, galleries, experience, stack |
| `lib/i18n/` | Dictionaries. `en.ts` defines the type; a key missing in `pt.ts` fails the build |
| `components/` | Header, footer, project grid, project dialog, gallery |
| `public/` | Screenshots (fictional or anonymised data), artwork, CV PDFs, link previews |
| `scripts/og.mjs` | Generates the Open Graph images in `public/og/` |

## CV

`public/cv/joao-marcos-cv-{en,pt}.pdf` are the `/[locale]/cv` page printed to A4. Regenerate them after changing anything in `lib/content/`.

## What is not here

The source code of the systems shown in the projects. They belong to an employer and are private; the site shows architecture, decisions and results, never code and never customer data. Screenshots are taken from seeded databases with fictional data.
