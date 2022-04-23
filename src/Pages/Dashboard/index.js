import React, { useState, useEffect } from "react";
import { api } from "../../services/api";
import { Chart } from "react-google-charts";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import el from "date-fns/locale/pt";

import { Section } from "./styles";
import Menu from "../../Components/Menu";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [dataWithDatePicker, setDataWithDatePicker] = useState([
    ["dia", "Sucesso", "Falhas"],
    ["1", 0, 0],
    ["5", 0, 0],
    ["10", 0, 0],
    ["15", 0, 0],
    ["20", 0, 0],
    ["25", 0, 0],
    ["30", 0, 0],
  ]);
  const [dataPieChartMonth, setDataPieChartMonth] = useState([
    ["Placas", "Total"],
    ["Total de Sucessos", 0],
    ["Total de Falhas", 0],
  ]);
  const [dataPieChartYear, setDataPieChartYear] = useState([
    ["Placas", "Total"],
    ["Total de Sucessos", 0],
    ["Total de Falhas", 0],
  ]);

  const optionsLineChart = {
    title: "Total de placas por dia no mês",
    curveType: "function",
    legend: { position: "bottom" },
    series: {
      0: { color: "#7459D9" },
      1: { color: "#B9ABEB" },
    },
  };

  const optionsPieChartYear = {
    title: "Porcentual de todos os dados obtidos no ano",
    is3D: true,
    colors: ["#7459D9", "#B9ABEB"],
    pieSliceTextStyle: {
      color: "black",
    },
  };

  const optionsPieChartMonth = {
    title: "Porcentual de todos os dados obtidos no mês",
    is3D: true,
    colors: ["#7459D9", "#B9ABEB"],
    pieSliceTextStyle: {
      color: "black",
    },
  };

  registerLocale("el", el);

  useEffect(() => {
    api
      .get(`/boards?year=${startDate.getFullYear()}`)
      .then((response) => {
        let totalSuccessful = 0;
        let totalUnsuccessful = 0;
        let monthSuccessful = 0;
        let monthUnsuccessful = 0;

        const data = response.data;

        data.forEach((monthData) => {
          if (monthData.month === startDate.getMonth() + 1) {
            monthSuccessful = monthData.successfully;
            monthUnsuccessful = monthData.unsuccessfully;
          }
          totalSuccessful += monthData.successfully;
          totalUnsuccessful += monthData.unsuccessfully;
        });

        setDataPieChartMonth([
          ["Placas", "Total"],
          ["Total de Sucessos", monthSuccessful],
          ["Total de Falhas", monthUnsuccessful],
        ]);

        setDataPieChartYear([
          ["Placas", "Total"],
          ["Total de Sucessos", totalSuccessful],
          ["Total de Falhas", totalUnsuccessful],
        ]);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .get(
        `/boards?year=${startDate.getFullYear()}&month=${
          startDate.getMonth() + 1
        }`
      )
      .then((response) => {
        const data = response.data;

        let LineChart = [["dia", "Sucesso", "Falhas"]];

        data.forEach((dayData) => {
          LineChart.push([
            dayData.day.toString().split("-")[1],
            dayData.successfully,
            dayData.unsuccessfully,
          ]);
        });

        setDataWithDatePicker(LineChart);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [startDate]);

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
          onFocus={(e) => (e.target.readOnly = true)}
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
      {dataPieChartMonth &&
      dataPieChartMonth[1][1] !== 0 &&
      dataPieChartMonth[1][2] !== 0 ? (
        <Chart
          chartType="PieChart"
          data={dataPieChartMonth}
          options={optionsPieChartMonth}
          height={"400px"}
          width="100%"
        />
      ) : (
        <div></div>
      )}

      {dataPieChartYear &&
      dataPieChartYear[1][1] !== 0 &&
      dataPieChartYear[1][2] !== 0 ? (
        <Chart
          chartType="PieChart"
          data={dataPieChartYear}
          options={optionsPieChartYear}
          height={"400px"}
          width="100%"
        />
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Dashboard;
