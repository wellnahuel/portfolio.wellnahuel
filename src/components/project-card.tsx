import Image from "next/image";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";
import { SkillBadge } from "./skill-badge";

export function ProjectCard({ project }: { project: Project }) {
  const locale = useLocale() as "en" | "es" | "it";
  const title = project.title[locale];
  const tagline = project.tagline[locale];

  return (
    <Link
      href={`/work/${project.id}`}
      className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg"
    >
      <div className="relative aspect-video overflow-hidden border-b border-border">
        <Image
          src={project.images.banner}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded bg-background/90 px-2 py-1 font-mono text-xs text-accent backdrop-blur-sm">
          {project.number}/005
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="text-lg font-bold tracking-tight group-hover:text-accent">
            {title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{tagline}</p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex gap-1.5">
            {project.techStack.slice(0, 4).map((skill) => (
              <SkillBadge key={skill} skill={skill} />
            ))}
          </div>
          <span className="font-mono text-xs text-accent opacity-0 transition-opacity group-hover:opacity-100">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
