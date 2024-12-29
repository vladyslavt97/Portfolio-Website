import Image from "next/image";
import { motion } from "framer-motion";
import projects from "../../projects.json";
import { useState } from "react";
import GitHubStats from "../GitHubStats";
import { CardContainer, CardBody, CardItem } from "@/components/CardContainer";
import Link from "next/link";

export default function Projects() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
            <h2
                className="mt-20 py-4 text-teal-500 text-3xl pt-8 pb-2 text-center"
                id="projects"
            >
                My Projects
            </h2>
            <GitHubStats />
            {/* <div className="lg:grid-cols-3 lg:grid gap-10 md:flex-wrap xl:mx-40 lg:mx-10">
                {projects.map((project, index) => (
                    <motion.div
                        initial={{
                            rotateZ: 2,
                            opacity: 0.5,
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{
                            rotateZ: 0,
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.1 }}
                        key={index}
                        className={`${
                            index > 2 && !showMore
                                ? "hidden"
                                : "text-center shadow-2xl my-10 p-5 mx-10 bg-white/30 rounded-lg md:mx-40 lg:mx-10 basis-1/3 flex-1 flex items-center justify-center flex-col"
                        }`}
                    >
                        <h4 className="text-gray-800 py-1 text-xl font-bold">
                            {project.title}
                        </h4>
                        <p className="text-black">{project.description}</p>
                        <Image
                            src={project.image}
                            alt={project.title}
                            className="m-5 rounded-lg w-[80%]"
                            priority={true}
                            width={500}
                            height={500}
                        />
                        <div className="flex flex-row">
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                            >
                                Code
                            </a>
                            {project.website !== "" && (
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                                >
                                    Website
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div> */}

            <div className="rounded-2xl">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`${
                            index > 2 && !showMore
                                ? "hidden"
                                : "flex items-center justify-center flex-col mx-3 mx:m-0"
                        }`}
                    >
                        <CardContainer className="inter-var bg-white">
                            <CardBody className="bg-gradient-to-br from-green-100 via-green-200 to-green-300 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                    className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                    {project.title}
                                </CardItem>
                                <CardItem
                                    as="p"
                                    translateZ="60"
                                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                    {project.description}
                                </CardItem>
                                <CardItem
                                    translateZ="100"
                                    className="w-full mt-4"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        className="m-5 rounded-lg w-[80%]"
                                        priority={true}
                                        width={500}
                                        height={500}
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                    <a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                                    >
                                        Code
                                    </a>
                                    {project.website !== "" && (
                                        <a
                                            href={project.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md m-2"
                                        >
                                            Website
                                        </a>
                                    )}
                                </div>
                            </CardBody>
                        </CardContainer>
                    </motion.div>
                ))}
            </div>
            <div className="flex justify-center items-center w-full">
                <button
                    onClick={(e) => setShowMore(!showMore)}
                    className="bg-green-500 px-2 rounded-xl drop-shadow-lg hover:bg-green-300"
                >
                    {showMore ? "Show Less" : "Show more"}
                </button>
            </div>
        </div>
    );
}
