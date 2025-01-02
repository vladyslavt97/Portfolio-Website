## My portfolio website

This is my portfolio website to reflect on the projects I've created so far.

You can find my contact information there and write me an email directly from the webpage.

The technologies I used to implement this page are: Next.js, TailwindCSS, TypeScript, Framer Motion, Ticker Library (react-fast-marquee), GitHub API and Emailjs!

<img src="./public/portfoliopage.gif" width="500px"/>


It includes an option to donate using a Stripe payment as well.

###


correcting the theme colors

"use client";

import { AnimatedTestimonials } from "@/components/effect/AnimatedTestimonials";

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
