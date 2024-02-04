"use client";

import React, { useState } from "react";

const ConfigCard = ({ start_price, rate_price, time }) => {

  const [startPrice, setStartPrice] = useState(start_price);
  const [ratePriceValue, setRatePriceValue] = useState(rate_price.value);
  const [ratePriceUnit, setRatePriceUnit] = useState(rate_price.unit);
  const [ratePriceTimeUnit, setRatePriceTimeUnit] = useState(rate_price.time_unit);
  const [timeUnit, setTimeUnit] = useState(time.unit);
  const [timeRange, setTimeRange] = useState(time.range);
  
  const doSubmit = () => {
    // console.log('todo.. submit')
  }

  return (
    <div className="w-[21rem] flex flex-col gap-2 p-3 border rounded-3xl bg-white">
      
      <div className='w-full flex flex-col gap-1'>
        <div className="px-2 text-gray-600">ราคาเริ่มต้น</div>
        <input 
          type="text"
          className="px-3 py-1 border border-gray-400 rounded-full"
          value={startPrice}
          onChange={(e) => {setStartPrice(e.target.value);}}
        />  
      </div>

      <div className='w-full flex flex-col gap-1'>
        <div className="px-2 text-gray-600">อัตราราคาจอดรถ</div>
        <div className="w-full flex flex-row justify-between items-center gap-2">
          <input 
            type="text"
            className="w-[5rem] px-3 py-1 border border-gray-400 rounded-full"
            value={ratePriceValue}
            onChange={(e) => {setRatePriceValue(e.target.value)}}
          />
          <input 
            type="text"
            className="w-[5rem] px-3 py-1 border border-gray-400 rounded-full"
            value={ratePriceUnit}
            onChange={(e) => {setRatePriceUnit(e.target.value)}}
          />
          <div>ต่อ</div>
          <input 
            type="text"
            className="w-[5rem] px-3 py-1 border border-gray-400 rounded-full"
            value={ratePriceTimeUnit}
            onChange={(e) => {setRatePriceTimeUnit(e.target.value)}}
          />
        </div>
      </div>

      <div className='w-full flex flex-col gap-1'>
        <div className="px-2 text-gray-600">ช่วงเวลา</div>
        <div className="w-full flex flex-row items-center gap-2">
          <input 
            type="text"
            className="w-[5rem] px-3 py-1 border border-gray-400 rounded-full"
            value={timeUnit}
            onChange={(e) => {setTimeUnit(e.target.value)}}
          />
          <input 
            type="text"
            className="w-[13rem] px-3 py-1 border border-gray-400 rounded-full"
            value={timeRange}
            onChange={(e) => {setTimeRange(e.target.value)}}
          />
        </div>
      </div>

      <div className="w-full flex flex-row justify-end py-2">
        <div
          onClick={doSubmit}
          className="text-center cursor-pointer bg-[#00818A] text-white px-10 py-1 rounded-full whitespace-nowrap"
        >
          บันทึก
        </div>
      </div>

    </div>
  )

}

export default ConfigCard;