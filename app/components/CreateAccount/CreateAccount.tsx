"use client";

import Image from "next/image";
import bgImage from "../../../assets/create-account/background.jpg";
import Link from "next/link";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import {
  MdAccountBox,
  MdMail,
  MdVisibility,
  MdVisibilityOff,
} from "react-icons/md";
import { useState } from "react";

function CreateAccount() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: any) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      email,
      password,
    };
    console.log(data);
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="h-screen bg-violet-100 flex justify-center items-center font-ubuntu px-10">
      <div className="overflow-hidden rounded-2xl w-[1240px] h-[700px] flex items-center justify-center md:justify-start md:pl-16 bg-violet-50 shadow-lg bg-gradient-to-r from-cyan-100 to-fuchsia-400">
        <div className="p-3 w-[390px]">
          <div className="mb-10">
            <p className="uppercase text-gray-400 font-bold">start for free</p>
            <h1 className="font-bold text-3xl">Create new account</h1>
          </div>

          <form onSubmit={submit} className="flex flex-col gap-2">
            <div className="flex gap-2">
              <TextField
                label="First name"
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MdAccountBox />
                    </InputAdornment>
                  ),
                }}
                className="bg-violet-100 rounded-md"
              />
              <TextField
                label="Last name"
                variant="outlined"
                onChange={(e) => setLastName(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <MdAccountBox />
                    </InputAdornment>
                  ),
                }}
                className="bg-violet-100 rounded-md"
              />
            </div>
            <TextField
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <MdMail />
                  </InputAdornment>
                ),
              }}
              className="bg-violet-100 rounded-md"
            />
            <FormControl variant="outlined" className="bg-violet-100 rounded-md">
              <InputLabel>Password</InputLabel>
              <OutlinedInput
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>

            <div className="flex gap-2 mt-2">
              <p className="font-bold text-gray-400">
                Already have an account?
              </p>
              <Link
                href="#"
                className="font-bold text-blue-500 hover:text-blue-600 mb-5"
              >
                Sign in
              </Link>
            </div>

            <button
              type="submit"
              className="font-bold text-gray-100 bg-blue-500 rounded-full w-full hover:bg-blue-600 shadow-md p-2"
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
