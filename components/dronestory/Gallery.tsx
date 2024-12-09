import Image from "next/image";
import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

type Props = {};

export default function Gallery({}: Props) {
  let imagesLen: any = Array.from({ length: 26 }, (_, index) => index + 1);
  const [count, setCount] = useState(0);
  const [openPreview, setOpenPreview] = useState("");

  const countUp = () => {
    console.log(count, imagesLen - 1);

    if (count < imagesLen.length - 1) {
      setCount(count + 1);
    } else {
      console.log("stop");
    }
  };
  const countDown = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      console.log("stop, too low");
    }
  };

  return (
    <div className="w-full flex justify-center mt-5 mb-10">
      <div className="flex flex-col gap-3">
        <div className="md:mx-[100px] flex flex-row justify-center items-center">
          <div className="hover:scale-125" onClick={countDown}>
            <FaChevronLeft size={30} color="lightblue" />
          </div>
          <Image
            src={`/drone/${imagesLen[count]}.jpg`}
            alt="images"
            width={1000}
            height={1000}
            loading="eager"
            className=" object-cover h-[350px] md:h-[550px] w-[650px] md:w-[950px] object-top rounded shadow-black shadow-lg"
            onClick={(e) => setOpenPreview(imagesLen[count])}
          />
          <div className="hover:scale-125" onClick={countUp}>
            <FaChevronRight size={30} color="lightblue" />
          </div>

          {openPreview !== "" && (
            <div>
              <div
                className="absolute top-0 left-0 bg-black/70 w-screen h-screen"
                onClick={(e) => setOpenPreview("")}
              />
              <div className="">
                <Image
                  src={`/drone/${imagesLen[count]}.jpg`}
                  alt="images"
                  width={1200}
                  height={1200}
                  loading="eager"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-xl px-3"
                  onClick={(e) => setOpenPreview(imagesLen[count])}
                />
                <div
                  className="absolute right-0 top-0"
                  onClick={(e) => setOpenPreview("")}
                >
                  <IoCloseOutline color="gray" size={50} />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-row gap-2 justify-center">
          {imagesLen.map((l: any, i: any) => (
            <div
              className={`w-2 h-2 ${
                count === i ? "bg-zinc-600" : "bg-zinc-200"
              } rounded-full`}
              key={i}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
