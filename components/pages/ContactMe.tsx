import { motion } from "framer-motion";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";

const contactMethods = [
  {
    label: "Discord",
    href: "https://discord.com/users/lxwrxxce",
    icon: <FaDiscord size={22} />,
    description: "Quick conversation",
    gradient: "from-indigo-500/40 via-transparent to-purple-500/25",
    iconColor: "text-indigo-400",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/lin-htet-shein",
    icon: <FaLinkedin size={22} />,
    description: "Professional connect",
    gradient: "from-blue-500/40 via-transparent to-cyan-500/25",
    iconColor: "text-blue-400",
  },
  {
    label: "Email",
    href: "mailto:lhshein14@gmail.com",
    icon: <MdEmail size={22} />,
    description: "Collaboration & queries",
    gradient: "from-rose-500/35 via-transparent to-pink-500/25",
    iconColor: "text-rose-400",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/+6587332977",
    icon: <IoLogoWhatsapp size={22} />,
    description: "Fast replies",
    gradient: "from-emerald-500/35 via-transparent to-teal-500/25",
    iconColor: "text-emerald-400",
  },
];

const ContactMe = ({ isVisible }: { isVisible: boolean }) => {
  return (
    <motion.section
      id="contact"
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
          <p className="text-xs uppercase tracking-[0.35em] text-violet-400">Contact</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Let&apos;s Connect</h2>
          <p className="mx-auto mt-4 max-w-sm text-sm text-slate-400">
            Open for new projects, consulting, and idea sprints.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === "Email" ? undefined : "_blank"}
              rel={method.label === "Email" ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className={`rounded-2xl p-[1px] bg-gradient-to-br ${method.gradient} transition-transform hover:-translate-y-1`}
            >
              <div className="flex h-full flex-col items-start gap-3 rounded-[15px] bg-[#0d0d1a] p-5">
                <span className={method.iconColor}>{method.icon}</span>
                <div>
                  <p className="text-sm font-semibold text-white">{method.label}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{method.description}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
