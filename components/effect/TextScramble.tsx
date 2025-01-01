import React, { useState, useEffect } from "react";

// Define the structure of each item in the animation queue
interface QueueItem {
    from: string;
    to: string;
    start: number;
    end: number;
    char?: string;
}

// Define the props interface for the TextScramble component
interface TextScrambleProps {
    phrases: string[]; // Array of phrases to animate
}

// Define the TextScramble component
const TextScramble: React.FC<TextScrambleProps> = ({ phrases }) => {
    // State for the currently displayed text
    const [text, setText] = useState("");
    // State for tracking the current phrase index
    const [counter, setCounter] = useState(0);

    // Effect hook for handling animation logic
    useEffect(() => {
        // Find the element to animate
        const el = document.querySelector(".text") as HTMLElement;
        if (!el) return; // Check if element exists, return if not

        // Define the character set for randomizing characters
        const chars = "!<>-_\\/[]{}—=+*^?#________";
        let frameRequest: number; // Variable for requestAnimationFrame ID
        let frame = 0; // Frame counter for animation
        let queue: QueueItem[] = []; // Animation queue for characters

        // Function to generate a random character from the character set
        const randomChar = () =>
            chars[Math.floor(Math.random() * chars.length)];

        // Function to update the animation frame
        const update = () => {
            let output = ""; // Output string for the animation
            let complete = 0; // Counter for completed animations in the queue
            for (let i = 0, n = queue.length; i < n; i++) {
                let { from, to, start, end, char } = queue[i]; // Destructure queue item properties
                if (frame >= end) {
                    complete++; // Increment complete counter if frame exceeds end time
                    output += to; // Append target character to output string
                } else if (frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = randomChar(); // Randomize character if not set or randomly determined
                        queue[i].char = char; // Update queue item character
                    }
                    output += `<span class="dud">${char}</span>`; // Append span element with character to output
                } else {
                    output += from; // Append original character from start time
                }
            }
            el.innerHTML = output; // Update element's inner HTML with the generated output
            if (complete === queue.length) {
                setText(phrases[counter]); // Set text to the current phrase
                if (counter === 0 || counter === phrases.length - 1) {
                    // If it's the first or last phrase, pause for 5 seconds before resetting the counter
                    setTimeout(() => {
                        setCounter((prevCounter) =>
                            prevCounter === phrases.length - 1
                                ? 0
                                : prevCounter + 1
                        );
                    }, 2000);
                } else {
                    // If it's neither the first nor last phrase, increment the counter
                    setCounter((prevCounter) => prevCounter + 1);
                }
            } else {
                frameRequest = requestAnimationFrame(update); // Request next animation frame
                frame++; // Increment frame counter
            }
        };

        // Function to initialize the animation with a new phrase
        const setTextAnimation = (newText: string) => {
            const oldText = el.innerText; // Get the current text of the element
            const length = Math.max(oldText.length, newText.length); // Determine the maximum length between old and new text
            const promise = new Promise<void>((resolve) => {
                queue = []; // Reset animation queue
                for (let i = 0; i < length; i++) {
                    const from = oldText[i] || ""; // Get character from old text or empty string
                    const to = newText[i] || ""; // Get character from new text or empty string
                    const start = Math.floor(Math.random() * 40); // Random start time for character animation
                    const end = start + Math.floor(Math.random() * 40); // Random end time for character animation
                    queue.push({ from, to, start, end }); // Push animation item to the queue
                }
                cancelAnimationFrame(frameRequest); // Cancel any existing animation frame
                frame = 0; // Reset frame counter
                update(); // Start animation
                resolve(); // Resolve the promise
            });
            return promise; // Return the promise
        };

        // Start the animation for the initial phrase
        setTextAnimation(phrases[counter]);

        return () => {
            cancelAnimationFrame(frameRequest); // Cleanup function to cancel animation frame
        };
    }, [phrases, counter]); // Dependency array for useEffect hook

    // Render the TextScramble component
    return (
        <div className="container relative">
            <div className="text"></div>{" "}
            {/* Element for displaying the animated text */}
        </div>
    );
};

export default TextScramble; // Export the TextScramble component
