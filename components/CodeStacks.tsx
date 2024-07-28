import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const icons = [
  {
    id: 1,
    icon_name: "ts",
    img: "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
  },
  {
    id: 1,
    icon_name: "js",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1920px-Unofficial_JavaScript_logo_2.svg.png",
  },
  {
    id: 1,
    icon_name: "python",
    img: "https://www.vectorlogo.zone/logos/python/python-icon.svg",
  },
  {
    id: 1,
    icon_name: "tailwind css",
    img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    id: 1,
    icon_name: "html",
    img: "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
  },
  {
    id: 1,
    icon_name: "react",
    img: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
  },
  {
    id: 1,
    icon_name: "firebase",
    img: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  },
  {
    id: 1,
    icon_name: "mongodb",
    img: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
  },
  {
    id: 1,
    icon_name: "mongodb",
    img: "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
  },
];
const ReviewCard = ({ img, icon_name }: { img: string; icon_name: string }) => {
  return (
    <div className="flex flex-row items-center gap-5 p-4">
      <img
        className="rounded-md"
        width="60"
        height="60"
        alt={icon_name}
        src={img}
      />
    </div>
  );
};

export default function CodeStacks() {
  return (
    <div className="relative flex h-[150px] w-full flex-col items-center justify-center overflow-hidden bg-black">
      <Marquee className="[--duration:20s]">
        {icons.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black "></div>
    </div>
  );
}
