"use client";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, LinkedinIcon, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header({ isVisible }: { isVisible: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "About", target: "about-me" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  const scrollTo = (target: string) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`relative z-20 w-full ${isVisible ? "hidden" : "block"}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.8, duration: 0.6 }}
    >
      <div className="flex items-center justify-between rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 backdrop-blur-sm">
        <span className="text-sm font-semibold tracking-widest text-white uppercase">
          LHS
        </span>

        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollTo(item.target)}
              className="rounded-xl px-4 py-2 text-sm text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href="https://github.com/Lawrecesss"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href="https://linkedin.com/in/lin-htet-shein"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            <LinkedinIcon size={17} />
          </a>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white sm:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mt-2 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d0d1a]/95 backdrop-blur-md sm:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col p-2">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => scrollTo(item.target)}
                  className="rounded-xl px-4 py-3 text-left text-sm text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center justify-center gap-4 border-t border-white/[0.06] p-3">
              <a
                href="https://github.com/Lawrecesss"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href="https://linkedin.com/in/lin-htet-shein"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-2 text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
