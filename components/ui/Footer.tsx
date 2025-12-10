import { SeparatorHorizontal } from "lucide-react";
import React from "react";

export const Footer = ({ isVisible }: { isVisible: boolean }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer
      className={`mt-20 py-8 w-full border-t border-white/10 ${
        isVisible ? "hidden" : "block"
      }`}
    >
      <div className="flex flex-col items-center gap-2">
        <p className="text-gray-400 text-sm">© {currentYear} Lin Htet Shein. All Rights Reserved.</p>
        <p className="text-gray-500 text-xs">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
};
