import type { StaticImageData } from "next/image";
import type { Locale } from "@/lib/i18n/config";
import type { I18nText, Shot } from "./types";

/**
 * GALERIA POR TEMPLATE.
 *
 * Sessenta e seis capturas com `alt` e `caption` proprios nos dois idiomas
 * seriam quase quatrocentas frases escritas a mao. A metade delas diria a
 * mesma coisa com outra palavra, que e exatamente como se escreve texto ruim.
 *
 * Entao cada tela carrega so o que muda, o NOME dela, e o grupo carrega o que
 * se repete. O `alt` sai de um molde por grupo, e a `caption` e uma frase
 * propria escrita onde ela acrescenta alguma coisa. Tela sem nota propria
 * mostra so o nome, que e melhor do que encher com frase sem conteudo.
 *
 * `{page}` no molde e trocado pelo nome da tela.
 */
export interface GalleryItem {
  readonly src: StaticImageData;
  /** O nome daquela tela, nos dois idiomas. */
  readonly page: I18nText;
  /** Nota propria, quando existe algo a dizer alem do nome. */
  readonly note?: I18nText;
  /** `alt` proprio, quando o molde nao descreve a imagem (uma montagem, por exemplo). */
  readonly alt?: I18nText;
}

export interface GalleryGroup {
  /** Molde do `alt`. Recebe `{page}`. */
  readonly altTemplate: I18nText;
  /** Molde da legenda quando a tela nao tem nota propria. Recebe `{page}`. */
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

/** Atalho para escrever as duas linguas numa linha so. */
export function t2(en: string, pt: string): I18nText {
  return { en, pt };
}

export type { Locale };
