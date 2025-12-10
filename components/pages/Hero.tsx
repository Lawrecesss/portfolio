import { Download } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Fugaz_One } from "next/font/google";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });
export const Hero = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      className={`h-screen flex items-center justify-center -mx-10 md:-mx-32 lg:-mx-40 -my-20 ${
        isVisible ? "hidden" : "block"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="text-center w-full px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          <p
            className={`${fugaz.className} mb-10 font-semibold text-white bg-clip-text text-5xl sm:text-7xl leading-tight`}
          >
            Software Developer
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3, duration: 0.8 }}
          className="text-sm md:text-xl text-gray-200 text-center max-w-4xl mx-auto px-6 leading-relaxed"
        >
          I design and develop efficient, scalable software systems. Proficient in writing clean, maintainable code and building solutions that deliver reliability and strong performance.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="flex flex-row gap-5 sm:gap-10 justify-center items-center mt-8 sm:mt-10 text-white"
        >
          <a 
            href="https://github.com/Lawrecesss" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
          >
            <GithubIcon color="white" size={24} />
          </a>
          <a 
            href="https://linkedin.com/in/lin-htet-shein" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110"
          >
            <LinkedinIcon color="white" size={24} />
          </a>
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 sm:px-8 sm:py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg inline-block"
          >
            <div className="flex gap-2 sm:gap-3 items-center">
              <Download size={16} />
              <p className="text-xs sm:text-base">Resume</p>
            </div>
          </a>
        </motion.div>
      </div>
      {/* <RippleComponent /> */}
    </motion.div>
  );
};
