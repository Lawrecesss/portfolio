import { Download } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import SparklesText from "@/components/magicui/sparkles-text";
import { RippleComponent } from "./Ripple";
import { OrbitingCirclesDemo } from "./Orbit";

export const Hero = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      className={`grid grid-cols-2 h-screen items-center -my-20 ${
        isVisible ? "hidden" : "block"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div>
        <p className="mb-3 font-semibold text-white text-lg">
          Frontend Developer
        </p>
        <p className="font-bold text-5xl mb-3 text-white">Hello I&apos;m</p>
        {/* <SparklesText
          text="Lin Htet Shein"
          className="text-6xl font-normal mb-5 text-blue-300"
        /> */}
        <p className="pointer-events-none z-10 whitespace-pre-wrap bg-gradient-to-b from-white to-gray-500 bg-clip-text text-8xl font-bold leading-none tracking-tighter text-transparent ">
          Lin Htet Shein
        </p>
        <p className="text-xl text-white text-justify">
          I create intuitive and engaging digital experiences.
        </p>
        <p className="text-xl text-white text-justify mb-5">
          I am proficient in developing responsive web solutions.
        </p>
        <button className="rounded-full whitespace-pre-wrap bg-gradient-to-b from-gray-500 to-white py-2 px-5 text-black font-semibold">
          <div className="flex gap-3">
            <p>Download CV</p>
            <Download size={20} />
          </div>
        </button>
        <div></div>
      </div>
      <RippleComponent />
    </motion.div>
  );
};
