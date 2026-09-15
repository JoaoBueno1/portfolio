# portfolio

O portfolio publico de **Joao Marcos Bueno** — desenvolvedor de software na
Gold Coast, Australia.

Site em tres idiomas (en · pt-BR · es), estatico, sem banco e sem login.

## Stack

Versoes fixadas. Nao atualize de carona num PR de conteudo.

- **Next 16.3.4** (App Router) · **React 19.2.8** · **TypeScript 5**
- **Tailwind CSS 4** — tokens por `@theme inline` em `app/globals.css`,
  **sem `tailwind.config.js`**
- **Biome 2.5** — formatter e linter · **Vitest 4** — testes

## Rodar local

Precisa de Node 22 ou mais novo.

```bash
git clone git@github.com:JoaoBueno1/portfolio.git
cd portfolio
npm ci
npm run dev
```

Abre em http://localhost:3000 (redireciona para `/en`).

Nao ha `.env`: o site nao fala com servico nenhum.

## Antes de abrir PR

```bash
npm run fix      # Biome formata e conserta o que da
npm run build    # compila e faz o type check
npm run test     # Vitest
```

## Estrutura

| Pasta | O que e |
|---|---|
| `app/[locale]/` | Todas as rotas. O root layout mora aqui — nao existe `app/layout.tsx` |
| `lib/i18n/` | Dicionarios. `en.ts` e a fonte da verdade do tipo |
| `lib/content/` | Projetos, stack, timeline, formacao — todo texto longo, tipado |
| `public/` | Capturas e logos |
| `docs/PLANO.md` | O plano de estrutura e as fases de entrega |

## Idiomas

`/en` (padrao), `/pt`, `/es`. A raiz redireciona para `/en`.

Uma chave que falta em `pt.ts` ou `es.ts` **quebra o build** — o tipo do
dicionario e derivado do ingles de proposito.

## O que este repositorio nao contem

O codigo dos sistemas mostrados nos case studies. Eles sao privados e de um
empregador; o site apresenta arquitetura, decisao e resultado, nunca o codigo
e nunca dado de cliente. A regra completa esta em `CLAUDE.md`.
