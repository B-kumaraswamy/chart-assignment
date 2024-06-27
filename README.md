


# React Chart Application

This React application visualizes data over different timeframes (day, week, month) using a line chart. It fetches data from a local JSON file and displays it using the `react-chartjs-2` library.

## Features

- **Dynamic Chart Rendering**: Visualizes data over different timeframes (day, week, month).
- **Responsive Design**: Optimized for various screen sizes.
- **Data Fetching**: Retrieves data from a local JSON file and filters it based on the selected timeframe.

## Project Structure

```
project-root/
├── public/
│   └── data.json
├── src/
│   ├── components/
│   │   ├── ChartComponent.js
│   │   ├── TimeframeSelector.js
│   │   └── data/
│   │       └── fetchData.js
│   │   └── styles/
│   │       └── styles.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

To run this project, you need a modern web browser and a Node.js environment.

### Installation and Setup

1. **Clone the repository.**

    ```sh
    git clone https://github.com/your-username/react-chart-application.git
    cd react-chart-application
    ```

2. **Install dependencies.**

    ```sh
    npm install
    ```

3. **Run the application.**

    ```sh
    npm start
    ```



## Usage

### Changing the Timeframe

The application allows you to change the timeframe of the data displayed in the chart. You can select between **Day**, **Week**, and **Month** by clicking the respective buttons at the top of the page.

### Data File (data.json)

The data is fetched from a local JSON file located at `public/data.json`. Ensure that this file contains an array of data objects with `timestamp` and `value` fields, for example:

```json
[
  {
    "timestamp": "2023-06-01T00:00:00Z",
    "value": 100
  },
  {
    "timestamp": "2023-06-02T00:00:00Z",
    "value": 150
  }
]
```

## Code Overview

### App Component (`App.js`)

The `App` component is the main component of the application. It maintains the state for `chartData` and `timeframe`. The `useEffect` hook fetches the data and updates the chart based on the selected timeframe.

#### Key Parts of `App.js`

- **State Management**

  The `App` component manages the state for the chart data and the selected timeframe.

  ```javascript
  const [chartData, setChartData] = useState(null);
  const [timeframe, setTimeframe] = useState('day');
  ```

- **Data Fetching and Filtering**

  The `useEffect` hook fetches the data using `fetchData` and filters it based on the selected timeframe. The filtered data is then formatted for the chart.


  
- **Timeframe Change Handler**

  The `handleTimeframeChange` function updates the `timeframe` state when a new timeframe is selected.

  ```javascript
  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe);
  };
  ```

- **Rendering the Chart**

  The `App` component renders the `TimeframeSelector` and `ChartComponent` components, passing the necessary props.


### Chart Component (`ChartComponent.js`)

The `ChartComponent` uses `react-chartjs-2` to render a line chart with the provided data.

- **Setting Up the Chart**

  The chart is set up by passing the `data` prop to the `Line` component from `react-chartjs-2`.

 

### Timeframe Selector Component (`TimeframeSelector.js`)

The `TimeframeSelector` component provides buttons to select different timeframes.

- **Timeframe Buttons**

  The component renders buttons for each timeframe and calls `onTimeframeChange` when a button is clicked.


### Data Fetching (`fetchData.js`)

The `fetchData` function retrieves the data from `data.json`.

- **Fetching Data**

  This function fetches and returns the data from the local JSON file.

### Styles (`styles.css`)

The styles for the app, including the chart and timeframe selector, are defined in `styles.css`.


## Conclusion

This README provides an overview of the React Chart Application, including its features, project structure, setup instructions, and code details. For further customization and development, refer to the respective component files and adjust as needed.

Feel free to reach out for any questions or contribute to this project via https://github.com/B-kumaraswamy/chart-assignment.git


