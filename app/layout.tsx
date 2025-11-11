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
    <html lang="en">
      <body className={offside.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
