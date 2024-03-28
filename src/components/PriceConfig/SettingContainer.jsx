"use client";

import React, { useState } from "react";
import ConfigCard from '@/components/PriceConfig/ConfigCard'
import { Icon } from '@iconify/react';

const SettingContainer = ({title}) => {

  const [settings, setSettings] = useState([
    {
      start_hour: "0",
      end_hour: "2",
      price: "0",
    },
  ]);

  const addSettingCard = () => {
    
    const prevData = settings[settings.length-1]

    const newSetting = {
      start_hour: prevData.end_hour,
      end_hour: parseInt(prevData.end_hour) + 1,
      price: "0",
    };

    // Update settings array with the new setting
    setSettings([...settings, newSetting]);

  }
  const removeSettingCard = (itemIndex) => {
    setSettings((prevSettings) => prevSettings.filter((_, index) => index !== itemIndex));
  };

  const doSubmit = () => {
    // console.log('todo.. submit')
  }

  return (
    <div className="w-full flex flex-col bg-white rounded-xl shadow p-4 gap-6">

      <div className="flex flex-col justify-center items-start">
        <div className='text-xl text-gray-600 font-bold'>
          { title }
        </div>
        <div>2 การตั้งค่า</div>
      </div>

      <div className="w-full flex-col">
        { 
          settings.map((item, index) => {
            return (
              <ConfigCard
                key={index}
                index={index}
                start_hour={item.start_hour}
                end_hour={item.end_hour}
                price={item.price}
                onRemove={removeSettingCard}
              />
            )
          })
        }
        <div 
          onClick={addSettingCard}
          className="w-full flex flex-col justify-center items-center gap-4 py-4 px-[9rem] border rounded-3xl bg-white cursor-pointer hover:bg-slate-100/50"
        >
          <div className="bg-gray-300 p-4 rounded-full">
            <Icon icon="tabler:plus" width="2rem" height="2rem" style={{color: '#FFF'}} />
          </div>
          <div className="whitespace-nowrap">เพิ่มการตั้งค่า</div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-end gap-3">
        <div
          onClick={doSubmit}
          className="text-center cursor-pointer bg-[#00818A] text-white px-10 py-1 rounded-full whitespace-nowrap"
        >
          บันทึก
        </div>
        <a
          href="/price-config"
          className="text-center cursor-pointer bg-gray-300 text-black px-10 py-1 rounded-full whitespace-nowrap"
        >
          กลับ
        </a>
      </div>  
      
    </div>
  )

}

export default SettingContainer;