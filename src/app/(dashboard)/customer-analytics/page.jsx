"use client"
import React from 'react'
import ReactDatePicker from '@/components/ReactDatePicker'
import LineChart from '@/components/CustomerAnalytics/LineChart'
import PriceLineChart from '@/components/CustomerAnalytics/PriceLineChart'

const CustomerAnalytics = () => {
  return (
    <main className='min-h-screen 2xl:px-[10vw] xl:px-[5vw] lg:px-[2vw]'>
      <div className='grid lg:grid-rows-[5rem_repeat(4,_minmax(0,_1fr))] grid-rows-[5rem_repeat(6,_minmax(0,_1fr))] gap-4 p-4
        lg:grid-flow-col lg:grid-cols-[1fr_fit-content(10%)] 
      '>
        <div className='col-span-full h-[20px]'>
          <h1 className='font-bold text-4xl mt-10'>พฤติกรรมผู้ใช้บริการ</h1>
        </div>

        <div className='row-span-2 bg-white rounded-lg p-8 grid grid-rows-[2rem_minmax(0,_1fr)] grid-cols-1'>
          <div className='flex justify-end gap-2'>
            <select name="time-gap" id="time-gap" className='bg-[#EBEBEB] text-[#404B69] font-light rounded-full'>
              <option value="รายชั่วโมง">รายชั่วโมง</option>
              <option value="รายวัน">รายวัน</option>
              <option value="รายเดือน">รายเดือน</option>
              <option value="รายปี">รายปี</option>
            </select>
            <div className='flex flex-row items-center gap-2'>
                <p className='text-[#404B69] font-medium'>วันที่:</p>
                <div className='w-32'>
                  <ReactDatePicker />
                </div>
              </div>
          </div>
          <LineChart />
        </div>

        <div className='row-span-2 bg-white rounded-lg p-8 grid grid-rows-[2rem_minmax(0,_1fr)] grid-cols-1'>
          <div className='flex justify-between gap-2'>
            <div>
              <p className='text-[#404B69] xl:text-xl text-lg font-medium'>กราฟราคาค่าจอดรถ</p>
            </div>
            <div className='flex gap-2'>
              <select name="time-gap" id="time-gap" className='bg-[#EBEBEB] text-[#404B69] font-light rounded-full'>
                <option value="รายชั่วโมง">รายชั่วโมง</option>
                <option value="รายวัน">รายวัน</option>
                <option value="รายเดือน">รายเดือน</option>
                <option value="รายปี">รายปี</option>
              </select>
              <div className='flex flex-row items-center gap-2'>
                <p className='text-[#404B69] font-medium'>วันที่:</p>
                <div className='w-32'>
                  <ReactDatePicker className='bg-[#EBEBEB]'/>
                </div>
              </div>
            </div>
          </div>
          <PriceLineChart />
        </div>

        <div className='lg:row-start-2 flex flex-col justify-center bg-white lg:w-[15rem] rounded-lg p-8'>
          <p className='text-[#404B69] lg:text-2xl text-3xl font-medium mb-5'>เวลาที่มีผู้ใช้บริการมากที่สุด</p>
          <p className='lg:text-[3rem] text-6xl'>11.00น.</p>
        </div>
        <div className='flex flex-col justify-center bg-white lg:w-[15rem] rounded-lg p-8'>
          <p className='text-[#404B69] lg:text-2xl text-3xl font-medium mb-5'>เวลาที่มีผู้ใช้บริการน้อยที่สุด</p>
          <p className='lg:text-[3rem] text-6xl'>20.00น.</p>
        </div>
        <div className='flex flex-col justify-center bg-white lg:w-[15rem] rounded-lg p-8'>
          <p className='text-[#404B69] lg:text-2xl text-3xl font-medium mb-5'>ยอดจำนวนผู้ใช้บริการ ณ ปัจจุบัน</p>
          <p className='lg:text-[3rem] text-6xl'>134 คน</p>
        </div>
        <div className='flex flex-col justify-center bg-white lg:w-[15rem] rounded-lg p-8'>
          <p className='text-[#404B69] lg:text-2xl text-3xl font-medium mb-5'>ระยะเวลาที่ผู้ใช้บริการจอดรถส่วนมากจอดรถ</p>
          <p className='lg:text-[3rem] text-6xl'>2 ชั่วโมง</p>
        </div>
      </div>
    </main>
  )
}

export default CustomerAnalytics