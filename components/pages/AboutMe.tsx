import { motion } from "framer-motion";

const stats = [
  { label: "Focus", value: "AI tooling, product systems, dev workflows" },
  { label: "Approach", value: "Readable code, production reliability, user impact" },
  { label: "Experience", value: "Full-stack web apps, cloud services, AI integration" },
  { label: "Stack", value: "Next.js, TypeScript, Node.js, React, Python" },
];

const AboutMe = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.section
      id="about-me"
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
          <p className="text-xs uppercase tracking-[0.35em] text-violet-400">About</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Building with clarity & scale
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 sm:p-8"
        >
          <p className="text-sm leading-8 text-slate-300 sm:text-base">
            Full-stack developer driven by the challenge of building scalable, intelligent systems.
            I thrive in environments that require deep technical focus, AI-edge solutions, and
            end-to-end architecture. My focus is on solid architecture, readable code, and
            user-first product quality.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="gradient-border-card"
            >
              <div className="inner-card p-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-violet-400">{stat.label}</p>
                <p className="mt-2 text-sm text-slate-300 leading-6">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
