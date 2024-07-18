import Image from "next/image";
import Avatar from "../../assets/profile-card/avatar.png";
import {
  ArrowLeftOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  OpenAIFilled,
  XOutlined,
} from "@ant-design/icons";
import Link from "next/link";

function page() {
  return (
    <div className="h-screen bg-[#f0f3c0] p-5">
      <div className="w-full">
        <Link href={"/"} className="font-semibold hover:underline">
          <ArrowLeftOutlined /> Back
        </Link>
      </div>
      <div className="flex justify-center items-center h-full">
          <div className="bg-gray-100 w-96 rounded-3xl shadow-2xl overflow-hidden pb-8">
            <div className="h-[200px] bg-[#983250] shadow-md flex items-center justify-center">
              <Image
                alt="image"
                src={Avatar}
                height={150}
                width={150}
                className="object-none h-[120px] w-[120px] overflow-hidden rounded-full border-2 border-[#f0f3c0] shadow-md z-10"
              />
            </div>
            <div className="flex justify-center flex-col items-center gap-8 px-6">
              <div className="flex flex-col items-center pt-8">
                <p className="text-2xl tracking-widest font-semibold">
                  Joni Rogers
                </p>
                <p className="text-gray-500">@jonirogers</p>
              </div>
              <div className="flex gap-7 text-2xl">
                <FacebookFilled />
                <LinkedinFilled />
                <XOutlined />
                <InstagramFilled />
                <OpenAIFilled />
              </div>
              <div>
                <p className="text-center font-semibold text-sm">
                  Crafting brand and communication strategies, creating visual
                  designs, leading art direction, and capturing portraits through
                  photography.
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
    </div>
  );
}

export default page;
