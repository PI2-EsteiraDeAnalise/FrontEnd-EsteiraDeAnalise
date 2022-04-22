import React, { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { Background } from "./styles";

import Menu from "../../Components/Menu";

const Informacoes = () => {
  const [sensores, setSensores] = React.useState([]);

  useEffect(() => {
    const data = [
      {
        metrica: "72 °C",
        descricao: "Termopar 1",
      },
      {
        metrica: "72 °C",
        descricao: "Termopar 2",
      },
      {
        metrica: "140 °C",
        descricao: "Termopar 3",
      },
      {
        metrica: "30 °C",
        descricao: "Termopar 4",
      },
      {
        metrica: "75 °C",
        descricao: "Termopar 5",
      },
      {
        metrica: "90 °C",
        descricao: "Termopar 6",
      },
      {
        metrica: "89 °C",
        descricao: "Termopar 7 ",
      },
      {
        metrica: "102 °C",
        descricao: "Termopar 8",
      },
      {
        metrica: "Ativo",
        descricao: "Motores",
      },
    ];

    data.sort((a, b) => {
      return a.descricao.localeCompare(b.descricao);
    });

    setSensores(data);
  }, []);

  return (
    <>
      <Menu />
      <BrowserView>
        <Background margin="8vh auto" direction="row" className="Background">
          <div className="container-sensor">
            <p className="title-sensor">Informações dos sensores</p>
            {sensores &&
              sensores.map((sensor, index) => {
                return (
                  <div key={index} className="container-sensor-input">
                    <div className="title-sensor-input">
                      <p>{sensor.descricao}</p>
                    </div>
                    <div className="container-sensor-input-item">
                      <p className="sensor-text">{sensor.metrica}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </Background>
      </BrowserView>
      <MobileView>
        <Background margin="6vh auto" direction="column" className="Background">
          <div className="container-sensor">
            <p className="title-sensor">Informações dos sensores</p>
            {sensores &&
              sensores.map((sensor, index) => {
                return (
                  <div key={index} className="container-sensor-input">
                    <div className="title-sensor-input">
                      <p>{sensor.descricao}</p>
                    </div>
                    <div className="container-sensor-input-item">
                      <p className="sensor-text">{sensor.metrica}</p>
                    </div>
                  </div>
                );
              })}
          </div>
          ;
        </Background>
      </MobileView>
    </>
  );
};

export default Informacoes;
