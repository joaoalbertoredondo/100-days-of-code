import React from "react";
import BackPage from "../components/BackPage";
import Image from "next/image";
import image1 from "../../assets/add-to-bag/jersey1.png";
import image2 from "../../assets/add-to-bag/jersey2.png";
import image3 from "../../assets/add-to-bag/jersey3.png";

function page() {
  return (
    <div className="my-20 md:h-scree p-5 md:flex md:justify-center md:items-center">
      <BackPage />

      <div className="md:max-w-5xl w-full flex flex-col md:flex-row justify-between p-8 gap-4 bg-gray-200 rounded-2xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 items-center md:items-start">
          <div className="flex md:flex-col gap-4 order-last md:order-none">
            <Image
              alt="image1"
              src={image1}
              className="h-20 w-16 md:h-20 md:w-16 rounded-lg object-cover opacity-60 hover:opacity-100 shadow-md"
            />
            <Image
              alt="image2"
              src={image2}
              className="h-20 w-16 md:h-20 md:w-16 rounded-lg object-cover opacity-60 hover:opacity-100 shadow-md"
            />
            <Image
              alt="image3"
              src={image3}
              className="h-20 w-16 md:h-20 md:w-16 rounded-lg object-cover opacity-60 hover:opacity-100 shadow-md"
            />
          </div>
          <div className="">
            <Image
              alt="image1"
              src={image1}
              className="h-[300px] w-[240px] md:h-[600px] md:w-[400px] rounded-lg object-cover shadow-md"
            />
          </div>
        </div>

        <div className="max-w-[450px] flex flex-col justify-between py-5 gap-4">
          <div className="font-extrabold text-[#1b76fe] md:text-lg">
            NIKE - NBA
          </div>

          <div className="font-extrabold text-xl md:text-3xl capitalize">
            denver nuggets swingman jersey city edition
          </div>

          <div className="text-justify font-bold text-gray-500 text-sm md:text-lg">
            Nike Dri-FIT technology moves sweat away from your skin for quicker
            evaporation, helping you stay dry and comfortable. Breathable mesh
            helps keep you cool on or off the court.
          </div>

          <div>
            <div className="flex gap-2">
              <p className="font-extrabold text-xl md:text-3xl">
                <span className="text-sm">$</span>105.00
              </p>
              <p className="bg-[#98bef8] text-[#2249fa] font-bold rounded-md py-1 px-2 text-xs flex items-center">
                -25%
              </p>
            </div>
            <p className="line-through text-gray-500">
              <span>$</span>105,00
            </p>
          </div>

          <div className="uppercase font-extrabold flex flex-col gap-3">
            <h2 className="text-sm md:text-base">Choose size</h2>
            <div className="flex gap-2 font-bold">
              <button className="h-8 w-8 md:h-10 md:w-10 bg-gray-300 focus:bg-gray-900 rounded-md focus:text-white flex items-center justify-center hover:bg-gray-400 text-sm md:text-base">
                S
              </button>
              <button className="h-8 w-8 md:h-10 md:w-10 bg-gray-300 focus:bg-gray-900 rounded-md focus:text-white flex items-center justify-center hover:bg-gray-400 text-sm md:text-base">
                M
              </button>
              <button className="h-8 w-8 md:h-10 md:w-10 bg-gray-300 focus:bg-gray-900 rounded-md focus:text-white flex items-center justify-center hover:bg-gray-400 text-sm md:text-base">
                L
              </button>
              <button className="h-8 w-8 md:h-10 md:w-10 bg-gray-300 focus:bg-gray-900 rounded-md focus:text-white flex items-center justify-center hover:bg-gray-400 text-sm md:text-base">
                XL
              </button>
              <button className="h-8 w-8 md:h-10 md:w-10 bg-gray-300 focus:bg-gray-900 rounded-md focus:text-white flex items-center justify-center hover:bg-gray-400 text-sm md:text-base">
                XXL
              </button>
            </div>
          </div>
          <button className="bg-[#1b76fe] hover:bg-[#004ec2] text-gray-100 uppercase w-full p-2 rounded-md">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}

export default page;
