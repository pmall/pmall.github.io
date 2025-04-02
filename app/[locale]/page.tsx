import type { Locale } from "@/i18n";

export default async function Home({
  params,
}: Readonly<{ params: Promise<{ locale: Locale }> }>) {
  const { locale } = await params;

  return <div>Pierre Mallinjoud [{locale}]</div>;
}
