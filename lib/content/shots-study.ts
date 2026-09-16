import api01 from "@/public/screenshots/study-api-01.webp";
import api02 from "@/public/screenshots/study-api-02.webp";
import api03 from "@/public/screenshots/study-api-03.webp";
import apps01 from "@/public/screenshots/study-apps-01.webp";
import apps02 from "@/public/screenshots/study-apps-02.webp";
import apps03 from "@/public/screenshots/study-apps-03.webp";
import apps04 from "@/public/screenshots/study-apps-04.webp";
import apps05 from "@/public/screenshots/study-apps-05.webp";
import dwh01 from "@/public/screenshots/study-dwh-01.webp";
import dwh02 from "@/public/screenshots/study-dwh-02.webp";
import dwh03 from "@/public/screenshots/study-dwh-03.webp";
import dwh04 from "@/public/screenshots/study-dwh-04.webp";
import dwh05 from "@/public/screenshots/study-dwh-05.webp";
import dwh06 from "@/public/screenshots/study-dwh-06.webp";
import mongo01 from "@/public/screenshots/study-mongo-01.webp";
import mongo02 from "@/public/screenshots/study-mongo-02.webp";
import mongo03 from "@/public/screenshots/study-mongo-03.webp";
import mongo04 from "@/public/screenshots/study-mongo-04.webp";
import mongo05 from "@/public/screenshots/study-mongo-05.webp";
import mongo06 from "@/public/screenshots/study-mongo-06.webp";
import r01 from "@/public/screenshots/study-r-01.webp";
import r02 from "@/public/screenshots/study-r-02.webp";
import r03 from "@/public/screenshots/study-r-03.webp";
import r04 from "@/public/screenshots/study-r-04.webp";
import r05 from "@/public/screenshots/study-r-05.webp";
import sites01 from "@/public/screenshots/study-sites-01.webp";
import sites02 from "@/public/screenshots/study-sites-02.webp";
import sites03 from "@/public/screenshots/study-sites-03.webp";
import sites04 from "@/public/screenshots/study-sites-04.webp";
import sites05 from "@/public/screenshots/study-sites-05.webp";
import type { Shot } from "./types";

/**
 * CAPTURAS DOS PROJETOS DE FORMACAO.
 *
 * Tiradas dos projetos RODANDO, nao de arquivo antigo: o banco foi importado
 * num MariaDB descartavel em container, o PHP subiu pelo servidor embutido, o
 * Django num venv proprio, e cada tela foi capturada em 1440x900 com fator 2.
 *
 * Aqui nao existe risco de dado de cliente: os datasets sao publicos ou
 * inventados (avistamentos de OVNI, Star Wars, Marvel, uma franquia de
 * bonecos, um negocio de escape room). A unica atencao foi nao deixar caminho
 * local nem credencial de teste aparecendo na tela.
 *
 * `caption` diz POR QUE aquela tela importa. O `alt` descreve o que se ve.
 * Sao coisas diferentes e as duas sao necessarias.
 */
export const STUDY_SHOTS = {
  dwh: [
    [
      dwh01,
      "Dashboard with report tiles, three of them only the admin role can open.",
      "Painel com os cartões de relatório, três deles abertos só para o papel de admin.",
      "Panel con las tarjetas de reporte, tres de ellas abiertas solo para el rol admin.",
      "Signed in as the admin. Two other roles see the same dashboard without the last three tiles.",
      "Logado como admin. Os outros dois papéis veem o mesmo painel sem os três últimos cartões.",
      "Con sesión de admin. Los otros dos roles ven el mismo panel sin las tres últimas tarjetas.",
    ],
    [
      dwh02,
      "Line chart of total revenue by month across the trading period.",
      "Gráfico de linha da receita total por mês ao longo do período.",
      "Gráfico de líneas de los ingresos totales por mes durante el período.",
      "Read straight from the fact table through one JSON endpoint of its own.",
      "Lido direto da tabela fato por um endpoint JSON próprio.",
      "Leído directo de la tabla de hechos por un endpoint JSON propio.",
    ],
    [
      dwh03,
      "Stacked bar chart: each product's revenue split into coloured segments per store.",
      "Gráfico de barras empilhadas: a receita de cada produto dividida em segmentos por loja.",
      "Gráfico de barras apiladas: los ingresos de cada producto divididos en segmentos por tienda.",
      "The height is what the franchise sold. The colours say which store sold it.",
      "A altura é o que a rede vendeu. As cores dizem qual loja vendeu.",
      "La altura es lo que vendió la cadena. Los colores dicen qué tienda lo vendió.",
    ],
    [
      dwh04,
      "Matrix chart showing which products are sold in which store.",
      "Gráfico de matriz mostrando quais produtos são vendidos em qual loja.",
      "Gráfico de matriz que muestra qué productos se venden en qué tienda.",
      "A cell means presence, not volume. It is the fastest way to spot a gap in a range.",
      "A célula significa presença, não volume. É o jeito mais rápido de achar um furo no mix.",
      "La celda significa presencia, no volumen. Es la forma más rápida de ver un hueco en el surtido.",
    ],
    [
      dwh05,
      "Grouped bar chart comparing the fifteen biggest products store against store.",
      "Gráfico de barras agrupadas comparando os quinze maiores produtos loja contra loja.",
      "Gráfico de barras agrupadas comparando los quince mayores productos tienda contra tienda.",
      "Same products, three bars each. Where one store lags, it shows immediately.",
      "Mesmos produtos, três barras cada. Onde uma loja fica para trás, aparece na hora.",
      "Mismos productos, tres barras cada uno. Donde una tienda queda atrás, se ve al instante.",
    ],
    [
      dwh06,
      "User registration form, available only to the admin role.",
      "Formulário de cadastro de usuário, disponível só para o papel de admin.",
      "Formulario de registro de usuario, disponible solo para el rol admin.",
      "The password is hashed before it reaches the table, and the role is set here.",
      "A senha é hasheada antes de chegar na tabela, e o papel é definido aqui.",
      "La contraseña se hashea antes de llegar a la tabla, y el rol se define aquí.",
    ],
  ],
  ufo: [
    [
      apps01,
      "Sightings table showing 1 to 100 of 80,126 records, page 1 of 802.",
      "Tabela de avistamentos mostrando 1 a 100 de 80.126 registros, página 1 de 802.",
      "Tabla de avistamientos mostrando 1 a 100 de 80.126 registros, página 1 de 802.",
      "Eighty thousand rows loaded from a public dataset, paginated server side.",
      "Oitenta mil linhas carregadas de um dataset público, paginadas no servidor.",
      "Ochenta mil filas cargadas de un dataset público, paginadas en el servidor.",
    ],
    [
      apps02,
      "Public home of the sightings archive, before signing in.",
      "Home pública do arquivo de avistamentos, antes de entrar.",
      "Home pública del archivo de avistamientos, antes de entrar.",
      "Everything past this point needs a login, and the admin side has its own record lifecycle.",
      "Daqui para dentro precisa de login, e o lado de admin tem ciclo de vida de registro próprio.",
      "De aquí en adelante hace falta login, y el lado admin tiene su propio ciclo de vida de registro.",
    ],
  ],
  starwars: [
    [
      apps03,
      "Home of a reference site with nine linked sections over a single schema.",
      "Home de um site de consulta com nove seções ligadas sobre um único schema.",
      "Home de un sitio de consulta con nueve secciones enlazadas sobre un único esquema.",
      "Nine tables, nine sections, one connection function shared by all of them.",
      "Nove tabelas, nove seções, uma função de conexão compartilhada por todas.",
      "Nueve tablas, nueve secciones, una función de conexión compartida por todas.",
    ],
    [
      apps04,
      "One section of the reference site, listing records from its table.",
      "Uma seção do site de consulta, listando registros da sua tabela.",
      "Una sección del sitio de consulta, listando registros de su tabla.",
      "Nothing on this page is hard-coded. Change the table and the page changes.",
      "Nada nesta página é cravado. Muda a tabela, muda a página.",
      "Nada en esta página está fijo. Cambia la tabla y cambia la página.",
    ],
    [
      apps05,
      "Summary page with a record count per table.",
      "Página de resumo com a contagem de registros por tabela.",
      "Página de resumen con el conteo de registros por tabla.",
      "The page I actually used: a count per table is how you notice an import went wrong.",
      "A página que eu de fato usava: contagem por tabela é como se percebe importação que deu errado.",
      "La página que realmente usaba: un conteo por tabla es como se nota una importación que falló.",
    ],
  ],
  mongo: [
    [
      mongo01,
      "Terminal running mongosh: show dbs and show collections against a school database.",
      "Terminal rodando mongosh: show dbs e show collections contra um banco de escola.",
      "Terminal ejecutando mongosh: show dbs y show collections contra una base de escuela.",
      "Three collections in one document database: classes, staff and students.",
      "Três coleções num banco de documento: classes, staff e students.",
      "Tres colecciones en una base documental: classes, staff y students.",
    ],
    [
      mongo02,
      "Result of db.staff.find(), showing staff documents with the classes each one teaches.",
      "Resultado de db.staff.find(), mostrando documentos de staff com as turmas de cada um.",
      "Resultado de db.staff.find(), mostrando documentos de staff con las clases de cada uno.",
      "The array of classes lives inside the document. In a relational schema this would be a join table.",
      "O array de turmas vive dentro do documento. Num schema relacional isto seria tabela de ligação.",
      "El arreglo de clases vive dentro del documento. En un esquema relacional esto sería tabla de unión.",
    ],
    [
      mongo03,
      "Result of db.students.find(), with each student carrying their classes and assessment marks.",
      "Resultado de db.students.find(), com cada aluno carregando suas turmas e notas de avaliação.",
      "Resultado de db.students.find(), con cada estudiante cargando sus clases y notas.",
      "Nested documents, which is the whole reason to choose this kind of database over a relational one.",
      "Documento aninhado, que é a razão inteira de escolher este tipo de banco em vez de um relacional.",
      "Documento anidado, que es toda la razón para elegir este tipo de base en vez de una relacional.",
    ],
    [
      mongo04,
      "functions.php opening a MongoDB Driver Manager connection inside a try and catch.",
      "functions.php abrindo uma conexão com o Driver Manager do MongoDB dentro de try e catch.",
      "functions.php abriendo una conexión con el Driver Manager de MongoDB dentro de try y catch.",
      "One connection function for the whole site, and a failure that says so instead of a blank page.",
      "Uma função de conexão para o site inteiro, e uma falha que avisa em vez de página em branco.",
      "Una función de conexión para todo el sitio, y un fallo que avisa en vez de página en blanco.",
    ],
    [
      mongo05,
      "index.php including the connection function and reporting that the connection was established.",
      "index.php incluindo a função de conexão e informando que a conexão foi estabelecida.",
      "index.php incluyendo la función de conexión e informando que la conexión se estableció.",
      "The smallest possible proof that PHP and the database are actually talking.",
      "A menor prova possível de que o PHP e o banco estão de fato conversando.",
      "La prueba más pequeña posible de que PHP y la base realmente se hablan.",
    ],
    [
      mongo06,
      "php.ini open in the editor with the MongoDB extension line enabled.",
      "php.ini aberto no editor com a linha da extensão do MongoDB habilitada.",
      "php.ini abierto en el editor con la línea de la extensión de MongoDB habilitada.",
      "Before any code runs, the driver has to be enabled in the runtime. This is where that happens.",
      "Antes de qualquer código rodar, o driver precisa estar ligado no runtime. É aqui que isso acontece.",
      "Antes de que corra cualquier código, el driver debe estar habilitado en el runtime. Aquí ocurre.",
    ],
  ],
  r: [
    [
      r01,
      "R console showing the original student data, with a missing value, a percentage sign and a letter inside numeric columns.",
      "Console do R mostrando o dado original de alunos, com valor faltando, sinal de porcentagem e letra dentro de coluna numérica.",
      "Consola de R mostrando el dato original de estudiantes, con valor faltante, signo de porcentaje y letra dentro de columna numérica.",
      "The data as it arrived. NA, a value of 100%, the text abc and a negative mark, all in columns meant to be numbers.",
      "O dado como chegou. NA, um valor de 100%, o texto abc e uma nota negativa, tudo em coluna que deveria ser número.",
      "El dato como llegó. NA, un valor de 100%, el texto abc y una nota negativa, todo en columnas que deberían ser números.",
    ],
    [
      r02,
      "The cleaning script: type coercion, stripping the percentage sign, removing a duplicate row and writing the cleaned file.",
      "O script de limpeza: coerção de tipo, remoção do sinal de porcentagem, remoção de linha duplicada e escrita do arquivo limpo.",
      "El script de limpieza: coerción de tipos, quitar el signo de porcentaje, eliminar una fila duplicada y escribir el archivo limpio.",
      "Each step is a line, and each line says what it fixes. That is what makes it reviewable later.",
      "Cada passo é uma linha, e cada linha diz o que conserta. É isso que torna o script revisável depois.",
      "Cada paso es una línea, y cada línea dice qué corrige. Eso es lo que lo hace revisable después.",
    ],
    [
      r03,
      "R console showing the cleaned dataset, with every column now numeric and the duplicate gone.",
      "Console do R mostrando o dado limpo, com toda coluna agora numérica e a duplicata removida.",
      "Consola de R mostrando el dato limpio, con cada columna ahora numérica y el duplicado eliminado.",
      "Same rows, now safe to average. The before and after both stay on disk so the difference is checkable.",
      "As mesmas linhas, agora seguras para tirar média. O antes e o depois ficam no disco, então a diferença é conferível.",
      "Las mismas filas, ahora seguras para promediar. El antes y el después quedan en disco, así la diferencia es verificable.",
    ],
    [
      r04,
      "A report table of the ten highest grossing films, with director, year, rating and revenue.",
      "Tabela de relatório com os dez filmes de maior bilheteria, com diretor, ano, nota e receita.",
      "Tabla de reporte con las diez películas de mayor recaudación, con director, año, nota e ingresos.",
      "The output of the second project, produced only after the broken rows were flagged and excluded.",
      "A saída do segundo projeto, produzida só depois de a linha quebrada ser sinalizada e excluída.",
      "La salida del segundo proyecto, producida solo después de marcar y excluir las filas rotas.",
    ],
    [
      r05,
      "The full RStudio window: script, console, environment and the loaded dataset side by side.",
      "A janela inteira do RStudio: script, console, environment e o dataset carregado lado a lado.",
      "La ventana completa de RStudio: script, consola, environment y el dataset cargado lado a lado.",
      "Working in the environment itself, which is where you notice a column typed as text before it ruins a total.",
      "Trabalhando no próprio ambiente, que é onde se percebe uma coluna tipada como texto antes de ela estragar um total.",
      "Trabajando en el propio entorno, que es donde se nota una columna tipada como texto antes de que arruine un total.",
    ],
  ],
  api: [
    [
      api01,
      "Index of the API documentation site, linking to each category.",
      "Índice do site de documentação da API, com link para cada categoria.",
      "Índice del sitio de documentación de la API, enlazando a cada categoría.",
      "One Django application per category, so a category can grow without touching the others.",
      "Uma aplicação Django por categoria, então uma categoria cresce sem tocar nas outras.",
      "Una aplicación Django por categoría, así una categoría crece sin tocar las otras.",
    ],
    [
      api02,
      "Authentication page: login, logout and password change, each with an example request and response.",
      "Página de autenticação: login, logout e troca de senha, cada um com exemplo de requisição e resposta.",
      "Página de autenticación: login, logout y cambio de contraseña, cada uno con ejemplo de petición y respuesta.",
      "Every endpoint carries a real request and the response it returns, which is the part a developer reads.",
      "Todo endpoint traz uma requisição real e a resposta que ele devolve, que é a parte que um dev lê.",
      "Cada endpoint trae una petición real y la respuesta que devuelve, que es la parte que un dev lee.",
    ],
    [
      api03,
      "Token management page, documenting token verify and refresh.",
      "Página de gestão de token, documentando verificação e renovação.",
      "Página de gestión de token, documentando verificación y renovación.",
      "Twelve endpoints across five categories, each marked complete only after being checked against the site.",
      "Doze endpoints em cinco categorias, cada um marcado como pronto só depois de conferido contra o site.",
      "Doce endpoints en cinco categorías, cada uno marcado como listo solo tras ser verificado contra el sitio.",
    ],
  ],
  sites: [
    [
      sites01,
      "Home of a thirteen-page site for a venue business.",
      "Home de um site de treze páginas para um negócio de experiências.",
      "Home de un sitio de trece páginas para un negocio de experiencias.",
      "Built from a brief taken off the client, then checked back against that brief.",
      "Feito a partir de um briefing tirado do cliente, e depois conferido contra esse briefing.",
      "Hecho a partir de un brief tomado del cliente, y luego contrastado con ese brief.",
    ],
    [
      sites02,
      "One room page, with its own description, difficulty and booking call to action.",
      "Uma página de sala, com descrição, dificuldade e chamada para reserva próprias.",
      "Una página de sala, con su descripción, dificultad y llamada a reservar.",
      "Seven of these, same template and different content, which is the point of a template.",
      "São sete destas, mesmo template e conteúdo diferente, que é o ponto de um template.",
      "Son siete de estas, mismo template y contenido distinto, que es el punto de un template.",
    ],
    [
      sites03,
      "Experiences page listing the packages and what each one includes.",
      "Página de experiências listando os pacotes e o que cada um inclui.",
      "Página de experiencias listando los paquetes y lo que incluye cada uno.",
      "The page the client cared about most, because it is the one that sells.",
      "A página com que o cliente mais se importava, porque é a que vende.",
      "La página que más le importaba al cliente, porque es la que vende.",
    ],
    [
      sites04,
      "Character index of a five-page site, each card linking to its own page.",
      "Índice de personagens de um site de cinco páginas, cada card levando à sua página.",
      "Índice de personajes de un sitio de cinco páginas, cada tarjeta lleva a su página.",
      "Hand-written HTML and CSS, no framework, which was the constraint of the brief.",
      "HTML e CSS escritos à mão, sem framework, que era a restrição do briefing.",
      "HTML y CSS escritos a mano, sin framework, que era la restricción del brief.",
    ],
    [
      sites05,
      "A single character page with the hero image, biography and abilities.",
      "Uma página de personagem com imagem principal, biografia e habilidades.",
      "Una página de personaje con imagen principal, biografía y habilidades.",
      "The layout repeats across the set, so the site reads as one thing and not five.",
      "O layout se repete no conjunto, então o site lê como uma coisa só e não cinco.",
      "El layout se repite en el conjunto, así el sitio se lee como una cosa y no cinco.",
    ],
  ],
} as const;

/** Vira `Shot[]` para o registro de projetos. */
export function studyShots(group: keyof typeof STUDY_SHOTS): readonly Shot[] {
  return STUDY_SHOTS[group].map(([src, altEn, altPt, altEs, capEn, capPt, capEs]) => ({
    src,
    alt: { en: altEn, pt: altPt, es: altEs },
    caption: { en: capEn, pt: capPt, es: capEs },
  }));
}
