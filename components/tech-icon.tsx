import { STACK, type StackKey } from "@/lib/content/stack";

/**
 * Um logo do muro. O `<title>` dentro do SVG e o que o leitor de tela le e o
 * que o browser mostra no hover — por isso o icone NAO e `aria-hidden`: aqui
 * ele carrega informacao, ao contrario do campo de rotas.
 */
export function TechIcon({ name, className = "size-6" }: { name: StackKey; className?: string }) {
  const tech = STACK[name];
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={tech.title}
      className={className}
      fill="currentColor"
    >
      <title>{tech.title}</title>
      <path d={tech.path} />
    </svg>
  );
}
