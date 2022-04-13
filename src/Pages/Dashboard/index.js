import React from 'react';
import { Chart } from 'react-google-charts';
import { BrowserView, MobileView } from 'react-device-detect';

export const data = [
  ['Quantity', 'Success', 'Failed'],
  ['1', 1500, 1800],
  ['5', 1600, 1200],
  ['10', 1200, 700],
  ['15', 2000, 2300],
  ['20', 2500, 1500],
  ['25', 2300, 2000],
  ['30', 1900, 700],
];

export const options = {
  title: 'Total boards',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: {
    0: { color: '#7459D9' },
    1: { color: '#B9ABEB' },
    2: { color: '#E3DEF7' },
  },
};

export const dataPieChart = [
  ['Board', 'Total'],
  ['Total Succeed', 42000],
  ['Total under Review', 17000],
  ['Total Failed', 20000],
];

export const optionsPieChart = {
  title: 'Perpetual',
  is3D: true,
  colors: ['#7459D9', '#B9ABEB', '#E3DEF7'],
  pieSliceTextStyle: {
    color: 'black',
  },
};

export const dataBarChart = [
  ['Quantity', 'Success', 'Failed'],
  [`${380} Total`, 340, 40],
];

export const optionsBarChart = {
  title: 'Active Percentage',
  chartArea: { width: '50%' },
  colors: ['#7459D9', '#E3DEF7'],
};

const Dashboard = () => {
  return (
    <>
      <BrowserView>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
        <div>
          <Chart
            chartType="PieChart"
            data={dataPieChart}
            options={optionsPieChart}
            width={'100%'}
            height={'400px'}
          />
          <Chart
            chartType="BarChart"
            width="100%"
            height="400px"
            data={dataBarChart}
            options={optionsBarChart}
          />
        </div>
      </BrowserView>
      <MobileView>
        <h1>This is rendered only on mobile</h1>
      </MobileView>
    </>
  );
};

export default Dashboard;
