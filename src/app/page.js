'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, } from 'react'

export default function Login() {
  const [isClick, setIsClick] = useState(false)

  return (
    <div className='flex min-h-screen justify-center items-center'>
        <div className='flex flex-col gap-2 items-center bg-white rounded-[20px] w-96 pt-10 pb-10'>
            <div className='flex flex-row gap-2 items-center'>
              <div className='bg-[#01352C] rounded-full p-2'>
                <Image alt="Icon" src={"/WelcomePicture.png"} width={50} height={50} />
              </div>
              <h1 className='font-semibold text-xl text-[#01352C]'>iConnect</h1>
            </div>
            <h2 className='font-bold text-2xl text-[#01352C]'>Login</h2>
            <div className='border-black border-[1px] rounded-lg flex text-center'>
                <button 
                  onClick={() => setIsClick(!isClick)}
                  className={isClick ? 'opacity-50 role__btn' : 'bg-[#0E2E3B] text-white role__btn'}
                >
                  Junior Officer
                </button>
                <button 
                  onClick={() => setIsClick(!isClick)}
                  className={isClick ? 'bg-[#0E2E3B] text-white role__btn' : 'opacity-50 role__btn'}
                >
                  Business Owner
                </button>
            </div>
            <form className='flex flex-col'>
              <div className='flex flex-col'>
                <label className='block text-[#404B69]'>Username</label>
                <input type='text' className='block border-black border-[1px] rounded-[30px] w-full px-5'></input>
              </div>
              <div className='flex flex-col'>
                <label className='block text-[#404B69]'>Password</label>
                <input type='password' className='block border-black border-[1px] rounded-[30px] w-full px-5 mb-4'></input>
              </div>
                <button type="submit" className='bg-[#00818A] text-white rounded-[30px] cursor-pointer p-1'>
                  <Link href='/usage-overview'>Login</Link>
                </button>
            </form>
        </div>
    </div>    
  )
}
