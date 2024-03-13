import { useEffect } from "react"
import { Chart } from "chart.js";

function LineChart({labels, data}) {

  useEffect(() => {
    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
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
  }, [])
  
  return (
    <div className="w-full flex flex-col">
      <div className='w-full rounded-xl'>
        <canvas id='myChart'></canvas>
      </div>
    </div>
  )
  
}

export default LineChart;