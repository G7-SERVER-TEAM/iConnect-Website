"use client";

import React from "react";
import Input from "@/components/ManageAccount/Input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ManageAccountForm = ({
  username = "",
  firstname = "",
  lastname = "",
  location = "",
  id = "",
}) => {
  const router = useRouter();
  const [uid, setUid] = useState();
  const [userName, setUserName] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [area, setArea] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInVzZXJuYW1lIjoidGVzdDIiLCJpYXQiOjE3MTE1Mzc1ODgsImV4cCI6MTcxMTU0ODM4OH0.NRG1kslIz08RD7O45XSS0XXxeZbkmc53LqdQlbPP2F0";

  const signUp = async (access_token, information) => {
    const ICONNECT_API = `http://10.4.13.53:8081/auth/username/sign-up`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(information),
      });
      if (result.ok) {
        const responseBody = await result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  const generateThaiPhoneNumber = () => {
    const mobilePrefixes = ["08", "09", "06"];
    const prefix =
      mobilePrefixes[Math.floor(Math.random() * mobilePrefixes.length)];
    const firstPart = Math.floor(Math.random() * 1000)
      .toString()
      .padStart(4, "0");
    const secondPart = Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");
    return `${prefix}${firstPart}${secondPart}`;
  };

  const userProfile = async (access_token, information) => {
    const ICONNECT_API = `http://10.4.13.53:8080/user/profile/create`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(information),
      });
      if (result.ok) {
        const responseBody = await result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  const doSubmit = () => {
    const userInformation = {
      name: name,
      surname: surname,
      email: `${name}_.${surname}@local.dev`,
      birth_date: new Date(),
      phone_number: generateThaiPhoneNumber(),
      role_id: role,
      area: 1,
    };
    userProfile(access_token, userInformation).then((result) => {
      const user = JSON.parse(result);
      const userID = user.result.uid;
      const account = {
        username: userName,
        password: password,
        uid: userID,
      };
      signUp(access_token, account).then(() => {
        router.replace('/user-management');
      })
    });
  };

  return (
    <div className="w-full flex flex-col gap-4 bg-white px-10 py-6 shadow-md rounded-md">
      <div className="text-xl">ข้อมูลบัญชี</div>
      <div className="w-full flex flex-col gap-2">
        <Input title={`ชื่อจริง`}>
          <input
            type="text"
            className="px-3 py-1 border border-gray-400 rounded-full"
            defaultValue={firstname}
            onChange={(e) => setName(e.target.value)}
          />
        </Input>
        <Input title={`นามสกุล`}>
          <input
            type="text"
            className="px-3 py-1 border border-gray-400 rounded-full"
            defaultValue={lastname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Input>
        <Input title={`บัญชีผู้ใช้งาน`}>
          <input
            type="text"
            className="px-3 py-1 border border-gray-400 rounded-full disabled:bg-gray-300"
            defaultValue={username}
            onChange={(e) => setUserName(e.target.value)}
            disabled={id != ""}
          />
        </Input>
        <Input title={`รหัสผ่าน`}>
          <input
            type="password"
            className="px-3 py-1 border border-gray-400 rounded-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input>
        <Input title={`สถานที่`}>
          <input
            type="text"
            className="px-3 py-1 border border-gray-400 rounded-full"
            defaultValue={location}
            onChange={(e) => setArea(e.target.value)}
          />
        </Input>

        <div className="w-full flex flex-col gap-1">
          <div className="px-2 text-gray-600 text-lg">ตำแหน่ง</div>
          <div className="select-input">
            <select
              className="px-3 py-1 border border-gray-400 rounded-full"
              value={role}
              onChange={handleRoleChange}
            >
              <option value="" selected>
                เลือกตำแหน่ง
              </option>
              <option value="2">Junior Officer</option>
              <option value="3">Business Owner</option>
            </select>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-end gap-3 pt-10">
        <div
          onClick={doSubmit}
          className="text-center cursor-pointer bg-[#00818A] text-white px-10 py-1 rounded-full whitespace-nowrap"
        >
          บันทึก
        </div>
        <a
          href="/user-management"
          className="text-center cursor-pointer bg-gray-300 text-black px-10 py-1 rounded-full whitespace-nowrap"
        >
          กลับ
        </a>
      </div>
    </div>
  );
};

export default ManageAccountForm;
