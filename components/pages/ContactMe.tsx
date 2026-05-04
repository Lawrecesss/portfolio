import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactMe = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.section
      className={`relative ${isVisible ? "hidden" : "block"} py-16 sm:py-20`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-400 sm:text-base">
          Reach out for collaborations, opportunities, or a quick chat about product engineering and AI systems.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <a
          href="https://discord.com/users/lxwrxxce"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel flex flex-col items-center gap-3 rounded-[1.75rem] p-5 text-center transition hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(15,23,42,0.35)]"
        >
          <FaDiscord className="text-indigo-300" size={34} />
          <span className="text-sm text-slate-200">Discord</span>
        </a>
        <a
          href="https://linkedin.com/in/lin-htet-shein"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel flex flex-col items-center gap-3 rounded-[1.75rem] p-5 text-center transition hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(15,23,42,0.35)]"
        >
          <FaLinkedin className="text-cyan-300" size={34} />
          <span className="text-sm text-slate-200">LinkedIn</span>
        </a>
        <a
          href="mailto:lhshein14@gmail.com"
          className="glass-panel flex flex-col items-center gap-3 rounded-[1.75rem] p-5 text-center transition hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(15,23,42,0.35)]"
        >
          <MdEmail className="text-rose-300" size={34} />
          <span className="text-sm text-slate-200">Email</span>
        </a>
        <a
          href="https://wa.me/+6587332977"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-panel flex flex-col items-center gap-3 rounded-[1.75rem] p-5 text-center transition hover:-translate-y-1 hover:shadow-[0_20px_80px_rgba(15,23,42,0.35)]"
        >
          <IoLogoWhatsapp className="text-emerald-300" size={34} />
          <span className="text-sm text-slate-200">WhatsApp</span>
        </a>
      </div>
    </motion.section>
  );
};

export default ContactMe;
