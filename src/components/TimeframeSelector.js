import React from 'react';

const TimeframeSelector = ({ setTimeframe }) => {
  return (
    <div className="timeframe-selector">
      <button onClick={() => setTimeframe('day')}>Day</button>
      <button onClick={() => setTimeframe('week')}>Week</button>
      <button onClick={() => setTimeframe('month')}>Month</button>
    </div>
  );
};

export default TimeframeSelector;