"use client";

import therato from "../../../assets/image-carousel/therato.jpg";
import eberhardgross from "../../../assets/image-carousel/eberhardgross.jpg";
import padrinan from "../../../assets/image-carousel/padrinan.jpg";
import iriser from "../../../assets/image-carousel/iriser.jpg";
import eberhardgross1 from "../../../assets/image-carousel/eberhardgross1.jpg";
import brettSayles from "../../../assets/image-carousel/brett-sayles.jpg";

import Image from "next/image";
import { useState } from "react";
import { BsCaretLeft, BsCaretRight } from "react-icons/bs";

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    therato,
    eberhardgross,
    padrinan,
    iriser,
    eberhardgross1,
    brettSayles,
  ];

  function handlePreviousSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  function handleNextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="flex flex-col gap-12 items-center justify-center bg-stone-800 text-slate-100 h-screen">
      <div className="flex gap-4">
        <button onClick={handlePreviousSlide}>
          <BsCaretLeft size={80} />
        </button>

        <div>
          <Image
            src={images[currentIndex]}
            alt=""
            width={800}
            className="h-[500px] rounded-md shadow-lg object-cover"
          />
        </div>

        <button onClick={handleNextSlide}>
          <BsCaretRight size={80} />
        </button>
      </div>

      <div className="flex gap-4">
        {images.map((img, index) => {
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`rounded-sm ${
                index === currentIndex ? "opacity-100" : "opacity-40"
              } transition-opacity duration-300`}
            >
              <Image
                src={img}
                alt=""
                width={150}
                className="object-cover rounded-md"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
