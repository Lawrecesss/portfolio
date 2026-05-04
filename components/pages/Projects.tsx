"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ChevronRight } from "lucide-react";

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
    borderAccent: "border-violet-500/30",
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
    borderAccent: "border-orange-500/30",
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
    borderAccent: "border-emerald-500/30",
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
    borderAccent: "border-blue-500/30",
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
    borderAccent: "border-amber-500/30",
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
    borderAccent: "border-pink-500/30",
  },
];

type Card = (typeof cards)[0];

interface ModalState {
  card: Card;
  top: number;
  left: number;
  width: number;
  minHeight: number;
}

// Capture exact card coordinates — portal renders in <body> so
// position:fixed uses true viewport coords; rect values are already correct.
function getCardRect(rect: DOMRect): Omit<ModalState, "card"> {
  return {
    top: rect.top,
    left: rect.left,
    width: rect.width,
    minHeight: rect.height,
  };
}

const ProjectModal = ({ state, onClose }: { state: ModalState; onClose: () => void }) => {
  const { card, top, left, width, minHeight } = state;
  return (
    // Plain div — NOT motion.div — so framer-motion adds no transforms that
    // would shift the coordinate space of absolutely-positioned children.
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Backdrop — animated separately */}
      <motion.div
        className="pointer-events-auto absolute inset-0 bg-black/50 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        onClick={onClose}
      />

      {/* Modal — fixed at exact card viewport coords */}
      <motion.div
        className={`pointer-events-auto absolute rounded-2xl p-[1px] bg-gradient-to-br ${card.gradient} shadow-2xl`}
        style={{ top, left, width, transformOrigin: "top center" }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        <div className="rounded-[15px] bg-[#0d0d1a] p-5" style={{ minHeight }}>
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <p className={`text-[10px] uppercase tracking-[0.3em] ${card.accent}`}>
                {card.miniTitle}
              </p>
              <h3 className="mt-1.5 text-lg font-semibold text-white">{card.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 rounded-xl p-1.5 text-slate-500 transition-colors hover:bg-white/[0.08] hover:text-white"
            >
              <X size={14} />
            </button>
          </div>

          <p className="text-sm leading-7 text-slate-300">{card.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {card.stack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-2.5 py-1 text-[10px] uppercase tracking-wider text-slate-400"
              >
                {item}
              </span>
            ))}
          </div>

          {card.projectUrl && (
            <a
              href={card.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border ${card.borderAccent} bg-white/[0.04] py-2.5 text-sm font-medium text-slate-200 transition-all hover:bg-white/[0.08] hover:text-white`}
            >
              <ExternalLink size={13} />
              View on GitHub
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const ProjectCard = ({
  card,
  index,
  onOpen,
}: {
  card: Card;
  index: number;
  onOpen: (e: React.MouseEvent<HTMLDivElement>) => void;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    whileHover={{ y: -3, transition: { duration: 0.2 } }}
    className={`cursor-pointer rounded-2xl p-[1px] bg-gradient-to-br ${card.gradient}`}
    onClick={onOpen}
  >
    <article className="flex h-[200px] flex-col rounded-[15px] bg-[#0d0d1a] p-5 sm:h-[240px] lg:h-[260px]">
      <div className="flex-1 space-y-2 overflow-hidden">
        <p className={`text-[10px] uppercase tracking-[0.3em] ${card.accent}`}>{card.miniTitle}</p>
        <h3 className="text-base font-semibold text-white sm:text-lg">{card.title}</h3>
        <p className="line-clamp-2 text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
          {card.description}
        </p>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          {card.stack.slice(0, 2).map((item) => (
            <span
              key={item}
              className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-2 py-0.5 text-[9px] uppercase tracking-wider text-slate-400"
            >
              {item}
            </span>
          ))}
          {card.stack.length > 2 && (
            <span className="rounded-lg border border-white/[0.07] bg-white/[0.04] px-2 py-0.5 text-[9px] uppercase tracking-wider text-slate-500">
              +{card.stack.length - 2}
            </span>
          )}
        </div>
        <span className={`flex items-center gap-0.5 text-[10px] ${card.accent} opacity-70`}>
          Details <ChevronRight size={11} />
        </span>
      </div>
    </article>
  </motion.div>
);

const Projects = ({ isVisible }: { isVisible: boolean }) => {
  const [modal, setModal] = useState<ModalState | null>(null);
  // Portal root — set after mount so document.body is available (SSR-safe)
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  useEffect(() => { setPortalRoot(document.body); }, []);

  const handleOpen = (card: Card, e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setModal({ card, ...getCardRect(rect) });
  };

  return (
    <>
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
              <ProjectCard
                key={card.title}
                card={card}
                index={idx}
                onOpen={(e) => handleOpen(card, e)}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Render modal through a portal into document.body so position:fixed
          is not affected by will-change-transform on the layout wrapper */}
      {portalRoot && createPortal(
        <AnimatePresence>
          {modal && (
            <ProjectModal
              key="project-modal"
              state={modal}
              onClose={() => setModal(null)}
            />
          )}
        </AnimatePresence>,
        portalRoot
      )}
    </>
  );
};

export default Projects;
