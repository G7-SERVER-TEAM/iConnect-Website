"use client";

import React from "react";
import Image from 'next/image'
import { Icon } from '@iconify/react';

const ProfileImage = () => {
  
  return (
    <div className='w-full flex flex-col items-center gap-4 px-10 pt-16 pb-10 bg-white shadow-md rounded-md'>
      <div className='relative border-t border-black pt-4'>
        <Image
          width={200}
          height={200}
          alt=""
          src="/demo/profile.png"
        />
        <div className="absolute top-5 right-4">
          <div className="p-2 bg-[#0E2E3B] rounded-full cursor-pointer">
            <Icon icon="icomoon-free:bin" width="24" height="24" style={{color: "#FFFFFF"}}  />
          </div>
        </div>
      </div>

      <a
        href="#"
        className="w-fit mx-auto text-center cursor-pointer bg-[#00818A] text-white px-10 py-2 rounded-full whitespace-nowrap"
      >
        Upload
      </a>
    </div>
  )
}

export default ProfileImage;