# Próxima fase do portfólio

Plano de 13/10/2026. Duas fases, mais uma opcional. Cada item tem critério de
pronto; nada entra no ar sem passar por `npm run fix`, `npm run build` e
`npm run test`.

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

- [ ] **AWS no site.** O TMS roda uma stack na AWS em Sydney: EC2 com Docker e
  systemd, segredos no SSM Parameter Store, IAM com permissão mínima,
  CloudWatch Logs, acesso por Session Manager sem porta aberta, Caddy na
  frente. Entrar no texto do projeto TMS e em Skills, com o que é real.
  O pacote de ícones não tem a marca da AWS; usar um ícone neutro de nuvem com
  o nome escrito.
- [ ] **Currículo.** Página `/cv` em inglês, imprimível, e o PDF gerado dela.
  Palavras que os filtros automáticos procuram, só as verdadeiras: Python,
  TypeScript, React, Next.js, PostgreSQL, AWS, Docker, REST, OpenAPI, Postman,
  pytest, Claude API, tool use. Link na barra lateral.
- [ ] **Foto real** no lugar marcado na barra lateral.
- [ ] **GitHub.** Nome João Silva, uma linha de bio, site `joaosilva.app`,
  README de perfil, este repositório fixado.
- [ ] **Domínio.** `joaosilva.app` como principal na Vercel, `www`
  redirecionando para ele (hoje está ao contrário).
- [ ] **Estudos.** Enxugar a lista de 10 para os 5 mais fortes.

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
