import React from "react";
import Certificates from "./Certificates";
import { motion } from "framer-motion";

const Certifications = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.section
      id="certifications"
      className={`relative ${isVisible ? "hidden" : "block"} py-12 sm:py-16`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-5 lg:px-0">
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 opacity-80">
            Credentials
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
            Certifications and specialized training that demonstrate my professional software engineering and AI development expertise.
          </p>
        </div>

        <div className="hero-panel p-4 sm:p-6">
          <div className="pointer-events-none absolute -right-10 top-10 h-40 w-40 rounded-full bg-cyan-400/15 blur-3xl" />
          <div className="pointer-events-none absolute left-[-8%] bottom-10 h-44 w-44 rounded-full bg-violet-500/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-950/90 to-transparent" />
          <div className="grid gap-5 auto-rows-fr md:grid-cols-2">
            <Certificates
              certificate="Bachelor of Science with Honors in Computing Science"
              issuer="Coventry University"
              date="2022 - 2024"
              description="A broad and robust understanding of computer science and programming. Topics include algorithms, data structures, software engineering and web development."
            />
            <Certificates
              certificate="Machine Learning Specialization"
              issuer="DeepLearning.AI & Stanford University"
              date="2023"
              description="Comprehensive specialization covering supervised learning, neural networks, and best practices for machine learning. Includes hands-on projects with Python, TensorFlow, and real-world applications of ML algorithms."
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Certifications;
