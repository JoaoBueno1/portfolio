import Image from "next/image";
import Link from "next/link";
import type { ProjectCardView } from "@/lib/content/view";

interface Labels {
  readonly status: Record<ProjectCardView["status"], string>;
  readonly domain: Record<ProjectCardView["domain"], string>;
  readonly readCase: string;
  readonly casePending: string;
  readonly noShot: string;
}

/** Pastilha de status. `live` e a unica que recebe cor — e a unica que importa. */
function StatusPill({ status, label }: { status: ProjectCardView["status"]; label: string }) {
  const live = status === "live";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
        live ? "bg-accent-soft text-accent" : "bg-subtle text-ink-muted"
      }`}
    >
      {live && <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />}
      {label}
    </span>
  );
}

/**
 * A capa.
 *
 * Sem `cover` NAO significa imagem quebrada: significa que ainda nao existe
 * captura com dado sintetico daquele sistema. Nesse caso o card mostra a
 * stack em tamanho grande, que informa mais que um placeholder cinza, e diz
 * em texto por que a captura nao esta ali.
 */
function CardVisual({ item, labels }: { item: ProjectCardView; labels: Labels }) {
  if (item.cover) {
    return (
      <Image
        src={item.cover}
        alt={item.coverAlt ?? ""}
        className="h-full w-full object-cover object-left-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col justify-between gap-4 bg-sunken p-6">
      <div className="flex flex-wrap gap-4 text-ink-faint">
        {item.stack.slice(0, 6).map((tech) => (
          <svg
            key={tech.key}
            viewBox="0 0 24 24"
            role="img"
            aria-label={tech.title}
            className="size-7"
            fill="currentColor"
          >
            <title>{tech.title}</title>
            <path d={tech.path} />
          </svg>
        ))}
      </div>
      <p className="max-w-xs text-xs text-ink-faint">{labels.noShot}</p>
    </div>
  );
}

export function ProjectCard({ item, labels }: { item: ProjectCardView; labels: Labels }) {
  const wide = item.featured;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-xl border border-line bg-canvas transition-colors duration-300 [transition-timing-function:var(--ease-out-soft)] hover:border-line-strong ${
        wide ? "lg:col-span-2 lg:flex-row" : ""
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden border-line bg-sunken ${
          wide
            ? "aspect-[16/10] border-b lg:aspect-auto lg:w-[52%] lg:border-r lg:border-b-0"
            : "aspect-[16/10] border-b"
        }`}
      >
        <CardVisual item={item} labels={labels} />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-wrap items-center gap-2">
          <StatusPill status={item.status} label={labels.status[item.status]} />
          <span className="text-xs text-ink-faint">{labels.domain[item.domain]}</span>
          <span className="text-ink-faint" aria-hidden="true">
            ·
          </span>
          <span className="text-xs text-ink-faint">{item.period}</span>
        </div>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-balance">
            {item.href ? (
              <Link href={item.href} className="after:absolute after:inset-0 hover:text-accent">
                {item.tagline}
              </Link>
            ) : (
              item.tagline
            )}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted text-pretty">{item.summary}</p>
        </div>

        {item.metrics.length > 0 && (
          <dl
            className={`mt-auto grid gap-x-6 gap-y-3 border-t border-line pt-4 ${wide ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-2"}`}
          >
            {item.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span className="block font-mono text-base font-semibold tabular-nums">
                    {metric.value}
                  </span>
                  <span className="mt-0.5 block text-xs leading-snug text-ink-faint">
                    {metric.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        )}

        <p className="text-xs text-ink-faint">{item.role}</p>

        <p className="text-xs font-medium text-ink-subtle">
          {item.href ? (
            <span className="text-accent">
              {labels.readCase} <span aria-hidden="true">→</span>
            </span>
          ) : (
            labels.casePending
          )}
        </p>
      </div>
    </article>
  );
}
