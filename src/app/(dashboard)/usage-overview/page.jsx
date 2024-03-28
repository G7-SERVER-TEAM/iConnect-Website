'use client'
import Searchbar from '@/components/Searchbar'
import BarChart from '@/components/UsageOverview/BarChart'
import TranscationTable from '@/components/UsageOverview/TranscationTable'
import isAuth from '@/components/isAuth'
import React from 'react'

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
        <TranscationTable />
      </div>
    </main>
  )
}

export default isAuth(UsageOverview)