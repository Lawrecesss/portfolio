import React, { CSSProperties } from "react";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 340,
  mainCircleOpacity = 0.5,
  numCircles = 4,
}: RippleProps) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 50;
        const opacity = mainCircleOpacity - i * 0.003;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full bg-black/25 shadow-xl border top-1/2 left-1/2 translate-x-1/2 translate-y-1/2 [--i:${i}]`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                animationDelay: animationDelay,
                borderStyle: borderStyle,
                borderWidth: "2px",
                borderColor: "#fff",
              } as CSSProperties
            }
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
