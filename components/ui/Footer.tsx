import React from "react";

export const Footer = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <footer
      className={`border-t border-white/[0.05] py-8 text-center ${isVisible ? "hidden" : "block"}`}
    >
      <p className="text-xs text-slate-600">
        © {new Date().getFullYear()} Lin Htet Shein
      </p>
    </footer>
  );
};
