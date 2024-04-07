import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const access_token = localStorage.getItem("token");

  const loadOverview = async (access_token) => {
    const ICONNECT_API = `http://192.168.1.37:8082/transaction/overview`;
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

  const [currentYear, setCurrentYear] = useState([]);
  const [lastYear, setLastYear] = useState([]);

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const result = await loadOverview(access_token);
        const res = JSON.parse(result);
        let overview = res.result;
        if (typeof overview === "object" && !Array.isArray(overview)) {
          overview = Object.entries(overview).map(([key, value]) => ({
            key,
            value,
          }));
        }

        const loadLastYear = [];
        const loadCurrentYear = [];
        const values = Object.values(overview);
        
        values.forEach((val) => {
            loadLastYear.push(val.value.lastYear);
            loadCurrentYear.push(val.value.currentYear);
        })
        setLastYear(loadLastYear);
        setCurrentYear(loadCurrentYear);
      } catch (err) {
        console.error(err);
      }
    };

    fetchOverview();

    setChartData({
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "ปีนี้",
          data: currentYear,
          backgroundColor: "#4AE3B5",
          borderRadius: 10,
        },
        {
          label: "ปีที่แล้ว",
          data: lastYear,
          backgroundColor: "#00818A",
          borderRadius: 10,
        },
      ],
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          pointStyle: "circle",
        },
        title: {
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
  }, [access_token, currentYear, lastYear]);

  return (
    <>
      <div className="w-full lg:h-[40vh] h-[20vh] relative p-4 m-auto">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
