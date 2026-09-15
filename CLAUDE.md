@AGENTS.md

# portfolio

O portfolio publico de **Joao Marcos Bueno**. Roda em Next 16 na Vercel.

A tese que governa cada decisao: fazer o recrutador pensar **"esse cara ja
construiu e operou software real em producao"** — nao "esse cara fez alguns
projetos de estudante". Se uma secao nao serve a essa frase, ela nao entra.

Este arquivo tem **teto de 200 linhas** e guarda so fato permanente. Acima
disso a aderencia cai e o resto passa a ser ignorado na pratica.

## A regra que manda em tudo: dado nao sai daqui

O material deste site vem de sistemas em producao de um empregador real
(Rapid LED / Rapid Express, Australia). A permissao e clara e tem um limite:

- **Numero agregado PODE**: total de pedidos bookados pelo sistema, volume de
  reconciliacao, otimizacoes, requisicoes por dia, quantidade de integracoes.
- **Dado NAO PODE, nunca**: nome de cliente, endereco, telefone, numero de
  invoice, referencia de pedido real, nome de pessoa, valor de contrato.
- Captura de tela so de **banco semeado com dado sintetico**. As 10 capturas
  herdadas do `rapid-portal` ja nasceram assim (telefones na faixa
  `0491 570 xxx`, que a ACMA reserva para ficcao).
- Nenhuma chave, token, endpoint interno ou nome de host privado — nem em
  captura, nem em trecho de codigo, nem em diagrama.
- **Na duvida sobre uma captura, ela nao entra.** Nao ha upside em arriscar.

O `.gitignore` bloqueia `*.csv` `*.tsv` `*.xlsx` por causa disso.

## O codigo dos produtos nao e publicado

Todos os repos da Rapid sao privados e continuam privados. O site mostra
**arquitetura, decisao e trecho generico** — nunca o codigo real.

Consequencia: **nao existe botao "View code"** nos cases de producao. Isso e
uma escolha explicada no proprio site, nao uma falta. O unico codigo publico
e o deste repositorio, e e ele que serve de amostra.

## Next 16 — as regras que mordem

Erros que **nao aparecem no build**. O deploy passa verde e ninguem avisa.

- **O middleware chama-se `proxy.ts`, na raiz.** Um `middleware.ts` e ignorado
  SILENCIOSAMENTE no Next 16.
- **`params` e `searchParams` sao Promise** em page e layout desde o Next 15.
  Precisa `await`.
- **`params` nao e validado pelo router.** `/xx` chega ao layout como string
  qualquer — por isso todo segmento de locale passa por `isLocale()` e cai em
  `notFound()`.
- **`LayoutProps` / `PageProps` sao globais gerados em `.next/types`.** Um
  `tsc --noEmit` num clone limpo falha ate existir um build. Rode
  `npm run build` antes de `npm run types`.

## Idioma

Tres idiomas: **en** (padrao), **pt-BR**, **es**. Toda rota vive sob
`app/[locale]/`; a raiz redireciona para `/en` pelo `next.config.ts`.

- **`lib/i18n/en.ts` e a fonte da verdade.** O tipo `Dictionary` sai dele,
  entao chave faltando em `pt.ts` ou `es.ts` **quebra o build**. Nao ha como
  publicar traducao pela metade.
- **`en.ts` nao leva `as const`.** Com ele o tipo vira literal e o compilador
  passaria a exigir a frase em ingles dentro do arquivo portugues.
- **Termo tecnico de logistica nao se traduz** em lingua nenhuma: dispatch,
  booking, consignment, manifest, carrier. E assim que a industria fala.
- **Comentario de codigo, commit e PR em portugues.** Texto que o visitante le,
  nos tres idiomas. Identificador de codigo sempre em ingles.

## Conteudo nao mora em componente

Todo texto de projeto, stack, timeline e formacao vive em `lib/content/`,
tipado. Componente recebe dado, nunca guarda dado.

Todo texto que muda de idioma e `Record<Locale, string>`. Os tres sao
obrigatorios pelo tipo, entao nao existe card traduzido pela metade.

O site tem **quatro destinos**: Sobre, Skills, Soft skills e Projetos. Nao
adicione um quinto sem um motivo forte. O ponto do desenho e o visitante nunca
sentir que navegou: a coluna da esquerda fica parada e so o painel da direita
troca.

Projeto abre em `<dialog>` nativo, nao em pagina propria. Quem fecha volta
exatamente para onde estava.

## Como se escreve texto aqui

O visitante le isto, nao e comentario de codigo:

- **Acento obrigatorio** em portugues e espanhol, `¿` e `¡` incluidos.
  Comentario de codigo neste repo vai sem acento por convencao; texto de
  interface, nunca.
- **Nada de travessao entre palavras.** Virgula, ponto ou dois-pontos.
- Frase curta. Se precisa de virgula no meio so para respirar, corta em duas.
- Nada de adjetivo sobre si mesmo ("proativo", "comunicativo"). Diz o que
  aconteceu e onde.
- Termo de logistica nao se traduz: dispatch, booking, consignment, manifest,
  carrier.
- Numero publicado carrega a fonte junto. Se a fonte nao pode ser citada, o
  numero vira forma relativa ("centenas de bookings reais").

## Estilo

- Os tokens vivem em `app/globals.css`, no bloco `@theme inline` do Tailwind
  v4 — **nao existe `tailwind.config.js`**.
- **Hex cravado em componente e proibido.** Cor que nao existe como token vira
  discussao e token novo, nao um `#1e293b` no meio de um `className`.
- A paleta **nao e a da Rapid**. O navy da marca aparece dentro das capturas;
  se o site tambem fosse navy, o produto sumiria no cenario.
- **Dark mode e obrigatorio** em toda tela nova. Os valores crus sao
  redefinidos em `@media (prefers-color-scheme: dark)` e em
  `[data-theme="dark"]`. Cor definida so dentro de um desses blocos e bug.
- **Zero biblioteca de animacao.** CSS com o easing unico `--ease-out-soft`.
- Toda imagem por `next/image` com import estatico — o Next passa a conhecer
  dimensao, gera AVIF/WebP e o layout nao salta.
- `alt` descreve o que se ve. Legenda de `<figure>` explica por que importa.

## Qualidade

- Sem `any`. Sem `@ts-ignore` sem uma linha explicando o porque logo acima.
- Sem `TODO` no que entra em `main`.
- Numero publicado carrega a fonte junto. Se a fonte nao pode ser citada, o
  numero vira forma relativa ("centenas de bookings reais").
- Antes de abrir PR: `npm run fix`, `npm run build`, `npm run test`.

<!-- BEGIN:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
