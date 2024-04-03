import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Skills from "skills.json";

function MyComponent() {
    const [newArray, setNewArray] = useState(Skills);
    const [outOfViewportIndexes, setOutOfViewportIndexes] = useState<number[]>(
        []
    );
    const [screenWidth, setScreenWidth] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        // Set initial width
        setScreenWidth(window.innerWidth);

        // Event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const targetRefs = useRef<Array<HTMLDivElement | null>>(
        newArray.map(() => null)
    );

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const outOfViewportIndexes: number[] = [];
                entries.forEach((entry, index) => {
                    if (!entry.isIntersecting) {
                        outOfViewportIndexes.push(index);
                    }
                });
                setOutOfViewportIndexes(outOfViewportIndexes);
            },
            {
                // Set root to null to observe the viewport
                root: null,
                // Set a threshold to define when the element should be considered as intersecting
                threshold: 0.5, // 0.5 means when 50% of the target is visible
            }
        );

        // Start observing the target elements
        targetRefs.current.forEach((targetRef) => {
            if (targetRef) {
                observer.observe(targetRef);
            }
        });

        // Cleanup function to disconnect the observer when component unmounts
        return () => {
            observer.disconnect();
        };
    }, [newArray]);

    return (
        <div>
            <div className="flex flex-row w-full">
                {newArray.map((n: any, i: number) => (
                    <div
                        key={i}
                        className="moving-element"
                        ref={(el) => (targetRefs.current[i] = el)}
                    >
                        <Image src={n.src} alt="some" width={50} height={50} />
                    </div>
                ))}
            </div>
            <div>
                <p>
                    Indexes of elements out of viewport:{" "}
                    {outOfViewportIndexes.join(", ")}
                </p>
            </div>
        </div>
    );
}

export default MyComponent;
