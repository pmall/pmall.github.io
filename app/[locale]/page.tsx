import type { Locale } from "@/i18n";
import { Page } from "@/components/Page";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}

export default async function Home({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  const { locale } = await params;

  return <Page locale={locale} />;
}
