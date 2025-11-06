import { SeparatorHorizontal } from "lucide-react";
import React from "react";

export const Footer = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`flex flex-col h-40 mt-36 justify-center w-full border-t ${
        isVisible ? "hidden" : "block"
      }`}
    >
      <p className="text-white">© 2024 All Rights Reserved.</p>
      <p className="text-white">Lin Htet Shein</p>
    </div>
  );
};
