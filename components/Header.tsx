import Link from "next/link";
import Image from "next/image";
import profile from "@/app/profile.jpeg";
import type { Locale } from "@/i18n";
import * as i18n from "@/i18n";
import { Mail, FileText, Github, Linkedin } from "lucide-react";

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="flex flex-col md:flex-row items-center md:items-start gap-6">
      <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-100">
        <Image src={profile} alt="Pierre Mallinjoud" />
      </div>

      <div className="text-center md:text-left">
        <h1 className="text-2xl font-bold text-gray-900">Pierre Mallinjoud</h1>
        <p className="text-blue-600 mb-2">{i18n.subtitle[locale]}</p>
        <p className="text-gray-600 mb-4">{i18n.description[locale]}</p>
        <div className="mb-4">
          <a
            href={i18n.resumeFilePath[locale]}
            className="inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            download
          >
            <FileText className="h-4 w-4" />
            {i18n.downloadResume[locale]}
          </a>
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          <Link
            href="mailto:pierre.mallinjoud@gmail.com"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600"
          >
            <Mail className="h-4 w-4" />
            <span>Email</span>
          </Link>
          <Link
            href="https://github.com/pmall"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600"
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/pierre-mallinjoud-08346a83/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-600 hover:text-blue-600"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
