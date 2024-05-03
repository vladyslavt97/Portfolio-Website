import Image from "next/image";
import React from "react";
import Gallery from "./Gallery";
import { IoClose } from "react-icons/io5";
import DroneVideos from "./DroneVideos";
import FPV from "./FPV";
import DroneParts from "./DroneParts";
import End from "./End";
import DroneLaws from "./DroneLaws";

type Props = {};

export default function Drone({}: Props) {
  return (
    <div className="overflow-y-auto h-screen">
      <div className="relative">
        <h1 className="text-center absolute top-2 left-1/2 transform -translate-x-1/2 text-white text-[50px] qwe">
          My Drone Story
        </h1>
        <Image
          src="/drone/manyimages.jpg"
          alt="manyimages"
          width={2000}
          height={2000}
          className="w-screen"
          loading="eager"
          priority={true}
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-10">
        <span className="italic">Timeline</span>
        <div className="flex flex-row justify-around w-full">
          <span>2020</span> <span>==={">"}</span> <span>2022</span>{" "}
          <span>==={">"}</span> <span>2024</span>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mx-10">
        <Image
          src="/drone/mini.jpg"
          alt="manyimages"
          width={300}
          height={300}
        />
        <IoClose size={50} color="lightblue" />
        <Image
          src="/drone/fpv/6.jpg"
          alt="6"
          width={300}
          height={300}
          className="rounded-lg"
        />
      </div>

      <hr />

      <h1 className="text-center mt-10 font-bold text-xl">Gallery</h1>
      <Gallery />

      <Image
        src="/drone/DJI_0067-PANO.jpg"
        alt="manyimages"
        width={2000}
        height={2000}
        className="w-full"
      />

      <h1 className="text-center mt-10 font-bold text-xl">Videos</h1>
      <DroneVideos />

      <Image
        src="/drone/IMG_6630-PANO.jpg"
        alt="manyimages"
        width={2000}
        height={2000}
        className="w-full"
      />

      <FPV />

      <DroneParts />

      <DroneLaws />

      <End />
    </div>
  );
}
