import type { Locale } from "@/lib/i18n/config";

/**
 * As soft skills.
 *
 * REGRA DE ESCRITA: cada cartao tem duas frases, no maximo. A primeira diz o
 * que e, a segunda diz onde aconteceu. Sem adjetivo solto ("proativo",
 * "comunicativo") e sem travessao. Se nao cabe em duas frases, e porque nao
 * esta claro o suficiente.
 *
 * `icon` e um nome de desenho em `components/soft-skill-icon.tsx`, nao um
 * emoji: emoji renderiza diferente em cada sistema e nao segue o tema.
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
        title: "I explain systems to people who do not write code",
        body: "Four years behind a bank counter taught me to say a complicated thing once, clearly. Now I do it with dispatchers, drivers and warehouse staff.",
      },
      pt: {
        title: "Explico sistema para quem não escreve código",
        body: "Quatro anos atendendo no banco me ensinaram a dizer uma coisa complicada uma vez só, com clareza. Hoje faço isso com dispatcher, motorista e gente de armazém.",
      },
      es: {
        title: "Explico sistemas a gente que no escribe código",
        body: "Cuatro años atendiendo en el banco me enseñaron a decir algo complicado una sola vez, con claridad. Hoy lo hago con despachadores, conductores y gente de almacén.",
      },
    },
  },
  {
    id: "leadership",
    icon: "lead",
    copy: {
      en: {
        title: "I set the scope and reviewed what came back",
        body: "The build started with a team, a designer and others, organised in Notion on a paid engagement. I split the work, checked it, and said when it was done.",
      },
      pt: {
        title: "Defini o escopo e revisei o que voltava",
        body: "O desenvolvimento começou com time, um designer e outras pessoas, organizados no Notion num trabalho pago. Eu dividia o trabalho, conferia, e dizia quando estava pronto.",
      },
      es: {
        title: "Definí el alcance y revisé lo que volvía",
        body: "El desarrollo empezó con equipo, un diseñador y otras personas, organizados en Notion en un trabajo pagado. Yo repartía el trabajo, lo revisaba, y decía cuándo estaba listo.",
      },
    },
  },
  {
    id: "listening",
    icon: "listen",
    copy: {
      en: {
        title: "I ask the person who does the job",
        body: "Before a feature exists I watch someone do it by hand and time it. That is where the real rules live, not in the brief.",
      },
      pt: {
        title: "Pergunto para quem faz o trabalho",
        body: "Antes de uma feature existir eu vejo alguém fazendo na mão e cronometro. É ali que moram as regras de verdade, não no briefing.",
      },
      es: {
        title: "Pregunto a quien hace el trabajo",
        body: "Antes de que exista una función veo a alguien hacerla a mano y la cronometro. Ahí viven las reglas reales, no en el brief.",
      },
    },
  },
  {
    id: "analysis",
    icon: "search",
    copy: {
      en: {
        title: "I ran an intern on competitor research",
        body: "She looked at products in our market, compared them to ours and came back with what was missing. I turned that into a list we could actually build.",
      },
      pt: {
        title: "Conduzi um estagiário em pesquisa de concorrente",
        body: "Ele olhava produtos do nosso mercado, comparava com o nosso e voltava com o que faltava. Eu transformava isso numa lista que dava para construir.",
      },
      es: {
        title: "Guié a un pasante en investigación de competencia",
        body: "Miraba productos de nuestro mercado, los comparaba con el nuestro y volvía con lo que faltaba. Yo convertía eso en una lista que se podía construir.",
      },
    },
  },
  {
    id: "feedback",
    icon: "loop",
    copy: {
      en: {
        title: "I collect feedback and I answer it",
        body: "Every complaint from the floor gets a reply, even when the answer is no and why. People stop reporting when nobody comes back to them.",
      },
      pt: {
        title: "Coleto feedback e respondo",
        body: "Toda reclamação do chão recebe resposta, inclusive quando a resposta é não e o porquê. As pessoas param de reportar quando ninguém volta.",
      },
      es: {
        title: "Recojo feedback y lo respondo",
        body: "Cada queja del piso recibe respuesta, incluso cuando la respuesta es no y por qué. La gente deja de reportar cuando nadie vuelve.",
      },
    },
  },
  {
    id: "teaching",
    icon: "teach",
    copy: {
      en: {
        title: "I train the people who will use it",
        body: "A system nobody was shown how to use is a system nobody uses. I sit with each person until they can do it without me.",
      },
      pt: {
        title: "Treino quem vai usar",
        body: "Sistema que ninguém mostrou como usar é sistema que ninguém usa. Sento com cada pessoa até ela conseguir fazer sem mim.",
      },
      es: {
        title: "Entreno a quien lo va a usar",
        body: "Un sistema que nadie enseñó a usar es un sistema que nadie usa. Me siento con cada persona hasta que puede hacerlo sin mí.",
      },
    },
  },
];
