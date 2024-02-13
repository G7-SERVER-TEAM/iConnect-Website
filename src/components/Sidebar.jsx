'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { 
  RiBarChartBoxFill, 
  RiArticleFill, 
  RiCarFill, 
  RiUserFill, 
  RiArrowDownSLine,
  RiArrowUpSLine,
  RiLogoutBoxRFill, 
  RiEditBoxFill, 
  } 
    from "react-icons/ri";

const Sidebar = ({ children }) => {

  const [isClicked, setIsClicked] = useState(false)  
  const handleClick = () => {
    setIsClicked(!isClicked)
  }

  const dynamicRoute = useRouter().asPath
  useEffect(() => setIsClicked(false) , [dynamicRoute])

  return (
    <div className='flex min-h-screen'>
        <div className='fixed w-[13rem] h-screen flex flex-col bg-[#0E2E3B] p-3 justify-between'>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-row items-center gap-2'>
                <div className='bg-[#01352C] rounded-full p-2'>
                  <Image alt="icon" src={"/WelcomePicture.png"} width={50} height={50}/>
                </div>
                <h1 className='text-white text-xl'>iConnect</h1>
              </div>
              <div className='flex flex-col gap-3'>
                <Link href="/usage-overview">
                    <div className='text-white flex gap-2 items-center cursor-pointer'>
                      <RiBarChartBoxFill size={20}/>
                      <h1>ภาพรวม</h1>
                    </div>
                </Link>
                <Link href="/price-config">
                    <div className='text-white flex gap-2 items-center cursor-pointer'>
                      <RiArticleFill  size={20}/>
                      <h1>กำหนดราคาค่าจอดรถ</h1>
                    </div>
                </Link>
                <Link href="/business-overview">
                  <div className='text-white flex gap-2 items-center cursor-pointer'>
                    <RiBarChartBoxFill  size={20}/>
                    <h1>ภาพรวมธุรกิจ</h1>
                  </div>
                </Link>
                <Link href="/customer-analytics">
                  <div className='text-white flex gap-2 items-center cursor-pointer'>
                    <RiCarFill  size={20}/>
                    <h1>พฤติกรรมผู้ใช้บริการ</h1>
                  </div>
                </Link>
                <Link href="/user-management"> 
                  <div className='text-white flex gap-2 items-center cursor-pointer'>
                    <RiUserFill  size={20}/>
                    <h1>จัดการสมาชิก</h1>
                  </div>
                </Link>
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <div className={isClicked ? 'bg-[#404B69] rounded-t-xl' : 'hidden'}>
                <Link href="/edit-profile" className='profile__upward__btn hover:bg-[#00818A] hover:rounded-t-xl'>
                  <RiEditBoxFill size={20}/>
                  <p className='text-lg'>แก้ไขโปรไฟล์</p>
                </Link>
                <Link href="/login" className='profile__upward__btn hover:bg-[#00818A]'>
                  <RiLogoutBoxRFill size={20}/>
                  <p className='text-lg'>Logout</p>
                </Link>
              </div>
              <button
                  disabled={false}
                  type={'button'}
                  className={isClicked ? 'profile__btn bg-[#404B69] border-t-2 border-solid border-[#A7A7A7]' : 'profile__btn'}
                  onClick={handleClick}
                  
              >
                  <div className='flex flex-col'>
                      <span className='text-lg'>John Next</span>
                      <span className='text-xs ml-2'>Business Owner</span>
                  </div>
                    {
                      isClicked ? 
                        <RiArrowUpSLine size={20}/> : 
                        <RiArrowDownSLine size={20}/>
                    }
              </button>
            </div>
        </div>
        <main className='ml-[13rem] w-full'>{children}</main>
    </div>
  )
}

export default Sidebar