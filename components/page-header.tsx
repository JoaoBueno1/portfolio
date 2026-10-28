export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="max-w-3xl">
      {eyebrow && (
        <p className="mb-3 font-mono text-xs tracking-wide text-ink-subtle uppercase">{eyebrow}</p>
      )}
      <h1 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">{title}</h1>
      {lead && <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">{lead}</p>}
    </header>
  );
}
