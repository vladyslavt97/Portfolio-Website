import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const contactCards = [
    {
        label: "Email",
        value: "vladyslavt97@gmail.com",
    },
    {
        label: "Phone",
        value: "+49 173 570 9062",
    },
    {
        label: "WhatsApp",
        value: "+38 095 017 4826",
    },
];

export default function Contacts() {
    return (
        <section
            className="px-4 py-16 text-center sm:px-6 lg:px-8"
            id="contacts"
        >
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-semibold text-teal-500"
            >
                Get in touch
            </motion.h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                Drop a message or connect on any of the platforms below.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {contactCards.map((card) => (
                    <div
                        key={card.label}
                        className="rounded-2xl border border-teal-500/20 bg-white/80 p-5 text-center shadow-lg shadow-teal-500/10 dark:bg-gray-900/70"
                    >
                        <p className="text-xs uppercase tracking-[0.4em] text-gray-500">
                            {card.label}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                            {card.value}
                        </p>
                    </div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-10"
            >
                <Link
                    href="#sendemail"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-2px]"
                >
                    Send email 📨
                </Link>
            </motion.div>
            <div className="mt-10 flex items-center justify-center gap-8 text-4xl text-gray-600">
                <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    href="https://github.com/vladyslavt97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:scale-110"
                >
                    <AiFillGithub className="dark:fill-white" />
                </motion.a>
                <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    href="https://www.linkedin.com/in/vladyslav-tsurkanenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 transition hover:scale-110 dark:text-blue-400"
                >
                    <AiFillLinkedin className="dark:fill-white" />
                </motion.a>
            </div>
        </section>
    );
}
