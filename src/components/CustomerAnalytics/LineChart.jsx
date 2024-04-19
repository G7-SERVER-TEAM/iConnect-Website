import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const access_token = localStorage.getItem("token");
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const [loadCharData, setLoadCharData] = useState([]);

  const loadUsageTransaction = async (access_token) => {
    const ICONNECT_API = `http://192.168.1.37:8082/transaction/current/usage/transaction`;
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
    const fetchUsageTransaction = async () => {
      try {
        const result = await loadUsageTransaction(access_token);
        const res = JSON.parse(result);
        setLoadCharData(res.result);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsageTransaction();

    setChartData({
      type: "line",
      labels: [
        "9.00",
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
      ],
      datasets: [
        {
          data: loadCharData,
          borderColor: "#00818A",
        },
      ],
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: false,
        },
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: false,
          },
        },
      },
    });
  }, [access_token, loadCharData]);

  return (
    <div className="w-full relative 2xl:h-[40vh] h-[20vh] m-auto p-4">
      <Line options={chartOptions} data={chartData} />
    </div>
  );
};

export default LineChart;
