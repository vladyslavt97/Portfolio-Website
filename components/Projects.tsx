import Image from "next/image";
import { motion } from "framer-motion";
import projects from "../projects.json";
import { useState } from "react";
import {
    CardContainer,
    CardBody,
    CardItem,
} from "@/components/effect/CardContainer";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import GitHubStats from "./github/GitHubStats";

const accentPalette = [
    "from-amber-100 via-amber-200 to-orange-100",
    "from-cyan-100 via-sky-100 to-indigo-100",
    "from-rose-100 via-pink-100 to-amber-100",
];

export default function Projects() {
    const [showMore, setShowMore] = useState(false);

    return (
        <section className="px-4 py-16 sm:px-6 lg:px-8" id="projects">
            <div className="mx-auto max-w-5xl text-center">
                <h2 className="text-3xl font-semibold text-teal-500">
                    My Projects
                </h2>
                <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                    A curated list of experiments, freelance adventures, and
                    hackathon builds.
                </p>
            </div>
            <div className="mt-10">
                <GitHubStats />
            </div>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:gap-6">
                {projects.map((project, index) => {
                    const accent = accentPalette[index % accentPalette.length];
                    const hidden = index > 2 && !showMore;
                    return (
                        <motion.div
                            key={project.title}
                            className={hidden ? "hidden" : "flex justify-center"}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.05 }}
                        >
                            <CardContainer className="inter-var w-full max-w-[28rem] aspect-square">
                                <CardBody className="relative flex h-full w-full flex-col overflow-hidden rounded-3xl border border-black/5 bg-transparent p-0 shadow-2xl shadow-black/10 dark:border-white/10">
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${accent}`}
                                    />
                                    <div className="relative flex h-full flex-col gap-4 bg-white/85 p-6 backdrop-blur-sm dark:bg-gray-900/80">
                                        <CardItem
                                            translateZ="50"
                                            className="text-2xl font-semibold text-gray-900 dark:text-white"
                                        >
                                            {project.title}
                                        </CardItem>
                                        <CardItem
                                            as="p"
                                            translateZ="50"
                                            className="text-sm text-gray-700 dark:text-gray-200"
                                        >
                                            {project.description}
                                        </CardItem>
                                        <CardItem translateZ="80" className="flex-1">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                className="h-full w-full rounded-2xl border border-black/5 object-cover shadow-lg shadow-black/20 dark:border-white/10"
                                                priority={index < 2}
                                                width={800}
                                                height={800}
                                            />
                                        </CardItem>
                                        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
                                            <a
                                                href={project.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 rounded-full border border-gray-900/10 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-md transition hover:translate-y-[-2px] dark:bg-gray-800 dark:text-white"
                                            >
                                                <FiGithub />
                                                Code
                                            </a>
                                            {project.website !== "" && (
                                                <a
                                                    href={project.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:translate-y-[-2px]"
                                                >
                                                    <FiExternalLink />
                                                    Live site
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </motion.div>
                    );
                })}
            </div>
            <div className="mt-10 flex justify-center">
                <button
                    onClick={() => setShowMore((prev) => !prev)}
                    className="rounded-full border border-teal-500/40 bg-white/80 px-6 py-2 text-sm font-semibold uppercase tracking-[0.4em] text-teal-600 shadow-lg shadow-teal-500/20 transition hover:scale-105 dark:bg-gray-900/60 dark:text-teal-300"
                >
                    {showMore ? "Show Less" : "Show More"}
                </button>
            </div>
        </section>
    );
}
