import React, { useState, useEffect } from "react";

type Props = {};

export default function Test({}: Props) {
    const [value1, setValue1] = useState("my work");
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
                setValue1("my work"); // Reset value1
                return !prevScrambling; // Toggle scrambling state
            });
        }, 2000);

        return () => {
            clearTimeout(timeout);
            setValue1("my work"); // Reset value1 when interval is cleared
        };
    }, [scrambling]);

    return <div>{value1}</div>;
}
