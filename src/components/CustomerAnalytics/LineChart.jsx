import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';


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
    const [chartData, setChartData] = useState({
        datasets: [],
    })
    const [chartOptions, setChartOptions] = useState({})

    useEffect(()=>{
        setChartData({
            type: 'line',
            labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00'],
            datasets: [
                {
                    data: [10, 20, 50, 100, 200, 400, 400, 50, 100, 80, 30, 20, 30, 240, 50, 100, 500, 400, 400, 50, 100, 80, 30, 20],
                    borderColor: '#00818A',
                },
            ]
        })
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
                    display: false
                  }
                },
                y: {
                  grid: {
                    display: false
                  }
                },
            },
        })
    }, [])

    return (
        <div className='w-full relative 2xl:h-[40vh] h-[20vh] m-auto p-4'> 
            <Line options={chartOptions} data={chartData}/>
        </div>
        )
    }

export default LineChart