"use client";

import React from "react";
import Input from '@/components/ManageAccount/Input'

const ManageAccountForm = ({user_id='', username='', firstname='', lastname='', location=''}) => {

  const doSubmit = () => {
    // console.log('todo.. submit')
  }

  return (
    <div className='w-full flex flex-col gap-4 bg-white px-10 py-6 shadow-md rounded-md'>
      <div className="text-xl">ข้อมูลบัญชี</div>
      <div className="w-full flex flex-col gap-2">
        <Input title={`ชื่อจริง`} >
          <input 
            type="text"
            className="px-3 py-1 border border-gray-400 rounded-full"
          />  
        </Input>
        <Input title={`นามสกุล`} >
          <input 
            type="text"
            className="px-3 py-1 border border-gray-400 rounded-full"
          />  
        </Input>
        <Input title={`บัญชีผู้ใช้งาน`} >
          <input 
            type="text"
            className="px-3 py-1 border border-gray-400 rounded-full"
          />  
        </Input>
        <Input title={`รหัสผ่าน`} >
          <input 
            type="password"
            className="px-3 py-1 border border-gray-400 rounded-full"
          />  
        </Input>
        <Input title={`สถานที่`} >
          <input 
            type="text"
            className="px-3 py-1 border border-gray-400 rounded-full"
          />  
        </Input>
        
        <div className='w-full flex flex-col gap-1'>
          <div className="px-2 text-gray-600 text-lg">ตำแหน่ง</div>
          <div className="select-input">
            <select className="px-3 py-1 border border-gray-400 rounded-full">
              <option value="" selected>เลือกตำแหน่ง</option>
              <option value="position_a">position_a</option>
              <option value="position_b">position_b</option>
              <option value="position_c">position_c</option>
              <option value="position_d">position_d</option>
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
  )

}

export default ManageAccountForm;