import type { Tech } from "@/lib/content/stack";

export type Usage = "daily" | "often" | "occasional";

/**
 * O nivel virou FREQUENCIA DE USO, dita em palavra.
 *
 * A escala do `level` sempre foi de uso (ver `stack.ts`), mas cinco estrelas
 * leem como nota de proficiencia. Recrutador desconfia de auto-nota 5/5 e
 * nao tem como conferir; "Daily" ele entende e pode perguntar na entrevista.
 */
export function usageOf(level: Tech["level"]): Usage {
  if (level >= 5) return "daily";
  if (level === 4) return "often";
  return "occasional";
}

const STYLE: Record<Usage, string> = {
  daily: "bg-accent-soft text-accent",
  often: "bg-subtle text-ink-muted",
  occasional: "border border-line text-ink-subtle",
};

export function SkillMeter({
  level,
  labels,
}: {
  level: Tech["level"];
  labels: Record<Usage, string>;
}) {
  const usage = usageOf(level);
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.6875rem] font-medium whitespace-nowrap ${STYLE[usage]}`}
    >
      {labels[usage]}
    </span>
  );
}
