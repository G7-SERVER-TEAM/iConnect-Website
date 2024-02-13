"use client"
import React from 'react'
import ReactDatePicker from '@/components/ReactDatePicker'

const CustomerAnalytics = () => {
  return (
    <div className='flex flex-col min-h-screen gap-6 items-center'>
      <div className='flex w-[60.25rem] justify-start'>
        <h1 className='font-bold text-4xl mt-10'>พฤติกรรมผู้ใช้บริการ</h1>
      </div>
      <div className='flex gap-5'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col bg-white w-[44rem] h-[32rem] rounded-lg p-8'>
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
          </div>
          <div className='flex flex-col bg-white w-[44rem] h-[32rem] rounded-lg p-8'>
          <div className='flex justify-between gap-2'>
              <select name="pick-graph" id="pick-graph" className='bg-[#EBEBEB] text-[#404B69] font-light rounded-full'>
                <option value="กราฟ a">กราฟ a</option>
                <option value="กราฟ b">กราฟ b</option>
                <option value="กราฟ c">กราฟ c</option>
                <option value="กราฟ d">กราฟ d</option>
              </select>
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
          </div>
        </div>
        <div className='flex flex-col gap-12'>
          <div className='flex flex-col justify-center bg-white w-[15rem] h-[13rem] rounded-lg p-8'>
            <p className='text-[#404B69] text-xl'>เวลาที่มีผู้ใช้บริการมากที่สุด</p>
            <p className='text-[3rem] font-medium'>11.00น.</p>
          </div>
          <div className='flex flex-col justify-center bg-white w-[15rem] h-[13rem] rounded-lg p-8'>
            <p className='text-[#404B69] text-xl'>เวลาที่มีผู้ใช้บริการน้อยที่สุด</p>
            <p className='text-[3rem] font-medium'>20.00น.</p>
          </div>
          <div className='flex flex-col justify-center bg-white w-[15rem] h-[13rem] rounded-lg p-8'>
            <p className='text-[#404B69] text-xl'>ยอดจำนวนผู้ใช้บริการ ณ ปัจจุบัน</p>
            <p className='text-[3rem] font-medium'>134 คน</p>
          </div>
          <div className='flex flex-col justify-center bg-white w-[15rem] h-[13rem] rounded-lg p-8'>
            <p className='text-[#404B69] text-xl'>ค่าจอดรถ ณ ปัจจุบัน</p>
            <p className='text-[3rem] font-medium'>50 บาท</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerAnalytics