'use client'
import Searchbar from '@/components/Searchbar'
import BarChart from '@/components/UsageOverview/BarChart'
import TranscationTable from '@/components/UsageOverview/TranscationTable'
import React from 'react'
import { RiArrowDownSFill } from 'react-icons/ri'

const UsageOverview = () => {
  return (
    <main className='min-h-screen 2xl:px-[7vw] xl:px-[5vw] lg:px-[2vw]'>
      <div className='grid xl:grid-col-4 gap-6 p-4'>

        <div className='col-span-4 '>
          <p className='text-4xl font-bold mt-10'>ภาพรวม</p>
        </div>

        <div className='col-span-4 bg-white rounded-lg p-8 grid grid-cols-1'>
          <div className='flex flex-row justify-between'>
            <div>
              <p className='text-[#A7A7A7]'>จำนวนผู้เข้าใช้บริการพื้นที่จอดรถทั้งหมด</p>
              <p className='text-2xl font-bold'>5,555 คน</p>
            </div>
            <div className=''>
              <select name="pick-time" id="pick-time" className='bg-[#EBEBEB] text-[#404B69] font-light rounded-full text-center'>
                <option value="ปีนี้">ปีนี้</option>
                <option value="ปีที่แล้ว">ปีที่แล้ว</option>
              </select>
            </div>
          </div>
          <BarChart className="col-span-1"/>
        </div>
      </div>

      <div className='flex justify-end p-4'>
        <Searchbar 
          placeholder={'Search for transaction...'}
        />
      </div>

      <div className='grid grid-cols-4 p-4'>

        {/* <table className='col-span-4'>
          <tr>
            <th className='font-medium text-[#404B69] lg:text-lg text-sm'>รายการที่</th>
            <th className='font-medium text-[#404B69] lg:text-lg text-sm'>หมายเลขทะเบียน</th>
            <th className='font-medium text-[#404B69] lg:text-lg text-sm'>เวลาเข้า</th>
            <th className='font-medium text-[#404B69] lg:text-lg text-sm'>เวลาออก</th>
            <th className='font-medium text-[#404B69] lg:text-lg text-sm'>เวลาที่จอด</th>
            <th className='font-medium text-[#404B69] lg:text-lg text-sm'>ค่าบริการ</th>
          </tr>
          <tr className='text-center'>
            <td className='font-normal text-[#323232] bg-white h-[2rem] rounded-l-full lg:text-lg text-sm'>00000001</td>
            <td className='font-normal text-[#323232] bg-white h-[2rem] lg:text-lg text-sm'>1กก1111</td>
            <td className='font-normal text-[#323232] bg-white h-[2rem] lg:text-lg text-sm'>21-10-2023 11:00:00</td>
            <td className='font-normal text-[#323232] bg-white h-[2rem] lg:text-lg text-sm'>21-10-2023  13:30:00</td>
            <td className='font-normal text-[#323232] bg-white h-[2rem] lg:text-lg text-sm'>2 ชั่วโมง 30 นาที</td>
            <td className='font-normal text-[#323232] bg-white h-[2rem] rounded-r-full lg:text-lg text-sm'>70 บาท</td>
          </tr>
        </table> */}
        <TranscationTable />
      </div>
    </main>
  )
}

export default UsageOverview