import React from "react";
import Image from "next/image";
import codewars from "../../public/codewars.png";
import { motion } from "framer-motion";
import Ticker from "../Ticker";

export default function Skills() {
    return (
        <>
            <div id="skills">
                <motion.div
                    initial={{
                        opacity: 0,
                        rotate: 15,
                        y: -50,
                    }}
                    whileInView={{
                        opacity: 1,
                        rotate: 0,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="mt-32 text-3xl py-1 text-center text-teal-500"
                    >
                    Skills:
                </motion.div>
                <Ticker/>

                {/* <div
                    className="flex flex-row justify-center bg-transparent flex-wrap mx-3"
                    id="ticker"
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                </div> */}

                <div className="flex flex-row justify-center items-center gap-4 py-9">
                    <h4 className="text-black font-medium">
                        My page on Codewars:{" "}
                    </h4>
                    <motion.a
                        animate={{
                            scale: [1, 1.1, 1.1, 1, 1],
                            rotate: [0, 0, 70, 70, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        whileHover={{ scale: 1.2 }}
                        whileInView={{
                            scale: [1, 1.1, 1.1, 1, 1],
                            rotate: [0, 0, 70, 70, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                        href="https://www.codewars.com/users/vladyslavt97"
                    >
                        <Image
                            id="img13"
                            src={codewars}
                            alt="some"
                            width={30}
                            height={60}
                        />
                    </motion.a>
                </div>
            </div>
        </>
    );
}
