import { PROFILE } from "@/lib/content/profile";

export function SiteFooter({ location, source }: { location: string; source: string }) {
  return (
    <footer className="border-t border-line print:hidden">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-xs text-ink-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          <span className="font-medium text-ink-muted">{PROFILE.fullName}</span> · {location}
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-1">
          <li>
            <a href={`mailto:${PROFILE.email}`} className="hover:text-accent">
              {PROFILE.email}
            </a>
          </li>
          <li>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="me noreferrer"
              className="hover:text-accent"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="me noreferrer"
              className="hover:text-accent"
            >
              GitHub
            </a>
          </li>
          <li>
            <a href={PROFILE.repo} target="_blank" rel="noreferrer" className="hover:text-accent">
              {source}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
