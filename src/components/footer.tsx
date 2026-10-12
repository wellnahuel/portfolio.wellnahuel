import { execSync } from "node:child_process";
import { statSync } from "node:fs";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

function getLastUpdate(): string | null {
  try {
    const output = execSync(
      "git log -1 --format=%cd --date=format:%m/%Y",
      { cwd: process.cwd() },
    )
      .toString()
      .trim();
    if (output) return output;
  } catch {}

  try {
    const mtime = statSync("public/assets/files/cv-nahuel-cittadino.pdf").mtime;
    const month = String(mtime.getMonth() + 1).padStart(2, "0");
    return `${month}/${mtime.getFullYear()}`;
  } catch {}

  return null;
}

const lastUpdate = getLastUpdate();

export function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-center md:flex-row md:text-left">
        <p className="font-mono text-xs text-muted-foreground">
          {lastUpdate
            ? `${t("thanks")} — ${t("lastUpdate", { date: lastUpdate })}`
            : t("thanks")}
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
