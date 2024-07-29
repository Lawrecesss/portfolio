"use client";

import Meteors from "@/components/magicui/meteors";

const AboutMe = () => {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-black md:shadow-xl">
      <Meteors number={30} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300 bg-clip-text text-2xl font-semibold leading-relaxed text-transparent text-justify">
        {<span className="text-4xl">{`     " `}</span>}
        {`Enthusiastic computer science graduate who aspires frontend development and egar to provide fascinating user expriences. Have hands on experience in developing production ready application. Strong interest in AI and Mechine Learning. Familiar with frontend frameworks. Developed websites utilizing ReactJS and NodeJS.`}
        {<span className="text-4xl">{` "`}</span>}
      </span>
    </div>
  );
};

export default AboutMe;
