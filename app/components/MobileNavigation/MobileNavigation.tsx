import Image from "next/image";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaBell, FaRegUser, FaUsers } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { IoIosMail, IoMdSettings } from "react-icons/io";
import { IoHomeOutline, IoLocationSharp, IoMailOutline } from "react-icons/io5";

interface Props {
  name: string;
  role: string;
  image: any;
}

function MobileNavigation({ name, image, role }: Props) {
  return (
    <div className="w-[375px] h-[812px] bg-white shadow-2xl rounded-[50px] py-10 px-5 flex flex-col justify-between">
      <div className="flex gap-3">
        <div className="h-20 w-20 bg-purple-400 rounded-2xl shadow-md flex items-center justify-center overflow-hidden">
          <Image height={80} width={80} alt="avatar" src={image} />
        </div>
        <div className="p-3 flex flex-col gap-2">
          <h2 className="font-bold">{name}</h2>
          <p className="text-sm font-bold text-gray-600">{role}</p>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-200"></div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="h-10 w-10 bg-slate-200 rounded-lg flex justify-center items-center">
            <HiMiniUsers />
          </div>
          <div className="flex justify-between items-center flex-1 pl-3">
            <p className="font-bold">Personal Data</p>
            <p>
              <BiChevronRight />
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="h-10 w-10 bg-slate-200 rounded-lg flex justify-center items-center">
            <IoIosMail />
          </div>
          <div className="flex justify-between items-center flex-1 pl-3">
            <p className="font-bold">Messages</p>
            <p>
              <BiChevronRight />
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="h-10 w-10 bg-slate-200 rounded-lg flex justify-center items-center">
            <FaBell />
          </div>
          <div className="flex justify-between items-center flex-1 pl-3">
            <p className="font-bold">Notifications</p>
            <p>
              <BiChevronRight />
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="h-10 w-10 bg-slate-200 rounded-lg flex justify-center items-center">
            <IoLocationSharp />
          </div>
          <div className="flex justify-between items-center flex-1 pl-3">
            <p className="font-bold">Location</p>
            <p>
              <BiChevronRight />
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="h-10 w-10 bg-slate-200 rounded-lg flex justify-center items-center">
            <FaUsers />
          </div>
          <div className="flex justify-between items-center flex-1 pl-3">
            <p className="font-bold">Community</p>
            <p>
              <BiChevronRight />
            </p>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-200"></div>

      <div className="flex flex-col gap-5">
        <div className="flex justify-between">
          <div className="h-10 w-10 bg-slate-200 rounded-lg flex justify-center items-center">
            <HiMiniUsers />
          </div>
          <div className="flex justify-between items-center flex-1 pl-3">
            <p className="font-bold">FAQs</p>
            <p>
              <BiChevronRight />
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="h-10 w-10 bg-slate-200 rounded-lg flex justify-center items-center">
            <IoMdSettings />
          </div>
          <div className="flex justify-between items-center flex-1 pl-3">
            <p className="font-bold">Settings</p>
            <p>
              <BiChevronRight />
            </p>
          </div>
        </div>
      </div>

      <footer className="flex w-full items-center justify-between text-3xl px-5 mt-32 text-slate-300">
        <IoHomeOutline />
        <BsGraphUpArrow />
        <IoMailOutline />
        <FaRegUser className="h-10 w-10 rounded-full bg-slate-200 text-purple-400 p-2" />
      </footer>
    </div>
  );
}

export default MobileNavigation;
