"use client";
import { motion } from "framer-motion";

interface Duration {
  duration: Number;
  delay?: Number;
}
export default function LadderTransition({ duration, delay }: Duration) {
  return (
    <motion.div
      initial={{ y: -1000, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: duration, delay: delay }}
    >
      <div className="block bg-black h-screen"></div>
    </motion.div>
  );
}
