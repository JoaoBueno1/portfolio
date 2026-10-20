# Próxima fase do portfólio

Plano de 13/10/2026. Duas fases, mais uma opcional. Cada item tem critério de
pronto; nada entra no ar sem passar por `npm run fix`, `npm run build` e
`npm run test`.

## Reestruturação de 21/10/2026 (feita)

Home nova (apresentação, projetos, ferramentas, experiência resumida,
contato), menu no topo no lugar da coluna, uma página por projeto, Skills e
Soft skills dentro do Sobre, nome e cargo alinhados ao LinkedIn.

**Espaço reservado:** o assistente de IA conectado aos bancos das várias
partes da empresa, em construção. Quando ficar pronto, ele entra na página
do Portal de Operações (`operations-portal`) como a evolução do assistente
atual, com telas novas de dado inventado, ou vira um sexto card em
`lib/content/projects.ts` se o escopo for maior que o portal. Também fica
planejado um card "Data Analysis and Reporting" (Excel, Power Query e banco,
a automação das planilhas das filiais), pendente de telas com dado inventado.

## Fase 0: auditoria de recrutador (feita em 13/10/2026)

Passada antes da fase 1, a partir do brief "Portfolio Optimization". O que
mudou, sem redesenho:

- Sobre: o H1 virou o posicionamento ("Full stack developer | Business
  systems and automation"); "About" ficou como rótulo. Intro reescrita em
  volta de projetar, construir, integrar, publicar e manter. Título da aba e
  do Open Graph com nome e cargo. Coluna ganhou a linha "Business systems and
  automation".
- Projetos: todo projeto é um `<article>` com `<h3>`; o texto de TODOS os
  projetos está no HTML (antes só o dialogo aberto existia). Os seis de
  produção ganharam estudo de caso em texto (`lib/content/case-studies.ts`):
  desafio, papel, solução, impacto e destaques técnicos. Diálogo com
  `aria-labelledby`, `dt`/`dd` na ordem certa, stack com nome ao lado do
  ícone. JSON-LD `ItemList` dos sistemas de produção.
- Skills: bloco "What I do with them" (seis capacidades, sem logo). AWS
  entrou no grupo de nuvem e na stack do TMS. "Microsoft 365 / Excel" virou
  "Excel / Power Query".
- Soft skills: cada história ganhou o nome da competência em cima
  (Technical communication, Project coordination and delivery, Requirements
  gathering, Research coordination and mentoring, User feedback and
  ownership, User training and adoption). Lead sem "time para tocar".
- SEO: JSON-LD `Person` + `WebSite` no layout, Open Graph por página,
  descrições reescritas com a stack.

Pendências que a auditoria deixou para o João (nada inventado no site):

- [ ] Confirmar a frase sobre Excel/Power Query lendo o banco do armazém
  (veio do brief; se não for assim, tirar de Skills e do case do armazém).
- [ ] O brief pede "Cin7 Core" pelo nome. O teste de conteúdo bloqueia o nome
  do ERP de propósito (CLAUDE.md). O site diz "the company's cloud ERP".
  Decidir se o nome entra; se sim, tirar o hash do teste.
- [ ] Números de impacto de negócio conferidos (tempo poupado, erros a menos,
  volume por mês). Hoje o impacto é qualitativo mais os agregados que já
  existiam (10k+ consignments, 613 testes, etc.).
- [ ] O brief diz para preservar todos os projetos de estudo; a fase 1 dizia
  enxugar de 10 para 5. Ficaram os 10. Decidir.

## A decisão sobre o chat

**Sim, vai ter um chat de IA dentro do portfólio, que o visitante usa ali
mesmo.** Mas não um "chatbot sobre mim" solto. O chat é a demonstração do
assistente de dados da fase 2, embutida no site.

Por quê:

- Um chatbot genérico de currículo virou lugar-comum em portfólio de IA, e
  quem contrata desconfia dele: não mostra engenharia, e um modelo livre pode
  inventar experiência que não existe.
- O que tem valor no assistente de dados real é o que fica em volta do modelo:
  catálogo fechado de consultas, acesso só de leitura, permissão, registro de
  perguntas e avaliação. É isso que precisa aparecer, e com código que dá para
  ler.
- Um endpoint público que chama um modelo pago precisa de teto de gasto
  imposto, limite por IP e proteção contra abuso. Isso é parte da
  demonstração, não um detalhe.

Se depois valer a pena, a fase 3 usa o MESMO motor para responder perguntas
sobre os projetos, sem poder inventar nada.

---

## Fase 1: ganhos rápidos (1 a 2 dias)

Nada de projeto novo. Fechar o que um recrutador procura e não encontra.

- [x] **AWS no site.** (13/10, fase 0) Está nos destaques técnicos do TMS, na
  stack do card e em Skills, com ícone neutro de nuvem e o nome escrito.
  AWS, Docker e Linux em "Often" (4 de 5); Render saiu da lista.
- [ ] **Currículo.** Página `/cv` em inglês, imprimível, e o PDF gerado dela.
  Palavras que os filtros automáticos procuram, só as verdadeiras: Python,
  TypeScript, React, Next.js, PostgreSQL, AWS, Docker, REST, OpenAPI, Postman,
  pytest, Claude API, tool use. Link na barra lateral.
- [ ] **Foto real** no lugar marcado na barra lateral.
- [ ] **GitHub.** Nome João Silva, uma linha de bio, site `joaosilva.app`,
  README de perfil, este repositório fixado.
- [x] **Domínio.** Conferido em 13/10: `www.joaosilva.app` responde 307 para
  `https://joaosilva.app/en`. O apex é o principal.
- [ ] **Estudos.** Enxugar a lista de 10 para os 5 mais fortes. (Em conflito
  com o brief da fase 0, que pede para não apagar projeto. Decidir antes.)

Pronto quando: um recrutador acha em menos de um minuto o currículo, a stack
de nuvem e o GitHub, e o domínio principal não redireciona.

---

## Fase 2: assistente de dados público (1 a 2 semanas)

Um projeto novo, público, escrito do zero. Prova de uma vez o que as vagas
mais pedem: IA integrada a dado de negócio, avaliação de IA, nuvem (AWS) e
código que dá para ler.

### O que é

Um assistente que responde perguntas sobre os dados de um atacadista
fictício (produtos, filiais, vendas, estoque e fretes), com a tabela de onde
veio cada resposta.

### Regras do projeto

- Repositório público novo (nome provisório `data-assistant`), licença MIT.
- **Escrito do zero.** Nenhuma linha copiada de sistema de empregador; o
  padrão é conhecido, o código é novo.
- Dado 100% fictício, gerado por script com semente fixa: qualquer um
  reproduz o mesmo banco.

### Como funciona

- **Catálogo fechado** de umas 10 consultas escritas à mão. O modelo escolhe
  uma e preenche os parâmetros; parâmetro desconhecido é recusado; valor só
  chega ao banco como parâmetro vinculado. O modelo nunca escreve SQL.
- **Banco só de leitura**, empacotado com a função (SQLite ou DuckDB).
- **Resposta com evidência:** o texto em cima, a tabela embaixo, com o
  período e as regras aplicadas. Fora do catálogo: "não sei responder isso".
- **Modelo:** Claude (Anthropic), configurável por variável de ambiente.

### Proteções do endpoint público

- Teto de gasto diário **imposto** no servidor (começa em US$ 2 por dia): ao
  bater, o chat avisa e para até o dia seguinte.
- Limite de perguntas por IP, máximo de tokens por resposta, histórico curto.
- Interruptor para desligar sem deploy.
- Registro de cada pergunta (consulta escolhida, tempo, custo), sem dado
  pessoal.

### Avaliação

- Umas 40 perguntas de referência, cada uma com a consulta esperada (ou a
  recusa esperada).
- Mede: acerto da consulta, recusa correta, custo e tempo médio por pergunta.
- Roda no CI sob demanda e publica o resultado; o número aparece no
  portfólio junto da demonstração.

### Infraestrutura (AWS, Sydney)

- AWS Lambda com URL de função, segredo do modelo no SSM, DynamoDB para o
  limite por IP e o teto diário, CloudWatch para log e alarme de gasto.
- Tudo em Terraform.
- Deploy por GitHub Actions com OIDC, sem chave de acesso guardada.
- Testes unitários do catálogo e da validação, e teste de contrato da API.

### Dentro do portfólio

- Painel "Experimente" no projeto de IA e uma página `/demo`, chamando a API
  na AWS. CORS aberto só para `joaosilva.app`.
- Perguntas sugeridas na tela, para quem não sabe o que perguntar.
- O portfólio continua estático: a única parte dinâmica é a chamada à API.

Pronto quando: a demonstração responde no site, a avaliação está publicada
com o número, o repositório tem README com arquitetura, decisões e como rodar
em 5 minutos, e o teto de gasto foi testado batendo de propósito.

---

## Fase 3 (opcional): perguntar sobre os projetos

O mesmo motor, com um segundo catálogo: ferramentas sobre o conteúdo tipado
deste site (projetos, stack, números). Toda resposta aponta o card de onde
veio; o que não está no conteúdo, ele não sabe. Só depois da fase 2 no ar e
avaliada.

---

## Ordem

1. Fase 1 inteira.
2. Fase 2: dado fictício e catálogo, depois avaliação, depois infra e deploy,
   e por último a integração no portfólio.
3. Fase 3, se a fase 2 mostrar que o visitante usa o chat.
