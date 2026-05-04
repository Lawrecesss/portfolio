import { Download } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Fugaz_One } from "next/font/google";
import { GithubIcon, LinkedinIcon } from "lucide-react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });
export const Hero = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.section
      className={`relative w-full py-10 sm:py-16 ${isVisible ? "hidden" : "block"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="mx-auto flex min-h-[52vh] max-w-4xl flex-col items-center justify-center gap-6 rounded-[2.5rem] p-6 sm:p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center"
        >
          <p className={`${fugaz.className} text-3xl font-semibold text-white sm:text-4xl md:text-5xl leading-tight`}>
            Software Developer
          </p>
          <p className="mt-5 max-w-xl text-sm text-slate-300 sm:text-base md:text-lg leading-7 sm:leading-8">
            I design and develop efficient, scalable software systems with clean architecture and intuitive user experiences. My work is built for performance, reliability, and strong production-ready results.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Lawrecesss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-white/15 hover:scale-105"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://linkedin.com/in/lin-htet-shein"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white transition hover:bg-white/15 hover:scale-105"
            >
              <LinkedinIcon size={20} />
            </a>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20 hover:scale-[1.02]"
          >
            <Download size={16} />
            Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};
