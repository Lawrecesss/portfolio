import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const cards = [
  {
    title: "VidA",
    miniTitle: "AI-Powered Multimodal Video Analysis",
    description:
      "An advanced video intelligence platform that transforms how users interact with long-form video content.",
    stack: ["Next.js", "TypeScript", "OpenAI"],
    projectUrl: "https://github.com/Lawrecesss/VidA",
    gradient: "from-violet-500/40 via-transparent to-blue-500/25",
    accent: "text-violet-400",
  },
  {
    title: "ThirdEye",
    miniTitle: "AI Information Integrity Platform",
    description:
      "Real-time verification system using the ReAct framework to automate factual cross-referencing and combat misinformation.",
    stack: ["React", "Node.js", "AI"],
    projectUrl: "https://github.com/Th1rd3yE",
    gradient: "from-orange-500/35 via-transparent to-red-500/25",
    accent: "text-orange-400",
  },
  {
    title: "Knoverse",
    miniTitle: "Secure Enterprise RAG Chatbot",
    description:
      "Specialized Retrieval-Augmented Generation chatbot and centralized knowledge hub for enterprises.",
    stack: ["RAG", "Next.js", "MongoDB"],
    projectUrl: "https://github.com/thanthtetaung4/Knoverse",
    gradient: "from-emerald-500/35 via-transparent to-teal-500/25",
    accent: "text-emerald-400",
  },
  {
    title: "Inception",
    miniTitle: "Custom HTTP Server in C",
    description:
      "A custom HTTP/HTTPS server in C designed to handle web requests with a focus on performance and security.",
    stack: ["C", "Systems", "Security"],
    projectUrl: "https://github.com/thanthtetaung4/inception",
    gradient: "from-blue-500/35 via-transparent to-cyan-500/25",
    accent: "text-blue-400",
  },
  {
    title: "Minishell",
    miniTitle: "A Tiny UNIX Shell in C",
    description:
      "A shell implementing bash behavior — commands, redirections, pipes, environment variables, and signal handling.",
    stack: ["C", "Unix", "Shell"],
    projectUrl: "https://github.com/thanthtetaung4/mini_shell",
    gradient: "from-amber-500/35 via-transparent to-yellow-500/25",
    accent: "text-amber-400",
  },
  {
    title: "TeleBird",
    miniTitle: "iOS Real-Time Messaging App",
    description:
      "A messaging app that breaks language barriers through instant translation into each user's preferred language.",
    stack: ["Swift", "iOS", "Realtime"],
    projectUrl: "https://github.com/Lawrecesss/TeleBird",
    gradient: "from-pink-500/35 via-transparent to-rose-500/25",
    accent: "text-pink-400",
  },
];

interface ProjectCardProps {
  title: string;
  miniTitle: string;
  description: string;
  stack: string[];
  projectUrl?: string;
  gradient: string;
  accent: string;
  index: number;
}

const ProjectCard = ({
  title,
  miniTitle,
  description,
  stack,
  projectUrl,
  gradient,
  accent,
  index,
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`rounded-2xl p-[1px] bg-gradient-to-br ${gradient}`}
    >
      <article className="flex h-full flex-col rounded-[15px] bg-[#0d0d1a] p-5">
        <div className="mb-auto space-y-3">
          <p className={`text-[10px] uppercase tracking-[0.3em] ${accent}`}>{miniTitle}</p>
          <h3 className="text-lg font-semibold text-white sm:text-xl">{title}</h3>
          <p className="hidden text-sm leading-6 text-slate-400 sm:block">{description}</p>
        </div>

        <div className="mt-5 space-y-4">
          <div className="flex flex-wrap gap-1.5">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>

          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.04] py-2.5 text-xs font-medium text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white"
            >
              <ExternalLink size={13} />
              View Project
            </a>
          )}
        </div>
      </article>
    </motion.div>
  );
};

const Projects = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.section
      id="projects"
      className={`relative py-24 ${isVisible ? "hidden" : "block"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="mx-auto max-w-4xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-violet-400">Selected Work</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Projects</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-slate-400">
            AI tooling, systems engineering, and product-focused work.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, idx) => (
            <ProjectCard key={idx} {...card} index={idx} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
