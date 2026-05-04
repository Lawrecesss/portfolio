"use client";

export default function Background() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* — existing blobs, mobile-capped sizes — */}
      <div className="absolute -top-24 -left-24 h-[200px] w-[200px] rounded-full bg-violet-600/40 blur-[80px] sm:-top-48 sm:-left-48 sm:h-[520px] sm:w-[520px] sm:blur-[120px]" />
      <div className="absolute -top-12 right-0 h-[160px] w-[160px] rounded-full bg-blue-500/30 blur-[70px] sm:-top-24 sm:h-[400px] sm:w-[400px] sm:blur-[110px]" />
      <div className="absolute top-1/2 -right-16 h-[140px] w-[140px] rounded-full bg-cyan-400/25 blur-[60px] sm:-right-32 sm:h-[360px] sm:w-[360px] sm:blur-[100px]" />
      <div className="absolute top-1/3 left-1/2 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[70px] sm:h-[440px] sm:w-[440px] sm:blur-[130px]" />
      <div className="absolute -bottom-20 -left-12 h-[160px] w-[160px] rounded-full bg-fuchsia-600/28 blur-[70px] sm:-bottom-40 sm:-left-24 sm:h-[400px] sm:w-[400px] sm:blur-[110px]" />
      <div className="absolute -bottom-16 right-1/4 h-[130px] w-[130px] rounded-full bg-teal-500/22 blur-[60px] sm:-bottom-32 sm:h-[320px] sm:w-[320px] sm:blur-[100px]" />

      {/* — 4 mid-page desktop blobs — */}
      <div className="absolute top-[28%] -left-20 hidden h-[300px] w-[300px] rounded-full bg-purple-500/15 blur-[110px] sm:block" />
      <div className="absolute top-[55%] left-1/4 hidden h-[260px] w-[260px] rounded-full bg-sky-500/15 blur-[100px] sm:block" />
      <div className="absolute top-[70%] right-1/3 hidden h-[280px] w-[280px] rounded-full bg-rose-500/12 blur-[110px] sm:block" />
      <div className="absolute top-[15%] left-[40%] hidden h-[240px] w-[240px] rounded-full bg-emerald-500/10 blur-[100px] sm:block" />

      {/* — footer blobs — */}
      <div className="absolute top-[82%] -left-16 h-[120px] w-[120px] rounded-full bg-violet-500/20 blur-[70px] sm:h-[320px] sm:w-[320px] sm:blur-[110px] sm:top-[84%]" />
      <div className="absolute top-[88%] left-1/2 h-[100px] w-[100px] -translate-x-1/2 rounded-full bg-cyan-500/18 blur-[60px] sm:h-[280px] sm:w-[280px] sm:blur-[100px]" />
      <div className="absolute top-[85%] -right-16 h-[110px] w-[110px] rounded-full bg-indigo-500/20 blur-[65px] sm:h-[300px] sm:w-[300px] sm:blur-[110px]" />
    </div>
  );
}
