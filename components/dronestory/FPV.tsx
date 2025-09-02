import Image from "next/image";
import YouTube, { YouTubeProps } from "react-youtube";

type Props = {};

export default function FPV({}: Props) {
    const opts: YouTubeProps["opts"] = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    return (
        <div className="md:px-10 md:py-20">
            <h1 className="text-center my-10 font-bold text-2xl">
                My FPV Path...
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
                <Image
                    src="/drone/fpv/1.jpg"
                    alt="Frame and motors"
                    width={500}
                    height={500}
                    className="w-full object-cover rounded-md"
                />
                <p>
                    1. Putting together the frame and the motors can be a pain,
                    because of the heat reducing objectives as well as your
                    planned drone configuration. Therefore, choosing the right
                    frame is crucial.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
                <p>
                    2. Attaching the motors and tightening the screws turned out
                    more physical than I thought. Starting at the soldering part
                    and all the way to installing the propellers. Do not neglect
                    the recommended tools.
                </p>
                <Image
                    src="/drone/fpv/2.jpg"
                    alt="Motors and screws"
                    width={500}
                    height={500}
                    className="w-full object-cover rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
                <Image
                    src="/drone/fpv/3.jpg"
                    alt="Drone building step 3"
                    width={500}
                    height={500}
                    className="w-full object-cover rounded-md"
                />
                <Image
                    src="/drone/fpv/4.jpg"
                    alt="Drone building step 4"
                    width={500}
                    height={500}
                    className="w-full object-cover rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 my-10">
                <Image
                    src="/drone/fpv/5.jpg"
                    alt="Drone building step 5"
                    width={500}
                    height={500}
                    className="w-full object-cover rounded-md"
                />
                <Image
                    src="/drone/fpv/6.jpg"
                    alt="Drone building step 6"
                    width={500}
                    height={500}
                    className="w-full object-cover rounded-md"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                <div className="aspect-video">
                    <YouTube opts={opts} videoId="GiswFxwjjCA" />
                </div>
                <div className="aspect-video">
                    <YouTube opts={opts} videoId="q59SE4rUHP8" />
                </div>
                <div className="aspect-video">
                    <YouTube opts={opts} videoId="vG0acaAqCaA" />
                </div>
            </div>
        </div>
    );
}
