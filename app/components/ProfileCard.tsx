import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  OpenAIFilled,
  XOutlined,
} from "@ant-design/icons";
import Image, { StaticImageData } from "next/image";
import React from "react";
import Avatar from "../../assets/profile-card/avatar.png";
import Social, { SocialLink } from "./Social";

interface Props {
  fullName: string;
  username: string;
  bio: string;
  socials: SocialLink[];
  avatar: StaticImageData;
}

export default function ProfileCard({
  bio,
  fullName,
  socials,
  username,
  avatar,
}: Props) {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-gray-100 w-96 rounded-3xl shadow-2xl overflow-hidden pb-8">
        <div className="h-[200px] bg-[#983250] shadow-md flex items-center justify-center">
          <Image
            alt="image"
            src={avatar ?? Avatar}
            height={150}
            width={150}
            className="object-none h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-[#f0f3c0] shadow-md z-10"
          />
        </div>
        <div className="flex justify-center flex-col items-center gap-8 px-6">
          <div className="flex flex-col items-center pt-8">
            <p className="text-2xl tracking-widest font-semibold">
              {fullName ?? "<FULL NAME>"}
            </p>
            <p className="text-gray-500">{username ?? "<@USERNAME>"}</p>
          </div>
          <div className="flex gap-7 text-2xl">
            {socials.map((social) => (
              <Social key={social.name} name={social.name} link={social.link} />
            ))}
            {/* <FacebookFilled />
            <LinkedinFilled />
            <XOutlined />
            <InstagramFilled />
            <OpenAIFilled /> */}
          </div>
          <div>
            <p className="text-center font-semibold text-sm">
              {bio ??
                "<BIO> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo rem officiis odio ex ad velit suscipit fuga dicta amet? Quidem laborum accusantium numquam nostrum nemo modi error voluptas aliquam perspiciatis!"}
            </p>
          </div>
          <div className="flex justify-between w-full mt-5">
            <button className="bg-[#e03f8c] text-gray-100 w-36 h-10 text-sm rounded-full font-semibold hover:bg-[#ff7dbc] hover:text-white transition">
              Follow
            </button>
            <button className="text-gray-400 w-36 h-10 text-sm rounded-full font-semibold border border-gray-400 hover:bg-gray-200 hover:text-gray-500 transition">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
