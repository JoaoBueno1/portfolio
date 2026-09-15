# Inventario do Mindroom — o que existe e o que da para usar

Levantamento feito em 15/09/2026 sobre `~/Desktop/Mindroom/Done`.
40.682 arquivos, 122 videos. Este documento e a fonte da secao de formacao do
portfolio; ele existe para ninguem ter que varrer aquela pasta de novo.

Regra de leitura: a pasta tem MUITA copia (`2`, `copy`, `NOVO`, `Review`). A
coluna **Canonico** aponta a versao final de cada projeto, que e a unica que
interessa.

---

## 1. Aplicacoes PHP + MySQL

As mais substanciais. Todas com banco proprio em `.sql`, todas rodaveis.

| Projeto | Unidade | Canonico | LOC | O que e |
|---|---|---|---|---|
| **UFO Archive** | ICTDBS507 | `507 /JoaoMarcos5.3/Website/JoaoMarcos-5.3` | 1.150 | App completo de CRUD sobre um dataset real de avistamentos. Login de admin com `password_hash`/`password_verify`, dashboard, add/edit/delete, fluxo de "resolve", signup e contato. 13 paginas. Iteracoes 5.1, 5.2 e 5.3. |
| **Star Wars Database** | ICTWEB514 | `514 /JoaoMarcos-4.3` | 1.772 | Site de consulta com 9 secoes (jedi, sith, naves, planetas, racas, personagens, a Forca, filmes, resumo) e **area de admin** separada em `pages/admin`. Tem `includes/`, `js/` e o `.sql` junto. |
| **DeepBlue Dives** | ICTWEB514 | `514 /1/JoaoMarcos-1.6` | 971 | Site de escola de mergulho. Estrutura `includes` + `pages`, ja com separacao de layout. |
| **ReelCombat** | ICTWEB514 | `514 /1/JoaoMarcos-1.9` | 816 | Site sobre artistas marciais no cinema. Mesma estrutura, mais paginas. |
| **Burger Stop** | ICTWEB514 | `514 /1/JoaoMarcos-1.3` | 400 | Cardapio em PHP com includes. O primeiro da sequencia. |
| **Programming Control Structures** | ICTWEB514 | `514 /1/JoaoMarcos-1.4` | 567 | Demonstracao de laco e condicional renderizando HTML. |
| **Importacao de dataset cru** | ICTDBS507 | `507 /JoaoMarcos3.2/JoaoMarcos-3.2` | — | O interessante nao e o codigo (29 linhas), e o `sql/mc_raw.sql` de **2,7 MB**: exercicio de carga e consulta sobre dado bruto. |

## 2. Data warehouse e dashboard

O grupo mais forte, e o que conversa direto com o trabalho de BI que esta
comecando agora.

| Projeto | Unidade | Canonico | LOC | O que e |
|---|---|---|---|---|
| **Collectables DWH — dashboard** | 503 | `503/4/website-4.1` | 790 | Star schema (`fact_sales` + `dim_date`, `dim_time`, `dim_customer`, `dim_product`, `dim_store`, `dim_paymentmethod`). Oito graficos em Chart.js, **cada um partido em um endpoint JSON em `api/` e uma pagina em `pages/`**, para a consulta nunca se misturar com a apresentacao. Conexao unica por PDO. |
| **Collectables DWH — papeis** | 503 | `503/4/website-4.2` | 1.403 | O anterior mais login multi-papel com bcrypt, sessao, area restrita, cadastro de usuario, cadastro de loja e tres graficos so de admin (stacked bar, grouped bar, matriz de presenca produto x loja). **11 endpoints JSON, 16 paginas.** |
| **Follow-up 5.3** | 503 | `503/5/website-5.3` | 581 | Versao menor da mesma base. |

## 3. Sites estaticos (HTML/CSS)

| Projeto | Unidade | Canonico | LOC | O que e |
|---|---|---|---|---|
| **Escape Room Adventures** | ICTWEB522 | `522 /5.3/JoaoMarcos5.3` | 2.169 | O maior site estatico: 13 paginas, sendo 7 de salas, mais experiencias, vale-presente, loja, sobre, contato e como chegar. |
| **Escape Room (versao anterior)** | ICTWEB522 | `522 /JoaoMarcos4.1` | 711 | Seis paginas mais sitemap. |
| **Marvel Characters** | ICTWEB525 | `525 /JoaoMarcos3.1` | 539 | Cinco paginas de personagem mais contato. E o projeto que o relatorio da unidade documenta em design, desenvolvimento e validacao. |

## 4. Django (ICTPRG553)

| Projeto | Canonico | O que e |
|---|---|---|
| **dj-rest-auth documentation** | `553 /JoaoMarcos-documentation-6/myproject` | Site que documenta **12 endpoints** do framework dj-rest-auth, com **uma app Django por categoria**: authentication, registration, user_management, token_management, social_authentication. 49 arquivos. E o que mais se parece com trabalho de API de verdade. |
| **T-shirt storefront** | `553 /lesson2/JoaoMarcos-2.5/Website` | Loja em Django com rotas separadas para `vendor/` e `designer/`, mais o admin. 42 arquivos. |
| **API REST iterativa** | `553 /JoaoMarcos-4.4` | App `api/` com models, views e admin sobre SQLite. Existem 4.1 a 4.4 e 3.1 a 3.5, que sao a mesma base evoluindo. |

## 5. NoSQL e seguranca de banco (ICTPRG554)

`554/5/` tem nove exercicios (5.3 a 6.8), cada um com front em PHP, driver
MongoDB e **uma instancia propria do mongod** (`conf/`, `data/`, `logs/`), mais
um video de demonstracao.

O que vale destacar e o **6.6**: o site sobe sem autenticacao, depois a
autenticacao e ligada no banco (`db.createUser`, `authorization: enabled`), o
site quebra de proposito, e so entao a credencial entra na conexao. E um
exercicio de endurecimento de banco, nao de CRUD.

## 6. R e limpeza de dados (ICTDAT501)

| Projeto | Canonico | O que e |
|---|---|---|
| **Movie reports** | `501/JoaoMarcos4.3/MoviesProject` | dplyr. Le `movies.csv`, **detecta linha quebrada antes de agregar** (rating fora de 0 a 10 ou nao numerico), e gera top 10 por bilheteria e media por diretor. |
| **Student data cleaner** | `501/Rproject3.1/Rproject_students` | readr + dplyr. Coercao de tipo, remocao de `%`, e saida em `students_cleaned.csv`. Tem o antes e o depois no disco. |

## 7. Documentos (sem codigo, mas com conteudo)

| Unidade | Entrega | Por que importa |
|---|---|---|
| **BSBXCS402** | Politica de Controle de Acesso sobre template NIST/CIS | Nasceu de um survey proprio que mediu **50,2% de acerto** em conhecimento de seguranca, com fraqueza em acesso, senha e obrigacao de privacidade australiana. |
| **ICTICT517** | Business case "Riverline Digital" | Orcamento em AUD dividido em software, hardware, treinamento e pessoal, para uma empresa indo de 14 para 30 pessoas: ISO 27001 via Vanta, Microsoft Sentinel, Tenable, Intune, HaloPSA, Veeam, KnowBe4 e Copilot. |
| **ICTICT532** | Investigacao da politica de PI da propria RTO | Conclui que **nao existe** politica publica de propriedade intelectual e aponta onde o assunto aparece espalhado. Auditoria com conclusao negativa. |
| **ICTSAD502** | ERD de personagem e habilidade | M:N resolvido por tabela associativa. |
| **ICTDBS506** | ERD de biblioteca escolar | Emprestimo como entidade associativa entre aluno e livro. |
| **ICTICT435** | Documentacao tecnica | Guia de instalacao do DB Browser for SQLite, com aviso de copyright e estrutura de manual. |
| **ICTDBS505** | Survey de um KMS | Seis secoes, quatro respondentes, sobre taxonomia e experiencia de uso de uma base de conhecimento. |

## 8. Video

**122 arquivos** `.mp4`/`.mov`, quase todos demonstracao das entregas acima. Os
mais uteis sao os do 553 (Django), 554 (Mongo) e 503 (dashboard), porque mostram
o sistema rodando.

---

## O que eu levaria para o portfolio

Vinte e tres projetos nao viram vinte e tres cartoes. Agrupados por competencia,
com o melhor exemplo a frente:

1. **Data warehouse e dashboard** — Collectables 4.1 e 4.2. Star schema, endpoint
   por grafico, papeis e area restrita.
2. **Aplicacao web com banco e autenticacao** — UFO Archive e Star Wars Database.
3. **API e documentacao de API** — o site do dj-rest-auth, 12 endpoints.
4. **NoSQL e endurecimento de banco** — o 6.6 do Mongo.
5. **Limpeza e analise de dados** — os dois projetos em R.
6. **Front-end e trabalho de cliente** — Escape Room e Marvel.

## Como rodar cada um para capturar tela

Tudo que e preciso ja esta nesta maquina.

| Tipo | Como |
|---|---|
| PHP + MySQL | `/Applications/XAMPP/xamppfiles/bin/php` (8.2.4) e o MariaDB 10.4 do XAMPP. `php -S` serve o diretorio direto, sem Apache. |
| Django | `python3` 3.14 com venv por projeto. Banco em SQLite, ja versionado. |
| MongoDB | `mongod` 8.2.2 instalado, e cada exercicio traz o proprio `conf/`. |
| R | R 4.5.2 e `Rscript` instalados. |
| Estatico | `python3 -m http.server`. |

**Regra de captura**: dado de demonstracao e ficticio por natureza nestes
projetos (UFO, Star Wars, Marvel, escape room, Collectables), entao nao ha
risco de dado de cliente. A unica atencao e nao deixar aparecer caminho local
com nome de usuario nem credencial de teste na tela.

---

## 9. Captura feita em 15/09/2026

Quatro projetos foram levantados do zero e fotografados rodando. Nenhuma
captura veio de arquivo antigo.

| Projeto | Como subiu | Telas |
|---|---|---|
| Sales Data Warehouse | MariaDB 11 em container na porta 13306, `collectables_dwh-wData.sql` e `user_table.sql` importados, PHP 8.2 do XAMPP pelo servidor embutido | 6 |
| UFO Archive + Star Wars | Mesmo container, bancos `ufos` e `starwars_archive` | 5 |
| Documentacao de API | venv proprio, Django 6.1, `manage.py runserver` | 3 |
| Escape Room + Marvel | `python3 -m http.server` | 5 |

**O XAMPP nao serve para isto.** O `mysql_install_db` dele forca `user=mysql` por
um `my.cnf` global e ignora `--user`, entao o InnoDB nao consegue escrever num
datadir fora do lugar dele. O binario do PHP do XAMPP, esse sim, funciona
sozinho: `php -S` serve qualquer um destes projetos sem Apache.

Os apps apontavam para `localhost`, que em MySQL significa socket. A copia de
trabalho aponta para `127.0.0.1;port=13306`. **O original no Desktop nao foi
tocado.**

### Numeros que so apareceram com o sistema de pe

- O data warehouse tem **4.314 linhas de venda**.
- O UFO Archive carrega **80.126 registros**, paginados em **802 paginas**.
- O banco do Star Wars tem nove tabelas, uma por secao do site.

### Uma coisa que precisa de decisao

**O site de documentacao de API nao tem CSS nenhum.** Ele roda, o conteudo e
forte (doze endpoints em cinco apps Django, com requisicao e resposta de
exemplo em cada um), mas visualmente e HTML cru em Times New Roman. As tres
capturas estao no portfolio; se elas mais atrapalharem do que ajudarem, o
caminho e tirar a galeria daquele card e deixar so o texto.

### R ficou de fora

Os dois projetos em R produzem saida de console e um CSV limpo, nao tela. Nao
ha o que capturar sem eu inventar um grafico que nunca existiu no trabalho.
Alternativa honesta, se valer: uma comparacao lado a lado do `students.csv`
sujo com o `students_cleaned.csv`, que e dado dele e transformacao dele.
