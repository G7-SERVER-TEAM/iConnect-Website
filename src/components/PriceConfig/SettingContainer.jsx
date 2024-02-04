"use client";

import React, { useState } from "react";
import ConfigCard from '@/components/PriceConfig/ConfigCard'
import { Icon } from '@iconify/react';

const SettingContainer = ({title}) => {

  const [settings, setSettings] = useState([
    {
      start_price: "0 บาท",
      rate_price: {
        value: "20",
        unit: "บาท",
        time_unit: "ชั่วโมง",
      },
      time: {
        unit: "ชั่วโมง",
        range: "10:00:00 - 13:00:00",
      }
    },
    {
      start_price: "10 บาท",
      rate_price: {
        value: "22",
        unit: "บาท",
        time_unit: "ชั่วโมง",
      },
      time: {
        unit: "ชั่วโมง",
        range: "13:00:00 - 21:00:00",
      }
    },
  ]);

  const addSettingCard = () => {
    
    const newSetting = {
      start_price: "0 บาท",
      rate_price: {
        value: "20",
        unit: "บาท",
        time_unit: "ชั่วโมง",
      },
      time: {
        unit: "ชั่วโมง",
        range: "10:00:00 - 13:00:00",
      }
    };

    // Update settings array with the new setting
    setSettings([...settings, newSetting]);

  }

  return (
    <div className="w-full flex flex-col bg-white rounded-xl shadow p-4 gap-6">

      <div className="flex flex-col justify-center items-start">
        <div className='text-xl text-gray-600 font-bold'>
          { title }
        </div>
        <div>2 การตั้งค่า</div>
      </div>

      <div className="w-full max-w-[76rem] flex flex-row overflow-x-scroll gap-3">
        { 
          settings.map((item, index) => {
            return (
              <ConfigCard
                key={index}
                start_price={item.start_price}
                rate_price={item.rate_price}
                time={item.time}
              />
            )
          })
        }
        <div 
          onClick={addSettingCard}
          className="w-[20rem] flex flex-col justify-center items-center gap-4 py-3 px-[9rem] border rounded-3xl bg-white cursor-pointer hover:bg-slate-100/50"
        >
          <div className="bg-gray-300 p-4 rounded-full">
            <Icon icon="tabler:plus" width="4rem" height="4rem" style={{color: '#FFF'}} />
          </div>
          <div className="whitespace-nowrap">เพิ่มการตั้งค่า</div>
        </div>
      </div>
      
    </div>
  )

}

export default SettingContainer;