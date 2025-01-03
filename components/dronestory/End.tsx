import React from "react";
import Image from "next/image";

type Props = {};

export default function End({}: Props) {
  return (
    <div className=" md:p-52">
      <h1 className="gradient-text">Thank you for listening!</h1>
      <Image
        src="/drone/end.jpg"
        alt="brian"
        width={500}
        height={500}
        className="w-[full]"
      />
      <div className="flex flex-col justify-end items-end">
        <span className="italic text-lg">
          If you have any questions, please please do NOT ask them!
        </span>
        <span className="text-xs">Brian de Vries</span>
        <Image
          src="/brian.jpg"
          alt="brian"
          width={200}
          height={200}
          className="w-[100px] rounded-full"
        />
      </div>
    </div>
  );
}
