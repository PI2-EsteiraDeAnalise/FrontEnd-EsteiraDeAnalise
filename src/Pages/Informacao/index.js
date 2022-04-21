import React, { useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import { Background, Dot } from "./styles";

import Menu from "../../Components/Menu";

const Informacoes = () => {
  const [sensoresMatrix, setSensoresMatrix] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);

  useEffect(() => {
    const data = [
      {
        metrica: "dado forno 1",
        descricao: "Termopar",
      },
      {
        metrica: "dado forno 2",
        descricao: "Termopar",
      },
      {
        metrica: "dado forno 3",
        descricao: "Termopar",
      },
      {
        metrica: "dado Motor 1",
        descricao: "Motor",
      },
      {
        metrica: "dado Motor 2",
        descricao: "Motor",
      },
      {
        metrica: "dado Motor 3",
        descricao: "Motor",
      },
    ];

    data.sort((a, b) => {
      return a.descricao.localeCompare(b.descricao);
    });

    if (data.length > 0) {
      let typeSensorMatrix = [];
      let typeSensor = [];
      let desc = data[0].descricao;

      for (let i = 0; i < data.length; i++) {
        if (data[i].descricao !== desc) {
          desc = data[i].descricao;
          typeSensorMatrix.push(typeSensor);
          typeSensor = [data[i]];
        } else {
          typeSensor.push(data[i]);
        }
      }

      if (data[0].descricao !== desc) typeSensorMatrix.push(typeSensor);

      setSensoresMatrix(typeSensorMatrix);

    }
  }, []);

  const handleDot = (index) => {
    setActiveStep(index);
  };

  return (
    <>
      <Menu />
      <BrowserView>
        <Background margin="8vh auto" direction="row" className="Background">
          {sensoresMatrix &&
            sensoresMatrix.map((sensores, index) => {
              return (
                <div key={index} className="container-coord">
                  <p className="title-coord">
                    {sensores[0].descricao} - Dados do {sensores[0].descricao}
                  </p>

                  {sensores.map((sensor, index) => {
                    return (
                      <div key={index} className="container-coord-input">
                        <div className="title-coord-input">
                          <p>
                            {index + 1}-{sensor.descricao}
                          </p>
                        </div>
                        <div className="container-coord-input-item">
                          <p className="coord-text">{sensor.metrica}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </Background>
      </BrowserView>
      <MobileView>
        <Background margin="6vh auto" direction="column" className="Background">
          {sensoresMatrix &&
            sensoresMatrix.map((sensores, index) => {
              if (index === activeStep) {
                return (
                  <div key={index} className="container-coord">
                    <p className="title-coord">
                      {sensores[0].descricao} - Dados do {sensores[0].descricao}
                    </p>

                    {sensores.map((sensor, index) => {
                      return (
                        <div key={index} className="container-coord-input">
                          <div className="title-coord-input">
                            <p>
                              {index + 1}-{sensor.descricao}
                            </p>
                          </div>
                          <div className="container-coord-input-item">
                            <p className="coord-text">{sensor.metrica}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                );
              } else {
                return <></>;
              }
            })}
          <div className="dot-container">
            {sensoresMatrix &&
              sensoresMatrix.map((sensor, index) => {
                return (
                  <>
                    <Dot
                      key={index}
                      BackColor={activeStep === index ? "#7459D9" : "#E3DEF7"}
                      onClick={() => {
                        handleDot(index);
                      }}
                    ></Dot>
                  </>
                );
              })}
          </div>
        </Background>
      </MobileView>
    </>
  );
};

export default Informacoes;
