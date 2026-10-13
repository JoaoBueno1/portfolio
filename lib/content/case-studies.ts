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

const t = (en: string, pt: string, es: string): I18nText => ({ en, pt, es });

export const CASE_STUDIES = {
  tms: {
    challenge: t(
      "A wholesaler ships through several carriers and its own vans, and every booking is billable freight. Each carrier quotes differently, each has its own cut-off, and the invoice arrives weeks later with charges that may not match what was quoted. Dispatch of the company's vans ran on phone calls, and receivers phoned the office to ask where their delivery was.",
      "Um atacadista despacha por várias transportadoras e pelas próprias vans, e cada booking é frete faturado. Cada transportadora cota de um jeito, cada uma tem o seu cut-off, e a fatura chega semanas depois com cobranças que nem sempre batem com o cotado. O dispatch das vans da empresa rodava no telefone, e quem recebia ligava para o escritório perguntando onde estava a entrega.",
      "Un mayorista despacha por varios transportistas y por sus propias furgonetas, y cada booking es flete facturado. Cada transportista cotiza distinto, cada uno tiene su cut-off, y la factura llega semanas después con cargos que no siempre coinciden con lo cotizado. El dispatch de las furgonetas de la empresa funcionaba por teléfono, y quien recibía llamaba a la oficina para preguntar dónde estaba su entrega.",
    ),
    solution: t(
      "One system owns the freight from quote to invoice. It quotes four carriers in parallel, books the chosen one, prints the thermal label and closes each manifest before its cut-off. The company's own vans sit on the same rate card, so the dispatch centre builds runs in optimised stop order, prints run sheets and shows each driver's live progress. A public tracking page gives the receiver the timeline, the map and the proof of delivery. Weeks later the carrier invoice is matched line by line against the quote, and a monthly dashboard shows quoted against invoiced cost per carrier.",
      "Um sistema só cuida do frete da cotação à fatura. Cota quatro transportadoras em paralelo, reserva a escolhida, imprime a etiqueta térmica e fecha cada manifest antes do cut-off. As vans da empresa entram na mesma tabela de preço, então o centro de dispatch monta as rotas em ordem otimizada de paradas, imprime as folhas de rota e mostra o progresso de cada motorista ao vivo. Uma página pública de tracking dá a quem recebe a linha do tempo, o mapa e a prova de entrega. Semanas depois, a fatura da transportadora é conferida linha a linha contra a cotação, e um painel mensal mostra custo cotado contra faturado por transportadora.",
      "Un solo sistema se ocupa del flete desde la cotización hasta la factura. Cotiza cuatro transportistas en paralelo, reserva el elegido, imprime la etiqueta térmica y cierra cada manifest antes de su cut-off. Las furgonetas propias entran en la misma tarifa, así que el centro de dispatch arma las rutas en orden optimizado de paradas, imprime las hojas de ruta y muestra el avance de cada conductor en vivo. Una página pública de tracking da a quien recibe la línea de tiempo, el mapa y la prueba de entrega. Semanas después, la factura del transportista se comprueba línea por línea contra la cotización, y un panel mensual muestra el costo cotizado contra el facturado por transportista.",
    ),
    impact: t(
      "Over ten thousand consignments booked with external carriers between April and October 2026, read from the system's own database. The same data feeds a monthly review for the warehouse manager. It showed that re-weigh charges clustered on one carrier and traced back to a booking habit, which is cheaper to change than any box. Dispatch stopped depending on phone calls, and tracking questions moved from the office phone to a page.",
      "Mais de dez mil consignments reservados com transportadoras externas entre abril e outubro de 2026, lidos do banco do próprio sistema. O mesmo dado alimenta uma revisão mensal para o gerente do armazém. Ela mostrou que as cobranças de repesagem se concentravam numa transportadora e vinham de um hábito de booking, que custa menos mudar do que qualquer caixa. O dispatch deixou de depender de telefone, e a pergunta sobre a entrega saiu do telefone do escritório e foi para uma página.",
      "Más de diez mil consignments reservados con transportistas externos entre abril y octubre de 2026, leídos de la base del propio sistema. El mismo dato alimenta una revisión mensual para el gerente del almacén. Mostró que los cargos por repesaje se concentraban en un transportista y venían de un hábito de booking, que cuesta menos cambiar que cualquier caja. El dispatch dejó de depender del teléfono, y la pregunta por la entrega pasó del teléfono de la oficina a una página.",
    ),
    highlights: [
      t(
        "Python and Flask with server-rendered Jinja2 pages over PostgreSQL, and more than sixty versioned database migrations.",
        "Python e Flask com páginas Jinja2 renderizadas no servidor sobre PostgreSQL, e mais de sessenta migrações de banco versionadas.",
        "Python y Flask con páginas Jinja2 renderizadas en el servidor sobre PostgreSQL, y más de sesenta migraciones de base versionadas.",
      ),
      t(
        "Nine external systems integrated, among them carrier APIs for quote, booking, label and tracking, the company's ERP, and maps and routing.",
        "Nove sistemas externos integrados, entre eles as APIs das transportadoras para cotação, booking, etiqueta e tracking, o ERP da empresa, e mapas e roteirização.",
        "Nueve sistemas externos integrados, entre ellos las API de los transportistas para cotización, booking, etiqueta y tracking, el ERP de la empresa, y mapas y rutas.",
      ),
      t(
        "Runs on AWS in Sydney: a Docker container under systemd on EC2, secrets in SSM Parameter Store, least-privilege IAM, logs in CloudWatch, and shell access through Session Manager with no open port. Caddy in front.",
        "Roda na AWS em Sydney: um contêiner Docker sob systemd no EC2, segredos no SSM Parameter Store, IAM com permissão mínima, logs no CloudWatch e acesso por Session Manager sem porta aberta. Caddy na frente.",
        "Corre en AWS en Sídney: un contenedor Docker bajo systemd en EC2, secretos en SSM Parameter Store, IAM con permiso mínimo, logs en CloudWatch y acceso por Session Manager sin puerto abierto. Caddy delante.",
      ),
      t(
        "Every carrier API call is logged with sensitive fields redacted, and a failure raises an alert on the team's phones. A booking the carrier rejected is flagged on the order instead of disappearing.",
        "Toda chamada à API de transportadora fica registrada com os campos sensíveis ocultados, e uma falha dispara alerta no celular da equipe. Um booking que a transportadora recusou fica marcado no pedido em vez de sumir.",
        "Cada llamada a la API de un transportista queda registrada con los campos sensibles ocultos, y una falla dispara una alerta en el móvil del equipo. Un booking que el transportista rechazó queda marcado en el pedido en lugar de desaparecer.",
      ),
      t(
        "A written test policy says which tests may touch the outside world, because a test that books freight books real freight.",
        "Uma política de testes escrita diz quais testes podem tocar o mundo externo, porque um teste que reserva frete reserva frete de verdade.",
        "Una política de pruebas escrita dice qué pruebas pueden tocar el mundo exterior, porque una prueba que reserva flete reserva flete de verdad.",
      ),
      t(
        "Thermal labels written in ZPL straight to Zebra printers, and stop order from the routing API, locked once the driver starts.",
        "Etiquetas térmicas escritas em ZPL direto para impressoras Zebra, e ordem de paradas vinda da API de roteirização, travada quando o motorista começa.",
        "Etiquetas térmicas escritas en ZPL directo a impresoras Zebra, y orden de paradas desde la API de rutas, bloqueado cuando el conductor arranca.",
      ),
    ],
  },

  warehouse: {
    challenge: t(
      "The warehouse runs on a cloud ERP that knows the stock but not the floor: it has no walk order, no exceptions for the orders that cannot leave, and no view of what will run out first. The people picking wear gloves and hold a tablet, so every second of load time is a second somebody stands still.",
      "O armazém roda num ERP em nuvem que conhece o estoque mas não o chão: não tem ordem de caminhada, não destaca os pedidos que não podem sair, e não mostra o que vai acabar primeiro. Quem faz o picking usa luva e segura um tablet, então cada segundo de carregamento é um segundo de alguém parado.",
      "El almacén funciona sobre un ERP en la nube que conoce el stock pero no el piso: no tiene orden de recorrido, no destaca los pedidos que no pueden salir, y no muestra qué se va a acabar primero. Quien hace el picking usa guantes y sostiene una tableta, así que cada segundo de carga es un segundo de alguien parado.",
    ),
    solution: t(
      "A layer on top of the ERP, built screen by screen from what the floor needed. It started as a container label printer and grew into pick and pack with a walk order that follows the shelves, replenishment sorted by days of cover against live demand, cycle counting where a first count never writes to stock, returns, picking anomalies and stock planning. The ERP data is mirrored into PostgreSQL by scheduled jobs, so the screens are fast and the reporting reads the mirror, not the ERP.",
      "Uma camada por cima do ERP, construída tela a tela a partir do que o chão precisava. Começou como impressora de etiqueta de contêiner e virou pick and pack com ordem de caminhada que segue as estantes, reabastecimento ordenado por dias de cobertura contra a demanda real, contagem cíclica em que a primeira contagem nunca escreve no estoque, devoluções, anomalias de picking e planejamento de estoque. O dado do ERP é espelhado em PostgreSQL por jobs agendados, então as telas são rápidas e os relatórios leem o espelho, não o ERP.",
      "Una capa sobre el ERP, construida pantalla a pantalla a partir de lo que el piso necesitaba. Empezó como impresora de etiquetas de contenedor y creció a pick and pack con un orden de recorrido que sigue las estanterías, reposición ordenada por días de cobertura contra la demanda real, conteo cíclico donde el primer conteo nunca escribe en el stock, devoluciones, anomalías de picking y planificación de stock. Los datos del ERP se reflejan en PostgreSQL mediante trabajos programados, así que las pantallas son rápidas y los informes leen el espejo, no el ERP.",
    ),
    impact: t(
      "The floor works from it every day: more than twenty features in production and more than twenty scheduled sync jobs keeping the mirror current. The same mirror feeds the monthly review for the warehouse manager, with concrete suggestions and their estimated effect, such as about 8% less walking if the two busiest bays move to the front, for the team to judge.",
      "O chão trabalha nela todo dia: mais de vinte features em produção e mais de vinte jobs agendados mantendo o espelho atualizado. O mesmo espelho alimenta a revisão mensal para o gerente do armazém, com sugestões concretas e o efeito estimado, como cerca de 8% menos caminhada se as duas posições mais usadas forem para a frente, para a equipe julgar.",
      "El piso trabaja sobre ella todos los días: más de veinte funciones en producción y más de veinte trabajos programados que mantienen el espejo al día. El mismo espejo alimenta la revisión mensual para el gerente del almacén, con sugerencias concretas y su efecto estimado, como cerca de un 8% menos de caminata si las dos posiciones más usadas pasan al frente, para que el equipo lo juzgue.",
    ),
    highlights: [
      t(
        "JavaScript with Node.js and Express. Server-rendered pages, no framework and no build step, because the client is a tablet in a glove.",
        "JavaScript com Node.js e Express. Páginas renderizadas no servidor, sem framework e sem etapa de build, porque o cliente é um tablet numa mão de luva.",
        "JavaScript con Node.js y Express. Páginas renderizadas en el servidor, sin framework y sin paso de build, porque el cliente es una tableta en una mano con guante.",
      ),
      t(
        "A mirror of the cloud ERP in PostgreSQL, kept in sync by more than twenty scheduled jobs on GitHub Actions. The ERP is never on the critical path of a screen.",
        "Um espelho do ERP em nuvem em PostgreSQL, sincronizado por mais de vinte jobs agendados no GitHub Actions. O ERP nunca está no caminho crítico de uma tela.",
        "Un espejo del ERP en la nube en PostgreSQL, sincronizado por más de veinte trabajos programados en GitHub Actions. El ERP nunca está en el camino crítico de una pantalla.",
      ),
      t(
        "Writes back to the ERP are few and explicit. A count never changes stock on the first pass; a variance is recounted by someone else, with the reason recorded.",
        "As escritas de volta no ERP são poucas e explícitas. Uma contagem nunca altera o estoque na primeira passada; uma divergência é recontada por outra pessoa, com o motivo registrado.",
        "Las escrituras de vuelta al ERP son pocas y explícitas. Un conteo nunca cambia el stock en la primera pasada; una diferencia la recuenta otra persona, con el motivo registrado.",
      ),
      t(
        "A short pick raises an exception instead of being quietly reduced, so the order that cannot leave is the first thing on the screen.",
        "Um picking incompleto levanta uma exceção em vez de ser reduzido em silêncio, então o pedido que não pode sair é a primeira coisa na tela.",
        "Un picking incompleto levanta una excepción en lugar de reducirse en silencio, así que el pedido que no puede salir es lo primero en la pantalla.",
      ),
      t(
        "The spreadsheets the team already used stay in the loop: Excel reads the same database through Power Query, so a report is a refresh, not an export.",
        "As planilhas que a equipe já usava continuam no circuito: o Excel lê o mesmo banco pelo Power Query, então um relatório é um refresh, não uma exportação.",
        "Las hojas de cálculo que el equipo ya usaba siguen en el circuito: Excel lee la misma base por Power Query, así que un informe es un refresh, no una exportación.",
      ),
      t(
        "Deployed on Vercel, with the scheduled jobs on GitHub Actions and the database on Supabase.",
        "Deploy na Vercel, com os jobs agendados no GitHub Actions e o banco no Supabase.",
        "Desplegado en Vercel, con los trabajos programados en GitHub Actions y la base en Supabase.",
      ),
    ],
  },

  biAi: {
    challenge: t(
      "Answering a question about sales, margin, stock or freight meant someone writing a query. Letting a language model write that query instead is the obvious shortcut and the wrong one: it can invent a plausible number, and it can be talked into touching the data.",
      "Responder uma pergunta sobre venda, margem, estoque ou frete exigia alguém escrevendo uma consulta. Deixar um modelo de linguagem escrever essa consulta é o atalho óbvio e o errado: ele pode inventar um número plausível, e pode ser convencido a mexer no dado.",
      "Responder una pregunta sobre ventas, margen, stock o flete exigía que alguien escribiera una consulta. Dejar que un modelo de lenguaje escriba esa consulta es el atajo obvio y el equivocado: puede inventar un número plausible, y se le puede convencer de tocar los datos.",
    ),
    solution: t(
      "A chat inside the operations portal, behind sign-in and a permission checked against the database on every request. The model never writes SQL. It picks one of 22 queries written and reviewed by hand, fills in parameters that are validated and bound, and the query runs under a read-only role in a read-only transaction with a timeout and a row cap. The answer is a short reading with the table it came from underneath. Outside the catalogue, it says it cannot answer. Next to the chat, an analytics board runs the same queries with no model in the middle.",
      "Um chat dentro do portal de operações, atrás de login e de uma permissão conferida no banco a cada requisição. O modelo nunca escreve SQL. Ele escolhe uma de 22 consultas escritas e revisadas à mão, preenche parâmetros validados e vinculados, e a consulta roda sob um papel só leitura, numa transação só leitura, com timeout e limite de linhas. A resposta é uma leitura curta com a tabela de onde veio embaixo. Fora do catálogo, ele diz que não sabe responder. Ao lado do chat, um painel de analytics roda as mesmas consultas sem modelo no meio.",
      "Un chat dentro del portal de operaciones, tras el inicio de sesión y un permiso comprobado en la base en cada solicitud. El modelo nunca escribe SQL. Elige una de 22 consultas escritas y revisadas a mano, completa parámetros validados y vinculados, y la consulta corre bajo un rol de solo lectura, en una transacción de solo lectura, con tiempo límite y tope de filas. La respuesta es una lectura breve con la tabla de donde salió debajo. Fuera del catálogo, dice que no puede responder. Junto al chat, un panel de analytics corre las mismas consultas sin modelo en medio.",
    ),
    impact: t(
      "People with permission ask the operation directly and get the table, not just the number, so any answer can be checked. Every question is logged with the queries it ran, how long it took and its estimated cost. Two things are not built yet, and the site says so: limiting each person to their own branch's data, and a hard monthly spending cap.",
      "Quem tem permissão pergunta direto à operação e recebe a tabela, não só o número, então qualquer resposta pode ser conferida. Toda pergunta fica registrada com as consultas que rodou, quanto tempo levou e o custo estimado. Duas coisas ainda não existem, e o site diz isso: limitar cada pessoa ao dado da própria filial, e um teto rígido de gasto mensal.",
      "Quien tiene permiso pregunta directo a la operación y recibe la tabla, no solo el número, así que cualquier respuesta se puede comprobar. Cada pregunta queda registrada con las consultas que corrió, cuánto tardó y su costo estimado. Dos cosas todavía no existen, y el sitio lo dice: limitar a cada persona a los datos de su propia sucursal, y un tope rígido de gasto mensual.",
    ),
    highlights: [
      t(
        "TypeScript and Next.js, with the Claude API and tool use: each catalogue query is a tool, so the model chooses a query and its parameters instead of writing text that becomes SQL.",
        "TypeScript e Next.js, com a API do Claude e tool use: cada consulta do catálogo é uma ferramenta, então o modelo escolhe uma consulta e os parâmetros em vez de escrever texto que vira SQL.",
        "TypeScript y Next.js, con la API de Claude y tool use: cada consulta del catálogo es una herramienta, así que el modelo elige una consulta y sus parámetros en lugar de escribir texto que se convierte en SQL.",
      ),
      t(
        "Two production databases reached read only, the warehouse ERP mirror and the freight system, each through a dedicated role with SELECT only.",
        "Dois bancos de produção alcançados só em leitura, o espelho do ERP do armazém e o sistema de frete, cada um por um papel dedicado só com SELECT.",
        "Dos bases de producción alcanzadas solo en lectura, el espejo del ERP del almacén y el sistema de flete, cada una por un rol dedicado solo con SELECT.",
      ),
      t(
        "Up to four rounds of query per question, for example sales and then margin. After the last round the model has to answer.",
        "Até quatro rodadas de consulta por pergunta, por exemplo venda e depois margem. Depois da última o modelo tem de responder.",
        "Hasta cuatro rondas de consulta por pregunta, por ejemplo ventas y luego margen. Tras la última el modelo tiene que responder.",
      ),
      t(
        "The model sees the question and at most 50 of up to 200 rows per result, never the database. The provider was chosen because it does not train on what it is sent.",
        "O modelo vê a pergunta e no máximo 50 de até 200 linhas por resultado, nunca o banco. O provedor foi escolhido porque não treina com o que recebe.",
        "El modelo ve la pregunta y como máximo 50 de hasta 200 filas por resultado, nunca la base. El proveedor se eligió porque no entrena con lo que recibe.",
      ),
      t(
        "115 automated tests cover the AI layer.",
        "115 testes automatizados cobrem a camada de IA.",
        "115 pruebas automatizadas cubren la capa de IA.",
      ),
    ],
  },

  driverApp: {
    challenge: t(
      "A delivery run lives in the van. The driver needs the stops in order, directions, and a way to prove the delivery at the door, and the signal drops in loading docks and basements.",
      "Uma rota de entrega vive na van. O motorista precisa das paradas em ordem, do caminho, e de um jeito de provar a entrega na porta, e o sinal cai em doca e em subsolo.",
      "Una ruta de entrega vive en la furgoneta. El conductor necesita las paradas en orden, el camino, y una forma de probar la entrega en la puerta, y la señal se cae en muelles y sótanos.",
    ),
    solution: t(
      "A React Native app built with Expo. The driver claims a run, sees the stops in optimised order on a map, checks the load before anything is marked in transit, scans the parcels, captures photo and signature, and closes the stop. Deliveries queue on the phone when the signal drops and sync when it returns, photos have their own upload queue, and location keeps reporting with the screen off.",
      "Um app em React Native feito com Expo. O motorista assume uma rota, vê as paradas em ordem otimizada no mapa, confere a carga antes de qualquer coisa ser marcada em trânsito, escaneia os volumes, captura foto e assinatura e fecha a parada. As entregas ficam na fila do celular quando o sinal cai e sincronizam quando volta, as fotos têm a própria fila de envio, e a localização continua reportando com a tela apagada.",
      "Una app en React Native hecha con Expo. El conductor toma una ruta, ve las paradas en orden optimizado en el mapa, revisa la carga antes de que algo se marque en tránsito, escanea los bultos, captura foto y firma y cierra la parada. Las entregas quedan en cola en el teléfono cuando se cae la señal y se sincronizan cuando vuelve, las fotos tienen su propia cola de envío, y la ubicación sigue reportando con la pantalla apagada.",
    ),
    impact: t(
      "Proof of delivery and live position come from the van instead of a phone call. The same data drives the live fleet view and the public tracking page of the transport system.",
      "A prova de entrega e a posição ao vivo vêm da van, não de uma ligação. O mesmo dado alimenta a visão da frota ao vivo e a página pública de tracking do sistema de transporte.",
      "La prueba de entrega y la posición en vivo vienen de la furgoneta, no de una llamada. El mismo dato alimenta la vista de la flota en vivo y la página pública de tracking del sistema de transporte.",
    ),
    highlights: [
      t(
        "TypeScript, React Native and Expo, built and released to iOS and Android with EAS.",
        "TypeScript, React Native e Expo, compilado e publicado para iOS e Android com EAS.",
        "TypeScript, React Native y Expo, compilado y publicado para iOS y Android con EAS.",
      ),
      t(
        "Offline first: one queue for deliveries and a separate one for photos, both replayed when the network returns.",
        "Offline primeiro: uma fila para as entregas e outra separada para as fotos, as duas reenviadas quando a rede volta.",
        "Offline primero: una cola para las entregas y otra separada para las fotos, ambas reenviadas cuando vuelve la red.",
      ),
      t(
        "Background location on iOS was the part that took longest to get right.",
        "Localização em segundo plano no iOS foi a parte que levou mais tempo para ficar certa.",
        "La ubicación en segundo plano en iOS fue la parte que más tardó en quedar bien.",
      ),
      t(
        "Biometric sign-in once the device is trusted, and crash reporting with Sentry.",
        "Login biométrico depois que o aparelho é confiável, e relatório de falhas com Sentry.",
        "Inicio de sesión biométrico una vez que el dispositivo es de confianza, y reporte de fallos con Sentry.",
      ),
    ],
  },

  partnerApi: {
    challenge: t(
      "Freight platforms book carriers through APIs. For the company's vans to be booked that way, a partner's developer has to read a contract, get sandbox keys and finish the integration alone, without a phone call.",
      "Plataformas de frete reservam transportadoras por API. Para as vans da empresa serem reservadas assim, o desenvolvedor do parceiro precisa ler um contrato, receber chaves de sandbox e terminar a integração sozinho, sem ligar para ninguém.",
      "Las plataformas de flete reservan transportistas por API. Para que las furgonetas de la empresa se reserven así, el desarrollador del socio tiene que leer un contrato, recibir claves de sandbox y terminar la integración solo, sin llamar a nadie.",
    ),
    solution: t(
      "Eight endpoints under a versioned contract documented in OpenAPI 3.1: quote, book, label, track and cancel. Every call takes the same five steps, authenticate, rate limit, validate, book idempotently, answer, and fails at the first one it does not pass. A sandbox plays whole deliveries on request, from delivered with proof to a failed attempt, and a Postman kit of 63 requests and 80 checks lets a partner prove the integration before anything real is booked.",
      "Oito endpoints sob um contrato versionado documentado em OpenAPI 3.1: cotar, reservar, etiqueta, tracking e cancelar. Toda chamada passa pelas mesmas cinco etapas, autenticar, limitar, validar, reservar de forma idempotente, responder, e para na primeira em que não passar. Um sandbox encena entregas inteiras sob demanda, da entrega com prova à tentativa falhada, e um kit Postman de 63 requisições e 80 verificações deixa o parceiro provar a integração antes de reservar qualquer coisa real.",
      "Ocho endpoints bajo un contrato versionado documentado en OpenAPI 3.1: cotizar, reservar, etiqueta, tracking y cancelar. Cada llamada pasa por los mismos cinco pasos, autenticar, limitar, validar, reservar de forma idempotente, responder, y se detiene en el primero que no supera. Un sandbox simula entregas completas a pedido, desde la entrega con prueba hasta el intento fallido, y un kit Postman de 63 solicitudes y 80 verificaciones deja que el socio pruebe la integración antes de reservar nada real.",
    ),
    impact: t(
      "Complete and tested, with 613 automated tests passing on 13 October 2026. Going live waits for the first partner's side. No van has ever moved because of a sandbox booking.",
      "Completa e testada, com 613 testes automatizados passando em 13 de outubro de 2026. Entrar no ar espera o lado do primeiro parceiro. Nenhuma van jamais se moveu por causa de um booking de sandbox.",
      "Completa y probada, con 613 pruebas automatizadas aprobadas el 13 de octubre de 2026. Salir a producción espera el lado del primer socio. Ninguna furgoneta se ha movido jamás por un booking de sandbox.",
    ),
    highlights: [
      t(
        "Python and Flask on the same PostgreSQL as the transport system, so a partner booking is a first-class order.",
        "Python e Flask no mesmo PostgreSQL do sistema de transporte, então um booking de parceiro é um pedido de primeira classe.",
        "Python y Flask sobre el mismo PostgreSQL del sistema de transporte, así que un booking de socio es un pedido de primera clase.",
      ),
      t(
        "API keys stored only as a hash; test and live keys look different at a glance.",
        "Chaves de API guardadas só como hash; chave de teste e de produção se distinguem à vista.",
        "Claves de API guardadas solo como hash; las de prueba y producción se distinguen a simple vista.",
      ),
      t(
        "Rate limits counted in the database, 120 calls and 30 bookings a minute, with an exact Retry-After. If the counter cannot be read, the call is refused.",
        "Limites contados no banco, 120 chamadas e 30 reservas por minuto, com Retry-After exato. Se o contador não puder ser lido, a chamada é recusada.",
        "Límites contados en la base, 120 llamadas y 30 reservas por minuto, con Retry-After exacto. Si el contador no se puede leer, la llamada se rechaza.",
      ),
      t(
        "One error shape for every problem, each with the field it points to, whether a retry can help, and a request id to quote to support.",
        "Um formato só de erro para todo problema, cada um com o campo a que aponta, se vale tentar de novo, e o id da requisição para citar ao suporte.",
        "Un solo formato de error para cada problema, cada uno con el campo al que apunta, si conviene reintentar, y el id de la solicitud para citar al soporte.",
      ),
      t(
        "Tracking status is a closed set that never moves backwards, and every event has a stable id, so a partner can merge updates without duplicates.",
        "O status de tracking é um conjunto fechado que nunca anda para trás, e cada evento tem um id estável, então o parceiro mescla atualizações sem duplicar.",
        "El estado de tracking es un conjunto cerrado que nunca retrocede, y cada evento tiene un id estable, así que el socio puede combinar actualizaciones sin duplicados.",
      ),
    ],
  },

  accessPortal: {
    challenge: t(
      "Systems that grew up separately each had their own login and their own idea of who may do what. Opening one from another needed a handoff that could not be replayed or pointed somewhere else.",
      "Sistemas que cresceram separados tinham cada um o próprio login e a própria ideia de quem pode o quê. Abrir um a partir do outro pedia uma passagem que não pudesse ser repetida nem apontada para outro lugar.",
      "Sistemas que crecieron por separado tenían cada uno su propio inicio de sesión y su propia idea de quién puede hacer qué. Abrir uno desde otro exigía un traspaso que no pudiera repetirse ni apuntarse a otro lugar.",
    ),
    solution: t(
      "The public site of the product and, behind one sign-in, one account and one permission model. Permissions are checked live against the database on every request: deny beats allow, and nobody skips the check, admins included. Opening a system is a signed handoff, an Ed25519 token that lives 60 seconds and names exactly one destination, with the public keys published for the systems to verify.",
      "O site público do produto e, atrás de um login só, uma conta e um modelo de permissão. As permissões são conferidas no banco a cada requisição: negar vence permitir, e ninguém pula a verificação, admins incluídos. Abrir um sistema é uma passagem assinada, um token Ed25519 que vive 60 segundos e nomeia exatamente um destino, com as chaves públicas publicadas para os sistemas verificarem.",
      "El sitio público del producto y, tras un solo inicio de sesión, una cuenta y un modelo de permisos. Los permisos se comprueban en la base en cada solicitud: denegar gana a permitir, y nadie se salta la comprobación, administradores incluidos. Abrir un sistema es un traspaso firmado, un token Ed25519 que vive 60 segundos y nombra exactamente un destino, con las claves públicas publicadas para que los sistemas lo verifiquen.",
    ),
    impact: t(
      "The portal side is live, with the AI assistant and the module hub behind it. The two older systems still open their own login; taking the handoff there is the next step.",
      "O lado do portal está no ar, com o assistente de IA e o hub de módulos atrás dele. Os dois sistemas mais antigos ainda abrem o próprio login; levar a passagem até eles é o próximo passo.",
      "El lado del portal está en producción, con el asistente de IA y el hub de módulos detrás. Los dos sistemas más antiguos todavía abren su propio inicio de sesión; llevar el traspaso hasta ellos es el siguiente paso.",
    ),
    highlights: [
      t(
        "TypeScript, Next.js and React with Tailwind CSS, and PostgreSQL on Supabase.",
        "TypeScript, Next.js e React com Tailwind CSS, e PostgreSQL no Supabase.",
        "TypeScript, Next.js y React con Tailwind CSS, y PostgreSQL en Supabase.",
      ),
      t(
        "Permission is a per-person grant with deny over allow, asked of the database on each request rather than read from the session token.",
        "Permissão é uma concessão pessoa a pessoa com negar acima de permitir, perguntada ao banco a cada requisição em vez de lida do token da sessão.",
        "El permiso es una concesión persona a persona con denegar sobre permitir, preguntado a la base en cada solicitud en lugar de leído del token de sesión.",
      ),
      t(
        "Ed25519 handoff tokens: 60-second lifetime, one named destination, public keys published for verification.",
        "Tokens de passagem Ed25519: 60 segundos de vida, um destino nomeado, chaves públicas publicadas para verificação.",
        "Tokens de traspaso Ed25519: 60 segundos de vida, un destino nombrado, claves públicas publicadas para verificación.",
      ),
    ],
  },
} satisfies Record<string, CaseStudy>;
