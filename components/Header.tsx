import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "lucide-react";

export default function Header({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div
      className={`sticky top-0 z-10 grid grid-cols-2 h-20 items-center ${
        isVisible ? "hidden" : "block"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <ul className="flex flex-row gap-10 justify-end text-white">
        <li>About Me</li>
        <li>Certifications</li>
        <li>Projects</li>
        <GithubIcon />
        <LinkedinIcon />
      </ul>
    </motion.div>
  );
}
