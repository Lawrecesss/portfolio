import type { Metadata } from "next";
import { Offside } from "next/font/google";
import "./globals.css";

const offside = Offside({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Lin Htet Shein - Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${offside.className} bg-slate-950 text-slate-100 antialiased`}>
        <main className="relative min-h-screen overflow-x-hidden">{children}</main>
      </body>
    </html>
  );
}
