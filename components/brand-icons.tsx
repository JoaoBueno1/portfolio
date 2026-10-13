import { siGithub } from "simple-icons";

/**
 * Os tres contatos, como logo e nao como texto clicavel.
 *
 * DOIS PATHS SAO PROPRIOS, e por motivos diferentes:
 *
 * - LinkedIn saiu do `simple-icons` (o pacote removeu varias marcas por
 *   politica de uso), entao o desenho vem daqui.
 * - O envelope nunca esteve la: `simple-icons` so tem MARCAS, e usar o icone
 *   do Gmail seria errado. Para quem recebe, isto nao e Gmail, e um endereco.
 */
const MAIL_PATH =
  "M2.4 5.4h19.2c.66 0 1.2.54 1.2 1.2v10.8c0 .66-.54 1.2-1.2 1.2H2.4c-.66 0-1.2-.54-1.2-1.2V6.6c0-.66.54-1.2 1.2-1.2Zm.9 2.1 8.7 5.8 8.7-5.8";

const LINKEDIN_PATH =
  "M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z";

export const CONTACT_ICONS = {
  email: { path: MAIL_PATH, stroke: true },
  linkedin: { path: LINKEDIN_PATH, stroke: false },
  github: { path: siGithub.path, stroke: false },
} as const;

export type ContactIconName = keyof typeof CONTACT_ICONS;

export function ContactIcon({ name, label }: { name: ContactIconName; label: string }) {
  const icon = CONTACT_ICONS[name];
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label={label}
      className="size-5"
      fill={icon.stroke ? "none" : "currentColor"}
      stroke={icon.stroke ? "currentColor" : "none"}
      strokeWidth={icon.stroke ? 1.6 : undefined}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>{label}</title>
      <path d={icon.path} />
    </svg>
  );
}
