"use client";

import { useEffect } from "react";

/**
 * Pausa os efeitos ambientais quando a aba esta oculta.
 *
 * O browser ja desacelera animacao em aba de fundo, mas nao a zera. Este
 * componente nao desenha nada: so escreve `data-hidden` no `<html>` quando a
 * aba some, e o CSS de `.ambient` para as animacoes nesse estado. Quando a
 * aba volta, o atributo sai e tudo continua de onde parou.
 */
export function AmbientMotion() {
  useEffect(() => {
    const root = document.documentElement;
    function sync() {
      if (document.hidden) root.dataset.hidden = "true";
      else delete root.dataset.hidden;
    }
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  return null;
}
