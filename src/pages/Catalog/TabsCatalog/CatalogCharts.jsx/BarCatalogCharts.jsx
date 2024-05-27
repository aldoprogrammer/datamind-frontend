import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarCatalogCharts = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Dummy data
    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    };

    const options = {
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
      <canvas ref={chartRef} width="400" height="400" ></canvas>
    </div>
  );
}

export default BarCatalogCharts;
