import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DoughnutCatalogChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Dummy data
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
      datasets: [{
        label: 'My Doughnut Chart',
        data: [10, 20, 30, 25, 15],
        backgroundColor: [
          'rgb(255, 99, 132)', // Red
          'rgb(54, 162, 235)', // Blue
          'rgb(255, 206, 86)', // Yellow
          'rgb(75, 192, 192)', // Green
          'rgb(153, 102, 255)' // Purple
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false
    };

    const ctx = chartRef.current.getContext('2d');
    
    // Clean up previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
}

export default DoughnutCatalogChart;
