"use client";
import React, { useState, useEffect } from "react";
import Form from "@/components/Login/Form";
import Img from "next/image";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { login } from "@/utils/auth.js";

export default function Login() {
  const router = useRouter();
  const [isLogInFailed, setIsLogInFailed] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    setIsClick(false);
  }, []);

  const handleLogin = async () => {
    const success = await login(user);
    if (!success) {
      if (!isLogInFailed) {
        setIsLogInFailed(!isLogInFailed);
      }
    } else if (success) {
      if (isClick) {
        router.replace("/business-overview");
      } else {
        router.replace("/usage-overview");
      }
      if (isLogInFailed) {
        setIsLogInFailed(!isLogInFailed);
      }
    }

    console.log("Does log-in failed?:", isLogInFailed);
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col gap-2 items-center bg-white rounded-[20px] w-96 pt-10 pb-10">
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-[#01352C] rounded-full p-2">
            <Img
              alt="Icon"
              src={"/WelcomePicture.png"}
              width={50}
              height={50}
              priority={true}
            />
          </div>
          <h1 className="font-semibold text-xl text-[#01352C]">iConnect</h1>
        </div>
        <h2 className="font-bold text-2xl text-[#01352C]">Login</h2>
        <div className="border-black border-[1px] rounded-lg flex text-center">
          <button
            onClick={() => {
              setIsClick(!isClick);
            }}
            className={
              isClick
                ? "opacity-50 role__btn"
                : "bg-[#0E2E3B] text-white role__btn"
            }
          >
            Junior Officer
          </button>
          <button
            onClick={() => {
              setIsClick(!isClick);
            }}
            className={
              isClick
                ? "bg-[#0E2E3B] text-white role__btn"
                : "opacity-50 role__btn"
            }
          >
            Business Owner
          </button>
        </div>
        <form className="flex flex-col w-[15.5em]" action={handleLogin}>
          {isLogInFailed ? (
            <div className="bg-red-200 rounded-lg p-4 text-center">
              <p className="text-gray-500">We do not recognize</p>
              <p className="text-gray-500">the username or password</p>
            </div>
          ) : (
            <div></div>
          )}
          <Form
            id="username"
            label="Username"
            type="text"
            value={user.username}
            style={
              isLogInFailed
                ? "block border-red-500 border-[2px] rounded-[30px] w-full px-2"
                : "block border-black border-[1px] rounded-[30px] w-full px-2"
            }
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <Form
            id="password"
            label="Password"
            type="password"
            value={user.password}
            style={
              isLogInFailed
                ? "block border-red-500 border-[2px] rounded-[30px] w-full px-2"
                : "block border-black border-[1px] rounded-[30px] w-full px-2"
            }
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            className="bg-[#00818A] text-white rounded-[30px] cursor-pointer p-1 mt-3 text-center"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
