import type { SoftSkill } from "@/lib/content/soft-skills";

/**
 * Desenho de linha para cada soft skill. Nao e emoji de proposito: emoji
 * renderiza diferente em cada sistema operacional, ignora o tema e num
 * portfolio de adulto parece apresentacao de slide.
 *
 * Decorativo: o titulo do cartao ja diz o que e.
 */
const PATHS: Record<SoftSkill["icon"], string> = {
  // conversa: dois baloes
  talk: "M4 5h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H9l-4 3v-3a2 2 0 0 1-1-2V7a2 2 0 0 1 2-2ZM17 9h3a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2v3l-3-3h-3",
  // lideranca: um ponto a frente, dois atras
  lead: "M12 4.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM7 20v-1.5A3.5 3.5 0 0 1 10.5 15h3a3.5 3.5 0 0 1 3.5 3.5V20M4.5 11.5a2 2 0 1 1 0-4M19.5 11.5a2 2 0 1 0 0-4",
  // escuta: orelha e ondas
  listen: "M9 20a3 3 0 0 0 3-3v-1a4 4 0 1 0-4-4M15.5 6.5a5 5 0 0 1 0 7M18.5 4a8.5 8.5 0 0 1 0 12",
  // pesquisa: lupa sobre grafico
  search: "M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM15.5 15.5 20 20M8 12l2-2 2 1.5 2-3",
  // feedback: ciclo com retorno
  loop: "M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6M17 3v3.5h-3.5M7 21v-3.5h3.5",
  // ensino: pessoa e quadro
  teach:
    "M3 5h13v9H3zM6.5 8.5h6M6.5 11h4M20 8a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM17 20v-1a3 3 0 0 1 3-3h0a3 3 0 0 1 3 3v1",
};

export function SoftSkillIcon({ icon }: { icon: SoftSkill["icon"] }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={PATHS[icon]} />
    </svg>
  );
}
