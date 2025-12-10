import { motion } from "framer-motion";
import Meteors from "@/components/magicui/meteors";
import CodeStacks from "../ui/CodeStacks";

const AboutMe = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      id="about-me"
      className={`relative ${
        isVisible ? "hidden" : "block"
      } mb-10 flex flex-col items-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="w-full">
        {/* <h2 className="text-4xl sm:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          About Me
        </h2> */}
        <CodeStacks isVisible={isVisible} />
        <div className="relative flex min-h-[300px] w-full mt-20 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-black p-8 md:p-12 md:shadow-2xl border border-white/10">
          <Meteors number={30} />
          <div className="relative z-10 max-w-4xl">
            <svg className="w-12 h-12 mb-6 text-purple-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-gray-300 text-base sm:text-xl md:text-2xl leading-relaxed text-justify font-light">
              Enthusiastic computer science graduate who aspires to frontend development and is eager to provide fascinating user experiences. I have hands-on experience in developing production-ready applications with a strong interest in AI and Machine Learning. Familiar with modern frontend frameworks and have developed websites utilizing ReactJS, Next.js, and Node.js.
            </p>
            <svg className="w-12 h-12 mt-6 ml-auto text-blue-400 opacity-50 rotate-180" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
