import { Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.section
      className={`flex min-h-[88dvh] flex-col items-center justify-center py-16 text-center ${isVisible ? "hidden" : "flex"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.8 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.7 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-4 py-2 text-xs tracking-widest text-violet-300 uppercase"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
        Available for work
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.7 }}
        className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
      >
        Lin Htet Shein
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.25, duration: 0.7 }}
        className="mt-4 bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl"
      >
        Software Developer
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.4, duration: 0.7 }}
        className="mx-auto mt-6 max-w-sm text-sm leading-7 text-slate-400 sm:max-w-md sm:text-base"
      >
        I design and build efficient, scalable systems with clean architecture and intuitive user experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.55, duration: 0.7 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3"
      >
        <a
          href="https://github.com/Lawrecesss"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white hover:scale-105"
        >
          <Github size={18} />
        </a>
        <a
          href="https://linkedin.com/in/lin-htet-shein"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white hover:scale-105"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/[0.1] px-5 py-2.5 text-sm font-medium text-violet-200 transition-all hover:bg-violet-500/[0.18] hover:scale-[1.02]"
        >
          <Download size={15} />
          Resume
        </a>
      </motion.div>
    </motion.section>
  );
};
