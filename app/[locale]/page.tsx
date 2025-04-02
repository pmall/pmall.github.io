import type { Locale } from "@/i18n";
import { getProjects } from "@/projects";
import { ProjectList } from "@/components/ProjectList";

export default async function Home({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  const { locale } = await params;
  const projects = getProjects(locale);

  return <ProjectList projects={projects} />;
}
