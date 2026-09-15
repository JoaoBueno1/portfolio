import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function HomePage({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const t = await getDictionary(locale);

  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-24">
      <p className="text-sm text-ink-subtle">{t.hero.role}</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {t.hero.headline}
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-ink-muted text-pretty">{t.hero.body}</p>
    </main>
  );
}
