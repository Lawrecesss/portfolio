"use client";

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="absolute top-1/2 -right-48 h-80 w-80 rounded-full bg-cyan-500/8 blur-[100px]" />
      <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-indigo-600/8 blur-[100px]" />
    </div>
  );
}
