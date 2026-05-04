import { motion } from "framer-motion";

const icons = [
  {
    icon_name: "ts",
    img: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },
  {
    icon_name: "js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1920px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    icon_name: "python",
    img: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    icon_name: "tailwind css",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    icon_name: "html",
    img: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  },
  {
    icon_name: "react",
    img: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    icon_name: "firebase",
    img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    icon_name: "mongodb",
    img: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    icon_name: "nodejs",
    img: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },
];

const Skills = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      className={`relative ${isVisible ? "hidden" : "block"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="hero-panel mx-auto mb-20 max-w-4xl p-10 sm:p-12">
        <div className="pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-28 w-28 rounded-full bg-violet-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-950/90 to-transparent" />
        <h2 className="relative text-5xl font-bold text-white text-center">
          Skills
        </h2>
      </div>
    </motion.div>
  );
};

export default Skills;
