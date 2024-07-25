import Image from "next/image";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import brett from "../../../assets/image-carousel/brett-sayles.jpg";

function ImageCarousel() {
  return (
    <div className="bg-stone-800 text-slate-100 h-screen flex items-center justify-center">
      <div className="bg-stone-950/80 w-full flex flex-col gap-16 p-10">
        <div className="flex items-center justify-center gap-2 md:gap-8">
          <div className="h-full w-7 p-5">
            <FaArrowLeft className="cursor-pointer hover:text-stone-400" />
          </div>

          <div>
            <Image
              alt=""
              src={brett}
              width={800}
              className="object-none h-[280px] w-[500px] md:h-[400px] md:w-[800px]"
            />
          </div>

          <div className="h-full w-7 p-5">
            <FaArrowRight className="cursor-pointer hover:text-stone-400" />
          </div>
        </div>

        <div className="w-full h-[150px] flex justify-center gap-3">
          <Image
            alt=""
            src={brett}
            height={200}
            width={150}
            className="object-cover"
          />
          <Image
            alt=""
            src={brett}
            height={200}
            width={150}
            className="object-cover"
          />
          <Image
            alt=""
            src={brett}
            height={200}
            width={150}
            className="object-cover"
          />
          <Image
            alt=""
            src={brett}
            height={200}
            width={150}
            className="object-cover"
          />
          <Image
            alt=""
            src={brett}
            height={200}
            width={150}
            className="object-cover"
          />
          <Image
            alt=""
            src={brett}
            height={200}
            width={150}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageCarousel;
