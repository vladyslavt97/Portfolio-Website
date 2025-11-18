import YouTube, { YouTubeProps } from "react-youtube";

const videos = [
    { id: "HvMQPASkNWw", label: "Rookie sunrise session" },
    { id: "lG-A-RCj7Yw", label: "Fog chase practice" },
    { id: "acDfNaPJsqQ", label: "City orbit sprint" },
    { id: "NrKJctIlMzQ", label: "River surf FPV" },
    { id: "czJQWZ2sAps", label: "Forest rollercoaster" },
    { id: "vU2FuQGVuRs", label: "Warehouse dive drills" },
    { id: "b0g387reMOM", label: "Night hyperlapse" },
    { id: "_ZJrzzf4loE", label: "Sand dune chase" },
    { id: "gmh6rXdEkqg", label: "Quick cinematic edit" },
    { id: "hJU8RS2mKC4", label: "Mountains + clouds" },
    { id: "rBNabM-yGAY", label: "FPV beach surf" },
    { id: "8Ng_maGBAng", label: "Tiny whoop chaos" },
    { id: "iWYv1Z6o02A", label: "Trip highlight reel" },
];

export default function DroneVideos() {
    const opts: YouTubeProps["opts"] = {
        width: "100%",
        height: "100%",
        playerVars: {
            autoplay: 0,
            rel: 0,
        },
    };

    return (
        <div className="rounded-[32px] border border-fuchsia-400/20 bg-gradient-to-br from-sky-900/40 via-slate-950/60 to-purple-900/40 p-5 shadow-2xl shadow-black/40 sm:p-10">
            <div className="text-center">
                <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                    Videos
                </p>
                <h2 className="mt-2 text-3xl font-semibold">
                    Press play and enjoy the ride
                </h2>
                <p className="mt-3 text-white/70">
                    A mash-up of chill cinematic missions, FPV chaos, and
                    everything in between. Pick a card and let the soundtrack do
                    its thing.
                </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {videos.map((video) => (
                    <article
                        key={video.id}
                        className="group flex flex-col gap-3 rounded-2xl border border-white/15 bg-gradient-to-br from-slate-950/60 to-slate-900/40 p-4 shadow-lg shadow-black/40 transition hover:-translate-y-1 hover:border-cyan-400/40"
                    >
                        <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
                            <YouTube opts={opts} videoId={video.id} />
                        </div>
                        <p className="text-sm text-white/80">{video.label}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
