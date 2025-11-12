import { Download } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Fugaz_One } from "next/font/google";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });
export const Hero = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      className={`h-screen items-center -my-20 ${
        isVisible ? "hidden" : "block"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="absolute top-80 sm:top-96 left-1/2 z-20 -translate-x-1/2 text-center">
        <p
          className={`${fugaz.className} mb-8 font-semibold text-white text-5xl sm:text-7xl`}
        >
          frontend developer
        </p>
        <p className="text-xs md:text-lg text-white sm:text-center sm:px-14">
          I create intuitive and engaging digital experiences. I am proficient
          in developing responsive web solutions.
        </p>
        <div className="flex flex-row gap-5 sm:gap-10 justify-center items-center mt-4 sm:mt-5 text-white">
          <GithubIcon color="white" />
          <LinkedinIcon color="white" />
          <button className="rounded-full p-2 sm:px-5 bg-white text-black font-medium">
            <div className="flex gap-2 sm:gap-3 items-center">
              <Download size={16} />
              <p className="text-xs sm:text-base">Resume</p>
            </div>
          </button>
        </div>
      </div>
      {/* // <RippleComponent /> */}
    </motion.div>
  );
};
