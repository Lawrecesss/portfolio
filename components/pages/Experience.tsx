"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Role = {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  current?: boolean;
  tags: string[];
  bullets?: string[];
};

// Newest first.
const roles: Role[] = [
  {
    title: "Full Stack Developer",
    company: "Venti Technologies",
    companyUrl: "https://ventitech.ai/",
    period: "Jul 2026 — Present",
    current: true,
    tags: ["Internship", "On-site"],
  },
];

const RoleCard = ({ role, index }: { role: Role; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.1 + index * 0.07 }}
    className="gradient-border-card"
  >
    <div className="inner-card p-5 sm:p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="text-[10px] uppercase tracking-[0.3em] text-violet-400">{role.period}</p>
        {role.current && (
          <span className="inline-flex items-center gap-1.5 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-violet-300">
            <span className="h-1 w-1 animate-pulse rounded-full bg-violet-400" />
            Current
          </span>
        )}
      </div>

      <h3 className="mt-3 bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-lg font-semibold text-transparent sm:text-xl">
        {role.title}
      </h3>

      {role.companyUrl ? (
        <a
          href={role.companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-white"
        >
          {role.company}
          <ExternalLink size={12} className="opacity-60" />
        </a>
      ) : (
        <p className="mt-1.5 text-sm text-slate-300">{role.company}</p>
      )}

      {role.bullets && role.bullets.length > 0 && (
        <ul className="mt-4 space-y-2">
          {role.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2.5 text-sm leading-7 text-slate-400">
              <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-violet-400/60" />
              {bullet}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {role.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Experience = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.section
      id="experience"
      className={`relative py-24 ${isVisible ? "hidden" : "block"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-violet-400">Career</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Experience</h2>
        </motion.div>

        <div className="grid gap-3">
          {roles.map((role, idx) => (
            <RoleCard key={`${role.company}-${role.title}`} role={role} index={idx} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
