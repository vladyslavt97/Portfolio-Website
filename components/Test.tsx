import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Props = {};

export default function Test({}: Props) {
    const [value1, setValue1] = useState("Vladyslav Tsurkanenko");
    const [scrambling, setScrambling] = useState(false);

    const randomInt = (max: any) => Math.floor(Math.random() * max);
    const randomFromArray = (array: any) => array[randomInt(array.length)];

    const scrambleText = (text: any) => {
        const chars = "*?><[]&@#)(.%$-_:/;?!".split("");
        return text
            .split("")
            .map((x: any) => (randomInt(3) > 1 ? randomFromArray(chars) : x))
            .join("");
    };

    useEffect(() => {
        let interval: any;

        if (scrambling) {
            interval = setInterval(() => {
                setValue1((prevValue) => scrambleText(prevValue));
            }, 100);
        }

        return () => clearInterval(interval);
    }, [scrambling]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setScrambling((prevScrambling) => {
                setValue1("Vladyslav Tsurkanenko"); // Reset value1
                return !prevScrambling; // Toggle scrambling state
            });
        }, 2000);

        return () => {
            clearTimeout(timeout);
            setValue1("Vladyslav Tsurkanenko"); // Reset value1 when interval is cleared
        };
    }, [scrambling]);

    return (
        <div>
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className={`${
                    value1 !== "Vladyslav Tsurkanenko"
                        ? "text-gray-400 text-4xl font-extralight font-mono text-center"
                        : "text-green-600 text-4xl font-medium font-mono text-center"
                }`}
            >
                {value1}
            </motion.h2>
        </div>
    );
}
