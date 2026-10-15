/**
 * O CABECALHO DE TODA PAGINA, igual em todas: o nome da secao pequeno em
 * cima, o H1 sendo a frase que importa, e uma linha de apoio opcional.
 *
 * Antes cada pagina fazia o seu. Projetos tinha um "Projects" de 48px,
 * Skills e Soft skills tinham o H1 em letra de rotulo de 12px. Quem navegava
 * via tres hierarquias diferentes para a mesma coisa, e o buscador lia
 * "SKILLS" como o titulo mais importante da pagina.
 */
export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="font-mono text-xs tracking-wide text-ink-subtle uppercase">{eyebrow}</p>
      <h1 className="mt-3 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
        {title}
      </h1>
      {lead && <p className="mt-3 text-base leading-relaxed text-ink-muted text-pretty">{lead}</p>}
    </header>
  );
}
