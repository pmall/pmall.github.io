import Link from "next/link";
import { Globe } from "lucide-react";
import type { Locale } from "@/i18n";

export function LocaleToggle({ locale }: { locale: Locale }) {
  const href = locale == "en" ? "/fr" : "/en";
  const text = locale === "en" ? "Français" : "English";

  return (
    <div className="flex justify-end mb-6">
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-sm text-blue-600 border border-blue-200 rounded-md px-3 py-1 hover:bg-blue-50 transition-colors"
      >
        <Globe className="h-4 w-4" />
        {text}
      </Link>
    </div>
  );
}
