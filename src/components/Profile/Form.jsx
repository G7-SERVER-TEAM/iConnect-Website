"use client";

import React from "react";
import Input from "@/components/ManageAccount/Input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProfileForm = ({
  user_id = "",
  username = "",
  firstname = "",
  lastname = "",
}) => {
  const router = useRouter();
  const access_token = localStorage.getItem('token');
  const [uid, setUid] = useState();
  const [userName, setUserName] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const updateUserProfile = async (access_token, information, uid) => {
    const ICONNECT_API = `http://10.4.13.158:8080/user/profile/update/${uid}`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "PATCH",
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

  const updateAccountPassword = async (access_token, information, uid) => {
    const ICONNECT_API = `http://10.4.13.158:8081/account/update/password/${uid}`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "PATCH",
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

  const editProfile = () => {
    const userInformation = {
      name: name,
      surname: surname,
    };
    const accountInformation = {
      username: userName,
      password: password,
      confirm_password: confirmPassword,
    };
    updateUserProfile(access_token, userInformation, user_id).then(() => {
      updateAccountPassword(access_token, accountInformation, user_id).then(() => {
        router.replace("/business-overview");
      })
    })
  };

  return (
    <div className="w-full flex flex-col gap-4 bg-white px-10 py-6 shadow-md rounded-md">
      <div className="text-xl">ข้อมูลบัญชี</div>
      <div className="w-full flex flex-col gap-2">
        <Input title={`ชื่อจริง`}>
          <input
            type="text"
            className="px-4 py-1 border border-gray-400 rounded-full"
            defaultValue={firstname}
            onChange={(e) => setName(e.target.value)}
          />
        </Input>
        <Input title={`นามสกุล`}>
          <input
            type="text"
            className="px-4 py-1 border border-gray-400 rounded-full"
            defaultValue={lastname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </Input>
        <Input title={`บัญชีผู้ใช้งาน`}>
          <input
            type="text"
            className="px-4 py-1 border border-gray-400 rounded-full disabled:bg-gray-300"
            defaultValue={username}
            onChange={(e) => setUserName(e.target.value)}
            disabled
          />
        </Input>
        <Input title={`รหัสผ่าน`}>
          <input
            type="password"
            className="px-4 py-1 border border-gray-400 rounded-full"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Input>
        <Input title={`ยืนยันรหัสผ่าน`}>
          <input
            type="password"
            className="px-4 py-1 border border-gray-400 rounded-full"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Input>
      </div>

      <div className="w-full flex flex-row justify-end gap-3 pt-10">
        <div
          onClick={editProfile}
          className="text-center cursor-pointer bg-[#00818A] text-white px-10 py-1 rounded-full whitespace-nowrap"
        >
          บันทึก
        </div>
        {/* <a
          href="/user-management"
          className="text-center cursor-pointer bg-gray-300 text-black px-10 py-1 rounded-full whitespace-nowrap"
        >
          กลับ
        </a> */}
      </div>
    </div>
  );
};

export default ProfileForm;
