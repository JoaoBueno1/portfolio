import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { en } from "@/lib/i18n/en";
import { pt } from "@/lib/i18n/pt";
import { EARLIER, EDUCATION, EXPERIENCE, LANGUAGES } from "./experience";
import { GALLERIES } from "./galleries";
import { INSIGHTS } from "./insights";
import { PROJECTS } from "./projects";
import type { InsightChart } from "./types";

/**
 * O CONTEUDO E O PRODUTO DESTE SITE, entao e ele que se testa.
 *
 * Tres coisas que nenhum compilador pega: um idioma com texto vazio, o nome de
 * um empregador vazando para uma pagina publica, e um grafico cujo total nao
 * fecha com as linhas que ele desenha.
 */

const LOCALES = ["en", "pt"] as const;

/** Toda string que o visitante pode ler, de qualquer profundidade. */
function strings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) for (const v of value) strings(v, out);
  else if (value && typeof value === "object") {
    for (const v of Object.values(value)) strings(v, out);
  }
  return out;
}

/**
 * Todo texto traduzido, como `{ en, pt, es }`. O `copy` de um projeto tambem
 * tem as tres chaves, mas cada uma guarda um objeto (tagline, resumo, papel):
 * esse vira um `{ en, pt, es }` por campo, para conferir campo a campo.
 */
function i18nTexts(value: unknown, out: Record<string, unknown>[] = []) {
  if (Array.isArray(value)) for (const v of value) i18nTexts(v, out);
  else if (value && typeof value === "object") {
    const o = value as Record<string, unknown>;
    const localized = LOCALES.every((l) => l in o);
    if (localized && LOCALES.every((l) => typeof o[l] === "string")) out.push(o);
    else if (localized) {
      const fields = new Set(LOCALES.flatMap((l) => Object.keys(o[l] as object)));
      for (const field of fields) {
        out.push(
          Object.fromEntries(LOCALES.map((l) => [l, (o[l] as Record<string, unknown>)[field]])),
        );
      }
    } else for (const v of Object.values(o)) i18nTexts(v, out);
  }
  return out;
}

const CONTENT = {
  PROJECTS,
  INSIGHTS,
  GALLERIES,
  EXPERIENCE,
  EARLIER,
  EDUCATION,
  LANGUAGES,
  en,
  pt,
};

describe("projetos", () => {
  it("tem slug e ordem unicos", () => {
    const slugs = PROJECTS.map((p) => p.slug);
    const orders = PROJECTS.map((p) => p.order);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(orders).size).toBe(orders.length);
  });

  it("escreve todo texto nos dois idiomas, sem nenhum vazio", () => {
    const texts = i18nTexts({ PROJECTS, INSIGHTS, GALLERIES });
    expect(texts.length).toBeGreaterThan(100);
    for (const text of texts) {
      for (const locale of LOCALES) {
        expect(typeof text[locale], JSON.stringify(text).slice(0, 80)).toBe("string");
        expect(
          String(text[locale]).trim().length,
          JSON.stringify(text).slice(0, 80),
        ).toBeGreaterThan(0);
      }
    }
  });
});

describe("o que nunca sai daqui", () => {
  const all = strings(CONTENT);

  it("nao cita o empregador, os sistemas internos nem o ERP pelo nome", () => {
    // Os nomes proibidos vao como sha256 da palavra (ou do par de palavras)
    // em minusculas. Um teste num repositorio publico nao pode soletrar
    // justamente o que ele existe para manter fora.
    const banned = new Set([
      "8450a8550f7bcc1a4b0f7488fe9bdf4cdb69ca8509595ca3a0040d9523a09dd6",
      "bca24c1a8a9dd7d9a3fda88de8d46398f28cf1579f8f77d3326cc9a7deb2a823",
      "7d6427c21a65417c891492d07ac111ce656ce9baf6d14f00d846c6a85a670d57",
      "4d1a06ae9096c6a383688bd91f41d38b38f04818601dcd3eb45b9bf6d8b51f63",
      "679f3c58baefa329377834d88db564db6823440af13711ebcd2eb0bb866499db",
      "589ba750145357b6bb147542a322adc6a5cd595548a9e610550ca24fede4f85b",
      "660cd231ea271e0d7e1f79abccc723a31e5221c19cc1d016b497072f9543cd18",
      "440aed3c2a900c240419015167ee78942aa01c4bb48a82f695bd9ae6771be5f7",
    ]);
    const sha = (s: string) => createHash("sha256").update(s).digest("hex");
    const hits = all.filter((s) => {
      const words = s.toLowerCase().match(/[a-z0-9]+/g) ?? [];
      return words.some((w, i) => banned.has(sha(w)) || banned.has(sha(`${w} ${words[i + 1]}`)));
    });
    expect(hits).toEqual([]);
  });

  it("nao usa travessao entre palavras", () => {
    expect(all.filter((s) => / — /.test(s))).toEqual([]);
  });
});

describe("os graficos fecham", () => {
  const charts = collectCharts(INSIGHTS);

  it("existem graficos para conferir", () => {
    expect(charts.length).toBeGreaterThan(5);
  });

  it("o mapa do chao tem 17 posicoes por estante", () => {
    for (const c of charts) {
      if (c.kind !== "bays") continue;
      for (const rack of c.racks) expect(rack.picks).toHaveLength(17);
    }
  });

  it("a tabela de horas tem uma coluna por hora em toda linha", () => {
    for (const c of charts) {
      if (c.kind !== "hours") continue;
      const width = c.rows[0].values.length;
      for (const row of c.rows) expect(row.values).toHaveLength(width);
    }
  });

  it("frações ficam entre 0 e 1, e a entrega nunca passa do volume", () => {
    for (const c of charts) {
      if (c.kind === "pairs") for (const r of c.rows) expect(r.share).toBeGreaterThan(0);
      if (c.kind === "pairs") for (const r of c.rows) expect(r.share).toBeLessThanOrEqual(1);
      if (c.kind === "delivery") {
        for (const r of c.rows) {
          const delivered = r.bands.reduce((t, v) => t + v, 0);
          expect(delivered).toBeLessThanOrEqual(r.consignments);
        }
      }
      if (c.kind === "reweigh") {
        for (const r of c.carriers) expect(r.reweighed).toBeLessThanOrEqual(r.shipments);
        for (const s of c.sizes) {
          expect(s.p25).toBeLessThanOrEqual(s.median);
          expect(s.median).toBeLessThanOrEqual(s.p75);
        }
      }
    }
  });

  it("o kit Postman soma 63 requisicoes e 80 verificacoes, como o texto diz", () => {
    const suite = charts.find((c) => c.kind === "suite");
    expect(suite?.kind).toBe("suite");
    if (suite?.kind !== "suite") return;
    expect(suite.rows.reduce((t, r) => t + r.requests, 0)).toBe(63);
    expect(suite.rows.reduce((t, r) => t + r.checks, 0)).toBe(80);
  });
});

function collectCharts(value: unknown, out: InsightChart[] = []): InsightChart[] {
  if (Array.isArray(value)) for (const v of value) collectCharts(v, out);
  else if (value && typeof value === "object") {
    const o = value as Record<string, unknown>;
    if (
      typeof o.kind === "string" &&
      ("rows" in o || "racks" in o || "steps" in o || "links" in o || "carriers" in o)
    ) {
      out.push(o as unknown as InsightChart);
    } else for (const v of Object.values(o)) collectCharts(v, out);
  }
  return out;
}
