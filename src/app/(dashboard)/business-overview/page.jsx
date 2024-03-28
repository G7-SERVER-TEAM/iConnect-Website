"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import MyBarChart from "@/components/BusinessOverview/Chart.jsx";

export default function BusinessOverview() {
  const [month, setMonth] = useState("");
  const [totalPrice, setTotalPrice] = useState("");
  const [labels, setLabels] = useState([]);
  const [priceData, setPriceData] = useState([]);
  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  const uid = 1;
  const access_token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjMsInVzZXJuYW1lIjoidGVzdDIiLCJpYXQiOjE3MTE1Mzc1ODgsImV4cCI6MTcxMTU0ODM4OH0.NRG1kslIz08RD7O45XSS0XXxeZbkmc53LqdQlbPP2F0";

  const handleGetTotalPrice = async (month, access_token) => {
    const ICONNECT_API = `http://10.4.13.53:8082/payment/total/income/${month}`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (result.ok) {
        const responseBody = await result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  const handlePricePerDay = async (month, access_token) => {
    const ICONNECT_API = `http://10.4.13.53:8082/payment/total/income/day/${month}`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (result.ok) {
        const responseBody = await result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const fetchTotalPrice = async () => {
      try {
        const result = handleGetTotalPrice(month, access_token);
        result.then((result) => {
          const res = JSON.parse(result);
          setTotalPrice(res.result);
        });
      } catch (err) {
        console.log(err);
      }
    };

    const fetchPricePerDay = async () => {
      try {
        const result = await handlePricePerDay(month, access_token);
        const res = JSON.parse(result);
        let prices = res.result;
        // If prices is an object, convert it to an array of objects
        if (typeof prices === "object" && !Array.isArray(prices)) {
          prices = Object.entries(prices).map(([key, value]) => ({
            key,
            value,
          }));
        }

        // Extract keys and values from prices array
        const extractedPriceData = [];

        // Extract all keys from prices object
        const keys = Object.keys(prices);
        const updateKeys = keys.map((key) => parseInt(key) + 1);

        const values = Object.values(prices);

        values.forEach((val) => {
          extractedPriceData.push(Object.values(val)[0]);
        });

        // Update state with extracted data
        setLabels(updateKeys);
        setPriceData(extractedPriceData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchTotalPrice();
    fetchPricePerDay();
  }, [month, access_token]);

import isAuth from '@/components/isAuth'

function BusinessOverview() {
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
              <div className="borderxborder-red-500 ml-[546em] mx-[12em] w-[110em] h-[24.89em]">
                <select
                  className="text-[17em] w-full h-full border border-gray-400 rounded-full px-4"
                  disabled
                >
                  {/* <option value="">เลือกรายเวลา</option> */}
                  <option value="day">รายวัน</option>
                  {/* <option value="location_b">รายเดือน</option> */}
                  {/* <option value="location_c">รายไตรมาส</option> */}
                  {/* <option value="location_d">รายปี</option> */}
                </select>
              </div>
              <div className="borderxborder-black w-[45em] ml-[2em] mt-[4em] leading-[18em]">
                <h1 className="borderxborder-black text-[18em] text-[#404B69]">
                  เดือน:
                </h1>
              </div>
              <div className="borderxborder-black ml-[12em] w-[130em] h-[24.89em]">
                <select
                  className="text-[17em] w-full h-full border border-gray-400 rounded-full px-2"
                  value={month}
                  onChange={handleMonthChange}
                >
                  <option value="0">มกราคม</option>
                  <option value="1">กุมภาพันธ์</option>
                  <option value="2">มีนาคม</option>
                  <option value="3">เมษายน</option>
                  <option value="4">พฤษภาคม</option>
                  <option value="5">มิถุนายน</option>
                  <option value="6">กรกฎาคม</option>
                  <option value="7">สิงหาคม</option>
                  <option value="8">กันยายน</option>
                  <option value="9">ตุลาคม</option>
                  <option value="10">พฤศจิกายน</option>
                  <option value="11">ธันวาคม</option>
                </select>
              </div>
            </div>
            <div className="flex borderxborder-black h-[187em] mt-[8em]">
              <div className="borderxborder-black w-[420em] bg-[#FFFFFF] rounded-[8px]">
                <div className="borderxborder-black ml-[26em] mt-[37em] leading-[45em] h-[38em]">
                  <h1 className="text-[30em] text-[#404B69]">รายได้เฉลี่ย</h1>
                </div>
                <div className="borderxborder-black ml-[26em] mt-[6em] leading-[45em] h-[52em]">
                  <h1 className="text-[48em] text-black font-bold pt-4">
                    {totalPrice} บาท
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
                      style={{ position: "absolute" }}
                      width={0}
                      height={0}
                    />
                  </div>
                  <h1 className="text-[48em] text-black borderxborder-black">
                    {priceData[new Date().getDate() - 2] === 0 &&
                    priceData[new Date().getDate() - 1] !=
                      priceData[new Date().getDate() - 2]
                      ? "100"
                      : priceData[new Date().getDate() - 1] ==
                        priceData[new Date().getDate() - 2]
                      ? "0"
                      : ((priceData[new Date().getDate() - 1] -
                          priceData[new Date().getDate() - 2]) /
                          priceData[new Date().getDate() - 2]) *
                        100}
                    %
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
                        {new Date().getDate() === 1
                          ? 0
                          : priceData[new Date().getDate() - 2]}{" "}
                        บาท
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
                        {priceData[new Date().getDate() - 1]} บาท
                      </h1>
                    </div>
                    <div className="borderxborder-black h-[29em] leading-[27em]">
                      <h1 className="flex text-[#404B69] borderxborder-black items-center justify-center text-[20em]">
                        วันนี้
                      </h1>
                    </div>
                </div>    
                <div className="borderxborder-black mt-[13em] h-[330em] w-[857em] pt-[3em] bg-[#FFFFFF] rounded-[8px]"> 
                  <div className="borderxborder-black ml-[26em] mt-[5em] leading-[45em] h-[38em]">
                    <h1 className="text-[#404B69] borderxborder-black text-[30em]">
                      รายได้
                    </h1> 
                  </div>
                  <div className="borderxborder-black w-[800em] h-[260em] mx-[auto] mt-[10em]">
                    <MyBarChart/>
                  </div>
                </div>
              </div>
            </div>
            <div className="borderxborder-black mt-[13em] h-[400em] w-[857em] pt-[3em] bg-[#FFFFFF] rounded-[8px]">
              <div className="borderxborder-black ml-[26em] mt-[5em] leading-[45em] h-[38em]">
                <h1 className="text-[#404B69] borderxborder-black text-[30em]">
                  รายได้
                </h1>
              </div>
              <div className="borderxborder-black w-[800em] h-[400em] mx-[auto] mt-[10em]">
                <MyBarChart
                  uid={uid}
                  access_token={access_token}
                  month={month}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
  )
}


export default isAuth(BusinessOverview)
