import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import StripePaymentStart from "./StripePaymentStart";
import TextEffect from "./effect/TextEffect";
import { MyPicBorder } from "./effect/MyPicBorder";
import { BackgroundGradientAnimation } from "./effect/BackgroundGradientAnimation";

const heroCTA = [
    { label: "View Projects", href: "#projects" },
    { label: "Download Résumé", href: "#resume" },
];

export default function MyInfo() {
    const [text] = useTypewriter({
        words: ["Full Stack Web Developer"],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <section className="relative isolate overflow-hidden px-4 py-16 sm:px-8">
            <div className="pointer-events-none absolute inset-0 blur-3xl">
                <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-cyan-200/40 dark:bg-cyan-500/20" />
                <div className="absolute bottom-0 right-5 h-72 w-72 rounded-full bg-indigo-200/50 dark:bg-indigo-500/20" />
            </div>
            <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 rounded-[32px] bg-white/60 p-6 text-center shadow-2xl shadow-black/5 backdrop-blur dark:bg-gray-900/70">
                <div className="flex flex-col items-center gap-2 text-3xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    <TextEffect target="Vladyslav" finalColor="green-500" />
                    <TextEffect target="Tsurkanenko" finalColor="gray-500" />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-base text-gray-600 dark:text-gray-200 sm:text-xl"
                >
                    {text}
                    <Cursor cursorColor="#F7AB0A" />
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    className="text-base leading-7 text-gray-700 dark:text-gray-100 sm:text-lg"
                >
                    I am an IAM Developer and Technical Consultant at SITS, with
                    a background in Web Development from Spiced Academy in
                    Berlin. I am eager to expand my expertise in{" "}
                    <b className="text-blue-500">TypeScript</b>,{" "}
                    <b className="text-yellow-500">JavaScript</b>,{" "}
                    <b className="text-red-500">Java</b>, and{" "}
                    <b className="text-blue-700">Sail</b>
                    <b className="text-purple-700">Point</b> while deepening my
                    knowledge of both Front-End and Back-End development. With a
                    strong foundation in programming, banking, and finance, I
                    bring valuable skills such as teamwork, initiative, and
                    analytical thinking to the table. My motivation and
                    adaptability enable me to quickly contribute to projects and
                    thrive in new environments. I am passionate about continuous
                    learning and am excited to apply my skills to drive success
                    in your organization.
                </motion.p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {heroCTA.map((cta) => (
                        <a
                            key={cta.label}
                            href={cta.href}
                            className="rounded-full border border-teal-500/30 bg-gradient-to-r from-emerald-400 to-cyan-500 px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-cyan-500/30 transition hover:scale-105 dark:from-emerald-500 dark:to-cyan-600"
                        >
                            {cta.label}
                        </a>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex w-full flex-col items-center gap-6 rounded-3xl border border-white/40 bg-gradient-to-br from-blue-400 via-blue-600 to-purple-600 p-6 text-white shadow-2xl shadow-blue-900/40"
                >
                    <BackgroundGradientAnimation className="flex w-full flex-col items-center gap-5 text-center">
                        <h3 className="text-base font-semibold uppercase tracking-[0.4em] text-white/80">
                            Support my work
                        </h3>
                        <p className="text-sm text-white/80">
                            Enjoy the portfolio? Fuel the next experiment with a
                            Stripe donation.
                        </p>
                        <StripePaymentStart />
                    </BackgroundGradientAnimation>
                </motion.div>

                <motion.div
                    className="relative mx-auto mt-4 h-56 w-56 overflow-hidden rounded-full border-4 border-white/70 shadow-2xl shadow-cyan-500/25"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <MyPicBorder />
                </motion.div>
            </div>
        </section>
    );
}
