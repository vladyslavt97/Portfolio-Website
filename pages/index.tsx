"use client";

import Head from "next/head";
import Image from "next/image";
import Resume from "../components/Resume";
import Projects from "../components/Projects";
import Skills from "@/components/Skills";
import Navigation from "../components/navigation/Navigation";
import MyInfo from "@/components/MyInfo";
import Collaboration from "../components/Collaboration";
import Contacts from "../components/contacts/Contacts";
import SendEmailToMe from "../components/contacts/sentemailtome/SendEmailToMe";
import { useSelector } from "react-redux";
import { RootState } from "../components/redux/store";
import Link from "next/link";
import { useEffect } from "react";
import Ticker from "@/components/Ticker";

export default function Home() {
    const darkmode = useSelector(
        (state: RootState) => state.darkMode.darkModeVal
    );

    const isOpen = useSelector(
        (state: RootState) => state.openerState.openValue
    );

    useEffect(() => {
        console.log("Welcome to my portfolio website!🎉");
    }, []);

    const mainBaseClasses =
        "relative min-h-screen overflow-x-hidden scroll-smooth transition-colors duration-700 ease-out";
    const unifiedBackground =
        "bg-[#f8fbff] dark:bg-gray-950 text-gray-900 dark:text-white";
    const scrollBehavior = isOpen ? "overflow-y-hidden" : "overflow-y-auto";
    const mainClassName = `${mainBaseClasses} ${unifiedBackground} ${scrollBehavior}`;

    return (
        <div className={darkmode ? "dark" : ""}>
            <Head>
                <title>Vladyslav Tsurkanenko</title>
                <meta
                    name="Portfolio page: Vladyslav Tsurkanenko"
                    content="This is my portfolio webpage, where you can learn more about my skills pasions and expertise."
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={mainClassName}>
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/40 via-transparent to-transparent dark:from-cyan-500/10 blur-3xl"
                />
                <div id="start">
                    <Ticker />
                    <Navigation />
                </div>
                <div
                    className="w-screen h-screen wweerrr bg-gradient-to-b from-white via-[#f8fbff] to-[#eef4ff] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 opacity-80"
                    aria-hidden="true"
                ></div>

                <MyInfo />

                <Contacts />

                <section>
                    <Skills />
                    <Projects />
                    <Collaboration />
                    <Resume />
                </section>

                <section id="form">
                    <SendEmailToMe />
                </section>

                <Link href="#start" aria-label="Back to top">
                    <div className="fixed bottom-5 right-3 flex w-10 cursor-pointer items-end justify-end opacity-70 transition hover:opacity-100 sm:right-5">
                        <Image
                            src="/arr.png"
                            alt="arrow"
                            width={100}
                            height={100}
                            className="h-10 w-10 animate-bounce rounded-full bg-white/80 p-1 shadow-lg transition filter grayscale hover:scale-110 hover:grayscale-0 dark:bg-gray-900/80"
                        />
                    </div>
                </Link>
            </main>
        </div>
    );
}
