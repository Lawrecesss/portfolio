"use client";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {/* Top-left: violet anchor */}
      <div className="absolute -top-48 -left-48 h-[520px] w-[520px] rounded-full bg-violet-600/40 blur-[120px]" />
      {/* Top-right: blue accent */}
      <div className="absolute -top-24 right-0 h-[400px] w-[400px] rounded-full bg-blue-500/30 blur-[110px]" />
      {/* Mid-right: cyan glow */}
      <div className="absolute top-1/2 -right-32 h-[360px] w-[360px] rounded-full bg-cyan-400/25 blur-[100px]" />
      {/* Center: indigo haze */}
      <div className="absolute top-1/3 left-1/2 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[130px]" />
      {/* Bottom-left: fuchsia warmth */}
      <div className="absolute -bottom-40 -left-24 h-[400px] w-[400px] rounded-full bg-fuchsia-600/28 blur-[110px]" />
      {/* Bottom-right: teal close-out */}
      <div className="absolute -bottom-32 right-1/4 h-[320px] w-[320px] rounded-full bg-teal-500/22 blur-[100px]" />
    </div>
  );
}
