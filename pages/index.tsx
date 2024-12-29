"use client";

import Head from "next/head";
import Image from "next/image";
import Resume from "../components/resume/Resume";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import Navigation from "../components/navigation/Navigation";
import MyInfo from "../components/myinfo/MyInfo";
import Collaboration from "../components/Collaboration";
import Contacts from "../components/contacts/Contacts";
import SendEmailToMe from "../components/contacts/sentemailtome/SendEmailToMe";
import { useSelector } from "react-redux";
import { RootState } from "../components/redux/store";
import Link from "next/link";
import { useEffect } from "react";
import Ticker from "@/components/Ticker";
import { bgColors } from "@/util/colors";

export default function Home() {
    const darkmode = useSelector(
        (state: RootState) => state.darkMode.darkModeVal
    );

    const isOpen = useSelector(
        (state: RootState) => state.openerState.openValue
    );
    const bgColorRedux = useSelector(
        (state: RootState) => state.bgColor.bgColorValue
    );

    useEffect(() => {
        console.log("Welcome to my portfolio website!🎉");
    }, []);

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

            <main
                className={
                    isOpen
                        ? "bg-gradient-to-tr from-yellow-200/50 to-lime-500/50 dark:bg-gray-600 dark:bg-none overflow-x-hidden h-[100vh]"
                        : `bg-none dark:bg-gray-600 dark:bg-none overflow-x-hidden overflow-y-scroll h-[100vh]`
                }
            >
                <div id="start" className="">
                    <Ticker />
                    <Navigation />
                </div>
                <div
                    className={`${
                        bgColors[bgColorRedux - 1]
                    } w-screen h-screen wweerrr`}
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

                <Link href="#start">
                    <div className="absolute bottom-5 right-1 sm:right-5 w-10 cursor-pointer opacity-50 flex items-end justify-end animate-bounce">
                        <Image
                            src="/arr.png"
                            alt="arrow"
                            width={100}
                            height={100}
                            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                        />
                    </div>
                </Link>
            </main>
        </div>
    );
}
