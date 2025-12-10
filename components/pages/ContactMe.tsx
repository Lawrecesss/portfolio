import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactMe = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      className={`relative ${isVisible ? "hidden" : "block"} py-20`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <h2 className="text-4xl sm:text-6xl font-bold text-center mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Let&apos;s Connect
      </h2>
      <p className="text-center text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
        Feel free to reach out for collaborations, opportunities, or just a friendly chat!
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
        <a
          href="https://discord.com/users/lxwrxxce"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 hover:scale-105 group"
        >
          <FaDiscord className="text-indigo-400 group-hover:text-indigo-300 transition-colors" size={40} />
          <span className="text-sm text-gray-400 group-hover:text-gray-300">Discord</span>
        </a>
        <a
          href="https://linkedin.com/in/lin-htet-shein"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 group"
        >
          <FaLinkedin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={40} />
          <span className="text-sm text-gray-400 group-hover:text-gray-300">LinkedIn</span>
        </a>
        <a
          href="mailto:lhshein14@gmail.com"
          className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 hover:border-red-500/40 transition-all duration-300 hover:scale-105 group"
        >
          <MdEmail className="text-red-400 group-hover:text-red-300 transition-colors" size={40} />
          <span className="text-sm text-gray-400 group-hover:text-gray-300">Email</span>
        </a>
        <a
          href="https://wa.me/+6587332977"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-105 group"
        >
          <IoLogoWhatsapp className="text-green-400 group-hover:text-green-300 transition-colors" size={40} />
          <span className="text-sm text-gray-400 group-hover:text-gray-300">WhatsApp</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ContactMe;
