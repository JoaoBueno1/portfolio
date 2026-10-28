import { type GalleryLabels, ProjectGallery } from "@/components/project-gallery";
import type { Domain, Status } from "@/lib/content/types";
import type { ProjectView } from "@/lib/content/view";

export interface DetailLabels extends GalleryLabels {
  readonly status: Record<Status, string>;
  readonly domains: Record<Domain, string>;
  readonly roleLabel: string;
  readonly pointsLabel: string;
  readonly stackLabel: string;
  readonly visitSite: string;
  readonly noShot: string;
}

export function ProjectDetail({
  item,
  labels,
  heading: Heading,
}: {
  item: ProjectView;
  labels: DetailLabels;
  heading: "h1" | "h2";
}) {
  const label = (text: string) => (
    <h3 className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">{text}</h3>
  );

  return (
    <article className="flex flex-col gap-6">
      <header>
        <div className="flex flex-wrap items-center gap-2 text-xs text-ink-subtle">
          <span
            className={`rounded-full px-2 py-0.5 font-medium ${
              item.status === "live"
                ? "bg-ok/12 text-ok"
                : item.status === "building"
                  ? "bg-accent-soft text-accent"
                  : "bg-subtle text-ink-muted"
            }`}
          >
            {labels.status[item.status]}
          </span>
          <span>{labels.domains[item.domain]}</span>
          <span aria-hidden="true">·</span>
          <span>{item.period}</span>
        </div>
        <Heading className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {item.name}
        </Heading>
        <p className="mt-2 text-base text-ink-muted text-pretty">{item.tagline}</p>
      </header>

      {item.shots.length > 0 ? (
        <ProjectGallery key={item.slug} shots={item.shots} labels={labels} />
      ) : (
        <p className="rounded-xl border border-dashed border-line-strong p-6 text-sm text-ink-subtle">
          {labels.noShot}
        </p>
      )}

      <p className="max-w-3xl text-sm leading-relaxed text-ink-muted text-pretty">{item.summary}</p>

      {item.points.length > 0 && (
        <section>
          {label(labels.pointsLabel)}
          <ul className="mt-2 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
            {item.points.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink-muted">
                <span
                  className="mt-[0.6rem] size-1 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-pretty">{point}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {item.metrics.length > 0 && (
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {item.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col-reverse gap-0.5 bg-sunken p-4">
              <dt className="text-xs leading-snug text-ink-subtle">{metric.label}</dt>
              <dd className="font-mono text-xl font-semibold tabular-nums">{metric.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <section className="flex flex-col gap-2.5 text-sm">
        {label(labels.stackLabel)}
        <ul className="flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <li
              key={tech.key}
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-ink-muted"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="size-3" fill="currentColor">
                <path d={tech.path} />
              </svg>
              {tech.title}
            </li>
          ))}
        </ul>
        <p className="text-ink-subtle">
          <span className="font-medium text-ink-muted">{labels.roleLabel}:</span> {item.role}
        </p>
        {item.link && (
          <a
            href={item.link.url}
            target="_blank"
            rel="noopener"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-on-accent transition-colors hover:bg-accent-hover"
          >
            {labels.visitSite}
            <span className="font-mono text-xs opacity-80">{item.link.host}</span>
          </a>
        )}
      </section>
    </article>
  );
}
