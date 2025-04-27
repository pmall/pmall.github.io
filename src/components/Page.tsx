import type { Locale } from "@/i18n";
import { getProjects } from "@/projects";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ProjectList } from "./ProjectList";
import { LocaleToggle } from "./LocaleToggle";

export function Page({ locale }: { locale: Locale }) {
  const projects = getProjects(locale);

  return (
    <html lang={locale}>
      <body>
        <main className="min-h-screen bg-white text-gray-800">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <LocaleToggle locale={locale} />
            <div className="mb-8">
              <Header locale={locale} />
            </div>
            <ProjectList projects={projects} />
            <div className="mt-16 border-t border-gray-100">
              <Footer locale={locale} />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
