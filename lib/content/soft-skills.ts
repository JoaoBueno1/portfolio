import type { Locale } from "@/lib/i18n/config";

/**
 * As soft skills.
 *
 * REGRA DE ESCRITA, e ela nasceu de um problema real: a versao anterior
 * comecava as seis frases com "I", e seis paragrafos em fila abrindo com o
 * mesmo pronome lem como formulario preenchido, nao como pessoa escrevendo.
 *
 * Entao: titulo em gerundio, que descreve a acao sem precisar do sujeito, e
 * corpo com sujeito variado. Duas ou tres frases curtas. A primeira diz o
 * que e, a ultima diz onde aconteceu ou por que importa.
 *
 * Sem adjetivo sobre si mesmo ("proativo", "comunicativo") e sem travessao.
 *
 * `icon` e um nome de desenho em `components/soft-skill-icon.tsx`, nao um
 * emoji: emoji renderiza diferente em cada sistema e ignora o tema.
 */
export interface SoftSkill {
  readonly id: string;
  readonly icon: "talk" | "lead" | "listen" | "search" | "loop" | "teach";
  readonly copy: Record<Locale, { readonly title: string; readonly body: string }>;
}

export const SOFT_SKILLS: readonly SoftSkill[] = [
  {
    id: "communication",
    icon: "talk",
    copy: {
      en: {
        title: "Explaining a system to people who do not write code",
        body: "Four years behind a bank counter taught me to say the complicated thing once, clearly. The audience now is dispatchers, drivers and warehouse staff.",
      },
      pt: {
        title: "Explicar um sistema para quem não escreve código",
        body: "Quatro anos atendendo no banco me ensinaram a dizer a coisa complicada uma vez só, com clareza. Hoje a plateia é dispatcher, motorista e gente de armazém.",
      },
      es: {
        title: "Explicar un sistema a quien no escribe código",
        body: "Cuatro años atendiendo en el banco me enseñaron a decir lo complicado una sola vez, con claridad. Hoy el público son despachadores, conductores y gente de almacén.",
      },
    },
  },
  {
    id: "leadership",
    icon: "lead",
    copy: {
      en: {
        title: "Setting the scope, then reviewing what came back",
        body: "The build started with a team: a designer and others, organised in Notion on a paid engagement. Splitting the work was the easy part. Saying when something was actually finished was the job.",
      },
      pt: {
        title: "Definir o escopo e revisar o que voltava",
        body: "O desenvolvimento começou com time: um designer e outras pessoas, organizados no Notion num trabalho pago. Dividir a tarefa era a parte fácil. Dizer quando estava pronto de verdade era o trabalho.",
      },
      es: {
        title: "Definir el alcance y revisar lo que volvía",
        body: "El desarrollo empezó con equipo: un diseñador y otras personas, organizados en Notion en un trabajo pagado. Repartir la tarea era lo fácil. Decir cuándo algo estaba realmente terminado era el trabajo.",
      },
    },
  },
  {
    id: "listening",
    icon: "listen",
    copy: {
      en: {
        title: "Asking the person who does the job",
        body: "No feature gets written before someone is watched doing it by hand. The real rules live in that, never in the brief.",
      },
      pt: {
        title: "Perguntar para quem faz o trabalho",
        body: "Nenhuma feature é escrita antes de alguém ser visto fazendo aquilo na mão. As regras de verdade moram ali, nunca no briefing.",
      },
      es: {
        title: "Preguntar a quien hace el trabajo",
        body: "Ninguna función se escribe antes de ver a alguien hacerla a mano. Las reglas reales viven ahí, nunca en el brief.",
      },
    },
  },
  {
    id: "analysis",
    icon: "search",
    copy: {
      en: {
        title: "Running an intern on competitor research",
        body: "Week by week, products in our market came back compared against ours, with the gaps listed. Turning that into something the team could actually build was my half of it.",
      },
      pt: {
        title: "Conduzir um estagiário em pesquisa de concorrente",
        body: "Semana a semana, os produtos do nosso mercado voltavam comparados com o nosso, com as lacunas listadas. Transformar aquilo em algo que o time conseguisse construir era a minha metade.",
      },
      es: {
        title: "Guiar a un pasante en investigación de competencia",
        body: "Semana a semana, los productos de nuestro mercado volvían comparados con el nuestro, con las carencias listadas. Convertir eso en algo que el equipo pudiera construir era mi mitad.",
      },
    },
  },
  {
    id: "feedback",
    icon: "loop",
    copy: {
      en: {
        title: "Feedback collected, and answered",
        body: "Every complaint from the floor gets a reply, including the ones where the answer is no. People stop reporting problems when nobody comes back to them.",
      },
      pt: {
        title: "Feedback coletado, e respondido",
        body: "Toda reclamação do chão recebe resposta, inclusive as em que a resposta é não. As pessoas param de reportar problema quando ninguém volta para elas.",
      },
      es: {
        title: "Feedback recogido, y respondido",
        body: "Cada queja del piso recibe respuesta, incluidas aquellas en las que la respuesta es no. La gente deja de reportar problemas cuando nadie vuelve a ellos.",
      },
    },
  },
  {
    id: "teaching",
    icon: "teach",
    copy: {
      en: {
        title: "Training the people who will use it",
        body: "A system nobody was shown how to use is a system nobody uses. Sitting with each person until they can do it alone costs an afternoon and saves a month.",
      },
      pt: {
        title: "Treinar quem vai usar",
        body: "Sistema que ninguém mostrou como usar é sistema que ninguém usa. Sentar com cada pessoa até ela conseguir sozinha custa uma tarde e economiza um mês.",
      },
      es: {
        title: "Entrenar a quien lo va a usar",
        body: "Un sistema que nadie enseñó a usar es un sistema que nadie usa. Sentarse con cada persona hasta que pueda sola cuesta una tarde y ahorra un mes.",
      },
    },
  },
];
