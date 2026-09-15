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
  apps: [
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
