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
      <ul className="items-center justify-center gap-10 text-white hidden lg:flex">
        <li className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })}>About Me</li>
        <li className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}>Certifications</li>
        <li className="cursor-pointer hover:opacity-80 transition-opacity" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</li>
      </ul>
      <div className="grid grid-cols-2 gap-10 items-center justify-center text-white">
        <a 
          href="https://github.com/Lawrecesss" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <GithubIcon color="white" />
        </a>
        <a 
          href="https://linkedin.com/in/lin-htet-shein" 
          target="_blank" 
          rel="noopener noreferrer"
          className="cursor-pointer hover:opacity-80 transition-opacity"
        >
          <LinkedinIcon color="white" />
        </a>
      </div>
    </motion.div>
  );
}
