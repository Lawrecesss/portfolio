import type { Metadata } from "next";
import { Offside } from "next/font/google";
import "./globals.css";
import Providers from "@/components/ui/Providers"; // 👈 new wrapper component

const offside = Offside({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Lin Htet Shein - Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${offside.className}`}>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
