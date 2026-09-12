import Image from "next/image";
import { useLocale } from "next-intl";
import { getTotalProjectCount, type Project } from "@/data/projects";
import { SkillBadge } from "./skill-badge";

export function ProjectDetail({ project }: { project: Project }) {
  const locale = useLocale() as "en" | "es" | "it";
  const title = project.title[locale];
  const tagline = project.tagline[locale];

  return (
    <article className="space-y-10">
      {/* Banner */}
      <div className="relative aspect-[21/9] overflow-hidden rounded-lg border border-border">
        <Image
          src={project.images.hero ?? project.images.banner}
          alt={title}
          fill
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
          className="object-cover"
        />
      </div>

      <header className="space-y-3">
        <p className="font-mono text-sm text-accent">
          {project.number}/{getTotalProjectCount()} · {project.year}
        </p>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="text-lg text-muted-foreground">{tagline}</p>
      </header>

      {/* Description */}
      <div className="max-w-3xl space-y-4">
        {project.description.map((paragraph, i) => (
          <p key={i} className="leading-relaxed text-muted-foreground">
            {paragraph[locale]}
          </p>
        ))}
      </div>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-3">
        {project.techStack.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </div>

      {/* Links */}
      <div className="flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border px-6 py-2 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
          >
            {link.label[locale]} ↗
          </a>
        ))}
      </div>

      {/* Screenshots */}
      {project.images.screenshots.length > 0 && (
        <div className="space-y-6">
          <div className="flex flex-col gap-8">
            {project.images.screenshots.map((shot, i) => (
              <figure key={i} className="space-y-2">
                <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
                  <Image
                    src={shot.src}
                    alt={shot.caption?.[locale] ?? title}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover"
                  />
                </div>
                {shot.caption && (
                  <figcaption className="font-mono text-xs text-muted-foreground">
                    {shot.caption[locale]}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
