import Image from "next/image";
import { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import LoadingSpinner from "./LoadingSpinner";

const GALLERY_IMAGES = Array.from({ length: 26 }, (_, index) => index + 1);

export default function Gallery() {
    const [count, setCount] = useState(0);
    const [previewIndex, setPreviewIndex] = useState<number | null>(null);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [previewLoaded, setPreviewLoaded] = useState(false);
    const currentImage = GALLERY_IMAGES[count];

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }
        const cache = GALLERY_IMAGES.map((imageNumber) => {
            const img = new window.Image();
            img.src = `/drone/${imageNumber}.jpg`;
            return img;
        });
        return () => {
            cache.forEach((img) => {
                img.src = "";
            });
        };
    }, []);

    useEffect(() => {
        setImageLoaded(false);
    }, [count]);

    useEffect(() => {
        if (previewIndex !== null) {
            setPreviewLoaded(false);
        }
    }, [previewIndex]);

    const countUp = () =>
        setCount((prev) =>
            prev < GALLERY_IMAGES.length - 1 ? prev + 1 : prev,
        );
    const countDown = () =>
        setCount((prev) => (prev > 0 ? prev - 1 : prev));

    return (
        <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-sky-900/40 via-slate-950/60 to-fuchsia-900/40 p-4 shadow-2xl shadow-black/40 sm:p-8">
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 text-center">
                    <p className="text-xs uppercase tracking-[0.5em] text-white/60">
                        Gallery
                    </p>
                    <h2 className="text-3xl font-semibold">
                        Scenes from the drone seat
                    </h2>
                    <p className="text-white/70">
                        Scroll through sunsets, city flybys, mountain dives, and
                        the occasional crash site. Tap the frame to open the
                        immersive preview.
                    </p>
                </div>
                <div className="flex flex-col items-center gap-4">
                    <div className="flex w-full flex-col items-center gap-4 md:flex-row md:gap-6">
                        <button
                            className="rounded-full border border-white/20 bg-white/10 p-4 transition hover:scale-110"
                            onClick={countDown}
                            aria-label="Previous photo"
                        >
                            <FaChevronLeft size={22} />
                        </button>
                        <div className="group relative w-full overflow-hidden rounded-[28px] border border-white/20 shadow-2xl shadow-black/40">
                            {!imageLoaded && (
                                <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/70">
                                    <LoadingSpinner label="Syncing photo" />
                                </div>
                            )}
                            <Image
                                src={`/drone/${currentImage}.jpg`}
                                alt={`Drone shot ${currentImage}`}
                                width={1200}
                                height={800}
                                className="h-[320px] w-full cursor-pointer object-cover object-center md:h-[500px]"
                                onClick={() => setPreviewIndex(currentImage)}
                                priority={count === 0}
                                onLoadingComplete={() => setImageLoaded(true)}
                            />
                            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                                <p className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.4em] text-white/80">
                                    Tap to zoom
                                </p>
                            </div>
                        </div>
                        <button
                            className="rounded-full border border-white/20 bg-white/10 p-4 transition hover:scale-110"
                            onClick={countUp}
                            aria-label="Next photo"
                        >
                            <FaChevronRight size={22} />
                        </button>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {GALLERY_IMAGES.map((imageNumber, index) => (
                            <button
                                key={imageNumber}
                                onClick={() => setCount(index)}
                                className={`h-3 w-8 rounded-full transition ${
                                    index === count
                                        ? "bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-orange-400"
                                        : "bg-white/20"
                                }`}
                                aria-label={`Go to image ${imageNumber}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {previewIndex !== null && (
                <div
                    className="fixed inset-0 z-30 grid place-items-center bg-black/80 p-4 backdrop-blur"
                    onClick={() => setPreviewIndex(null)}
                >
                    <div
                        className="relative w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.9)]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {!previewLoaded && (
                            <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/70">
                                <LoadingSpinner label="Opening" />
                            </div>
                        )}
                        <Image
                            src={`/drone/${previewIndex}.jpg`}
                            alt={`Drone shot ${previewIndex}`}
                            width={1600}
                            height={900}
                            className="h-full w-full object-contain bg-black"
                            onLoadingComplete={() => setPreviewLoaded(true)}
                        />
                        <button
                            aria-label="Close preview"
                            className="absolute right-4 top-4 rounded-full border border-white/40 bg-black/50 p-2 text-white transition hover:scale-110"
                            onClick={() => setPreviewIndex(null)}
                        >
                            <IoCloseOutline size={28} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
