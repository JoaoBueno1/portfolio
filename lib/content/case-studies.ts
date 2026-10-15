import type { CaseStudy, I18nText } from "./types";

/**
 * OS ESTUDOS DE CASO EM TEXTO, dos sistemas de producao.
 *
 * O `summary` do projeto diz o que o sistema e. Isto diz o que um recrutador
 * procura depois e nao achava no dialogo: o problema que existia, o que foi
 * construido para resolver, o que mudou e as decisoes tecnicas por tras.
 *
 * TRES REGRAS, as mesmas de `projects.ts`:
 * 1. Nome generico. O ERP e "o ERP", a transportadora e "a transportadora".
 * 2. Nenhum numero sem fonte. Os que aparecem aqui sao os mesmos dos cards e
 *    dos paineis de resultado, contados na data que eles dizem.
 * 3. O que nao foi construido e dito como nao construido.
 *
 * Os seis cases de producao tem texto; os trabalhos de curso ficam so com o
 * resumo, porque um exercicio nao tem "impacto" e fingir que tem e o erro
 * que este site existe para nao cometer.
 */

const t = (en: string, pt: string): I18nText => ({ en, pt });

export const CASE_STUDIES = {
  tms: {
    challenge: t(
      "A wholesaler ships through several carriers and its own vans, and every booking is billable freight. Each carrier quotes differently, each has its own cut-off, and the invoice arrives weeks later with charges that may not match what was quoted. Dispatch of the company's vans ran on phone calls, and receivers phoned the office to ask where their delivery was.",
      "Um atacadista despacha por várias transportadoras e pelas próprias vans, e cada booking é frete faturado. Cada transportadora cota de um jeito, cada uma tem o seu cut-off, e a fatura chega semanas depois com cobranças que nem sempre batem com o cotado. O dispatch das vans da empresa rodava no telefone, e quem recebia ligava para o escritório perguntando onde estava a entrega.",
    ),
    solution: t(
      "One system owns the freight from quote to invoice. It quotes four carriers in parallel, books the chosen one, prints the thermal label and closes each manifest before its cut-off. The company's own vans sit on the same rate card, so the dispatch centre builds runs in optimised stop order, prints run sheets and shows each driver's live progress. A public tracking page gives the receiver the timeline, the map and the proof of delivery. Weeks later the carrier invoice is matched line by line against the quote, and a monthly dashboard shows quoted against invoiced cost per carrier.",
      "Um sistema só cuida do frete da cotação à fatura. Cota quatro transportadoras em paralelo, reserva a escolhida, imprime a etiqueta térmica e fecha cada manifest antes do cut-off. As vans da empresa entram na mesma tabela de preço, então o centro de dispatch monta as rotas em ordem otimizada de paradas, imprime as folhas de rota e mostra o progresso de cada motorista ao vivo. Uma página pública de tracking dá a quem recebe a linha do tempo, o mapa e a prova de entrega. Semanas depois, a fatura da transportadora é conferida linha a linha contra a cotação, e um painel mensal mostra custo cotado contra faturado por transportadora.",
    ),
    impact: t(
      "Over ten thousand consignments booked with external carriers between April and October 2026, read from the system's own database. The same data feeds a monthly review for the warehouse manager. It showed that re-weigh charges clustered on one carrier and traced back to a booking habit, which is cheaper to change than any box. Dispatch stopped depending on phone calls, and tracking questions moved from the office phone to a page.",
      "Mais de dez mil consignments reservados com transportadoras externas entre abril e outubro de 2026, lidos do banco do próprio sistema. O mesmo dado alimenta uma revisão mensal para o gerente do armazém. Ela mostrou que as cobranças de repesagem se concentravam numa transportadora e vinham de um hábito de booking, que custa menos mudar do que qualquer caixa. O dispatch deixou de depender de telefone, e a pergunta sobre a entrega saiu do telefone do escritório e foi para uma página.",
    ),
    highlights: [
      t(
        "Python and Flask with server-rendered Jinja2 pages over PostgreSQL, and more than sixty versioned database migrations.",
        "Python e Flask com páginas Jinja2 renderizadas no servidor sobre PostgreSQL, e mais de sessenta migrações de banco versionadas.",
      ),
      t(
        "Nine external systems integrated, among them carrier APIs for quote, booking, label and tracking, the company's ERP, and maps and routing.",
        "Nove sistemas externos integrados, entre eles as APIs das transportadoras para cotação, booking, etiqueta e tracking, o ERP da empresa, e mapas e roteirização.",
      ),
      t(
        "Runs on AWS in Sydney: a Docker container under systemd on EC2, secrets in SSM Parameter Store, least-privilege IAM, logs in CloudWatch, and shell access through Session Manager with no open port. Caddy in front.",
        "Roda na AWS em Sydney: um contêiner Docker sob systemd no EC2, segredos no SSM Parameter Store, IAM com permissão mínima, logs no CloudWatch e acesso por Session Manager sem porta aberta. Caddy na frente.",
      ),
      t(
        "Every carrier API call is logged with sensitive fields redacted, and a failure raises an alert on the team's phones. A booking the carrier rejected is flagged on the order instead of disappearing.",
        "Toda chamada à API de transportadora fica registrada com os campos sensíveis ocultados, e uma falha dispara alerta no celular da equipe. Um booking que a transportadora recusou fica marcado no pedido em vez de sumir.",
      ),
      t(
        "A written test policy says which tests may touch the outside world, because a test that books freight books real freight.",
        "Uma política de testes escrita diz quais testes podem tocar o mundo externo, porque um teste que reserva frete reserva frete de verdade.",
      ),
      t(
        "Thermal labels written in ZPL straight to Zebra printers, and stop order from the routing API, locked once the driver starts.",
        "Etiquetas térmicas escritas em ZPL direto para impressoras Zebra, e ordem de paradas vinda da API de roteirização, travada quando o motorista começa.",
      ),
    ],
  },

  warehouse: {
    challenge: t(
      "The warehouse runs on a cloud ERP that knows the stock but not the floor: it has no walk order, no exceptions for the orders that cannot leave, and no view of what will run out first. The people picking wear gloves and hold a tablet, so every second of load time is a second somebody stands still.",
      "O armazém roda num ERP em nuvem que conhece o estoque mas não o chão: não tem ordem de caminhada, não destaca os pedidos que não podem sair, e não mostra o que vai acabar primeiro. Quem faz o picking usa luva e segura um tablet, então cada segundo de carregamento é um segundo de alguém parado.",
    ),
    solution: t(
      "A layer on top of the ERP, built screen by screen from what the floor needed. It started as a container label printer and grew into pick and pack with a walk order that follows the shelves, replenishment sorted by days of cover against live demand, cycle counting where a first count never writes to stock, returns, picking anomalies and stock planning. The ERP data is mirrored into PostgreSQL by scheduled jobs, so the screens are fast and the reporting reads the mirror, not the ERP.",
      "Uma camada por cima do ERP, construída tela a tela a partir do que o chão precisava. Começou como impressora de etiqueta de contêiner e virou pick and pack com ordem de caminhada que segue as estantes, reabastecimento ordenado por dias de cobertura contra a demanda real, contagem cíclica em que a primeira contagem nunca escreve no estoque, devoluções, anomalias de picking e planejamento de estoque. O dado do ERP é espelhado em PostgreSQL por jobs agendados, então as telas são rápidas e os relatórios leem o espelho, não o ERP.",
    ),
    impact: t(
      "The floor works from it every day: more than twenty features in production and more than twenty scheduled sync jobs keeping the mirror current. The same mirror feeds the monthly review for the warehouse manager, with concrete suggestions and their estimated effect, such as about 8% less walking if the two busiest bays move to the front, for the team to judge.",
      "O chão trabalha nela todo dia: mais de vinte features em produção e mais de vinte jobs agendados mantendo o espelho atualizado. O mesmo espelho alimenta a revisão mensal para o gerente do armazém, com sugestões concretas e o efeito estimado, como cerca de 8% menos caminhada se as duas posições mais usadas forem para a frente, para a equipe julgar.",
    ),
    highlights: [
      t(
        "JavaScript with Node.js and Express. Server-rendered pages, no framework and no build step, because the client is a tablet in a glove.",
        "JavaScript com Node.js e Express. Páginas renderizadas no servidor, sem framework e sem etapa de build, porque o cliente é um tablet numa mão de luva.",
      ),
      t(
        "A mirror of the cloud ERP in PostgreSQL, kept in sync by more than twenty scheduled jobs on GitHub Actions. The ERP is never on the critical path of a screen.",
        "Um espelho do ERP em nuvem em PostgreSQL, sincronizado por mais de vinte jobs agendados no GitHub Actions. O ERP nunca está no caminho crítico de uma tela.",
      ),
      t(
        "Writes back to the ERP are few and explicit. A count never changes stock on the first pass; a variance is recounted by someone else, with the reason recorded.",
        "As escritas de volta no ERP são poucas e explícitas. Uma contagem nunca altera o estoque na primeira passada; uma divergência é recontada por outra pessoa, com o motivo registrado.",
      ),
      t(
        "A short pick raises an exception instead of being quietly reduced, so the order that cannot leave is the first thing on the screen.",
        "Um picking incompleto levanta uma exceção em vez de ser reduzido em silêncio, então o pedido que não pode sair é a primeira coisa na tela.",
      ),
      t(
        "The spreadsheets the team already used stay in the loop: Excel reads the same database through Power Query, so a report is a refresh, not an export.",
        "As planilhas que a equipe já usava continuam no circuito: o Excel lê o mesmo banco pelo Power Query, então um relatório é um refresh, não uma exportação.",
      ),
      t(
        "Deployed on Vercel, with the scheduled jobs on GitHub Actions and the database on Supabase.",
        "Deploy na Vercel, com os jobs agendados no GitHub Actions e o banco no Supabase.",
      ),
    ],
  },

  operationsPortal: {
    challenge: t(
      "The warehouse platform and the freight TMS each had their own login and their own idea of who may do what, and answering a question about sales, margin, stock or freight meant someone writing a query. Letting a language model write that query is the obvious shortcut and the wrong one: it can invent a plausible number, and it can be talked into touching the data.",
      "A plataforma do armazém e o TMS de frete tinham cada um o próprio login e a própria ideia de quem pode o quê, e responder uma pergunta sobre venda, margem, estoque ou frete exigia alguém escrevendo uma consulta. Deixar um modelo de linguagem escrever essa consulta é o atalho óbvio e o errado: ele pode inventar um número plausível, e pode ser convencido a mexer no dado.",
    ),
    solution: t(
      "One portal over both systems. One sign-in, four roles and allow or deny per person, asked of the database on every request. A hub that shows each person only what they may open, and sends someone with a single tool straight into it. An analytics board with the monthly review already built, where the only choice is the period. And an AI assistant that never writes SQL: it picks one of 22 queries written and reviewed by hand, they run read only, and every answer arrives with its table.",
      "Um portal sobre os dois sistemas. Um login, quatro papéis e permitir ou negar por pessoa, perguntados ao banco a cada requisição. Um hub que mostra a cada pessoa só o que ela pode abrir, e manda quem tem uma ferramenta só direto para ela. Um painel de analytics com a revisão mensal já montada, onde a única escolha é o período. E um assistente de IA que nunca escreve SQL: ele escolhe uma de 22 consultas escritas e revisadas à mão, que rodam só em leitura, e toda resposta chega com a sua tabela.",
    ),
    impact: t(
      "The team reaches its tools from one place, and sign-ins, systems opened and permission changes go to an audit trail, along with every question asked of the AI. A question that needed someone to write SQL is answered in the chat with the evidence attached. Not built yet, and the site says so: the two older systems still ask for their own login, analytics and the AI do not yet limit a person to their own branch, and the AI budget is shown, not enforced.",
      "O time chega às suas ferramentas por um lugar só, e logins, sistemas abertos e mudanças de permissão vão para uma trilha de auditoria, junto com toda pergunta feita à IA. Uma pergunta que precisava de alguém escrevendo SQL é respondida no chat com a evidência junto. Ainda não existe, e o site diz isso: os dois sistemas mais antigos ainda pedem o próprio login, o analytics e a IA ainda não limitam a pessoa à própria filial, e o orçamento da IA é mostrado, não imposto.",
    ),
    highlights: [
      t(
        "TypeScript, Next.js and React with Tailwind CSS, PostgreSQL on Supabase, and the Claude API with tool use: each catalogue query is a tool, so the model chooses a query and its parameters instead of writing SQL.",
        "TypeScript, Next.js e React com Tailwind CSS, PostgreSQL no Supabase, e a API do Claude com tool use: cada consulta do catálogo é uma ferramenta, então o modelo escolhe uma consulta e os parâmetros em vez de escrever SQL.",
      ),
      t(
        "Permission is a per-person grant with deny over allow, asked of the database on each request rather than read from the session token. The catalogue lists 56 permissions and flags the 21 that change real data.",
        "Permissão é uma concessão pessoa a pessoa com negar acima de permitir, perguntada ao banco a cada requisição em vez de lida do token da sessão. O catálogo lista 56 permissões e marca as 21 que mudam dado real.",
      ),
      t(
        "Opening a separate system goes through the portal: a live permission check, a record of the crossing, then the system itself. The signed handoff that will carry the session across, an Ed25519 token that lives 60 seconds and names one destination, is built and stays off until those systems can receive it.",
        "Abrir um sistema separado passa pelo portal: a permissão conferida na hora, o registro da travessia, e então o próprio sistema. A passagem assinada que vai levar a sessão junto, um token Ed25519 que vive 60 segundos e nomeia um destino, está construída e fica desligada até esses sistemas poderem recebê-la.",
      ),
      t(
        "Two production databases reached read only, the warehouse ERP mirror and the freight system, each through a dedicated role with SELECT only. The model sees the question and at most 50 of up to 200 rows per result, never the database.",
        "Dois bancos de produção alcançados só em leitura, o espelho do ERP do armazém e o sistema de frete, cada um por um papel dedicado só com SELECT. O modelo vê a pergunta e no máximo 50 de até 200 linhas por resultado, nunca o banco.",
      ),
      t(
        "Up to four rounds of query per question; after the last one the model has to answer. 115 automated tests cover the AI layer.",
        "Até quatro rodadas de consulta por pergunta; depois da última o modelo tem de responder. 115 testes automatizados cobrem a camada de IA.",
      ),
    ],
  },
  driverApp: {
    challenge: t(
      "A delivery run lives in the van. The driver needs the stops in order, directions, and a way to prove the delivery at the door, and the signal drops in loading docks and basements.",
      "Uma rota de entrega vive na van. O motorista precisa das paradas em ordem, do caminho, e de um jeito de provar a entrega na porta, e o sinal cai em doca e em subsolo.",
    ),
    solution: t(
      "A React Native app built with Expo. The driver claims a run, sees the stops in optimised order on a map, checks the load before anything is marked in transit, scans the parcels, captures photo and signature, and closes the stop. Deliveries queue on the phone when the signal drops and sync when it returns, photos have their own upload queue, and location keeps reporting with the screen off.",
      "Um app em React Native feito com Expo. O motorista assume uma rota, vê as paradas em ordem otimizada no mapa, confere a carga antes de qualquer coisa ser marcada em trânsito, escaneia os volumes, captura foto e assinatura e fecha a parada. As entregas ficam na fila do celular quando o sinal cai e sincronizam quando volta, as fotos têm a própria fila de envio, e a localização continua reportando com a tela apagada.",
    ),
    impact: t(
      "Proof of delivery and live position come from the van instead of a phone call. The same data drives the live fleet view and the public tracking page of the transport system.",
      "A prova de entrega e a posição ao vivo vêm da van, não de uma ligação. O mesmo dado alimenta a visão da frota ao vivo e a página pública de tracking do sistema de transporte.",
    ),
    highlights: [
      t(
        "TypeScript, React Native and Expo, built and released to iOS and Android with EAS.",
        "TypeScript, React Native e Expo, compilado e publicado para iOS e Android com EAS.",
      ),
      t(
        "Offline first: one queue for deliveries and a separate one for photos, both replayed when the network returns.",
        "Offline primeiro: uma fila para as entregas e outra separada para as fotos, as duas reenviadas quando a rede volta.",
      ),
      t(
        "Background location on iOS was the part that took longest to get right.",
        "Localização em segundo plano no iOS foi a parte que levou mais tempo para ficar certa.",
      ),
      t(
        "Biometric sign-in once the device is trusted, and crash reporting with Sentry.",
        "Login biométrico depois que o aparelho é confiável, e relatório de falhas com Sentry.",
      ),
    ],
  },

  partnerApi: {
    challenge: t(
      "Freight platforms book carriers through APIs. For the company's vans to be booked that way, a partner's developer has to read a contract, get sandbox keys and finish the integration alone, without a phone call.",
      "Plataformas de frete reservam transportadoras por API. Para as vans da empresa serem reservadas assim, o desenvolvedor do parceiro precisa ler um contrato, receber chaves de sandbox e terminar a integração sozinho, sem ligar para ninguém.",
    ),
    solution: t(
      "Eight endpoints under a versioned contract documented in OpenAPI 3.1: quote, book, label, track and cancel. Every call takes the same five steps, authenticate, rate limit, validate, book idempotently, answer, and fails at the first one it does not pass. A sandbox plays whole deliveries on request, from delivered with proof to a failed attempt, and a Postman kit of 63 requests and 80 checks lets a partner prove the integration before anything real is booked.",
      "Oito endpoints sob um contrato versionado documentado em OpenAPI 3.1: cotar, reservar, etiqueta, tracking e cancelar. Toda chamada passa pelas mesmas cinco etapas, autenticar, limitar, validar, reservar de forma idempotente, responder, e para na primeira em que não passar. Um sandbox encena entregas inteiras sob demanda, da entrega com prova à tentativa falhada, e um kit Postman de 63 requisições e 80 verificações deixa o parceiro provar a integração antes de reservar qualquer coisa real.",
    ),
    impact: t(
      "In production, with 613 automated tests passing on 13 October 2026. No van has ever moved because of a sandbox booking.",
      "Em produção, com 613 testes automatizados passando em 13 de outubro de 2026. Nenhuma van jamais se moveu por causa de um booking de sandbox.",
    ),
    highlights: [
      t(
        "Python and Flask on the same PostgreSQL as the transport system, so a partner booking is a first-class order.",
        "Python e Flask no mesmo PostgreSQL do sistema de transporte, então um booking de parceiro é um pedido de primeira classe.",
      ),
      t(
        "API keys stored only as a hash; test and live keys look different at a glance.",
        "Chaves de API guardadas só como hash; chave de teste e de produção se distinguem à vista.",
      ),
      t(
        "Rate limits counted in the database, 120 calls and 30 bookings a minute, with an exact Retry-After. If the counter cannot be read, the call is refused.",
        "Limites contados no banco, 120 chamadas e 30 reservas por minuto, com Retry-After exato. Se o contador não puder ser lido, a chamada é recusada.",
      ),
      t(
        "One error shape for every problem, each with the field it points to, whether a retry can help, and a request id to quote to support.",
        "Um formato só de erro para todo problema, cada um com o campo a que aponta, se vale tentar de novo, e o id da requisição para citar ao suporte.",
      ),
      t(
        "Tracking status is a closed set that never moves backwards, and every event has a stable id, so a partner can merge updates without duplicates.",
        "O status de tracking é um conjunto fechado que nunca anda para trás, e cada evento tem um id estável, então o parceiro mescla atualizações sem duplicar.",
      ),
    ],
  },
} satisfies Record<string, CaseStudy>;
