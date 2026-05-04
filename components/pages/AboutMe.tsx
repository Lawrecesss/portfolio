import { motion } from "framer-motion";
import Meteors from "@/components/magicui/meteors";
import CodeStacks from "../ui/CodeStacks";

const AboutMe = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.section
      id="about-me"
      className={`relative ${isVisible ? "hidden" : "block"} py-12 sm:py-16`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-5 lg:px-0">
        <div className="text-center mb-8 sm:mb-14">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 opacity-80">
            About Me
          </p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-5xl">
            Building thoughtful software with clarity and scale.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
            I craft polished digital experiences and backend systems that solve real problems. My focus is on solid architecture, readable code, and user-first product quality.
          </p>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-[2.5rem] border border-white/10 p-4 sm:p-6 md:p-8">
          <Meteors number={18} />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1.3fr_0.9fr] items-start">
            <div className="space-y-6">
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.32em] text-slate-200 shadow-[0_0_16px_rgba(255,255,255,0.06)] sm:px-4 sm:py-1.5 sm:text-xs">
                Full Stack Engineer
              </div>
              <p className="text-slate-200 text-sm leading-7 sm:text-base sm:leading-8">
                Full-stack developer driven by the challenge of building scalable, intelligent systems. I thrive in environments that require deep technical focus, AI edge solutions, and end-to-end architecture.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">
                  <p className="text-cyan-300 text-xs uppercase tracking-[0.25em]">Focus</p>
                  <p className="mt-3">AI tooling, product systems, dev workflows</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-200">
                  <p className="text-cyan-300 text-xs uppercase tracking-[0.25em]">Approach</p>
                  <p className="mt-3">Readable code, production reliability, user impact</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-slate-200 shadow-[0_20px_80px_rgba(15,23,42,0.25)]">
              <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Snapshot</p>
              <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300">
                <div>
                  <p className="font-medium text-white">Experience</p>
                  <p>Full-stack web applications, cloud services, AI integration.</p>
                </div>
                <div>
                  <p className="font-medium text-white">Tools</p>
                  <p>Next.js, TypeScript, Node.js, React, Tailwind, Python</p>
                </div>
                <div>
                  <p className="font-medium text-white">Delivery</p>
                  <p>Clean design, fast performance, scalable product code.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="text-sm uppercase tracking-[0.3em] text-cyan-300 mb-4">
            Technology Highlights
          </div>
          <CodeStacks isVisible={isVisible} />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
