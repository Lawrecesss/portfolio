import React from "react";
import Certificates from "./Certificates";
import { motion } from "framer-motion";

const Certifications = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      id="certifications"
      className={`relative ${isVisible ? "hidden" : "block"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-0">
        <div className="text-center mt-32 mb-10 sm:mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 opacity-80">
            Credentials
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Certifications
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
            Professional certifications and academic credentials that demonstrate my focused training in software engineering, AI, and advanced technologies.
          </p>
        </div>

        <div className="grid gap-6 auto-rows-fr md:grid-cols-2">
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
    </motion.div>
  );
};

export default Certifications;
