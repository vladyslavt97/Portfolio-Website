import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Image from "next/image";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

export default function MyInfo() {
    const [text, count] = useTypewriter({
        words: ["Full Stack Web Developer"],
        loop: true,
        delaySpeed: 2000,
    });

    // State for the scrambled text
    const [scrambledText, setScrambledText] = useState("");

    // TextScramble class
    useEffect(() => {
        class TextScramble {
            el: HTMLElement | null;
            chars: string;
            frameRequest: number;
            frame: number;
            queue: any[];
            resolve: () => void;

            constructor(el: HTMLElement | null) {
                this.el = el;
                this.chars = "!<>-_\\/[]{}—=+*^?#________";
                this.frameRequest = 0;
                this.frame = 0;
                this.queue = [];
                this.resolve = () => {};
                this.update = this.update.bind(this);
            }

            setText(newText: any) {
                const oldText = this?.el?.innerText || "";
                const length = Math.max(oldText.length, newText.length);
                const promise = new Promise(
                    (resolve) => (this.resolve = resolve)
                );
                this.queue = [];
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || "";
                    const to = newText[i] || "";
                    const start = Math.floor(Math.random() * 40);
                    const end = start + Math.floor(Math.random() * 40);
                    this.queue.push({ from, to, start, end });
                }
                cancelAnimationFrame(this.frameRequest);
                this.frame = 0;
                this.update();
                return promise;
            }
            update() {
                let output = "";
                let complete = 0;
                for (let i = 0, n = this.queue.length; i < n; i++) {
                    let { from, to, start, end, char } = this.queue[i];
                    if (this.frame >= end) {
                        complete++;
                        output += to;
                    } else if (this.frame >= start) {
                        if (!char || Math.random() < 0.28) {
                            char = this.randomChar();
                            this.queue[i].char = char;
                        }
                        output += `<span class="dud">${char}</span>`;
                    } else {
                        output += from;
                    }
                }
                this.el.innerHTML = output;
                if (complete === this.queue.length) {
                    this.resolve();
                } else {
                    this.frameRequest = requestAnimationFrame(this.update);
                    this.frame++;
                }
            }
            randomChar() {
                return this.chars[
                    Math.floor(Math.random() * this.chars.length)
                ];
            }
        }

        const phrases = ["Vladyslav", "Tsurkanenko"];
        const el = document.querySelector(".text");
        const fx = new TextScramble(el);

        let counter = 0;
        const next = () => {
            fx.setText(phrases[counter]).then(() => {
                setTimeout(next, 2000);
            });
            counter = (counter + 1) % phrases.length;
        };

        next();

        return () => {
            cancelAnimationFrame(fx.frameRequest);
        };
    }, []);

    return (
        <div>
            <div className="p-5">
                <div className="container">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 1,
                        }}
                        viewport={{ once: true }}
                        className="text-4xl text-teal-600 font-medium text-center text"
                    ></motion.h2>
                </div>
                <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                    }}
                    viewport={{ once: true }}
                    className="text-2xl py-2 text-center text-gray-500"
                >
                    {text}
                    <Cursor cursorColor="#F7AB0A" />
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 2,
                    }}
                    viewport={{ once: true }}
                    className="text-md py-5 leading-8 text-gray-800 dark:text-white text-center lg:mx-80"
                >
                    I recently graduated from Spiced Academy. I am looking for
                    possibility to learn and improve my skills with Typescript,
                    Javascript, as well as advance my knowledge of FrontEnd and
                    BackEnd development. I believe that my experience in
                    banking, finance, and the skills such as: teamwork, taking
                    initiative, and my analytical skills will help me in a new
                    environment. I am very motivated to contribute to your
                    projects and learn the process very quickly.
                </motion.p>
            </div>

            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1,
                    }}
                    viewport={{ once: true }}
                    href="https://github.com/vladyslavt97"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillGithub className="dark:fill-white animate-pulse" />
                </motion.a>
                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1.5,
                    }}
                    viewport={{ once: true }}
                    href="https://www.linkedin.com/in/vladyslav-tsurkanenko/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillLinkedin className="dark:fill-white animate-pulse" />
                </motion.a>
            </div>

            <motion.div
                className="relative mx-auto bg-gradient-to-b from-teal-500 w-60 h-60 m-10 overflow-hidden shadow-lg rounded-full"
                initial={{
                    opacity: 0,
                    borderRadius: "100%",
                }}
                transition={{
                    duration: 1.5,
                }}
                whileInView={{
                    opacity: 1,
                    borderRadius: "100%",
                }}
                viewport={{ once: true }}
            >
                <Image
                    // className='rounded-full'
                    src="/Vlad.png"
                    alt="sometext"
                    width={300}
                    height={300}
                />
            </motion.div>
        </div>
    );
}
