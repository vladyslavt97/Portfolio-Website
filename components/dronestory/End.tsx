import { useEffect } from "react";
import ImageWithSpinner from "./ImageWithSpinner";

export default function End() {
    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const img = new window.Image();
        img.src = "/drone/end.jpg";
        return () => {
            img.src = "";
        };
    }, []);

    return (
        <div className="rounded-[32px] border border-amber-400/20 bg-gradient-to-br from-amber-900/40 via-slate-950/60 to-rose-900/40 p-8 text-center shadow-2xl shadow-black/40 sm:p-12">
            <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                And that&apos;s a wrap
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-white">
                Thanks for flying along
            </h2>
            <p className="mt-4 text-white/75">
                This hobby keeps me curious, humble, and always ready to chase
                the next sunrise. Hope it sparked your own urge to explore.
            </p>
            <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 shadow-xl shadow-black/40">
                <ImageWithSpinner
                    src="/drone/end.jpg"
                    alt="FPV sunset goodbye"
                    width={1600}
                    height={900}
                    className="h-full w-full object-cover"
                    spinnerLabel="Sunset"
                />
            </div>
            <div className="mt-6 text-right text-white/80">
                <p className="italic">
                    If you have any questions, please please do NOT ask them! 😊
                </p>
            </div>
        </div>
    );
}
