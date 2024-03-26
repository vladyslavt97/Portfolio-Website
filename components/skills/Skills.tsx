import React from "react";
import Image from "next/image";
import codewars from "../../public/codewars.png";
import { motion } from "framer-motion";

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
                <p className="text-sm py-2 leading-8 text-gray-800 text-center dark:text-white mx-3">
                    Here is the list of the technologies I have implemented
                    projects with:
                </p>

                <div
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
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.1,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.5,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.7,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 1.9,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 2.1,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 2.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 2.5,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 2.7,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 2.9,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg"
                            alt="some"
                            width={50}
                            height={50}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 3.1,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg"
                            alt="some"
                            width={60}
                            height={80}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 3.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg"
                            alt="some"
                            width={80}
                            height={80}
                        />
                    </motion.div>
                    &nbsp;&nbsp;
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 3.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/framer.png"
                            alt="some"
                            width={50}
                            height={60}
                        />
                    </motion.div>
                    &nbsp;&nbsp;&nbsp;
                    {/* new */}
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 3.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
                            alt="some"
                            width={60}
                            height={100}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 3.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
                            alt="some"
                            width={60}
                            height={100}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 3.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="/zustand.png"
                            alt="some"
                            width={90}
                            height={100}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 3.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
                            alt="some"
                            width={60}
                            height={100}
                        />
                    </motion.div>
                    &nbsp;&nbsp;
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 3.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original-wordmark.svg"
                            alt="some"
                            width={65}
                            height={100}
                        />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        transition={{
                            duration: 3.3,
                        }}
                        whileInView={{
                            opacity: 1,
                        }}
                        whileHover={{ scale: 1.5 }}
                        viewport={{ once: true }}
                    >
                        <Image
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
                            alt="some"
                            width={60}
                            height={100}
                        />
                    </motion.div>
                    {/* &nbsp;&nbsp;
          <motion.div
            initial={{
                  opacity: 0,
              }}
              transition={{
                  duration: 3.3,
              }}
              whileInView={{
                  opacity: 1,
              }}
              whileHover={{ scale: 1.5 }}
              viewport={{once: true}}
            >
            <Image
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" alt="some" width={60} height={100}/>
          </motion.div> */}
                </div>

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
                            width={60}
                            height={60}
                        />
                    </motion.a>
                </div>
            </div>
        </>
    );
}
