# Portfolio Joao Marcos — plano de estrutura

> Documento de planejamento. Nada foi construido ainda.
> Data: 15/09/2026. Decisoes ja fechadas com o dono estao marcadas **[FECHADO]**.

---

## 1. O que existe de materia-prima (inventario verificado)

Tudo abaixo foi lido no disco ou na API do GitHub, nao e suposicao.

### 1.1 Sistemas em producao

| Sistema | Onde | Stack | Escala verificada |
|---|---|---|---|
| **Rapid-Express-Web (TMS)** | `~/Desktop/RapidExpress/website` · repo privado · Render | Flask 3.1, SQLAlchemy 2.0, Jinja2, Tailwind 3, Postgres/Supabase, Gunicorn, APScheduler, WeasyPrint/ReportLab, Fernet | 1.061 commits (16/06/2025 → 31/08/2026), 38 blueprints, ~2.500 req/dia, 19 usuarios |
| **Rapid-Labels (WMS)** | `~/Desktop/untitled folder/LabelsApp_Final` · repo privado · Vercel | Express 5, HTML/CSS/JS vanilla multipagina, Supabase proprio (schema `cin7_mirror`), `pg` direto, GitHub Actions | 21 features, 15 crons de sync Cin7 |
| **Driver App** (`Rapidexpress-app`) | repo privado · EAS/stores | React Native, Expo 53, TypeScript, Supabase, Google Maps, Expo Push | 1,25 MB de TS, bundle `com.rapidexpress.driver`, screenshots de App Store ja prontos |
| **rapid-portal** | `~/Code/rapid-portal` · repo privado · Vercel | Next 16.3.4, React 19.2, TS 5, Tailwind 4, `@supabase/ssr`, jose (EdDSA), zod 4, Biome, Vitest | 53 commits, handoff JWT, catalogo SQL fechado para IA |
| **rapid-claude-plugins** | `~/Code/rapid-claude-plugins` | Marketplace de plugins do Claude Code | 5 skills, cada uma nascida de um incidente real |

### 1.2 O que o TMS faz (o case principal)

Cotacao multi-transportadora em paralelo (AusPost/StarTrack, Direct Freight,
Phoenix e XFM via TransVirtual) · booking e despacho com etiqueta ZPL, manifesto
e route sheet · dispatch center com otimizacao de rota (Google Directions com
fallback guloso nearest-neighbour) · tracking do motorista ao vivo · sync de
tracking de carrier a cada 15 min · reconciliacao de fatura de transportadora ·
preditor de sobretaxa da Direct Freight · analise de margem contra o Cin7 ·
alertas de proximidade · faturamento mensal via Zoho · ciclo de vida de
credencial de carrier cifrada com Fernet · pagina publica de rastreio ·
precificacao e cobertura da frota propria · auditoria de cotacao (rate
shopping) · shipments inbound (containers) · modulo de frota/veiculos ·
observabilidade (`app_request_log`, `carrier_api_transactions`, alertas no
Telegram, Sentry).

**Numeros que existem como evidencia** (ver secao 9 antes de publicar qualquer um):
202 bookings StarTrack reais confirmados · ~120 consignments DF numa janela de 7
dias · classificador de reconciliacao calibrado contra 547–548 faturas DF ·
~1.300 linhas de sobretaxa por destino · banda de comprimento longo validada com
"100% hit rate vs billing" · limites de API: Phoenix/XFM 8 chamadas/60s, AusPost
12/60s, DF tracking 500/dia · ate 4 carriers cotados em paralelo com teto de 15s.

### 1.3 Historico pre-TMS

- **2023** — chao de armazem na Rapid LED. `01_Project_Warehouse_2023` (Excel),
  dashboards de logistica em PPTX. O comeco: processo antes de codigo.
- **Nov/2024** — primeiro app de verdade: Node.js/Express/EJS/SQLite para van
  booking, rodando local. Codigo em `~/Desktop/Rapid led/sistema-logistica`.
- **Out/2018 – Nov/2022** — Banco Bradesco, gerente de contas do segmento
  Classic (Jundiai/SP). KYC, compliance, controles internos, venda de produto
  financeiro. E de onde vem a leitura de negocio e a conversa com usuario.

### 1.4 Academico — ICT50220 Diploma of IT (Database & Data Management)

Mindroom Institute, Burleigh Heads QLD · abr/2024 – jun/2026.
Material em `~/Desktop/Mindroom/Done`: 40.682 arquivos, **122 videos**, 226 docx,
projetos em Python, PHP, R, Django, SQL.

Unidades com trabalho identificado no disco:

| Codigo | Tema | Trabalho concreto encontrado |
|---|---|---|
| BSBXCS402 | Cyber security no trabalho | Politica de Controle de Acesso com template NIST/CIS, sobre survey que mediu 50,2% de acerto |
| ICTICT435 | Documentacao tecnica | Guia de instalacao do DB Browser for SQLite |
| ICTDAT501 | Dados e relatorios | Projeto em **R**, extracao e documentacao de relatorios |
| ICTSAD502 | Modelagem de dados | ERD e diagrama de relacionamento |
| ICTDBS505/506/507 | Banco de dados | ERD de biblioteca escolar; conceitos de web programming, web security, sessao, stateless |
| ICTWEB514 | Web | Site PHP + MySQL com `includes/`, `pages/`, SQL proprio |
| ICTICT517 | ICT e estrategia | Business case "Riverline Digital" — orcamento, ISO 27001, Sentinel, Tenable, Intune |
| ICTWEB518/522/525 | Web / cliente | Site multipagina "Marvel" com design, desenvolvimento e validacao |
| ICTICT523 / ICTSAS527 | Requisitos / suporte | Levantamento de requisitos; gestao de problema de cliente |
| ICTICT532 | IP, etica e privacidade | Investigacao da politica de PI da propria RTO |
| ICTPRG553 | API | Site Django documentando 12 endpoints do dj-rest-auth em 5 apps |
| ICTPRG554 | NoSQL | Escala vertical vs horizontal |
| (503) | Data warehouse | `collectables_dwh` — SQL de DW com dados |
| BSBXTW401 | Liderar e facilitar time | — |

### 1.5 Midia ja disponivel

- **10 capturas sanitizadas** do TMS em `rapid-portal/public/screenshots`
  (banco SQLite semeado com dados ficticios, telefones na faixa 0491 570 xxx que
  a ACMA reserva para ficcao). Prontas para uso.
- **5+ capturas do Driver App** no repo `Rapidexpress-app/screenshots`, incluindo
  os sets de App Store 6.7" e 6.9".
- **122 videos** no Mindroom (demos de assessment).
- Logos de carrier e ERP em `rapid-portal/public/logos`.
- **Falta**: capturas do Rapid-Labels e do rapid-portal. Ver secao 8.

---

## 2. A tese do site

Uma frase governa tudo: **"esse cara ja construiu e operou software real em
producao"** — nao "esse cara fez projetos de curso".

Tres provas que sustentam a tese, nessa ordem:

1. **Producao de verdade.** Um booking errado no TMS e um frete faturavel real.
   Existe incidente documentado, existe politica de teste, existe rollback.
2. **Amplitude.** Flask, React Native, Next, Express, Postgres, integracoes com
   4 transportadoras e um ERP, mobile na loja, jobs em background, observabilidade.
3. **Honestidade tecnica.** Os READMEs dele dizem o que **nao** existe. Isso e
   raro e e o diferencial mais forte que ele tem — o site vai usar isso de
   proposito, com uma secao "known limits" em cada case.

---

## 3. Sitemap **[FECHADO: impacto primeiro, com filtro]**

```
/                     Home
/work                 Todos os projetos (grid filtravel — a "subpage" pedida)
/work/rapid-tms       Case: TMS  (o principal)
  /work/rapid-tms/reconciliation     deep dive — dinheiro e dados
  /work/rapid-tms/dispatch           deep dive — rota, frota e tempo real
/work/driver-app      Case: app do motorista (React Native / Expo)
/work/rapid-labels    Case: WMS de armazem
/work/rapid-portal    Case: auth, handoff JWT e modulo de IA
/work/ai-engineering  Case: engenharia com agentes (skills, regras, review)
/work/van-booking     Card curto: o primeiro app, 2024
/about                Quem sou — 3 frases no topo, historia e soft skills abaixo
/studies              Timeline academica por semestre + trabalhos
/cv                   PDF (opcional, so para candidatura)
```

Sem `/contact` proprio: contato vive no footer e no fim de `/about`.

### 3.1 Home — ordem das secoes

1. **Hero.** Nome, uma linha de posicionamento, dois CTAs (`See the work` /
   `Get in touch`). Sem foto gigante, sem animacao de entrada pesada.
2. **Faixa de prova.** 4 numeros duros (anos em producao, sistemas rodando,
   integracoes externas, commits) — cada um clicavel para onde ele se prova.
3. **Muro de logos.** Linguagens, frameworks, bancos, cloud, integracoes. E o
   pedido explicito: "mostrar que temos conhecimento em diversas areas".
   Agrupado em 5 trilhas: Language · Framework · Data · Cloud & Ops · Integrations.
4. **Vitrine de projetos.** Grid com filtro `All / Production / Internal tools /
   Mobile / Academic`. TMS ocupa um card largo (2 colunas); o resto, 1 coluna.
   Cada card: imagem, titulo, 1 linha, chips de stack, badge de status.
5. **Como eu trabalho.** As soft skills, em evidencia e nao em adjetivo (secao 6).
6. **Timeline compacta** 2018 → 2026, com link para `/studies` e `/about`.
7. **CTA final** + footer com idiomas, LinkedIn, GitHub, e-mail.

---

## 4. Modelo de conteudo (o que evita o site apodrecer)

Mesma disciplina do `rapid-portal`: **conteudo nao mora em componente.**

```
lib/content/
  projects.ts        // metadados de todo projeto (ordem, tags, status, midia)
  stack.ts           // o muro de logos, agrupado por trilha
  timeline.ts        // 2018 → 2026
  studies.ts         // unidades, semestres, trabalhos
  profile.ts         // nome, titulo, contato, links
  cases/
    rapid-tms.ts     // corpo do case study, tipado
    driver-app.ts
    ...
```

Tipagem forte: se um case nao tiver `problem`, `architecture`, `whatIBuilt`,
`hardProblems`, `evidence` e `knownLimits`, **o TypeScript quebra o build**. Isso
garante que nenhum case vire uma casca bonita e vazia.

### 4.1 Template de case study (mesma ordem em todos)

| # | Bloco | O que entra |
|---|---|---|
| 1 | **At a glance** | Papel, periodo, status, stack, escala. Uma tabela que se le em 10 segundos. |
| 2 | **The problem** | O trabalho manual que existia antes. Sempre em linguagem de negocio. |
| 3 | **Architecture** | Diagrama **SVG inline** desenhado por mim, tema-aware. Nunca screenshot de diagrama. |
| 4 | **What I built** | Features agrupadas por capacidade, cada uma com "o trabalho manual que substitui". |
| 5 | **Hard problems** | 2 a 4 mergulhos tecnicos de verdade. E aqui que o recrutador tecnico decide. |
| 6 | **See it running** | Screenshots em `<figure>` com legenda + video curto quando houver. |
| 7 | **Evidence & results** | Numeros, com a fonte declarada. |
| 8 | **Known limits** | O que nao esta pronto e por que. A assinatura dele. |

### 4.2 Os "hard problems" que ja tenho material para escrever

- **TMS** — cotar 4 carriers em paralelo dentro de 15s com orcamentos de rate
  limit diferentes por carrier; prever sobretaxa que a DF omite da cotacao;
  `set_session(readonly=True)` contra o pooler Supavisor em modo transacao
  (incidente de 25/08/2026); eleicao de scheduler leader entre workers do Gunicorn.
- **Reconciliation** — casar linha de fatura em PDF com o custo esperado e
  classificar divergencia; parser deterministico e por que o nome do arquivo
  (`reconciliation_ai.py`) mente.
- **Dispatch** — run lock que permite adicionar parada mas bloqueia reordenar
  (existe por causa do incidente de 14/05/2026); fallback guloso quando a
  Google Directions falha; snapshot planejado × executado.
- **Driver App** — tracking em background no iOS; fila offline e sync; POD com
  foto e assinatura; push da Expo.
- **Rapid-Labels** — espelhar Cin7 para Supabase com 15 crons; deriva entre
  `package.json` e lock quebrando 15 workflows de uma vez.
- **rapid-portal** — handoff com JWT EdDSA de vida curta validado contra JWKS;
  por que o claim `user_role` congela e acao destrutiva tem que consultar a
  tabela; `middleware.ts` ignorado em silencio no Next 16.
- **AI engineering** — catalogo SQL fechado: o modelo escolhe a consulta, nao
  escreve SQL, e pergunta fora do catalogo e respondida com "nao sei".

---

## 5. `/studies` — a parte academica **[timeline por semestre]**

Resumida de proposito. Nao lista semana, lista **tema e artefato**.

Formato: uma coluna de tempo (S1/2024 → S1/2026). Cada semestre e um bloco com
2–4 unidades; cada unidade e uma linha com codigo, tema e o artefato real
(miniatura clicavel → lightbox com a captura ou o video de 30s).

Regra: **nenhum PDF de assessment vai para o site.** Vai a captura, a descricao
em 2 linhas e, quando valer, o video. Trabalho academico entra como prova de
amplitude — nunca compete com os cases de producao na hierarquia visual.

Destaques que merecem card maior, porque conversam com o trabalho real:
Django REST docs (ICTPRG553), data warehouse (503), R e relatorios (ICTDAT501),
politica de acesso NIST/CIS (BSBXCS402).

---

## 6. Soft skills e lideranca — como mostrar sem adjetivo

Nada de "proativo, comunicativo". Cada afirmacao carrega a evidencia junto.
Com base no que voce confirmou e no que eu li no seu codigo e nos seus docs:

| O que se afirma | A evidencia que vai junto |
|---|---|
| **Coordenei time** | No inicio do desenvolvimento havia time — designer e outras pessoas, organizados em Notion, com pagamento envolvido. Escopo definido, trabalho distribuido, entrega revisada. |
| **Liderei estagio (QA / analise de mercado)** | Estagiario avaliava produtos concorrentes da mesma area, voltava com pesquisa, comparativo e sugestao sobre o nosso produto. Curto, mas real. |
| **Levantei requisito com quem opera** | Dispatcher, motorista, armazem e gerente. Aparece no codigo: cada feature do TMS esta documentada por "o trabalho manual que ela substitui". |
| **Treinei usuario e escrevi SOP** | Runbooks, `docs/POLITICA_TESTES_COM_EFEITO_REAL.md`, guias internos, onboarding de operador. |
| **Dirijo agentes de IA como time** | `rapid-claude-plugins`: 5 skills, cada uma existindo porque uma armadilha real mordeu alguem. Escrever a regra para nao repetir o erro e trabalho de tech lead. |
| **Honestidade tecnica** | READMEs que dizem o que **nao** existe: "este repositorio NAO contem a Driver PWA", `DEAD_CODE_REGISTER.md`, "o build de producao falha hoje". |
| **Disciplina pos-incidente** | `docs/INCIDENTE_*.md`. Toda regra dura do repo aponta para a data em que doeu. |
| **Seguranca por padrao** | Auditoria de `VITE_`/`NEXT_PUBLIC_`, rotacao de chave, RLS, credencial de carrier cifrada com Fernet. |
| **Sabe matar o proprio projeto** | O "Rapid Express Pro" (reescrita React) esta parado e **documentado como parado**, em vez de fingir que vive. |
| **Traduz negocio ↔ codigo** | 4 anos de banco (KYC, compliance, produto) + chao de armazem antes de escrever a primeira linha do TMS. |

Apresentacao: uma secao na home com 4 cartoes fortes, e a lista completa em
`/about`. Cada cartao linka para o case onde a evidencia vive.

---

## 7. Idiomas **[FECHADO: EN + PT-BR + ES completos]**

- Rota: `/`, `/pt`, `/es` (`en` e o default, sem prefixo).
- Dicionarios tipados em `lib/i18n/{en,pt,es}.ts`. **EN e a fonte da verdade**:
  o tipo sai do objeto `en`, entao um campo faltando em `pt` ou `es` quebra o
  build. Impossivel publicar traducao pela metade.
- Corpo dos cases mora no mesmo arquivo do case, em tres chaves de idioma.
- Seletor no header preserva a rota atual. `hreflang` + `alternates` no metadata.
- Nome proprio, stack e termo tecnico **nao se traduzem** (dispatch, booking,
  consignment, manifest ficam como estao nos tres idiomas).

---

## 8. Plano de midia

| Fonte | O que da | Acao |
|---|---|---|
| `rapid-portal/public/screenshots` | 10 capturas do TMS ja sanitizadas | Copiar. Zero trabalho. |
| `Rapidexpress-app/screenshots` (GitHub) | 5 telas + sets de App Store | Baixar via `gh api`. |
| `rapid-portal` rodando local | Home, hub, admin, modulo de IA, analytics | Capturar eu mesmo com dados semeados. |
| **Rapid-Labels** | — nada sanitizado hoje | **Bloqueio.** Precisa de captura com dado sintetico. Ver pergunta 3. |
| Mindroom (`Prints/`, `Assesment/`, 122 videos) | Academico | Selecionar ~12 imagens e 4 videos de ate 40s. |
| Diagramas de arquitetura | — | **Eu desenho em SVG inline**, tema-aware, um por case. Nao e screenshot. |

Regras de imagem: `next/image` com import estatico (o Next conhece dimensao e
gera AVIF/WebP, sem salto de layout), toda `<figure>` com legenda util e `alt`
que descreve o que se ve — o mesmo padrao que voce ja usa no `rapid-portal`.

Video: MP4 curto, sem audio, `muted playsinline`, poster estatico e **nunca**
autoplay que empurra o layout. Os videos longos de assessment viram clipes de
30–40s.

---

## 9. Sanitizacao e seguranca — regras inegociaveis

1. Nenhum nome de cliente, endereco, invoice, telefone ou pessoa real. Captura
   so de banco semeado com dado sintetico.
2. Nenhuma chave, token, endpoint interno ou nome de host privado. Nem em
   captura, nem em trecho de codigo, nem em diagrama.
3. **Codigo dos produtos nao e publicado.** O site mostra arquitetura, decisao e
   trecho generico. O unico repo publico e o proprio portfolio — e ele vira a
   amostra de codigo.
4. Todos os repos da Rapid sao privados hoje, entao **nao havera botao "View
   code"** nos cases de producao. Isso e uma escolha explicada no site, nao uma
   falta.
5. `.gitignore` antes do `git init`. Sem `NEXT_PUBLIC_` para nada que de acesso.
6. **Numero de negocio precisa de aval do empregador** (ver pergunta 1). Se nao
   houver, a saida e reescrever em forma relativa: "centenas de bookings reais",
   "milhares de requisicoes por dia", "quatro transportadoras em paralelo".

---

## 10. Decisoes tecnicas **[FECHADO: repo novo publico, Next 16 + Tailwind 4, Vercel]**

- **Next 16.3.4 / React 19 / TypeScript 5 / Tailwind 4** — as mesmas versoes do
  `rapid-portal`, entao as armadilhas que voce ja conhece continuam valendo:
  `proxy.ts` no lugar de `middleware.ts`, `params` e `searchParams` sao Promise,
  tokens em `@theme` e **sem `tailwind.config.js`**.
- **Sem banco, sem auth, sem Supabase.** Site estatico por padrao, tudo
  pre-renderizado. Formulario de contato: `mailto:` ou um Server Action que so
  manda e-mail. Menos superficie, menos coisa para quebrar.
- **Biome** (formatter + linter) e **Vitest** — mesmo ferramental.
- **Zero biblioteca de animacao.** CSS com um unico easing token, como no portal.
- **Logos**: pacote `simple-icons` empacotado no build, nada de CDN.
- Repo: `github.com/JoaoBueno1/<nome-a-definir>`, **publico**. Deploy na Vercel.
- CLAUDE.md proprio desde o commit 1, com as regras acima.

### Identidade visual

O portfolio **nao usa a marca da Rapid** (navy `#021E60` etc.) — aquela e do
empregador e vai aparecer nas capturas. Ele precisa de paleta propria, com
**dark mode** (recrutador navega de noite e o modo escuro sinaliza cuidado).
Proposta: base neutra fria, um unico acento, tipografia com um display e um
texto. Levo 2 direcoes visuais para voce escolher antes de escrever CSS.

---

## 11. Fases de entrega

| Fase | O que sai | Por que nessa ordem |
|---|---|---|
| **F0** | Repo, CLAUDE.md, tokens, layout, i18n vazio, deploy verde na Vercel | URL viva desde o dia 1 |
| **F1** | Modelo de conteudo + home + `/work` com dados reais, em EN | A espinha. Se a home nao convencer, nada convence |
| **F2** | Cases TMS (+2 deep dives), Driver App, Labels, Portal | O peso do site |
| **F3** | `/about`, `/studies`, `/work/ai-engineering`, `/work/van-booking` | Completa a historia |
| **F4** | PT-BR e ES | Traduzir conteudo pronto e barato; traduzir conteudo em movimento e caro |
| **F5** | Passe de midia: capturas, diagramas SVG, clipes; a11y, performance, SEO/OG | Polimento sobre conteudo estavel |
| **F6** | Dominio, `sitemap.xml`, `robots.txt`, OG por pagina, CV em PDF | Publicacao |

Cada fase fecha com build verde, Biome limpo e deploy na Vercel.

---

## 12. O que eu preciso de voce antes de comecar

1. **Aval do empregador.** Posso publicar capturas do TMS (com dado ficticio) e
   numeros como "202 bookings StarTrack"? Ou reescrevo tudo em forma relativa?
   Essa e a unica pergunta que pode mudar texto em todos os cases.
2. **Dominio.** Comprar um (`joaomarcos.dev`, `joaobueno.dev`) ou comecar em
   `*.vercel.app` e apontar depois?
3. **Rapid-Labels.** Voce consegue subir local com dado semeado para eu capturar
   as telas? Sem isso o case fica so com diagrama e texto.
4. **Foto sua** para o `/about` — tem uma que voce gosta, ou seguimos sem?
5. **Nome do repo** e handle publico do GitHub que vai no footer.
6. **CV em PDF** — uso o `CV_Joao.docx` como base e gero uma versao do site, ou
   voce prefere manter o PDF fora?

---

## 13. Decisoes tomadas em 15/09/2026 (fecham a secao 12)

1. **Numeros agregados PODEM ser publicados** — total de pedidos bookados pelo
   sistema, volume de reconciliacao, otimizacoes, requisicoes por dia.
   **Dado nao pode**: nome de cliente, endereco, telefone, invoice, referencia
   de pedido, nome de pessoa. Regra completa em `CLAUDE.md`.
2. **Dominio**: recomendado `joaomarcosbueno.dev` (~A$20/ano no Cloudflare
   Registrar, que vende a preco de custo). Compra adiada — o site sobe em
   `*.vercel.app` e o DNS aponta depois, sem retrabalho.
3. **Rapid-Labels**: autorizado subir local e capturar telas com dado semeado.
4. **Foto**: fica para depois. O `/about` nasce sem foto.
5. **Nome exibido**: Joao Marcos Bueno. **Repo**: `JoaoBueno1/portfolio`, publico.
6. **CV**: o `CV_Joao.docx` vira PDF e ganha um botao de download no site.

## 14. Achados novos na segunda varredura

- **Driver App e bem maior do que o README dele diz.** Alem de runs, mapa e POD:
  chat, templates de SMS para o cliente, load check (conferencia de carga),
  assinatura (`react-native-signature-canvas`), biometria
  (`expo-local-authentication`), `expo-secure-store`, Live Activity no iOS,
  fila de sync offline (`offlineSyncService.ts`), fila de upload de foto
  (`photoUploadQueue.ts`), rastreio em background (`expo-task-manager`),
  cache de directions e de places, Sentry, e reordenacao de paradas arrastando
  (`react-native-draggable-flatlist`). 21 screens.
- **O melhor projeto academico e o Collectables Data Warehouse** (unidade 503):
  star schema (`fact_sales` + 6 dimensoes), PHP com PDO, 8 graficos em
  Chart.js com um endpoint JSON por grafico, e na versao 4.2 login
  multi-papel com `password_hash`/`password_verify` (bcrypt), sessao, area de
  admin, registro de usuario e cadastro de loja. ~1.329 linhas.
  Conversa direto com o trabalho profissional: dado → dashboard → RBAC.
- Outros projetos academicos com substancia real: site PHP/MySQL com area de
  admin (unidade 514, ~1.326 linhas), integracao banco↔site (unidade 507,
  ~1.074 linhas), endurecimento de autenticacao no MongoDB (unidade 554),
  site Django documentando 12 endpoints do dj-rest-auth (unidade 553),
  site multipagina "Marvel" com design e validacao (unidade 525).
