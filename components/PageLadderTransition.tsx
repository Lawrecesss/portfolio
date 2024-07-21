import LadderTransition from "@/components/LadderTransition";

interface isVisible {
  isVisible: boolean;
}
export default function PageLadderTransition({ isVisible }: isVisible) {
  return (
    <div className={`grid grid-cols-5 bg-white ${isVisible ? "" : "hidden"}`}>
      <LadderTransition duration={1} delay={0} />
      <LadderTransition duration={1} delay={0.2} />
      <LadderTransition duration={1} delay={0.4} />
      <LadderTransition duration={1} delay={0.6} />
      <LadderTransition duration={1} delay={0.8} />
    </div>
  );
}
