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
  const [uid, setUid] = useState();
  const [userName, setUserName] = useState();
  const [name, setName] = useState();
  const [surname, setSurname] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const doSubmit = () => {
    // console.log('todo.. submit')
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
          onClick={doSubmit}
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
