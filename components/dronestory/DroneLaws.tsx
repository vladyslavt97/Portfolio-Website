import Link from "next/link";
import type { ReactNode } from "react";

const laws: ReactNode[] = [
    "Insurance - 10 cents/day or 39,96 per year.",
    <>
        You need an{" "}
        <Link
            href="https://www.dronelicense.eu/products/eu-drone-license-start"
            className="text-cyan-300 underline underline-offset-4"
            target="_blank"
        >
            EU Drone Certificate
        </Link>{" "}
        before flying a drone. The EU Drone Licence has two certificates: the
        basic certificate and the supplementary certificate. A1-A3 is the basic
        certificate. If you want to fly a drone in Germany, you need to obtain
        this certificate from <b className="px-1">250 grams</b>.
    </>,
    "Drones may not fly above 100 meters (328 feet) without a permit. In controlled airspace, the maximum altitude allowed is 50 meters (164 feet). Drone pilots must maintain a direct line of sight with their drones at all times.",
    "All drones weighing 250 grams (.55 pounds) or more must be labeled with a fireproof badge containing the name and address of the drone owner/operator.",
    "Stay at least 1.5 kilometers (0.93 miles) away from airports. Avoid flying over crowds, prisons, industrial areas, disaster sites, residential zones, major traffic routes, and all sensitive infrastructure such as highways, waterways, and rail lines.",
];

export default function DroneLaws() {
    return (
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-900/60 via-slate-950/60 to-slate-900/60 p-5 shadow-2xl shadow-black/40 sm:p-10">
            <div className="text-center">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                    Drone laws
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                    Fly fun, fly legal
                </h2>
                <p className="mt-3 text-white/70">
                    German and EU rules changed a lot. Here are the highlights I
                    keep in my flight bag before every session.
                </p>
            </div>
            <ul className="mt-10 flex flex-col gap-4">
                {laws.map((law, index) => (
                    <li
                        key={index}
                        className="flex gap-4 rounded-3xl border border-white/10 bg-black/30 p-5 text-white/80 shadow-lg shadow-black/40"
                    >
                        <span className="text-2xl font-semibold text-cyan-300">
                            {index + 1}.
                        </span>
                        <span>{law}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
