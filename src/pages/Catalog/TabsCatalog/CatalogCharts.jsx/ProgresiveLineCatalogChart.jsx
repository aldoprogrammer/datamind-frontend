import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ProgressiveLineCatalogChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    const totalDuration = 10000;
    const delayBetweenPoints = totalDuration / 1000;

    const previousY = (ctx) =>
      ctx.index === 0
        ? ctx.chart.scales.y.getPixelForValue(100)
        : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;

    const animation = {
      x: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: NaN, // the point is initially skipped
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.xStarted) {
            return 0;
          }
          ctx.xStarted = true;
          return ctx.index * delayBetweenPoints;
        },
      },
      y: {
        type: 'number',
        easing: 'linear',
        duration: delayBetweenPoints,
        from: previousY,
        delay(ctx) {
          if (ctx.type !== 'data' || ctx.yStarted) {
            return 0;
          }
          ctx.yStarted = true;
          return ctx.index * delayBetweenPoints;
        },
      },
    };

    const data = [];
    const data2 = [];
    let prev = 100;
    let prev2 = 80;
    for (let i = 0; i < 1000; i++) {
      prev += 5 - Math.random() * 10;
      data.push({ x: i, y: prev });
      prev2 += 5 - Math.random() * 10;
      data2.push({ x: i, y: prev2 });
    }

    const config = {
      type: 'line',
      data: {
        datasets: [
          {
            borderColor: 'red',
            borderWidth: 1,
            radius: 0,
            data: data,
          },
          {
            borderColor: 'blue',
            borderWidth: 1,
            radius: 0,
            data: data2,
          },
        ],
      },
      options: {
        animation,
        interaction: {
          intersect: false,
        },
        plugins: {
          legend: false,
        },
        scales: {
          x: {
            type: 'linear',
          },
        },
      },
    };

    const ctx = chartRef.current.getContext('2d');

    // Clean up previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create new chart instance
    chartInstance.current = new Chart(ctx, config);

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
};

export default ProgressiveLineCatalogChart;
