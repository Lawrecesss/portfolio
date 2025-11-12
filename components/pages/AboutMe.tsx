import { motion } from "framer-motion";
import Meteors from "@/components/magicui/meteors";
import CodeStacks from "../ui/CodeStacks";

const AboutMe = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      className={`relative ${
        isVisible ? "hidden" : "block"
      } mb-10 flex flex-col items-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <CodeStacks isVisible={isVisible} />
      <div className="relative flex h-[300px] w-full mt-20 flex-col items-center justify-center overflow-hidden bg-black md:shadow-xl">
        <Meteors number={30} />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300 bg-clip-text text-2xl font-semibold leading-relaxed text-transparent text-justify">
          {<span className="text-3xl">{`     " `}</span>}
          {`Enthusiastic computer science graduate who aspires frontend development and egar to provide fascinating user expriences. Have hands on experience in developing production ready application. Strong interest in AI and Mechine Learning. Familiar with frontend frameworks. Developed websites utilizing ReactJS, NextJS and NodeJS.`}
          {<span className="text-3xl">{` "`}</span>}
        </span>
      </div>
    </motion.div>
  );
};

export default AboutMe;
