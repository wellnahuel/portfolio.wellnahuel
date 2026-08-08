import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ThemeToggle } from "./theme-toggle";
import { LocaleSwitcher } from "./locale-switcher";

const NAV_ITEMS = [
  { href: "/", key: "home", number: "01" },
  { href: "/works", key: "works", number: "02" },
  { href: "/about", key: "about", number: "03" },
  { href: "/contact", key: "contact", number: "04" },
] as const;

export function Navbar() {
  const t = useTranslations("Nav");

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          wellnahuel
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="group font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                <span className="mr-1 text-xs text-accent">{item.number}</span>
                <span className="group-hover:underline underline-offset-4">
                  {t(item.key)}
                </span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <LocaleSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="border-t border-border md:hidden">
        <div className="mx-auto flex max-w-6xl justify-around px-4 py-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="flex flex-col items-center gap-0.5 py-1 font-mono text-xs text-muted-foreground transition-colors hover:text-accent"
            >
              <span className="text-accent">{item.number}</span>
              {t(item.key)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
