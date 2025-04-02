import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pierre Mallinjoud",
  description: "Pierre Mallinjoud portfolio",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
