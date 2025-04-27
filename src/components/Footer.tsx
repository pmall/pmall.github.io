import Link from "next/link";
import * as i18n from "@/i18n";
import type { Locale } from "@/i18n";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="container mx-auto px-4 py-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          <a href="mailto:pierre.mallinjoud@gmail.com" className="underline">
            Pierre Mallinjoud
          </a>
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link
            href="https://github.com/pmall/pmall.github.io"
            target="_blank"
            className="underline"
          >
            {i18n.madeWith[locale]}
          </Link>
        </div>
      </div>
    </footer>
  );
}
