import Ripple from "@/components/magicui/ripple";
 
export function RippleComponent() {
  return (
    <div className="relative flex h-[700px] w-full flex-col items-center justify-center bg-white md:shadow-xl">
      <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-white">
        <img src="https://hanminthant.com/wp-content/uploads/2024/06/IMG_6270-2-768x960.jpeg" className="rounded-full w-72 h-72 object-cover animate-imgRipple"/>
      </p>
      <Ripple />
    </div>
  );
}