import React from "react";
import { Chart } from "react-google-charts";
import { Section } from "./styles";
import { BrowserView, MobileView } from "react-device-detect";

import Menu from "../../Components/Menu";

export const data = [
  ["Quantidade", "Sucesso", "Falhas"],
  ["1", 1500, 1800],
  ["5", 1600, 1200],
  ["10", 1200, 700],
  ["15", 2000, 2300],
  ["20", 2500, 1500],
  ["25", 2300, 2000],
  ["30", 1900, 700],
];

export const options = {
  title: "Total de placas",
  curveType: "function",
  legend: { position: "bottom" },
  series: {
    0: { color: "#7459D9" },
    1: { color: "#B9ABEB" },
  },
};

export const dataPieChart = [
  ["Placas", "Total"],
  ["Total de Sucessos", 42000],
  ["Total de Falhas", 20000],
];

export const optionsPieChart = {
  title: "Porcentual de todos os dados obtidos",
  is3D: true,
  colors: ["#7459D9", "#B9ABEB"],
  pieSliceTextStyle: {
    color: "black",
  },
};

export const dataBarChart = [
  ["Quantidade", "Sucesso", "Falhas"],
  [`${380} Total`, 340, 40],
];

export const optionsBarChart = {
  title: "Porcentagem de placas ativas",
  chartArea: { width: "50%" },
  colors: ["#7459D9", "#B9ABEB"],
};

const Dashboard = () => {
  return (
    <>
      <Menu />
      <BrowserView>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
        <Section>
          <Chart
            chartType="PieChart"
            data={dataPieChart}
            options={optionsPieChart}
            height={"400px"}
          />
          <Chart
            chartType="BarChart"
            height="400px"
            data={dataBarChart}
            options={optionsBarChart}
          />
        </Section>
      </BrowserView>
      <MobileView>
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        />
        <Chart
          chartType="PieChart"
          data={dataPieChart}
          options={optionsPieChart}
          width={"100%"}
          height={"400px"}
        />
        <Chart
          chartType="BarChart"
          height="400px"
          width={"100%"}
          data={dataBarChart}
          options={optionsBarChart}
        />
      </MobileView>
    </>
  );
};

export default Dashboard;
