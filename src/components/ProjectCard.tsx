import type { Project } from "@/projects";
import { ProjectDescription } from "./ProjectDescription";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="border border-gray-100 rounded-lg p-6 hover:shadow-sm transition-shadow">
      <h3 className="text-lg font-medium text-gray-900 mb-2">{project.name}</h3>
      <div className="text-gray-600 mb-4">
        <ProjectDescription>{project.description}</ProjectDescription>
      </div>
      <ul className="mb-4 list-disc pl-5">
        {project.links.map((link, i) => (
          <li key={i} className="mb-1">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
