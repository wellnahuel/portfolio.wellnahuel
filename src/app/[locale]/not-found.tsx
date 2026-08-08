import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function LocaleNotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="flex min-h-[60dvh] flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="text-4xl font-extrabold tracking-tight">{t("title")}</h1>
      <p className="max-w-md text-muted-foreground">{t("description")}</p>
      <Link
        href="/"
        className="rounded-full border border-border px-6 py-2 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
      >
        {t("backHome")}
      </Link>
    </div>
  );
}
