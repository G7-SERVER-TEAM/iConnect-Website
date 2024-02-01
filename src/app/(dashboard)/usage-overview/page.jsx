'use client'
import Searchbar from '@/components/Searchbar'
import React from 'react'
import { RiArrowDownSFill } from 'react-icons/ri'

const UsageOverview = () => {
  return (
    <div className='flex flex-col min-h-screen gap-6 items-center'>
      <div className='flex w-[64rem] justify-start'>
        <p className='text-4xl font-bold mt-10'>ภาพรวม</p>
      </div>
      <div className='flex flex-col bg-white w-[64rem] h-[32rem] rounded-lg p-8'>
        <div className='flex flex-row justify-between'>
          <div>
            <p className='text-[#A7A7A7]'>จำนวนผู้เข้าใช้บริการพื้นที่จอดรถทั้งหมด</p>
            <p className='text-2xl font-bold'>5,555 คน</p>
          </div>
          <button className='flex bg-[#EBEBEB] rounded-full h-8 p-1 text-[#404B69] items-center justify-center'>
            <p>This year</p>
            <RiArrowDownSFill size={20}/>
          </button>
        </div>
      </div>
      <div className='flex w-[64rem] justify-end'>
        <Searchbar 
          placeholder={'Search for transaction...'}
        />
      </div>
      <table className='w-[64rem]'>
        <tr>
          <th className='font-medium text-[#404B69] text-lg'>รายการที่</th>
          <th className='font-medium text-[#404B69] text-lg'>หมายเลขทะเบียน</th>
          <th className='font-medium text-[#404B69] text-lg'>เวลาเข้า</th>
          <th className='font-medium text-[#404B69] text-lg'>เวลาออก</th>
          <th className='font-medium text-[#404B69] text-lg'>เวลาที่จอด</th>
          <th className='font-medium text-[#404B69] text-lg'>ค่าบริการ</th>
        </tr>
        <tr className='text-center'>
          <td className='font-normal text-[#323232] bg-white h-[2rem] rounded-l-full'>00000001</td>
          <td className='font-normal text-[#323232] bg-white h-[2rem] '>1กก1111</td>
          <td className='font-normal text-[#323232] bg-white h-[2rem] '>21-10-2023 11:00:00</td>
          <td className='font-normal text-[#323232] bg-white h-[2rem] '>21-10-2023  13:30:00</td>
          <td className='font-normal text-[#323232] bg-white h-[2rem] '>2 ชั่วโมง 30 นาที</td>
          <td className='font-normal text-[#323232] bg-white h-[2rem] rounded-r-full'>70 บาท</td>
        </tr>
      </table>
    </div>
  )
}

export default UsageOverview