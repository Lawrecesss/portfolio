import React from "react";
import Certificates from "./Certificates";
import { stringify } from "querystring";
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
      <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mt-40 mb-20">
          Certifications
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <Certificates
          certificate="Bechalor of Science with Honors in Computing Science"
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
    </motion.div>
  );
};

export default Certifications;
