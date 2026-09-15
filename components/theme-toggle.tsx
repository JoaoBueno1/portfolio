"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Seletor de tema.
 *
 * O tema aplicado antes da hidratacao vem do script inline em
 * `app/[locale]/layout.tsx` — sem ele existiria um flash de tema claro em
 * quem escolheu escuro. Este componente so precisa DESCOBRIR o que ja esta
 * valendo e permitir trocar.
 *
 * `mounted` existe porque o botao nao tem como saber o tema no servidor: a
 * escolha vive no localStorage do visitante. Renderizar um rotulo no servidor
 * e outro no cliente e erro de hidratacao, entao o botao nasce neutro.
 */
export function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const explicit = root.dataset.theme as Theme | undefined;
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    setTheme(explicit ?? system);
    setMounted(true);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Janela anonima ou site data bloqueado: a troca vale nesta pagina e
      // nao persiste. Nao e motivo para quebrar o botao.
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-md text-ink-muted transition-colors hover:bg-subtle hover:text-ink"
    >
      {/* Sol e lua no mesmo path set, trocados por opacidade para o botao
          nao mudar de tamanho entre os estados. */}
      <svg
        viewBox="0 0 24 24"
        className="size-4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        {mounted && theme === "dark" ? (
          <path
            d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <>
            <circle cx="12" cy="12" r="4" />
            <path
              d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"
              strokeLinecap="round"
            />
          </>
        )}
      </svg>
    </button>
  );
}
