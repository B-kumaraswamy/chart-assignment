import React, { useEffect, useState } from 'react';
import ChartComponent from './components/Chart';
import TimeframeSelector from './components/TimeframeSelector';
import { fetchData } from './components/data/fetchData';
import './components/styles/styles.css'; // Import the CSS file

function App() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [timeframe, setTimeframe] = useState('day');

  useEffect(() => {
    const filterData = (data, timeframe) => {
      const now = new Date();
      return data.filter(entry => {
        const entryDate = new Date(entry.timestamp);
        switch (timeframe) {
          case 'day':
            return entryDate >= new Date(now.setDate(now.getDate() - 1));
          case 'week':
            return entryDate >= new Date(now.setDate(now.getDate() - 7));
          case 'month':
            return entryDate >= new Date(now.setMonth(now.getMonth() - 1));
          default:
            return true;
        }
      });
    };

    const loadData = async () => {
      setLoading(true);
      const data = await fetchData();
      const filteredData = filterData(data, timeframe);
      setChartData(filteredData);
      setLoading(false);
    };

    loadData();
  }, [timeframe]);

  const chartDataFormatted = chartData ? {
    labels: chartData.map(entry => new Date(entry.timestamp).toLocaleDateString()),
    datasets: [{
      label: 'Sample Data',
      data: chartData.map(entry => entry.value),
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    }],
  } : null;

  return (
    <div className="app-container">
      <TimeframeSelector setTimeframe={setTimeframe} />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        chartDataFormatted && <ChartComponent data={chartDataFormatted} />
      )}
    </div>
  );
}

export default App;