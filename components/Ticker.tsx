import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Skills from "skills.json";

function MyComponent() {
    const [newArray, setNewArray] = useState(Skills);
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

    //
    const targetRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Update isVisible state based on whether the target element is intersecting with the viewport
                setIsVisible(entry.isIntersecting);
            },
            {
                // Set root to null to observe the viewport
                root: null,
                // Set a threshold to define when the element should be considered as intersecting
                threshold: 0.5, // 0.5 means when 50% of the target is visible
            }
        );

        // Start observing the target element
        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        // Cleanup function to disconnect the observer when component unmounts
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div>
            <div className="flex flex-row w-full">
                {newArray.map((n: any, i: any) => (
                    <div key={i} className="moving-element" ref={targetRef}>
                        <Image src={n.src} alt="some" width={50} height={50} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyComponent;
