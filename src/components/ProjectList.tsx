import type { Project } from "@/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <section className="space-y-8">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </section>
  );
}
