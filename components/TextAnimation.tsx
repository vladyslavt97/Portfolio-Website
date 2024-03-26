import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const TextAnimation = () => {
    const [scrambledText, setScrambledText] = useState("");
    const textRef = useRef<any>(null);
    const [frameRequest, setFrameRequest] = useState(0);
    const [frame, setFrame] = useState(0);
    const [queue, setQueue] = useState<any>([]);
    const [resolve, setResolve] = useState<any>(() => {});

    const chars = "!<>-_\\/[]{}—=+*^?#________";

    useEffect(() => {
        const setText = (newText: any) => {
            const oldText = textRef.current.innerText || "";
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => setResolve(resolve));
            const newQueue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || "";
                const to = newText[i] || "";
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                newQueue.push({ from, to, start, end });
            }
            cancelAnimationFrame(frameRequest);
            setFrame(0);
            setQueue(newQueue);
            update();
            return promise;
        };

        const update = () => {
            let output = "";
            let complete = 0;
            for (let i = 0, n = queue.length; i < n; i++) {
                let { from, to, start, end, char } = queue[i];
                if (frame >= end) {
                    complete++;
                    output += to;
                } else if (frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = randomChar();
                        queue[i].char = char;
                    }
                    output += `<span class="dud">${char}</span>`;
                } else {
                    output += from;
                }
            }
            textRef.current.innerHTML = output;
            if (complete === queue.length) {
                resolve();
            } else {
                const newFrameRequest = requestAnimationFrame(update);
                setFrameRequest(newFrameRequest);
                setFrame(frame + 1);
            }
        };

        const randomChar = () => {
            return chars[Math.floor(Math.random() * chars.length)];
        };

        const phrases = ["Vladyslav", "Tsurkanenko"];
        let counter = 0;
        const next = () => {
            setText(phrases[counter]).then(() => {
                setTimeout(next, 2000);
            });
            counter = (counter + 1) % phrases.length;
        };

        next();

        return () => {
            cancelAnimationFrame(frameRequest);
        };
    }, [frame, frameRequest, queue, resolve]);

    return (
        <div className="container">
            <motion.h2
                ref={textRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-4xl text-teal-600 font-medium text-center text"
            ></motion.h2>
        </div>
    );
};

export default TextAnimation;
