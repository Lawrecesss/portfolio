import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, Menu, X } from "lucide-react";
import { Fugaz_One } from "next/font/google";
import { useState } from "react";
import RotatingText from "@/components/ui/RotatingText";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: "400" });

export default function Header({ isVisible }: { isVisible: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className={`relative z-20 w-full ${isVisible ? "hidden" : "block"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="glass-panel flex items-center justify-between rounded-[2rem] border-white/10 px-4 py-3 shadow-[0_30px_90px_rgba(15,23,42,0.35)] sm:px-5 sm:py-4">
        <div className={`text-white ${fugaz.className} font-bold text-xl sm:text-3xl`}>linhtetshein</div>
        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 text-sm text-slate-100 sm:flex">
          <button
            onClick={() => document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full px-4 py-2 text-slate-100 transition hover:bg-white/10"
          >
            About
          </button>
          <button
            onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full px-4 py-2 text-slate-100 transition hover:bg-white/10"
          >
            Certs
          </button>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full px-4 py-2 text-slate-100 transition hover:bg-white/10"
          >
            Projects
          </button>
        </nav>
        {/* Desktop Social */}
        <div className="hidden items-center gap-4 text-slate-100 sm:flex">
          <a
            href="https://github.com/Lawrecesss"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/lin-htet-shein"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-full p-2 text-slate-100 transition hover:bg-white/10 sm:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="glass-panel mt-2 rounded-[2rem] border-white/10 px-4 py-4 shadow-[0_30px_90px_rgba(15,23,42,0.35)] sm:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <nav className="flex flex-col gap-3 text-sm text-slate-100">
            <button
              onClick={() => {
                document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-left text-slate-100 transition hover:bg-white/10"
            >
              About
            </button>
            <button
              onClick={() => {
                document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-left text-slate-100 transition hover:bg-white/10"
            >
              Certs
            </button>
            <button
              onClick={() => {
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                setIsMenuOpen(false);
              }}
              className="rounded-full px-4 py-2 text-left text-slate-100 transition hover:bg-white/10"
            >
              Projects
            </button>
          </nav>
          <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4 text-slate-100">
            <a
              href="https://github.com/Lawrecesss"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 transition hover:bg-white/10"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/lin-htet-shein"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 transition hover:bg-white/10"
            >
              <LinkedinIcon size={18} />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
