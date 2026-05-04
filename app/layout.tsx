import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Offside } from "next/font/google";
import "./globals.css";

const Background = dynamic(() => import("@/components/ui/Background"), {
  ssr: false,
});
const offside = Offside({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Lin Htet Shein - Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className={`${offside.className} bg-[#05050d] text-slate-100 antialiased`}>
        <div className="relative min-h-screen overflow-x-hidden will-change-transform">
          <Background />
          <main className="relative">{children}</main>
        </div>
      </body>
    </html>
  );
}
