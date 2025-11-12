import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactMe = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.div
      className={`relative ${isVisible ? "hidden" : "block"}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.8, duration: 1 }}
    >
      <div className="text-3xl sm:text-5xl font-bold text-white text-center mt-10">
        Contact Me
      </div>
      <div className="flex flex-row gap-5 sm:gap-10 justify-center items-center mt-10 text-white">
        <FaDiscord color="white" size={32} />
        <FaLinkedin color="white" size={32} />
        <MdEmail color="white" size={32} />
        <IoLogoWhatsapp color="white" size={32} />
      </div>
    </motion.div>
  );
};

export default ContactMe;
