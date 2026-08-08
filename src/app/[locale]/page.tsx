import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import { Hero } from "@/components/hero";
import { ProjectGrid } from "@/components/project-grid";
import { SectionTitle } from "@/components/section-title";
import { Link } from "@/i18n/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Works");

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between">
          <SectionTitle number="02" title={t("title")} />
          <Link
            href="/works"
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            {t("discover")} →
          </Link>
        </div>
        <ProjectGrid />
      </section>
    </>
  );
}
