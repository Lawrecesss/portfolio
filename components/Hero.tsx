import { Download } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import SparklesText from "@/components/magicui/sparkles-text";
import { RippleComponent } from "./Ripple";
import { OrbitingCirclesDemo } from "./Orbit";

interface isVisible {
  isVisible: boolean;
}
export const Hero = ({ isVisible }: isVisible) => {
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
        <SparklesText
          text="Lin Htet Shein"
          className="text-white text-6xl font-normal mb-5 text-blue-300"
        />
        <p className="text-xl text-white text-justify">
          I create intuitive and engaging digital experiences.
        </p>
        <p className="text-xl text-white text-justify mb-5">
          I am proficient in developing responsive web solutions.
        </p>
        <button className="rounded-full bg-blue-300 py-2 px-5 text-black font-semibold">
          <div className="flex gap-3">
            <p>Download CV</p>
            <Download size={20} />
          </div>
        </button>
        <div></div>
      </div>
      <RippleComponent/>
    </motion.div>
  );
};
