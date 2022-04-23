import React, { useCallback, useEffect } from "react";
import { api } from "../../services/api";
import { BrowserView, MobileView } from "react-device-detect";

import { Background } from "./styles";

import Menu from "../../Components/Menu";

const Informacoes = () => {
  const [sensores, setSensores] = React.useState([]);

  const updateSensores = useCallback(() => {
    api
      .get("/metrics")
      .then((response) => {
        const data = response.data;

        data.sort((a, b) => {
          return a.description.localeCompare(b.description);
        });

        setSensores(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    updateSensores();

    const autoSave = setInterval(() => {
      updateSensores();
    }, 5000);

    return () => clearInterval(autoSave);
  }, [updateSensores]);

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
                      <p>{sensor.description}</p>
                    </div>
                    <div className="container-sensor-input-item">
                      <p className="sensor-text">{sensor.metric}</p>
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
        </Background>
      </MobileView>
    </>
  );
};

export default Informacoes;
