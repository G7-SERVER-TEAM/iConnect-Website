"use client";

import React from "react";
import LineChart from '@/components/PriceConfig/LineChart'

const ResultContainer = () => {

  const labels = ["0:00", "8:00", "12:00", "16:00", "20:00"];
  const data = [
    {
      data: [0, 32, 10, 21, 6, 40],
      label: "ราคาก่อนหน้า",
      borderColor: "#3e95cd",
      backgroundColor: "#7bb6dd",
      fill: false,
    }, {
      data: [0, 10, 30, 12, 25, 10],
      label: "ราคาหลังการปรับปรุง",
      borderColor: "#3cba9f",
      backgroundColor: "#71d1bd",
      fill: false,
    }
  ];

  return (
    <div className="w-full p-10">
      <LineChart labels={labels} data={data} />
    </div>
  )

}

export default ResultContainer;