"use client";
import { motion } from "framer-motion";
import PrismaticBurst from "./PrismaticBurst";
import { useState } from "react";

export default function Background({ isVisible }: { isVisible: boolean }) {
  const [intensity, setIntensity] = useState(2);
  const [speed, setSpeed] = useState(0.5);
  const [distort, setDistort] = useState(0);
  const [hoverDampness, setHoverDampness] = useState(0.25);
  const [rayCount, setRayCount] = useState(0);
  const [color0, setColor0] = useState("");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const userColors = [color0, color1, color2].filter(Boolean);
  return (
    <div className={"h-screen absolute inset-0"}>
      <PrismaticBurst
        animationType="rotate3d"
        intensity={intensity}
        speed={speed}
        distort={distort}
        hoverDampness={hoverDampness}
        rayCount={rayCount || undefined}
        {...(userColors.length ? { colors: userColors } : {})}
      />
      <motion.div
        className={`${isVisible ? "hidden" : "block"}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black "></div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black"></div>
      </motion.div>
    </div>
  );
}
