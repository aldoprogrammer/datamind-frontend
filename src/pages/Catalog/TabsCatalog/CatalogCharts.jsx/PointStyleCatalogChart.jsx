import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PointStyleCatalogChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [65, 59, 80, 81, 56, 55, 40],
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgb(75, 192, 192)',
          pointStyle: 'circle', // Change point style
          pointRadius: 10, // Change point radius
          pointHoverRadius: 15, // Change point hover radius
        },
        {
          label: 'Dataset 2',
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgb(255, 99, 132)',
          pointStyle: 'triangle', // Change point style
          pointRadius: 8, // Change point radius
          pointHoverRadius: 12, // Change point hover radius
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

export default PointStyleCatalogChart;
