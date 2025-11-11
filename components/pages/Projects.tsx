import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import ScrollVelocity from "@/components/ui/ScrollVelocity";
import { LuComponent, LuImage, LuPlay, LuText } from "react-icons/lu";
import { Offside } from "next/font/google";
import { PiStarFourFill } from "react-icons/pi";

function Demo() {
  return (
    <div className="bg-black">
      <div className="container mx-auto">
        <ScrollStack itemStackDistance={0} stackPosition="20%">
          <ScrollStackItem itemClassName="">
            <div className="flex flex-row justify-center gap-10">
              <div>
                <h2 className="text-3xl font-bold text-white">Card 1</h2>
                <p className="text-white text-lg">
                  This card will be completely covered by the next one
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif"
                  alt="Spinning Star"
                  className="w-full h-[304px] rounded-[40px] box-border"
                />
              </div>
            </div>
            {/* </ElectricBorder> */}
          </ScrollStackItem>

          <ScrollStackItem itemClassName="">
            <h2 className="text-3xl font-bold text-white">Card 2</h2>
            <p className="text-white text-lg">
              Watch as this card covers the previous one
            </p>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="">
            <h2 className="text-3xl font-bold text-white">Card 3</h2>
            <p className="text-white text-lg">Full coverage stacking effect</p>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="">
            <h2 className="text-3xl font-bold text-white">Card 4</h2>
            <p className="text-white text-lg">Final card in the stack</p>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </div>
  );
}

const Projects = ({ isVisible }: { isVisible: boolean }) => {
  return Demo();
  // <div
  //   className={`${
  //     isVisible ? "hidden" : "block"
  //   } h-[550px] relative mt-20 mb-20`}
  // >
  //   {/* <ScrollVelocity
  //     texts={["Projects"]}
  //     velocity={100}
  //     className={`text-white ${offside.className}`}
  //   /> */}
  //   <ScrollStack>
  //     <ScrollStackItem itemClassName="bg-white">
  //       <h3>Text Animations</h3>

  //       <div className="">
  //         <LuText />
  //       </div>
  //     </ScrollStackItem>

  //     <ScrollStackItem itemClassName="bg-white">
  //       <h3>Animations</h3>

  //       <div className="">
  //         <LuPlay />
  //       </div>
  //     </ScrollStackItem>

  //     <ScrollStackItem itemClassName="bg-white">
  //       <h3>Components</h3>

  //       <div className="">
  //         <LuComponent />
  //       </div>
  //     </ScrollStackItem>

  //     <ScrollStackItem itemClassName="bg-white">
  //       <h3>Backgrounds</h3>

  //       <div className="">
  //         <LuImage />
  //       </div>
  //     </ScrollStackItem>

  //     <ScrollStackItem itemClassName="bg-white">
  //       <h3>All on React Bits!</h3>
  //     </ScrollStackItem>
  //   </ScrollStack>
  // </div>
};

export default Projects;
