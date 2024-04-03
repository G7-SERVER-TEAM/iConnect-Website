'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  RiBarChartBoxFill,
  RiArticleFill,
  RiCarFill,
  RiUserFill,
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiLogoutBoxRFill,
  RiEditBoxFill,
} from "react-icons/ri";

export default function Sidebar({ children }) {
  const router = useRouter();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const user_id = localStorage.getItem("uid");
  const role_id = localStorage.getItem("role_id");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (user_id && role_id && token) {
      getUserData(user_id, token).then((userData) => {
        setName(userData.name);
        setSurname(userData.surname);
      });
    }
  }, [user_id, role_id, token]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const getUserData = async (uid, access_token) => {
    const ICONNECT_API = `http://192.168.1.5:8080/user/id/${uid}`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (result.ok) {
        const responseBody = await result.text();
        const userData = JSON.parse(responseBody);
        return userData.result;
      }
    } catch (err) {
      console.error(err, err.stack);
    }
  };

  const logOut = () => {
    localStorage.clear();
    router.replace("/");
  };

  return (
    <div className="flex">
      <div className="fixed xl:w-[13rem] w-[5rem] h-screen flex flex-col bg-[#0E2E3B] p-3 justify-between">
        <div className="flex flex-col gap-5 items-center">
          <div className="flex flex-row items-center gap-2">
            <div className="bg-[#01352C] rounded-full p-2">
              <Image
                alt="icon"
                src={"/WelcomePicture.png"}
                width={50}
                height={50}
              />
            </div>
            <h1 className="text-white text-xl xl:flex hidden">iConnect</h1>
          </div>
          <div className="flex flex-col gap-3">
            {role_id == 2 ? (
              <Link href="/usage-overview">
                <div className="text-white flex gap-2 items-center cursor-pointer">
                  <RiBarChartBoxFill size={20} />
                  <h1 className="xl:flex hidden">ภาพรวม</h1>
                </div>
              </Link>
            ) : (
              <Link href="/business-overview">
                <div className="text-white flex gap-2 items-center cursor-pointer">
                  <RiBarChartBoxFill size={20} />
                  <h1 className="xl:flex hidden">ภาพรวมธุรกิจ</h1>
                </div>
              </Link>
            )}
            {role_id == 2 ? (
              <Link href="/price-config">
                <div className="text-white flex gap-2 items-center cursor-pointer">
                  <RiArticleFill size={20} />
                  <h1 className="xl:flex hidden">กำหนดราคาค่าจอดรถ</h1>
                </div>
              </Link>
            ) : (
              <Link href="/customer-analytics">
                <div className="text-white flex gap-2 items-center cursor-pointer">
                  <RiCarFill size={20} />
                  <h1 className="xl:flex hidden">พฤติกรรมผู้ใช้บริการ</h1>
                </div>
              </Link>
            )}
            {role_id == 2 ? (
              <div></div>
            ) : (
              <Link href="/user-management">
                <div className="text-white flex gap-2 items-center cursor-pointer">
                  <RiUserFill size={20} />
                  <h1 className="xl:flex hidden">จัดการสมาชิก</h1>
                </div>
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className={isClicked ? "bg-[#404B69] rounded-t-xl" : "hidden"}>
            <Link
              href="/edit-profile"
              className="profile__upward__btn hover:bg-[#00818A] hover:rounded-t-xl"
            >
              <RiEditBoxFill size={20} onClick={handleClick} />
              <p className="text-lg xl:flex hidden" onClick={handleClick}>แก้ไขโปรไฟล์</p>
            </Link>
            <button
              onClick={() => logOut()}
              className="profile__upward__btn hover:bg-[#00818A]"
            >
              <RiLogoutBoxRFill size={20} />
              <p className="text-lg xl:flex hidden">ออกจากระบบ</p>
            </button>
          </div>
          <button
            disabled={false}
            type={"button"}
            className={
              isClicked
                ? "profile__btn bg-[#404B69] border-t-2 border-solid border-[#A7A7A7]"
                : "profile__btn"
            }
            onClick={handleClick}
          >
            <div className="xl:flex hidden flex-col">
              <span className="text-lg xl:flex hidden">
                {name} {surname}
              </span>
              <span className="text-xs xl:flex hidden">
                {role_id == 2 ? "Junior Officer" : "Business Owner"}
              </span>
            </div>
            {isClicked ? (
              <RiArrowUpSLine size={20} />
            ) : (
              <RiArrowDownSLine size={20} />
            )}
          </button>
        </div>
      </div>
      <main className="xl:ml-[13rem] ml-[5rem] w-full">{children}</main>
    </div>
  );
}
