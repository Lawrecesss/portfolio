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
      <h2 className="text-5xl font-bold text-white mb-20 text-center">
        Skills
      </h2>
    </motion.div>
  );
};

export default Skills;
