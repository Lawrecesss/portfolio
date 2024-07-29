import Marquee from "@/components/magicui/marquee";
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
const ReviewCard = ({ img, icon_name }: { img: string; icon_name: string }) => {
  return (
    <div className="flex flex-row items-center gap-5 p-4">
      <img
        className="rounded-md"
        width="48"
        height="48"
        alt={icon_name}
        src={img}
      />
    </div>
  );
};

export default function CodeStacks({ isVisible }: { isVisible: boolean }) {
  return (
    <motion.div
      className={`relative flex h-[150px] w-full flex-col items-center justify-center overflow-hidden bg-black ${
        isVisible ? "hidden" : "block"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div onClick={() => {}}>
        <Marquee className="[--duration:20s]">
          {icons.map((review) => (
            <ReviewCard key={review.icon_name} {...review} />
          ))}
        </Marquee>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black "></div>
    </motion.div>
  );
}
