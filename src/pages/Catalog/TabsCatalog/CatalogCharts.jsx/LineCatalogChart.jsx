import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineCatalogChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Dummy data
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1,
        },
        {
          label: 'Dataset 2',
          data: [35, 40, 60, 65, 70, 75, 80],
          fill: false,
          borderColor: 'rgb(255, 99, 132)',
          tension: 0.1,
        },
      ],
    };

    const config = {
      type: 'line',
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };

    if (chartContainer && chartContainer.current) {
      // Clean up previous chart instance
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      // Create new chart instance
      chartInstance.current = new Chart(chartContainer.current, config);
    }

    // Cleanup function
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return <canvas ref={chartContainer} />;
};

export default LineCatalogChart;
