import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectGrid } from "@/components/project-grid";
import { usageOf } from "@/components/skill-meter";
import { EDUCATION, EXPERIENCE, formatMonth, formatPeriod } from "@/lib/content/experience";
import { mailtoHref, PROFILE } from "@/lib/content/profile";
import { STACK, skillGroups } from "@/lib/content/stack";
import { projectViews } from "@/lib/content/view";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import bay from "@/public/art/bay.webp";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);
  const projects = projectViews(locale, t.projects.present);
  const groups = skillGroups();
  const site = process.env.NEXT_PUBLIC_SITE_URL;

  return (
    <main id="main">
      {site && (
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: serialised from typed content, no user input; `<` is escaped
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              projectList(site, locale, t.home.featuredTitle, projects),
            ).replace(/</g, "\\u003c"),
          }}
        />
      )}

      <section className="hero relative overflow-hidden bg-canvas text-ink">
        <div className="hero-art" aria-hidden="true">
          <Image
            src={bay}
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="hero-art-img"
          />
          <div className="hero-veil" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-12 sm:pt-20 sm:pb-14">
          <p className="font-mono text-xs tracking-wide text-ink-subtle uppercase">{t.home.role}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {PROFILE.fullName}
          </h1>
          <div className="mt-5 flex max-w-2xl flex-col gap-3">
            {t.about.intro.map((paragraph, i) => (
              <p
                key={paragraph.slice(0, 32)}
                className={`leading-relaxed text-pretty ${i === 0 ? "text-lg text-ink" : "text-base text-ink-muted"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-hover"
            >
              {t.home.ctaProjects} <span aria-hidden="true">&darr;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {t.home.ctaContact}
            </a>
          </div>

          <ul className="mt-12 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.capabilities.map((cap, i) => (
              <li key={cap.title} className="flex flex-col gap-1.5">
                <span className="text-accent">
                  <CapabilityIcon index={i} />
                </span>
                <span className="text-sm font-semibold tracking-tight">{cap.title}</span>
                <span className="text-xs text-ink-subtle">{cap.tools}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-14 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight">{t.home.featuredTitle}</h2>
        <p className="mt-1 text-sm text-ink-muted">{t.home.featuredLead}</p>
        <div className="mt-6">
          <ProjectGrid
            items={projects}
            locale={locale}
            labels={{
              other: t.projects.other,
              moreCoursework: t.projects.moreCoursework,
              flagship: t.projects.flagship,
              close: t.projects.close,
              previous: t.projects.previous,
              next: t.projects.next,
              openPage: t.projects.openPage,
              status: t.projects.status,
              domains: t.projects.domains,
              roleLabel: t.projects.roleLabel,
              pointsLabel: t.projects.pointsLabel,
              stackLabel: t.projects.stackLabel,
              visitSite: t.projects.visitSite,
              noShot: t.projects.noShot,
              previousShot: t.projects.previousShot,
              nextShot: t.projects.nextShot,
              shotCount: t.projects.shotCount,
              zoom: t.projects.zoom,
              closeZoom: t.projects.closeZoom,
              shotPosition: t.projects.shotPosition,
            }}
          />
        </div>
      </section>

      <section className="border-t border-line bg-sunken">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">{t.home.skillsTitle}</h2>
              <p className="mt-1 text-sm text-ink-muted">{t.home.skillsLead}</p>
            </div>
            <Link
              href={`/${locale}/about#skills`}
              className="text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
            >
              {t.home.skillsMore} <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <div key={group.id} className="rounded-xl border border-line bg-canvas p-4">
                <dt className="font-mono text-[0.625rem] tracking-wide text-ink-subtle uppercase">
                  {t.about.groups[group.id]}
                </dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
                  {group.keys.map((key) => {
                    const tech = STACK[key];
                    const usage = usageOf(tech.level);
                    return (
                      <span
                        key={key}
                        title={t.about.usage[usage]}
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ${
                          usage === "daily"
                            ? "bg-accent-soft font-medium text-accent"
                            : usage === "often"
                              ? "bg-subtle text-ink-muted"
                              : "border border-line text-ink-subtle"
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="size-3"
                          fill="currentColor"
                        >
                          <path d={tech.path} />
                        </svg>
                        {tech.title}
                      </span>
                    );
                  })}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">{t.home.experienceTitle}</h2>
            <p className="mt-1 text-sm text-ink-muted">{t.home.experienceLead}</p>
          </div>
          <Link
            href={`/${locale}/experience`}
            className="text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            {t.home.viewExperience} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <ol className="mt-6 grid gap-4 md:grid-cols-3">
          {EXPERIENCE.map((role) => (
            <li key={role.from} className="rounded-xl border border-line bg-canvas p-5">
              <p className="font-mono text-xs text-ink-subtle">
                {formatPeriod(role, locale, t.experience.present)}
              </p>
              <h3 className="mt-2 font-semibold tracking-tight">{role.title[locale]}</h3>
              <p className="text-sm text-ink-muted">{role.org[locale]}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty">
                {role.points[0][locale]}
              </p>
            </li>
          ))}
          {EDUCATION.map((course) => (
            <li key={course.from} className="rounded-xl border border-line bg-canvas p-5">
              <p className="font-mono text-xs text-ink-subtle">
                {formatMonth(course.from, locale)} – {formatMonth(course.to, locale)}
              </p>
              <h3 className="mt-2 font-semibold tracking-tight">{course.title[locale]}</h3>
              <p className="text-sm text-ink-muted">{course.school[locale]}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted text-pretty">
                {course.note[locale]}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="contact" className="scroll-mt-16 border-t border-line bg-sunken">
        <div className="mx-auto max-w-6xl px-6 py-14 sm:py-16">
          <h2 className="text-2xl font-semibold tracking-tight">{t.home.contactTitle}</h2>
          <p className="mt-1 max-w-2xl text-sm text-ink-muted text-pretty">{t.home.contactLead}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={mailtoHref(t.nav.emailSubject)}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-on-accent shadow-sm transition-colors hover:bg-accent-hover"
            >
              {t.home.emailMe}
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="me noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="me noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-line-strong px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
            >
              GitHub
            </a>
            <span className="text-sm text-ink-subtle">
              {PROFILE.email} · {t.home.location}
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}

function projectList(
  site: string,
  locale: string,
  name: string,
  cards: readonly { slug: string; name: string; tagline: string; status: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: cards
      .filter((c) => c.status === "live" || c.status === "building")
      .map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "SoftwareApplication",
          name: c.name,
          description: c.tagline,
          applicationCategory: "BusinessApplication",
          url: `${site}/${locale}/projects/${c.slug}`,
          author: { "@id": `${site}/#person` },
        },
      })),
  };
}

function CapabilityIcon({ index }: { index: number }) {
  const paths = [
    "m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16",
    "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
    "M4 20V10M10 20V4M16 20v-8M22 20H2",
    "M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8a4.5 4.5 0 0 1 0 10H7Z",
  ];
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[index] ?? paths[0]} />
    </svg>
  );
}
