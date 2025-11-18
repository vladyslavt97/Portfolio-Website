import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
import ImageWithSpinner from "./dronestory/ImageWithSpinner";

export default function Resume() {
    return (
        <section
            className="mx-auto flex max-w-4xl flex-col items-center px-4 py-16"
            id="resume"
        >
            <p className="text-sm uppercase tracking-[0.5em] text-teal-500">
                Resume
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                Snapshot of my experience
            </h2>
            <p className="mt-3 text-center text-base text-gray-600 dark:text-gray-300">
                Download the latest CV or take a peek at the preview below.
            </p>
            <motion.a
                href="/CV_Vladyslav_Tsurkanenko.pdf"
                download
                whileHover={{ scale: 1.05 }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-lg shadow-cyan-500/30"
            >
                <HiDownload />
                Download PDF
            </motion.a>
            <div className="mt-10 w-full overflow-hidden rounded-[32px] border border-white/20 bg-white/80 p-4 shadow-2xl shadow-black/10 backdrop-blur dark:bg-gray-900/70">
                <ImageWithSpinner
                    src="/resume.jpg"
                    alt="Resume preview"
                    width={1200}
                    height={1600}
                    className="h-full w-full rounded-[24px] object-cover"
                    spinnerLabel="Loading résumé"
                />
            </div>
        </section>
    );
}
