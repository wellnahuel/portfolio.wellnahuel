import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-center md:flex-row md:text-left">
        <p className="font-mono text-xs text-muted-foreground">
          {t("thanks")} — {t("lastUpdate")}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          <Link href="/" className="transition-colors hover:text-accent">
            wellnahuel
          </Link>{" "}
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
