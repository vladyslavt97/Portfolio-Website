"use client";

import { AnimatedTestimonials } from "@/components/AnimatedTestimonials";

type Props = {};

export default function Violin({}: Props) {
    return (
        <div className="flex flex-col justify-start items-center w-screen bg-white px-3 overflow-y-auto h-screen">
            <h1 className="text-xl font-bold mt-6">Gallery</h1>
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
            <h1 className="text-xl font-bold mt-12">Videos</h1>
        </div>
    );
}
