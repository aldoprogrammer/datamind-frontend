import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StackedBarLineCatalogChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Dummy data
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'bar',
          label: 'Bar Dataset',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          data: [10, 20, 30, 40, 50, 60, 70]
        },
        {
          type: 'line',
          label: 'Line Dataset',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          data: [20, 30, 40, 50, 60, 70, 80]
        }
      ]
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    const ctx = chartRef.current.getContext('2d');

    // Clean up previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
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

export default StackedBarLineCatalogChart;
