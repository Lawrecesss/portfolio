import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import { LuComponent, LuImage, LuPlay, LuText } from "react-icons/lu";
import { Offside } from "next/font/google";
import { PiStarFourFill } from "react-icons/pi";

const offside = Offside({ subsets: ["latin"], weight: "400" });

const Projects = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <div
      className={`${
        isVisible ? "hidden" : "block"
      } h-[550px] relative mt-20 mb-20`}
    >
      <ScrollVelocity
        texts={["Projects"]}
        velocity={100}
        className={`text-white ${offside.className}`}
      />
      <ScrollStack>
        <ScrollStackItem itemClassName="bg-white h-[500px]">
          <h3>Text Animations</h3>

          <div className="">
            <LuText />
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-white h-[500px]">
          <h3>Animations</h3>

          <div className="">
            <LuPlay />
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-white h-[500px]">
          <h3>Components</h3>

          <div className="">
            <LuComponent />
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-white h-[500px]">
          <h3>Backgrounds</h3>

          <div className="">
            <LuImage />
          </div>
        </ScrollStackItem>

        <ScrollStackItem itemClassName="bg-white h-[500px]">
          <h3>All on React Bits!</h3>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
};

export default Projects;
