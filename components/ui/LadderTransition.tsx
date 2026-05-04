"use client";
import { motion } from "framer-motion";

const stripColors = [
  "from-[#180935] to-[#07050f]",
  "from-[#110c2e] to-[#06040e]",
  "from-[#0c0e2c] to-[#05060e]",
  "from-[#110c2e] to-[#06040e]",
  "from-[#180935] to-[#07050f]",
];

interface Duration {
  duration: number;
  delay?: number;
  index?: number;
}
export default function LadderTransition({ duration, delay, index = 0 }: Duration) {
  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: duration, delay: delay }}
    >
      <div className={`bg-gradient-to-b ${stripColors[index]} h-screen`} />
    </motion.div>
  );
}
