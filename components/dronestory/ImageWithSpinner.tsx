import Image, { ImageProps } from "next/image";
import { useEffect, useMemo, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

type Props = ImageProps & {
    wrapperClassName?: string;
    spinnerBgClassName?: string;
    spinnerLabel?: string;
};

export default function ImageWithSpinner({
    wrapperClassName = "",
    spinnerBgClassName = "bg-slate-950/50",
    spinnerLabel = "Loading",
    onLoadingComplete,
    ...imageProps
}: Props) {
    const [loaded, setLoaded] = useState(false);

    const srcKey = useMemo(() => {
        if (typeof imageProps.src === "string") {
            return imageProps.src;
        }
        return imageProps.src.src;
    }, [imageProps.src]);

    useEffect(() => {
        setLoaded(false);
    }, [srcKey]);

    const handleComplete = (img: HTMLImageElement) => {
        setLoaded(true);
        if (onLoadingComplete) {
            onLoadingComplete(img);
        }
    };

    const { alt, ...rest } = imageProps;
    const safeAlt = typeof alt === "string" ? alt : "";

    return (
        <div className={`relative block ${wrapperClassName}`}>
            {!loaded && (
                <div
                    className={`absolute inset-0 flex items-center justify-center ${spinnerBgClassName}`}
                >
                    <LoadingSpinner label={spinnerLabel} />
                </div>
            )}
            <Image
                {...rest}
                alt={safeAlt}
                onLoadingComplete={handleComplete}
            />
        </div>
    );
}
