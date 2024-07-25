import Image, { StaticImageData } from "next/image";
import React from "react";
import coffee from "../../../assets/recipe/iced-coffee.png";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineTimer } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { FaRegStar, FaStar } from "react-icons/fa";

interface Props {
  name: string;
  rating: number;
  score: number;
  time: string;
  level: string;
  budget: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  image: StaticImageData;
}

function Recipe({
  name,
  rating,
  score,
  time,
  level,
  budget,
  description,
  ingredients,
  instructions,
  image,
}: Props) {
  return (
    <div className="bg-slate-200  min-h-screen flex justify-center items-center font-ubuntu px-6 py-20">
      <div className="flex flex-col md:flex-row overflow-hidden rounded-3xl shadow-lg">
        <div className="flex items-end overflow-hidden">
          <Image
            src={image}
            alt="image"
            className="h-[600px] w-full md:h-full md:w-[30rem] object-cover"
          />
          <div className="bg-slate-950 absolute p-4 mb-5">
            <p className="text-slate-100 uppercase font-bold md:w-[12rem] tracking-wide text-xs md:text-sm">
              {name}
            </p>
          </div>
        </div>

        <div className="bg-white p-6">
          <div className="bg-white flex flex-col gap-2 md:p-5 md:ml-[-10rem] md:mt-12 md:w-96">
            <span className="text-sm flex items-center gap-2">
              <FaStar className="text-orange-300" />
              <FaStar className="text-orange-300" />
              <FaStar className="text-orange-300" />
              <FaStar className="text-orange-300" />
              <FaRegStar className="text-orange-300" />
              <p className="text-xs">({score})</p>
            </span>
            <h1 className="font-bold text-2xl md:text-3xl">{name}</h1>
          </div>

          <div className="flex flex-col gap-5 mt-5">
            <div className="flex justify-center md:justify-start gap-4 md:gap-6">
              <div className="flex gap-1">
                <MdOutlineTimer className="text-xl md:text-3xl" color="gray" />
                <span className="text-xs md:text-sm">
                  <h2 className="font-bold text-gray-800">TOTAL TIME</h2>
                  <p className="text-orange-300 font-bold">{time}</p>
                </span>
              </div>

              <div className="flex gap-1">
                <HiOutlineCheckBadge
                  className="text-xl md:text-3xl"
                  color="gray"
                />
                <span className="text-xs md:text-sm">
                  <h2 className="font-bold text-gray-800">LEVEL</h2>
                  <p className="text-orange-300 font-bold">{level}</p>
                </span>
              </div>

              <div className="flex gap-1">
                <IoWalletOutline className="text-xl md:text-3xl" color="gray" />
                <span className="text-xs md:text-sm">
                  <h2 className="font-bold text-gray-800">BUDGET</h2>
                  <p className="text-orange-300 font-bold">{budget}</p>
                </span>
              </div>
            </div>

            <div className="md:w-[630px]">
              <p className="font-bold italic text-sm md:text-base">
                {description}
              </p>
            </div>

            <div className="mt-5 md:mt-10 flex flex-col gap-5 md:gap-10 text-sm md:text-base">
              <div>
                <h1 className="font-bold uppercase mb-2 md:mb-3 font-sans">
                  Ingredients
                </h1>

                <ul>
                  {ingredients.map((qty) => (
                    <li>{qty}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h1 className="font-bold uppercase mb-2 md:mb-3 font-sans">
                  instructions
                </h1>
                <ol className="list-decimal pl-5">
                  {instructions.map((step) => (
                    <li>{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
