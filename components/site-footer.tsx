import { PROFILE } from "@/lib/content/profile";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function SiteFooter({ t }: { t: Dictionary }) {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a href={`mailto:${PROFILE.email}`} className="text-ink-muted hover:text-accent">
            {PROFILE.email}
          </a>
          <a
            href={PROFILE.linkedin}
            className="text-ink-muted hover:text-accent"
            rel="me noreferrer"
            target="_blank"
          >
            {t.cta.linkedin}
          </a>
          <a
            href={PROFILE.github}
            className="text-ink-muted hover:text-accent"
            rel="me noreferrer"
            target="_blank"
          >
            {t.cta.github}
          </a>
        </div>

        {/* Esta linha nao e disclaimer juridico: e a regra de trabalho deste
            site, dita para quem esta olhando as capturas. */}
        <p className="max-w-2xl text-xs leading-relaxed text-ink-faint">{t.footer.noData}</p>

        <p className="text-xs text-ink-faint">
          {t.footer.builtWith}{" "}
          <a
            href={PROFILE.repo}
            className="underline underline-offset-2 hover:text-ink-muted"
            rel="noreferrer"
            target="_blank"
          >
            {t.footer.sourceLink}
          </a>
        </p>
      </div>
    </footer>
  );
}
