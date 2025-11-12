import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "lucide-react";
import { Fugaz_One } from "next/font/google";
import RotatingText from "@/components/ui/RotatingText";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

export default function Header({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div
      className={`relative z-20 grid grid-flow-col h-20 items-center justify-between  ${
        isVisible ? "hidden" : "block"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className={`text-white ${fugaz.className} font-bold text-3xl`}>
        linhtetshein
      </div>
      <ul className="flex items-center justify-center gap-10 text-white">
        <li>About Me</li>
        <li>Certifications</li>
        <li>Projects</li>
      </ul>
      <div className="grid grid-cols-2 gap-10 items-center justify-center text-white">
        <GithubIcon color="white" />
        <LinkedinIcon color="white" />
      </div>
    </motion.div>
  );
}
