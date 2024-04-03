"use client";

import React, { useEffect, useState } from "react";
import LineChart from "@/components/PriceConfig/LineChart";

const ResultContainer = () => {
  const price_id = localStorage.getItem("price_id");
  const access_token = localStorage.getItem("token");
  const [beforeUpdate, setBeforeUpdate] = useState([]);
  const [afterUpdate, setAfterUpdate] = useState([]);

  const loadBeforeUpdatePrice = async (access_token, price_id) => {
    const ICONNECT_API = `http://192.168.1.5:8082/transaction/current/update/before/${price_id}`;
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

  const loadAfterUpdatePrice = async (access_token, price_id) => {
    const ICONNECT_API = `http://192.168.1.5:8082/transaction/current/update/after/${price_id}`;
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
    const fetchBeforeUpdatePrice = async () => {
      const result = await loadBeforeUpdatePrice(access_token, price_id);
      const res = JSON.parse(result);
      let data = res.result;
      if (typeof data === "object" && !Array.isArray(data)) {
        data = Object.entries(data).map(([key, value]) => ({
          key,
          value,
        }));
      }
      const extractedRawData = [];
      const values = Object.values(data);
      values.forEach((val) => {
        extractedRawData.push(val.value);
      })
      setBeforeUpdate(extractedRawData);
    };

    const fetchAfterUpdatePrice = async () => {
      const result = await loadAfterUpdatePrice(access_token, price_id);
      const res = JSON.parse(result);
      let data = res.result;
      if (typeof data === "object" && !Array.isArray(data)) {
        data = Object.entries(data).map(([key, value]) => ({
          key,
          value,
        }));
      }
      const extractedRawData = [];
      const values = Object.values(data);
      values.forEach((val) => {
        extractedRawData.push(val.value);
      })
      setAfterUpdate(extractedRawData);
    };

    fetchBeforeUpdatePrice()
    fetchAfterUpdatePrice()
  }, [access_token, price_id]);

  const labels = ["9:00", "12:00", "15:00", "18:00", "21:00"];
  const data = [
    {
      data: beforeUpdate,
      label: "ราคาก่อนหน้า",
      borderColor: "#3e95cd",
      backgroundColor: "#7bb6dd",
      fill: false,
    },
    {
      data: afterUpdate,
      label: "ราคาหลังการปรับปรุง",
      borderColor: "#3cba9f",
      backgroundColor: "#71d1bd",
      fill: false,
    },
  ];

  return (
    <div className="w-full p-10">
      <LineChart labels={labels} data={data} />
    </div>
  );
};

export default ResultContainer;
