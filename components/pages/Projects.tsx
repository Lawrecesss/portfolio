import SpotlightCard from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";
import ShineBorder from "@/components/magicui/shine-border";
import Image from "next/image";

const cards = [
  {
    title: "RUN",
    miniTitle: "Cross-platform Mobile App",
    description:
      "A mobile running app to track your runs and stay motivated! Run with your own group and compete with others.",
    imageUrl: "/images/run.png",
    techIconUrl: [
      "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    ],
    status: "In Progress ⚙️",
    projectUrl: "https://github.com/Mess925/RUN",
  },
  {
    title: "MiniRT",
    miniTitle: "Mini ray-tracing engine implemented in C",
    description:
      "Built to render simple 3D scenes using ray tracing principles and fundamental concepts of computer graphics — including rays, lighting, reflection, and shading — while focusing on mathematical precision and clean architecture.",
    imageUrl: "/images/minirt.png",
    techIconUrl: [
      "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    ],
    status: "Completed 📦",
    projectUrl: "https://github.com/Mess925/MiniRT",
  },
  {
    title: "Minishell",
    miniTitle: "A Tiny UNIX Shell implemented in C",
    description:
      "A shell implemented in C, designed to replicate the basic behavior of bash. It handles commands, redirections, pipes, environment variables, and signal handling, offering a fully functional interactive shell experience.",
    imageUrl: "",
    techIconUrl: [
      "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
      "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
    ],
    status: "Completed 📦",
    projectUrl: "https://github.com/thanthtetaung4/mini_shell",
  },
  {
    title: "TeleBird",
    miniTitle: "iOS Messaging Mobile App",
    description:
      "A real-time messaging app that breaks language barriers through instant message translation. Automatically translates messages into each user’s preferred language — seamlessly and naturally.",
    imageUrl: "/images/telebird.png",
    techIconUrl: [
      "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    ],
    status: "Completed 📦",
    projectUrl: "https://github.com/Lawrecesss/TeleBird",
  },
];

interface ProjectCardProps {
  title: string;
  miniTitle: string;
  description: string;
  imageUrl: string;
  techIconUrl: string[];
  status?: string;
  projectUrl?: string;
}

const TechIcons = ({ iconUrl }: { iconUrl: string[] }) => {
  return (
    <>
      {iconUrl.map((url, index) => (
        <div
          key={index}
          className="w-10 h-10 p-2 rounded-lg bg-neutral-900 border border-neutral-700 hover:border-purple-500/50 transition-colors duration-300 flex items-center justify-center"
        >
          <Image src={url} width={24} height={24} className="w-6 h-6" alt="tech icon" unoptimized />
        </div>
      ))}
    </>
  );
};

const ProjectCard = (props: ProjectCardProps) => {
  const handleViewProject = () => {
    if (props.projectUrl) {
      window.open(props.projectUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-10 p-6 h-full">
      <div className="flex-1 flex flex-col h-full">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-xl sm:text-4xl font-bold text-white">
            {props.title}
          </h2>
          {props.status && (
            <span className="text-xs sm:text-sm px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-300">
              {props.status}
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm sm:text-base mt-1">
          {props.miniTitle}
        </p>
        <div className="mt-5 flex-1">
          <p className="text-gray-300 md:text-lg leading-relaxed text-justify">
            {props.description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto pt-6">
          <div className="flex flex-row gap-2 items-center flex-wrap">
            {props.techIconUrl && <TechIcons iconUrl={props.techIconUrl} />}
          </div>
          {props.projectUrl && (
            <button 
              onClick={handleViewProject}
              className="rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 py-2 px-6 text-white text-sm font-medium shadow-lg"
            >
              <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                <p>View Project</p>
              </div>
            </button>
          )}
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center lg:w-[45%] w-full">
        {props.imageUrl !== "" ? (
          <div className="relative group w-full">
            <Image
              src={props.imageUrl}
              alt={props.title}
              width={500}
              height={304}
              className="w-full h-[250px] lg:h-[304px] object-cover rounded-xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ) : (
          <div className="w-full h-[250px] lg:h-[304px] rounded-xl bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
            <p className="text-gray-500 text-sm">No preview available</p>
          </div>
        )}
      </div>
    </div>
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
        <h2 className="text-3xl sm:text-5xl font-bold text-white text-center mt-20">
          Projects
        </h2>

        <div className="flex flex-col h-full py-[60px]">
          {cards.map((card, idx) => (
            <div key={idx} className="sticky top-[100px] mb-8">
              <ShineBorder
                className="w-full min-h-[600px] xl:min-h-0 rounded-3xl bg-black/50 backdrop-blur-sm md:shadow-xl p-8"
                color={["#A07CFE", "#7C9EFE", "#5EBBFF"]}
              >
                <ProjectCard {...card} />
              </ShineBorder>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
