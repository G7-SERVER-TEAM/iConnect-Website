import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const MyBarChart = ({ uid, access_token, month }) => {
  const [labels, setLabels] = useState([]);
  const [priceData, setPriceData] = useState([]);

  const handlePricePerDay = async (month, access_token) => {
    const ICONNECT_API = `http://192.168.1.37:8082/payment/total/income/day/${month}`;
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
    const fetchData = async () => {
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

    fetchData();
  }, [month, access_token]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "InCome",
        data: priceData,
        backgroundColor: "#4AE3B5",
        borderRadius: 10,
        barPercentage: 0.2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} height={300} width={928} />;
};

export default MyBarChart;
