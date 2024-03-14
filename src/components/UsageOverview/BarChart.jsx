import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)


const BarChart = () => {
    const [chartData, setChartData] = useState({
        datasets: [],
    })

    const [chartOptions, setChartOptions] = useState({})



    useEffect(() => {
        setChartData({
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'ปีนี้',
                    data: [1000, 1200, 900, 450, 1400, 1000, 400, 1200, 1300, 500, 1000, 800],
                    backgroundColor: '#4AE3B5',
                    borderRadius: 10,
                },
                {
                    label: 'ปีที่แล้ว',
                    data: [900, 1400, 900, 450, 1400, 400, 400, 500, 1300, 500, 1000, 1300],
                    backgroundColor: '#00818A',
                    borderRadius: 10,
                },
            ]
        })
        setChartOptions({
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    pointStyle: 'circle',
                },
                title: {
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
                }
            },    
        })
    }, [])

  return (
    <>
        <div className='w-full lg:h-[40vh] h-[20vh] relative p-4 m-auto'>
            <Bar data={chartData} options={chartOptions} />
        </div>  
    </>
  )
}

export default BarChart