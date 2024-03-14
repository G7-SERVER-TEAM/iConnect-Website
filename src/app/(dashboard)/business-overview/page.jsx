'use client';
import Image from 'next/image';
import React from 'react';
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import MyBarChart from '@/components/BusinessOverview/Chart.jsx'



export default function BusinessOverview() {
  return (
    <main className="h-screen borderxborder-black text-[calc(1024px/1536)] lg:text-[calc(100vw/1536)]">
        <div className="border border-transparent xborder-black bg-[#E4E5DB] w-[100%]">
          <div className="borderxborder-black mt-[50em] pt-[6em] pl-[47em] leading-[27em]">
            <h1 className="text-[30em] text-black borderxborder-black font-bold">
                ภาพรวมธรุกิจ
            </h1>
          </div>   
          <div className="borderborder-black flex mt-[17em]">
            <div className="borderborder-black p-[10em] m-auto">
                <div className="flex borderxborder-black h-[28em]">   
                  <div className="borderxborder-red-500 ml-[546em] mx-[12em] w-[120em] h-[24.89em]">
                    <select className="text-[17em] w-full h-full border border-gray-400 rounded-full">
                      <option value="">เลือกรายเวลา</option>
                      <option value="location_a">รายวัน</option>
                      <option value="location_b">รายเดือน</option>
                      <option value="location_c">รายไตรมาส</option>
                      <option value="location_d">รายปี</option>
                    </select>
                  </div>  
                  <div className="borderxborder-black w-[45em] ml-[2em] mt-[4em] leading-[18em]">
                    <h1 className="borderxborder-black text-[18em] text-[#404B69]">
                      เดือน:
                    </h1>
                  </div>   
                  <div className="borderxborder-black ml-[12em] w-[120em] h-[24.89em]">
                    <select className="text-[17em] w-full h-full border border-gray-400 rounded-full">
                      <option value="">เลือกรายเวลา</option>
                      <option value="location_a">รายวัน</option>
                      <option value="location_b">รายเดือน</option>
                      <option value="location_c">รายไตรมาส</option>
                      <option value="location_d">รายปี</option>
                    </select>
                  </div>   
                </div>
                <div className="flex borderxborder-black h-[187em] mt-[8em]">   
                  <div className="borderxborder-black w-[420em] bg-[#FFFFFF] rounded-[8px]">
                    <div className="borderxborder-black ml-[26em] mt-[37em] leading-[45em] h-[38em]">                      
                      <h1 className="text-[30em] text-[#404B69]">
                        รายได้เฉลี่ย
                      </h1> 
                    </div>
                    <div className="borderxborder-black ml-[26em] mt-[6em] leading-[45em] h-[52em]">  
                      <h1 className="text-[48em] text-black font-bold">
                        XXX,XXX บาท
                      </h1> 
                    </div>
                  </div> 
                  <div className="borderxborder-black ml-[15em] w-[420em] bg-[#FFFFFF] rounded-[8px]">
                      <div className="flex borderxborder-black items-center justify-center mt-[24em] leading-[45em] h-[45em] font-bold">
                          <div className="borderxborder-black h-[45em] w-[60em]">
                              <Image
                                  src="/triangle-up-small.svg"
                                  alt="Triangle Up Small"
                                  className="mt-[-9em] ml-[calc(-5em] w-[70em]"
                                  style={{ position:'absolute' }}
                                  width={0}
                                  height={0}
                              />
                          </div>
                          <h1 className="text-[48em] text-black borderxborder-black">
                              XX%
                          </h1> 
                      </div>
                      <div className="flex borderxborder-black items-center justify-center h-[30em] mt-[12em] leading-[30em]">
                          <h1 className="text-[30em] borderxborder-black text-[#404B69]">
                                  ของรายได้
                          </h1> 
                      </div>
                      <div className="flex borderxborder-black  mt-[20em]">
                          <div className="borderxborder-black w-[210em]">
                              <div className="borderxborder-black h-[22em] leading-[20em]">
                                <h1 className="flex text-black borderxborder-black items-center justify-center text-[20em]">
                                    XXX,XXX บาท
                                </h1>
                              </div>
                              <div className="borderxborder-black h-[29em] leading-[27em]">
                                <h1 className="flex text-[#404B69] borderxborder-black items-center justify-center text-[20em]">
                                    เมื่อวาน
                                </h1>
                              </div>
                          </div>
                          <div className="borderxborder-black w-[210em]">
                              <div className="borderxborder-black h-[22em] leading-[20em]">
                                <h1 className="flex text-black borderxborder-black items-center justify-center text-[20em]">
                                    XXX,XXX บาท
                                </h1>
                              </div>
                              <div className="borderxborder-black h-[29em] leading-[27em]">
                                <h1 className="flex text-[#404B69] borderxborder-black items-center justify-center text-[20em]">
                                    วันนี้
                                </h1>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>    
                <div className="borderxborder-black mt-[13em] h-[330em] w-[857em] pt-[3em] bg-[#FFFFFF] rounded-[8px]"> 
                  <div className="borderxborder-black ml-[26em] mt-[5em] leading-[45em] h-[38em]">
                    <h1 className="text-[#404B69] borderxborder-black text-[30em]">
                      รายได้
                    </h1> 
                  </div>
                  <div class="borderxborder-black w-[800em] h-[260em] mx-[auto] mt-[10em]">
                    <MyBarChart/>
                  </div>
                </div>      
              </div>   
            </div>
        </div>
    </main>
  )
}