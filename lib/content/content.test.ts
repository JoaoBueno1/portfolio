import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import { en } from "@/lib/i18n/en";
import { pt } from "@/lib/i18n/pt";
import { EARLIER, EDUCATION, EXPERIENCE, LANGUAGES } from "./experience";
import { GALLERIES } from "./galleries";
import { PROJECTS } from "./projects";

const LOCALES = ["en", "pt"] as const;

function strings(value: unknown, out: string[] = []): string[] {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) for (const v of value) strings(v, out);
  else if (value && typeof value === "object") {
    for (const v of Object.values(value)) strings(v, out);
  }
  return out;
}

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
  GALLERIES,
  EXPERIENCE,
  EARLIER,
  EDUCATION,
  LANGUAGES,
  en,
  pt,
};

describe("projects", () => {
  it("have unique slugs and order", () => {
    const slugs = PROJECTS.map((p) => p.slug);
    const orders = PROJECTS.map((p) => p.order);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(orders).size).toBe(orders.length);
  });

  it("have every text in both languages", () => {
    const texts = i18nTexts({ PROJECTS, GALLERIES });
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

describe("content rules", () => {
  const all = strings(CONTENT);

  it("never names the employer, the internal systems or the ERP", () => {
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

  it("uses no em dash between words", () => {
    expect(all.filter((s) => / — /.test(s))).toEqual([]);
  });
});
