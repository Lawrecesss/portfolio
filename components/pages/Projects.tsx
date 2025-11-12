import ScrollStack, { ScrollStackItem } from "@/components/ui/ScrollStack";
import { motion } from "framer-motion";

const cards = [
  {
    title: "RUN",
    miniTitle: "Cross-platform Mobile App",
    description:
      "A mobile running app to track your runs and stay motivated! Run with your own group and compete with others.",
    imageUrl: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    techIconUrl: [
      "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
      "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg",
    ],
    status: "In Progress ⚙️",
  },
  {
    title: "MiniRT",
    miniTitle: "Mini ray-tracing engine implemented in C",
    description:
      "Built to render simple 3D scenes using ray tracing principles and fundamental concepts of computer graphics — including rays, lighting, reflection, and shading — while focusing on mathematical precision and clean architecture.",
    imageUrl: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    techIconUrl: [
      "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
    ],
    status: "Completed 📦",
  },
  {
    title: "Minishell",
    miniTitle: "A Tiny UNIX Shell implemented in C",
    description:
      "minishell is a minimal shell implemented in C, designed to replicate the basic behavior of bash. It handles commands, redirections, pipes, environment variables, and signal handling, offering a fully functional interactive shell experience.",
    imageUrl: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    techIconUrl: [
      "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg",
      "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
    ],
    status: "Completed 📦",
  },
  {
    title: "TeleBird",
    miniTitle: "iOS Messaging Mobile App",
    description:
      "A real-time messaging app that breaks language barriers through instant message translation. Automatically translates messages into each user’s preferred language — seamlessly and naturally.",
    imageUrl: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
    techIconUrl: [
      "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    ],
    status: "Completed 📦",
  },
];

interface ProjectCardProps {
  title: string;
  miniTitle: string;
  description: string;
  imageUrl: string;
  techIconUrl: string[];
  status?: string;
}

const TechIcons = ({ iconUrl }: { iconUrl: string[] }) => {
  return (
    <>
      {iconUrl.map((url, index) => (
        <div
          key={index}
          className="w-10 h-10 mt-5 p-2 rounded-lg border border-neutral-700 flex items-center justify-center"
        >
          <img src={url} className="w-6 h-6" />
        </div>
      ))}
    </>
  );
};

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="flex flex-row justify-center gap-10">
      <div>
        <h2 className="text-4xl font-bold text-white">{props.title}</h2>
        <p className="text-muted text-base mt-1">{props.miniTitle}</p>
        <div className="mt-5 w-[600px] h-[150px]">
          <p className="text-white text-lg text-justify">{props.description}</p>
          {/* <p className="text-white text-lg mt-5">status : {props.status}</p> */}
        </div>
        <div className="flex flex-row gap-2 mt-4 items-center">
          <TechIcons iconUrl={props.techIconUrl} />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={props.imageUrl}
          className="w-full h-[304px] rounded-[40px] box-border"
        />
      </div>
    </div>
  );
};

const Projects = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      className={`relative ${isVisible ? "hidden" : "block"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="bg-black">
        <h2 className="text-5xl font-bold text-white mb-20 text-center">
          Projects
        </h2>
        <div className="container mx-auto">
          <ScrollStack itemStackDistance={0} stackPosition="20%">
            {cards.map((card, index) => (
              <ScrollStackItem key={index} itemClassName="">
                <ProjectCard {...card} />
              </ScrollStackItem>
            ))}
          </ScrollStack>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
