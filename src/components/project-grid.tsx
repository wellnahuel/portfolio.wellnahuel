import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";

export function ProjectGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
