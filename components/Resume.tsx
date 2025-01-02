import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiDownload } from "react-icons/hi";
export default function Resume() {
    return (
        <div className="flex justify-center flex-col items-center max-w-[700px] mx-auto">
            <hr className="h-1 bg-gradient-to-tr from-yellow-500 to-lime-400 w-[100vw] mt-20" />
            <h2
                className="text-center mt-20 text-3xl text-teal-500"
                id="resume"
            >
                Resume
            </h2>
            <motion.div
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.1 }}
                className="flex justify-center flex-col my-2"
            >
                <a
                    href="/CV_Vladyslav_Tsurkanenko.pdf"
                    download
                    className="w-60 mx-auto mt-5 bg-teal-500 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded text-center drop-shadow-2xl flex flex-row justify-center"
                >
                    Download
                    <HiDownload className="text-xl mx-2" />
                </a>
            </motion.div>
            <Image
                src="/resume.jpg"
                alt="resume"
                width={1000}
                height={1000}
                className="drop-shadow-2xl my-10 p-20 lg:p-50 hover:p-0 transition-all duration-300 ease-in-out dark:bg-white cursor-pointer"
            />
        </div>
    );
}
