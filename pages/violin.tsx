"use client";

import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";

type Props = {};

export default function Violin({}: Props) {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <AnimatedTestimonials
                testimonials={[
                    {
                        quote: "I play with my heart",
                        name: "Berlin 2024",
                        designation: "kamermusikverein",
                        src: "/violin/vlad2.png",
                    },
                    {
                        quote: "I play with my heart",
                        name: "Berlin 2024",
                        designation: "kamermusikverein",
                        src: "/violin/vlad3.png",
                    },
                ]}
            />
        </div>
    );
}
