import { SeparatorHorizontal } from "lucide-react";
import React from "react";

export const Footer = ({ isVisible }: { isVisible: boolean }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer
      className={`mt-16 w-full border-t border-white/10 ${
        isVisible ? "hidden" : "block"
      }`}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 py-8 text-center text-slate-400">
        <p className="text-sm">© {currentYear} Lin Htet Shein. All Rights Reserved.</p>
        <p className="text-xs text-slate-500">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
};
