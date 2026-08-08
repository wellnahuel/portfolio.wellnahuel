import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { projects, getProjectById, type Locale } from "@/data/projects";
import { ProjectDetail } from "@/components/project-detail";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const project = getProjectById(id);
  if (!project) return {};

  const title = project.title[locale as Locale];
  const tagline = project.tagline[locale as Locale];

  return {
    title,
    description: tagline,
  };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const project = getProjectById(id);
  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <Link
        href="/works"
        className="mb-10 inline-flex items-center gap-2 font-mono text-sm text-muted-foreground transition-colors hover:text-accent"
      >
        ← Works
      </Link>

      <ProjectDetail project={project} />

      {/* Prev / next navigation */}
      <nav className="mt-20 flex items-center justify-between border-t border-border pt-8 font-mono text-sm">
        <div>
          {(() => {
            const index = projects.findIndex((p) => p.id === project.id);
            const prev = projects[index - 1];
            if (!prev) return <span />;
            return (
              <Link
                href={`/work/${prev.id}`}
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                ← {prev.number}
              </Link>
            );
          })()}
        </div>
        <div>
          {(() => {
            const index = projects.findIndex((p) => p.id === project.id);
            const next = projects[index + 1];
            if (!next) return <span />;
            return (
              <Link
                href={`/work/${next.id}`}
                className="text-muted-foreground transition-colors hover:text-accent"
              >
                {next.number} →
              </Link>
            );
          })()}
        </div>
      </nav>
    </div>
  );
}
