import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { SectionTitle } from "@/components/section-title";
import { ProjectGrid } from "@/components/project-grid";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("Works");
  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function WorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Works");

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-14 max-w-2xl space-y-3">
        <SectionTitle number="02" title={t("title")} />
        <p className="text-muted-foreground">{t("subtitle")}</p>
      </div>
      <ProjectGrid />
    </div>
  );
}
