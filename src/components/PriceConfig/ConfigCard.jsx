"use client";

import React, { useState } from "react";
import { Icon } from '@iconify/react';

const ConfigCard = ({ start_hour, end_hour, price, index, onRemove }) => {

  const [startHour, setStartHour] = useState(start_hour);
  const [endHour, setEndHour] = useState(end_hour);
  const [priceValue, setPriceValue] = useState(price);

  const handleRemove = () => {
    onRemove(index);
  };

  return (
    <div className="relative w-full flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-0 border rounded-3xl bg-white my-3 px-2 lg:px-8 py-10">

      <div className='w-full flex flex-row justify-center items-center gap-4 lg:gap-6 xl:gap-8'>
        <div className="w-10 lg:w-min text-gray-600">ตั้งแต่</div>
        <input 
          type="number"
          className="w-36 lg:w-24 text-center px-3 py-1 border border-gray-400 rounded-full focus:outline-none"
          value={startHour}
          onChange={(e) => {setStartHour(e.target.value);}}
          readOnly
        />  
        <div className="w-10 lg:w-min text-gray-600">ชั่วโมง</div>
      </div>

      <div className='w-full flex flex-row justify-center items-center gap-4 lg:gap-6 xl:gap-8'>
        <div className="w-10 lg:w-min text-gray-600">ถึง</div>
        <input 
          type="number"
          className="w-36 lg:w-24 text-center px-3 py-1 border border-gray-400 rounded-full"
          min={parseInt(startHour)+1}
          value={endHour}
          onChange={(e) => {setEndHour(e.target.value);}}
        />  
        <div className="w-10 lg:w-min text-gray-600">ชั่วโมง</div>
      </div>
      
      <div className='w-full flex flex-row justify-center items-center gap-4 lg:gap-6 xl:gap-8'>
        <div className="w-10 lg:w-min text-gray-600">ราคา</div>
        <input 
          type="text"
          className="w-36 text-center px-3 py-1 border border-gray-400 rounded-full"
          value={priceValue}
          onChange={(e) => {setPriceValue(e.target.value);}}
        />  
        <div className="w-10 lg:w-min text-gray-600">บาท</div>
      </div>

      { index > 0 && 
        <div 
          className="absolute top-2 right-2"
        >
          <div 
            onClick={handleRemove}
            className="cursor-pointer bg-red-300 p-2 rounded-full"
          >
            <Icon icon="tabler:minus" width="1rem" height="1rem" style={{color: '#FFF'}} />
          </div>
        </div>
      }

    </div>
  )

}

export default ConfigCard;