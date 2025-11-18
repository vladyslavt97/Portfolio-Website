import Image from "next/image";
import { useEffect, useState } from "react";
import Gallery from "./Gallery";
import { IoClose } from "react-icons/io5";
import DroneVideos from "./DroneVideos";
import FPV from "./FPV";
import DroneParts from "./DroneParts";
import End from "./End";
import DroneLaws from "./DroneLaws";
import LoadingSpinner from "./LoadingSpinner";
import ImageWithSpinner from "./ImageWithSpinner";

const heroBadges = [
    "Sunset missions",
    "Hyperlapses",
    "FPV builds",
    "Crash + rebuild",
];

const heroHighlights = [
    {
        title: "Photo gallery",
        body: "Real shots from my DJI + FPV trips, stitched panoramas, and handheld stills.",
    },
    {
        title: "Video wall",
        body: "Actual uploads from my channel with raw and edited runs.",
    },
    {
        title: "Build notes",
        body: "The FPV assembly, the parts I paid for, and the legal checklist I follow.",
    },
];

const droneImageManifest = [
    "/drone/manyimages.jpg",
    "/drone/mini.jpg",
    "/drone/fpv/6.jpg",
    "/drone/DJI_0067-PANO.jpg",
    "/drone/IMG_6630-PANO.jpg",
];

export default function Drone() {
    const [heroLoaded, setHeroLoaded] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const cache = droneImageManifest.map((src) => {
            const img = new window.Image();
            img.src = src;
            return img;
        });
        return () => {
            cache.forEach((img) => {
                img.src = "";
            });
        };
    }, []);

    useEffect(() => {
        if (typeof document === "undefined") {
            return;
        }
        const previousOverflow = document.body.style.overflowY;
        document.body.style.overflowY = "auto";
        return () => {
            document.body.style.overflowY = previousOverflow;
        };
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
            <main className="flex flex-col gap-16 px-3 pb-24 sm:gap-20 sm:px-6 lg:px-0">
                <section className="relative isolate overflow-hidden px-4 pt-20 pb-16 sm:pt-32">
                    <Image
                        src="/drone/manyimages.jpg"
                        alt="Drone collage"
                        fill
                        priority
                        className="object-cover object-center brightness-95"
                        sizes="100vw"
                        onLoadingComplete={() => setHeroLoaded(true)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-950/40 to-slate-950/80" />
                    {!heroLoaded && (
                        <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/70">
                            <LoadingSpinner label="Booting drone feed" />
                        </div>
                    )}
                    <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-cyan-400/30 blur-[120px]" />
                    <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[32px] bg-slate-950/40 px-4 py-8 text-center backdrop-blur">
                        <p className="text-xs uppercase tracking-[0.45em] text-white/70">
                            Drone + Fun
                        </p>
                        <h1 className="text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                            My Drone Story
                        </h1>
                        <p className="max-w-3xl text-base text-white/80 sm:text-lg md:text-xl">
                            I started with a tiny DJI Mini in 2020 and ended up
                            soldering FPV rockets by 2024. This page is the
                            scrapbook of every crash, sunrise, and adrenaline
                            spike along the way.
                        </p>
                        <div className="flex flex-wrap justify-center gap-3">
                            {heroBadges.map((badge) => (
                                <span
                                    key={badge}
                                    className="rounded-full border border-white/30 bg-white/5 px-4 py-1 text-sm text-white/90"
                                >
                                    {badge}
                                </span>
                            ))}
                        </div>
                        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
                            {heroHighlights.map((highlight) => (
                                <article
                                    key={highlight.title}
                                    className="rounded-2xl border border-white/15 bg-gradient-to-br from-cyan-900/50 via-slate-900/60 to-fuchsia-900/40 p-4 text-left shadow-lg shadow-black/30"
                                >
                                    <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                                        {highlight.title}
                                    </p>
                                    <p className="mt-2 text-sm text-white/80">
                                        {highlight.body}
                                    </p>
                                </article>
                            ))}
                        </div>
                        <div className="liquid-glass relative inline-flex items-center justify-center gap-2 rounded-full text-xs font-semibold uppercase tracking-[0.5em] text-white/90">
                            Keep scrolling
                        </div>
                    </div>
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
                    <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-900/40 via-slate-950/60 to-indigo-900/40 p-6 shadow-2xl shadow-black/50 sm:p-10">
                        <p className="text-sm uppercase tracking-[0.4em] text-white/60">
                            Level up log
                        </p>
                        <h2 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
                            DJI chill vibes vs FPV adrenaline
                        </h2>
                        <p className="mt-4 text-white/80">
                            The chilled-out GPS flights quickly turned into
                            solder fumes, carbon fiber splinters, and goggles
                            glued to my face. Nothing beats diving a mountain
                            followed by a perfect cinematic orbit.
                        </p>
                        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
                            <figure className="flex flex-col items-center text-center">
                                <ImageWithSpinner
                                    src="/drone/mini.jpg"
                                    alt="DJI Mini 2"
                                    width={300}
                                    height={300}
                                    className="h-full w-full rounded-3xl border border-white/15 object-cover object-center shadow-2xl"
                                    spinnerLabel="DJI"
                                />
                                <figcaption className="mt-3 text-sm text-white/70">
                                    DJI Mini 2 • the calm before the FPV storm
                                </figcaption>
                            </figure>
                            <div className="flex flex-col items-center justify-center gap-2 text-center text-amber-200">
                                <IoClose size={52} />
                                <span className="text-xs uppercase tracking-[0.7em]">
                                    upgrade
                                </span>
                            </div>
                            <figure className="flex flex-col items-center text-center">
                                <ImageWithSpinner
                                    src="/drone/fpv/6.jpg"
                                    alt="Custom FPV build"
                                    width={300}
                                    height={300}
                                    className="h-full w-full rounded-3xl border border-white/15 object-cover object-center shadow-2xl"
                                    spinnerLabel="FPV"
                                />
                                <figcaption className="mt-3 text-sm text-white/70">
                                    Hand-built FPV rig • chaos unlocked
                                </figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
                    <Gallery />
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
                    <figure className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 shadow-2xl shadow-black/40">
                        <ImageWithSpinner
                            src="/drone/DJI_0067-PANO.jpg"
                            alt="Panorama over the sea"
                            width={1600}
                            height={900}
                            className="h-[320px] w-full object-cover md:h-[420px]"
                            spinnerLabel="Panorama"
                        />
                        <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-sm uppercase tracking-[0.4em] text-white/80">
                            Drone camping session • stitched pano from 10 shots
                        </figcaption>
                    </figure>
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
                    <DroneVideos />
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
                    <figure className="relative overflow-hidden rounded-[32px] border border-fuchsia-400/20 shadow-2xl shadow-black/40">
                        <ImageWithSpinner
                            src="/drone/IMG_6630-PANO.jpg"
                            alt="Mountain panorama"
                            width={1600}
                            height={900}
                            className="h-[320px] w-full object-cover md:h-[420px]"
                            spinnerLabel="Ridge"
                        />
                        <figcaption className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-sm uppercase tracking-[0.4em] text-white/80">
                            Endless alpine ridge • wind + adrenaline + wow
                        </figcaption>
                    </figure>
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
                    <FPV />
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
                    <DroneParts />
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
                    <DroneLaws />
                </section>

                <section className="mx-auto w-full max-w-6xl px-4 sm:px-8">
                    <End />
                </section>
            </main>
        </div>
    );
}
