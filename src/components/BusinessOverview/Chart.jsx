import React from 'react';
import { Bar } from 'react-chartjs-2';

const MyBarChart = () => {
  const data = {
    labels: ["A", "B", "C", "D", "E", "F","G","H","I"],
    datasets: [
      {
        label: "Revenue",
        data: [200, 300, 400, 100, 350, 417,123,125,400],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        barPercentage: 0.2,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };
  

  return (
    <Bar
      data={data}
      options={options}
      height={300}
      width={928}
    />
  );
};

export default MyBarChart;
