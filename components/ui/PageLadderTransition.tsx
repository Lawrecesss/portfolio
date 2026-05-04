import LadderTransition from "@/components/ui/LadderTransition";
interface isVisible {
  isVisible: boolean;
}
export default function PageLadderTransition({ isVisible }: isVisible) {
  return (
    <div className={`grid grid-cols-5 ${isVisible ? "" : "hidden"} bg-[#05050d]`}>
      <LadderTransition duration={1} delay={0}   index={0} />
      <LadderTransition duration={1} delay={0.2} index={1} />
      <LadderTransition duration={1} delay={0.4} index={2} />
      <LadderTransition duration={1} delay={0.6} index={3} />
      <LadderTransition duration={1} delay={0.8} index={4} />
    </div>
  );
}
