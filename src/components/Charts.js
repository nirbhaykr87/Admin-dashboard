import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      backgroundColor: 'rgba(75, 192, 192, 0.4)',
      borderColor: 'rgba(75, 192, 192, 0.8)',
      borderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7,
      tension: 0.1, // Smooth lines
    },
    {
      label: 'Dataset 2',
      data: [40, 60, 70, 65, 50, 45, 60],
      fill: false,
      backgroundColor: 'rgba(153, 102, 255, 0.4)',
      borderColor: 'rgba(153, 102, 255, 0.8)',
      borderWidth: 2,
      pointRadius: 5,
      pointHoverRadius: 7,
      tension: 0.1, // Smooth lines
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      labels: {
        color: '#333',
        font: {
          size: 14,
        },
      },
    },
    title: {
      display: true,
      text: 'Enhanced Line Chart with Chart.js',
      color: '#333',
      font: {
        size: 16,
        weight: 'bold',
      },
    },
    tooltip: {
      callbacks: {
        label: (tooltipItem) => {
          return `Value: ${tooltipItem.raw}`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: 'Months',
        color: '#333',
        font: {
          size: 14,
          weight: 'bold',
        },
      },
    },
    y: {
      title: {
        display: true,
        text: 'Values',
        color: '#333',
        font: {
          size: 14,
          weight: 'bold',
        },
      },
      beginAtZero: true,
    },
  },
};

const Charts = () => {
  return (
    <div>
      <h2>Line Chart</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Charts;
