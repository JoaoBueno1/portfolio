import type { Tech } from "@/lib/content/stack";

export type Usage = "daily" | "often" | "occasional";

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
