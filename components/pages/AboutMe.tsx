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
        <div className="relative flex min-h-[240px] w-full mt-12 flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 to-black p-5 sm:p-7 md:p-12 md:shadow-2xl border border-white/10">
          <Meteors number={24} />
          <div className="relative z-10 max-w-3xl px-2 sm:px-0">
            <svg className="w-10 h-10 mb-4 text-purple-400 opacity-50 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <p className="text-gray-300 text-sm sm:text-base md:text-xl leading-7 sm:leading-8 text-justify font-light">
              Full-stack developer driven by the challenge of building scalable, intelligent systems. I am naturally motivated by technical hurdles and thrive in environments that require expanding my proficiency in AI frameworks and end-to-end architecture.
            </p>
            <svg className="w-10 h-10 mt-5 ml-auto text-blue-400 opacity-50 rotate-180 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
