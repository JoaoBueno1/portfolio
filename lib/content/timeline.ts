/**
 * A linha do tempo curta da home. A versao longa mora em /about e /studies.
 *
 * Cada entrada e uma virada, nao um cargo: o que mudou no que eu fazia.
 *
 * `as const` AQUI e necessario (ao contrario do dicionario): o `id` precisa
 * ser a uniao literal dos cinco valores para indexar `t.timeline.entries`. Um
 * `id: string` faria o TypeScript perder a ligacao com o dicionario, e um
 * id escrito errado so apareceria como texto faltando em producao.
 */
export const TIMELINE = [
  { id: "bank", year: "2018" },
  { id: "floor", year: "2023" },
  { id: "firstApp", year: "2024" },
  { id: "tms", year: "2025" },
  { id: "portal", year: "2026" },
] as const;

export type TimelineId = (typeof TIMELINE)[number]["id"];
