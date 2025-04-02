import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Pierre Mallinjoud",
  description: "Pierre Mallinjoud portfolio",
};

export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body>{children}</body>
    </html>
  );
}
