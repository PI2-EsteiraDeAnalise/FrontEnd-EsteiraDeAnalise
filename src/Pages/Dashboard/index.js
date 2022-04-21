import React, { useState, useEffect } from 'react';
import { Chart } from 'react-google-charts';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import el from 'date-fns/locale/pt';

import { Section } from './styles';
import Menu from '../../Components/Menu';

export const optionsLineChart = {
  title: 'Total de placas',
  curveType: 'function',
  legend: { position: 'bottom' },
  series: {
    0: { color: '#7459D9' },
    1: { color: '#B9ABEB' },
  },
};

export const dataPieChart = [
  ['Placas', 'Total'],
  ['Total de Sucessos', 21900],
  ['Total de Falhas', 13000],
];

export const optionsPieChart = {
  title: 'Porcentual de todos os dados obtidos',
  is3D: true,
  colors: ['#7459D9', '#B9ABEB'],
  pieSliceTextStyle: {
    color: 'black',
  },
};

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [dataWithDatePicker, setDataWithDatePicker] = useState([]);

  useEffect(() => {
    var dataLineChart = [];

    switch (startDate.getMonth() + 1) {
      case 2:
        dataLineChart = [
          ['Quantidade', 'Sucesso', 'Falhas'],
          ['1', 1200, 1200],
          ['5', 1300, 900],
          ['10', 900, 400],
          ['15', 1000, 500],
          ['20', 1200, 600],
          ['25', 500, 1100],
          ['30', 1600, 400],
        ];
        setDataWithDatePicker(dataLineChart);
        break;
      case 3:
        dataLineChart = [
          ['Quantidade', 'Sucesso', 'Falhas'],
          ['1', 1000, 1000],
          ['5', 1100, 400],
          ['10', 700, 100],
          ['15', 1200, 1100],
          ['20', 1300, 600],
          ['25', 1400, 1000],
          ['30', 1400, 300],
        ];
        setDataWithDatePicker(dataLineChart);
        break;
      case 4:
        dataLineChart = [
          ['Quantidade', 'Sucesso', 'Falhas'],
          ['1', 500, 800],
          ['5', 600, 200],
          ['10', 200, 700],
          ['15', 1000, 300],
          ['20', 1500, 500],
          ['25', 1000, 700],
          ['30', 1300, 200],
        ];
        setDataWithDatePicker(dataLineChart);
        break;

      default:
        dataLineChart = [
          ['Quantidade', 'Sucesso', 'Falhas'],
          ['1', 0, 0],
          ['5', 0, 0],
          ['10', 0, 0],
          ['15', 0, 0],
          ['20', 0, 0],
          ['25', 0, 0],
          ['30', 0, 0],
        ];
        setDataWithDatePicker(dataLineChart);
        break;
    }
  }, [startDate]);

  registerLocale('el', el);

  return (
    <>
      <Menu />
      <Section>
        <DatePicker
          dateFormat="MMMM yyyy"
          locale="el"
          showMonthYearPicker
          selected={startDate}
          dropdownMode="select"
          width="10px"
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          onFocus={(e) => e.target.readOnly = true}
          onChange={(date) => setStartDate(date)}
        />
      </Section>
      <Chart
        chartType="LineChart"
        width="100%"
        height="400px"
        data={dataWithDatePicker}
        options={optionsLineChart}
      />
      <Chart
        chartType="PieChart"
        data={dataPieChart}
        options={optionsPieChart}
        height={'400px'}
        width="100%"
      />
    </>
  );
};

export default Dashboard;
