"use client";

import { Switch } from "@mui/material";
import { useState } from "react";
import { BiRefresh } from "react-icons/bi";
import { FaRegCopy } from "react-icons/fa";

function PasswordGenerator() {
  const [inputValue, setInputValue] = useState(16);

  return (
    <div className="h-screen bg-[#F6E8FE] flex justify-center items-center p-10">
      <div className="w-[400px] bg-[#090311] rounded-3xl py-10 px-6 gap-10 flex flex-col">
        <h1 className="font-semibold text-2xl text-[#F6E8FE]">
          Generate password
        </h1>

        <form action="">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="text-[#676072] font-semibold">
                GENERATED PASSWORD
              </h2>
              <div className="flex items-center justify-between rounded-2xl bg-[#26183B] w-full text-[#080808] text-xl p-4">
                sZnjK7Gb4Fc
                <div className="flex gap-1 items-center">
                  <button>
                    <FaRegCopy color="#CF60FA" />
                  </button>
                  <button>
                    <BiRefresh color="#CF60FA" size={32} />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-baseline">
                <h2 className="text-[#676072] font-semibold">
                  CHARACTER LENGTH:
                </h2>
                <span className="text-[#CF60FA] text-xl">{inputValue}</span>
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#26183B] w-full text-[#dccde6] text-xl p-4">
                <span className="text-[#dccde6] text-sm">6</span>
                <div className="cursor-progress absolute h-1 rounded bg-green-300"></div>
                <input
                  className="w-full rounded-lg h-2 cursor-pointer dark:bg-[#676072] accent-[#dccde6]"
                  type="range"
                  min={6}
                  max={32}
                  step={2}
                  value={inputValue}
                  onChange={(e) => setInputValue(parseInt(e.target.value))}
                />
                <span className="text-[#dccde6] text-sm">32</span>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h2 className="text-[#676072] font-semibold">SETTINGS</h2>
              <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#26183B] w-full text-[#dccde6] text-xl p-4">
                <span className="text-[#dccde6] text-lg">
                  Include uppercase letters
                </span>
                <Switch size="small" color="secondary" />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#26183B] w-full text-[#dccde6] text-xl p-4">
                <span className="text-[#dccde6] text-lg">
                  Include lowercase letters
                </span>
                <Switch size="small" color="secondary" />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#26183B] w-full text-[#dccde6] text-xl p-4">
                <span className="text-[#dccde6] text-lg">Include numbers</span>
                <Switch size="small" color="secondary" />
              </div>

              <div className="flex items-center justify-between gap-4 rounded-2xl bg-[#26183B] w-full text-[#dccde6] text-xl p-4">
                <span className="text-[#dccde6] text-lg">Include symbols</span>
                <Switch size="small" color="secondary" />
              </div>
            </div>

            <button className="bg-[#CF60FA] text-[#e8dcf0] p-3 text-lg font-bold rounded-xl hover:bg-[#bc3eee] transition">
              Generate Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordGenerator;
