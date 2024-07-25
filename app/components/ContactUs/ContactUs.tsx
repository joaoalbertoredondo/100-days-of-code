"use client";

import { useState } from "react";
import mapImage from "../../../assets/contact-us/map2.jpg"
import Image from "next/image";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: any) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      contact,
      message,
    };

    console.log("Info: ", data);
    /**
     * TODO: Implement backend call or call to service
     */
  };

  return (
    <div className="bg-gradient-to-b from-[#482BDF] to-[#47022E] h-full md:h-screen flex items-center justify-center font-sans p-10 min-h-screen">
      <div className="flex flex-col md:flex-row gap-10 py-20">
        <div className="h-full w-full text-gray-100 flex flex-col gap-20">
          <div>
            <h1 className="text-[3rem] drop-shadow-md">Contact Us</h1>
            <p>
              Get in touch with us! Wheder you have questions, feedback, or just
              want to say hello, we're here for you.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[#FE007A] rounded-lg p-3 gap-4 w-3/4">
              <p>Windler, Lockman and McClure</p>
              <p className="text-gray-300">3629 N Cole Rd, Boise, Illinois</p>
            </div>
            <div className="h-0 w-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-[10px] border-t-[#FE007A]"></div>
            <div className="flex justify-center items-center mt-4">
              <div className="absolute h-3 w-3 bg-[#FE007A] rounded-full mt-3 z-10"></div>
              <div className="absolute h-5 w-5 bg-[#FE007A]/30 rounded-full mt-3 animate-ping z-10"></div>
              <div className="absolute h-7 w-7 bg-[#FE007A]/20 rounded-full mt-3 animate-ping z-10"></div>
              <Image src={mapImage} alt="" className="h-[14rem] opacity-50 rounded-2xl object-none z-0"/>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 h-full w-full rounded-3xl shadow-xl">
          <div className="flex flex-col p-8">
            <form className="flex flex-col gap-3" onSubmit={submit}>
              <h1 className="font-bold">Send us a Message</h1>

              <input
                type="text"
                placeholder="Name"
                className="p-2 rounded-xl text-sm border border-gray-300 focus:outline-blue-400"
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder="Email"
                className="p-2 rounded-xl text-sm border border-gray-300 focus:outline-blue-400"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <input
                type="tel"
                placeholder="Phone"
                className="p-2 rounded-xl text-sm border border-gray-300 focus:outline-blue-400"
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <p className="text-gray-500 text-sm">
                Preferred contact method of communication
              </p>

              <div className="flex gap-5">
                <div className="flex gap-1 text-sm text-gray-500">
                  <input
                    type="radio"
                    name="input"
                    value={"email"}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                  <p>Email</p>
                </div>

                <div className="flex gap-1 text-sm text-gray-500">
                  <input
                    type="radio"
                    name="input"
                    value={"phone"}
                    onChange={(e) => setContact(e.target.value)}
                    required
                  />
                  <p>Phone</p>
                </div>
              </div>

              <textarea
                name="message"
                placeholder="Message"
                className="p-2 rounded-xl text-sm border border-gray-300 h-[130px] focus:outline-blue-400"
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

              <button
                type="submit"
                className="bg-[#fe007a] text-white rounded-full p-3 mt-16 hover:bg-[#ca0062]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
