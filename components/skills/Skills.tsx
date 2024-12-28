import React from "react";
import Image from "next/image";
import codewars from "../../public/codewars.png";
import { motion } from "framer-motion";
import Ticker from "../Ticker";

export default function Skills() {
    return (
        <>
            <div id="skills">
                {/* <motion.div
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
                </motion.div> */}
                {/* <Ticker/> */}


            </div>
        </>
    );
}
