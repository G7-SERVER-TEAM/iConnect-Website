"use client";

import { useEffect } from "react"
import { Chart } from "chart.js/auto";

function LineChart({labels, data}) {

  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: data,
      },
      options: {
        responsive: true,
        legend: {
          position: 'bottom',
        },
        scales: {
          xAxes: [{
            gridLines: {
              display: false,
              color: "transparent",
            },
            position: 'top',
          }],
          yAxes: [{
            gridLines: {
              display: false,
              color: "transparent",
            },
            ticks: {
              fontColor: 'transparent'
            }   
          }]
        }
      },
    });
    
    return () => {
      myChart.destroy();
    };

  }, [labels, data])
  
  return (
    <div className="w-full flex flex-col">
      <div className='w-full rounded-xl'>
        <canvas id='myChart'></canvas>
      </div>
    </div>
  )
  
}

export default LineChart;