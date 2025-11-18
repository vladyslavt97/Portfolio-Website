import { useEffect } from "react";
import dronePartsJson from "./dronePartsJson.json";
import Link from "next/link";
import ImageWithSpinner from "./ImageWithSpinner";

const totalPrice = dronePartsJson.reduce(
    (total, item) => total + parseFloat(item.price),
    0,
);

export default function DroneParts() {
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const cache = dronePartsJson.map((part) => {
            const img = new window.Image();
            img.src = `/drone/droneparts/${part.image}`;
            return img;
        });
        return () => {
            cache.forEach((img) => {
                img.src = "";
            });
        };
    }, []);

    return (
        <div className="rounded-[32px] border border-sky-400/20 bg-gradient-to-br from-blue-900/40 via-slate-950/60 to-pink-900/40 p-5 shadow-2xl shadow-black/50 sm:p-10">
            <div className="text-center">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                    Drone parts
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                    Every bolt that keeps the FPV dream alive
                </h2>
                <p className="mt-3 text-white/70">
                    This is my current build sheet. Click any card to grab the
                    same part and start your own chaos machine.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {dronePartsJson.map((part) => (
                    <article
                        key={part.title}
                        className="flex gap-5 rounded-3xl border border-white/10 bg-slate-950/50 p-5 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-cyan-400/40"
                    >
                        <div className="flex h-28 w-28 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2">
                            <ImageWithSpinner
                                src={`/drone/droneparts/${part.image}`}
                                alt={part.title}
                                width={100}
                                height={100}
                                className="h-full w-full object-contain"
                                spinnerLabel="Part"
                            />
                        </div>
                        <div className="flex flex-1 flex-col justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                                    Component
                                </p>
                                <h3 className="text-xl font-semibold text-white">
                                    {part.title}
                                </h3>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-white/70">
                                    {part.price} €
                                </span>
                                {part.link && (
                                    <Link
                                        href={part.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-cyan-300 underline underline-offset-4"
                                    >
                                        View
                                    </Link>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 rounded-3xl border border-white/10 bg-slate-950/50 p-6 text-center shadow-inner shadow-black/40 sm:grid-cols-2">
                <div>
                    <p className="text-xs uppercase tracking-[0.5em] text-white/50">
                        Items
                    </p>
                    <p className="text-3xl font-bold text-cyan-300">
                        {dronePartsJson.length}
                    </p>
                </div>
                <div>
                    <p className="text-xs uppercase tracking-[0.5em] text-white/50">
                        Total investment
                    </p>
                    <p className="text-3xl font-bold text-cyan-300">
                        {totalPrice} €
                    </p>
                </div>
            </div>
        </div>
    );
}
