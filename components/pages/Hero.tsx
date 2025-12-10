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
        <p
          className={`${fugaz.className} mb-8 font-semibold text-white text-5xl sm:text-7xl`}
        >
          software developer
        </p>
        <p className="text-xs md:text-lg text-white text-center max-w-3xl mx-auto px-6">
          I design and develop efficient, scalable software systems. I am proficient in writing clean, maintainable code and building solutions that deliver reliability and strong performance.
        </p>
        <div className="flex flex-row gap-5 sm:gap-10 justify-center items-center mt-4 sm:mt-5 text-white">
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
          <a 
            href="/linhtetshein(resume).pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="rounded-full p-2 sm:px-5 bg-white text-black font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            <div className="flex gap-2 sm:gap-3 items-center">
              <Download size={16} />
              <p className="text-xs sm:text-base">Resume</p>
            </div>
          </a>
        </div>
      </div>
      {/* // <RippleComponent /> */}
    </motion.div>
  );
};
