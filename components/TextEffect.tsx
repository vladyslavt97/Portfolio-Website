"use client";

import { useEffect, useState } from "react";

type Props = {
    target: string;
    finalColor: string;
};

export default function TextEffect({ target, finalColor }: Props) {
    const [changingValue, setChangingValue] = useState<string>(""); // Start with an empty string

    // Helper function to delay execution
    const delay = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    // Update letters function
    const updateLetters = async (targetWord: string) => {
        const targetArray = targetWord.split(""); // Split the target word into an array of characters

        let updatedValue = Array(targetArray.length).fill(""); // Initialize with empty string for each letter

        // Update letters one by one
        for (let i = 0; i < targetArray.length; i++) {
            const targetCharCode = targetArray[i].charCodeAt(0); // Get the char code of the target letter
            let currentCharCode =
                updatedValue[i].charCodeAt(0) || "A".charCodeAt(0); // Get current char code, default to 'A'

            for (
                let charCode = currentCharCode + 1;
                charCode <= targetCharCode;
                charCode++
            ) {
                updatedValue[i] = String.fromCharCode(charCode); // Update the character
                setChangingValue(updatedValue.join("")); // Update the state with the current value
                console.log(updatedValue.join("")); // Log for debugging
                await delay(10); // Wait for 0.1 second before updating
            }
        }
    };

    useEffect(() => {
        const word = target; // You can change this to any word you want to animate
        updateLetters(word); // Start the updating process
    }, []); // Run only once on mount

    return (
        <div className="flex justify-center items-center text-2xl text-white">
            {changingValue.split("").map((char, index) => {
                const targetWord = target; // Target word for comparison
                const targetChar = targetWord[index] || ""; // Get the corresponding target character
                return (
                    <span
                        key={index}
                        className="inline-block w-[1.2ch] text-center" // Fixed width for each character
                        style={{ fontFamily: "monospace" }} // Optional: Ensure monospaced font
                    >
                        <span
                            className={
                                char === targetChar
                                    ? `text-${finalColor} font-semibold` // Correct letter color
                                    : "text-gray-500 filter blury" // Wrong letter with blur effect
                            }
                        >
                            {char}
                        </span>
                    </span>
                );
            })}
        </div>
    );
}
