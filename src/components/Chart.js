
import '../components/styles/styles.css'; // Ensure you import your CSS file

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    chartInstanceRef.current = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
          duration: 500, // Smooth animation duration for initial load
        },
      },
    });

    return () => {
      chartInstanceRef.current.destroy();
    };
  }, [data]); // Only run once to initialize the chart

  useEffect(() => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.data = data;
      chartInstanceRef.current.update({
        duration: 500, // Smooth animation duration for data update
      });
    }
  }, [data]); // Run whenever data changes

  const handleExport = () => {
    if (chartRef.current) {
      const url = chartRef.current.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = 'chart.png';
      link.click();
    }
  };

  return (
    <div className="chart-container">
      <button className="export-button" onClick={handleExport}>
        Export Chart
      </button>
      <canvas ref={chartRef} className="chart" />
    </div>
  );
};

export default ChartComponent;