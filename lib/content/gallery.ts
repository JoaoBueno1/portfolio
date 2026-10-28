import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { I18nText, Shot } from "./types";

export interface GalleryItem {
  readonly src: StaticImageData;
  readonly page: I18nText;
  readonly note?: I18nText;
  readonly alt?: I18nText;
}

export interface GalleryGroup {
  readonly altTemplate: I18nText;
  readonly captionTemplate: I18nText;
  readonly items: readonly GalleryItem[];
}

function fill(template: string, page: string): string {
  return template.replace("{page}", page);
}

export function toShots(group: GalleryGroup): readonly Shot[] {
  return group.items.map((item) => ({
    src: item.src,
    alt: item.alt ?? {
      en: fill(group.altTemplate.en, item.page.en),
      pt: fill(group.altTemplate.pt, item.page.pt),
    },
    caption: item.note ?? {
      en: fill(group.captionTemplate.en, item.page.en),
      pt: fill(group.captionTemplate.pt, item.page.pt),
    },
  }));
}

export function t2(en: string, pt: string): I18nText {
  return { en, pt };
}

export type { Locale };
