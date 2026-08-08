import { setRequestLocale, getTranslations } from "next-intl/server";
import { Hero } from "@/components/hero";
import { Link } from "@/i18n/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            {t("subtitle")}
          </p>
          <Link
            href="/works"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3 font-mono text-sm text-accent-foreground transition-transform hover:scale-105"
          >
            {t("cta")}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}
