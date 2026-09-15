import type { Tech } from "@/lib/content/stack";

/**
 * O medidor de nivel.
 *
 * Cinco estrelas, as cheias em acento e as vazias em contorno. O valor vai
 * no `aria-label` da linha inteira (em `SkillRow`), entao aqui as estrelas
 * sao decoracao e nao precisam ser lidas uma a uma.
 */
export function SkillMeter({ level }: { level: Tech["level"] }) {
  return (
    <span className="flex gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((slot) => (
        <svg
          key={slot}
          aria-hidden="true"
          viewBox="0 0 24 24"
          className={`size-3 ${slot <= level ? "text-accent" : "text-line-strong"}`}
          fill={slot <= level ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5-5.8-3-5.8 3 1.1-6.5L2.6 9.4l6.5-.9z"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </span>
  );
}
