import { useEffect } from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import ImageWithSpinner from "./ImageWithSpinner";

const buildSteps = [
    {
        id: 1,
        title: "Frame + motors",
        copy: "Putting together the frame and the motors is a puzzle of heat tolerance, carbon fiber dust, and planning your configuration. Choose the right frame and it rewards you with a drone that feels like it was born to fly.",
        image: "/drone/fpv/1.jpg",
        reverse: false,
    },
    {
        id: 2,
        title: "Screws + solder fumes",
        copy: "Attaching the motors, setting up the stack, soldering every pad… it is more physical than expected. From tinning wires to balancing propellers, the tools you bring decide how chill the build day is.",
        image: "/drone/fpv/2.jpg",
        reverse: true,
    },
];

const imagePairs = [
    ["/drone/fpv/3.jpg", "/drone/fpv/4.jpg"],
    ["/drone/fpv/5.jpg", "/drone/fpv/6.jpg"],
];

const fpvVideos = ["GiswFxwjjCA", "q59SE4rUHP8", "vG0acaAqCaA"];

const fpvImageManifest = Array.from(
    new Set([
        ...buildSteps.map((step) => step.image),
        ...imagePairs.flat(),
    ]),
);

export default function FPV() {
    const opts: YouTubeProps["opts"] = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 0,
            rel: 0,
        },
    };

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const cache = fpvImageManifest.map((src) => {
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

    return (
        <div className="rounded-[32px] border border-fuchsia-400/20 bg-gradient-to-br from-purple-900/40 via-slate-950/60 to-cyan-900/40 p-5 shadow-2xl shadow-black/40 sm:p-12">
            <div className="text-center">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                    My FPV path
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                    From kit parts to a custom rocket
                </h2>
                <p className="mt-3 text-white/70">
                    FPV building is therapy and chaos at the same time. Here is
                    the build log that took me from stock components to the
                    freestyle monster I now send through warehouses.
                </p>
            </div>

            <div className="mt-12 flex flex-col gap-10">
                {buildSteps.map((step) => (
                    <div
                        key={step.id}
                        className="grid grid-cols-1 gap-6 md:grid-cols-2"
                    >
                        {!step.reverse && (
                            <ImageWithSpinner
                                src={step.image}
                                alt={step.title}
                                width={800}
                                height={800}
                                className="h-full w-full rounded-3xl border border-white/15 object-cover shadow-2xl"
                                spinnerLabel="Build"
                            />
                        )}
                        <div className="rounded-3xl border border-white/10 bg-slate-950/40 p-6 shadow-lg shadow-black/40">
                            <p className="text-xs uppercase tracking-[0.5em] text-white/50">
                                Step {step.id}
                            </p>
                            <h3 className="mt-2 text-2xl font-semibold">
                                {step.title}
                            </h3>
                            <p className="mt-3 text-white/80">{step.copy}</p>
                        </div>
                        {step.reverse && (
                            <ImageWithSpinner
                                src={step.image}
                                alt={step.title}
                                width={800}
                                height={800}
                                className="h-full w-full rounded-3xl border border-white/15 object-cover shadow-2xl"
                                spinnerLabel="Build"
                            />
                        )}
                    </div>
                ))}

                {imagePairs.map((pair, index) => (
                    <div
                        key={pair.join("-")}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
                    >
                        {pair.map((imagePath, innerIndex) => (
                            <figure
                                key={imagePath}
                                className="overflow-hidden rounded-3xl border border-white/10 shadow-xl shadow-black/40"
                            >
                                <ImageWithSpinner
                                    src={imagePath}
                                    alt={`Drone building step ${index * 2 + innerIndex + 3}`}
                                    width={800}
                                    height={800}
                                    className="h-full w-full object-cover"
                                    spinnerLabel="Detail"
                                />
                            </figure>
                        ))}
                    </div>
                ))}

                <div className="rounded-[28px] border border-white/10 bg-slate-950/50 p-6 shadow-xl shadow-black/40">
                    <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                        FPV POV
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">
                        My goggles point of view
                    </h3>
                    <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {fpvVideos.map((videoId) => (
                            <div
                                key={videoId}
                                className="aspect-video overflow-hidden rounded-2xl border border-white/15 bg-black"
                            >
                                <YouTube opts={opts} videoId={videoId} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
