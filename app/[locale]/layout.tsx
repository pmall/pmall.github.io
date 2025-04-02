import "@/app/globals.css";
import type { Metadata } from "next";
import type { Locale } from "@/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocaleToggle } from "@/components/LocaleToggle";

export const metadata: Metadata = {
  title: "Pierre Mallinjoud",
  description: "Pierre Mallinjoud portfolio",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: Locale }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>
        <main className="min-h-screen bg-white text-gray-800">
          <div className="container mx-auto px-4 py-8 max-w-4xl">
            <LocaleToggle locale={locale} />
            <div className="mb-8">
              <Header locale={locale} />
            </div>
            {children}
            <div className="mt-16 border-t border-gray-100">
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
