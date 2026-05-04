import { motion } from "framer-motion";

const cards = [
  {
    title: "VidA",
    miniTitle: "AI-Powered Multimodal Video Analysis Tool",
    description:
      "An advanced video intelligence platform designed to transform how users interact with long-form video content.",
    stack: ["Next.js", "TypeScript", "OpenAI"],
    projectUrl: "https://github.com/Lawrecesss/VidA",
  },
  {
    title: "ThirdEye",
    miniTitle: "AI-Powered Information Integrity & Fact-Checking Platform",
    description:
      "A real-time verification system built using the ReAct framework to automate factual cross-referencing and combat misinformation during high-pressure development sprints.",
    stack: ["React", "Node.js", "AI"],
    projectUrl: "https://github.com/Th1rd3yE",
  },
  {
    title: "Knoverse",
    miniTitle: "Secure Enterprise RAG Chatbot",
    description:
      "Specialized Retrieval-Augmented Generation (RAG) chatbot and centralized knowledge hub.",
    stack: ["RAG", "Next.js", "MongoDB"],
    projectUrl: "https://github.com/thanthtetaung4/Knoverse",
  },
  {
    title: "Inception",
    miniTitle: "Custom HTTP/HTTPS Server",
    description:
      "A custom HTTP/HTTPS server implemented in C, designed to handle web requests and responses with a focus on performance and security.",
    stack: ["C", "Systems", "Security"],
    projectUrl: "https://github.com/thanthtetaung4/inception",
  },
  {
    title: "Minishell",
    miniTitle: "A Tiny UNIX Shell implemented in C",
    description:
      "A shell implemented in C, designed to replicate the basic behavior of bash. It handles commands, redirections, pipes, environment variables, and signal handling, offering a fully functional interactive shell experience.",
    stack: ["C", "Unix", "Shell"],
    projectUrl: "https://github.com/thanthtetaung4/mini_shell",
  },
  {
    title: "TeleBird",
    miniTitle: "iOS Messaging Mobile App",
    description:
      "A real-time messaging app that breaks language barriers through instant message translation. Automatically translates messages into each user’s preferred language — seamlessly and naturally.",
    stack: ["Swift", "iOS", "Realtime"],
    projectUrl: "https://github.com/Lawrecesss/TeleBird",
  },
];

interface ProjectCardProps {
  title: string;
  miniTitle: string;
  description: string;
  stack: string[];
  projectUrl?: string;
}

const ProjectCard = ({ title, miniTitle, description, stack, projectUrl }: ProjectCardProps) => {
  const handleViewProject = () => {
    if (projectUrl) {
      window.open(projectUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative flex min-h-[280px] h-full overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 p-px shadow-[0_30px_80px_rgba(79,70,229,0.18)] transition-transform duration-300 hover:shadow-[0_40px_120px_rgba(79,70,229,0.26)] sm:min-h-[420px]"
    >
      <div className="relative flex h-full flex-1 flex-col rounded-[1.85rem] border border-white/10 bg-[#07070f]/95 backdrop-blur-xl p-4 sm:p-8">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-500 via-cyan-400 to-fuchsia-500" />

        <div className="relative flex h-full flex-col justify-between gap-4 sm:gap-6">
          <span className="self-start rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] uppercase tracking-[0.24em] text-slate-300 shadow-[0_0_14px_rgba(255,255,255,0.05)] sm:px-4 sm:py-1.5 sm:text-xs">
            Featured
          </span>

          <div>
            <h3 className="text-xl font-semibold text-white sm:text-3xl">{title}</h3>
            <p className="mt-2 text-xs text-slate-300 sm:text-base lg:max-w-xl">{miniTitle}</p>
          </div>

          <p className="hidden text-slate-300 text-sm leading-7 sm:block sm:text-base sm:leading-8">{description}</p>

          <div className="flex flex-wrap gap-1.5 pt-2 sm:gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-slate-200 sm:px-3 sm:py-1.5 sm:text-xs"
              >
                {item}
              </span>
            ))}
          </div>

          {projectUrl && (
            <button
              onClick={handleViewProject}
              className="mt-3 inline-flex items-center gap-1.5 rounded-2xl border border-white/15 bg-white/10 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-white/20 hover:border-white/25 backdrop-blur-md sm:mt-6 sm:px-6 sm:text-sm sm:gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View Project
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Projects = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      id="projects"
      className={`relative ${isVisible ? "hidden" : "block"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="bg-black">
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mt-20">Projects</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-400 sm:text-base">
          Selected work showcasing modern product experiences, real-time systems, AI tooling, and custom platform engineering.
        </p>

        <div className="mx-auto grid w-full max-w-[1500px] gap-4 py-12 auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, idx) => (
            <ProjectCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
