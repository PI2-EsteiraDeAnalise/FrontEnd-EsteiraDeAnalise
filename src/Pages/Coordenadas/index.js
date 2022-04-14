import React from "react";
import imgCoord from "../../images/download.jpg";
import { Background } from "./styles";

const Coordenadas = () => {
  const [coordenada, setCoordenada] = React.useState([]);
  const [realCoordenada, setRealCoordenada] = React.useState([]);
  const [coordenadas, setCoordenadas] = React.useState([]);
  const [isSecondClick, setIsSecondClick] = React.useState(false);

  const FindPosition = (oElement) => {
    if (typeof oElement.offsetParent != "undefined") {
      for (var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent) {
        posX += oElement.offsetLeft;
        posY += oElement.offsetTop;
      }
      return [posX, posY];
    } else {
      return [oElement.x, oElement.y];
    }
  };

  const placeImage = (x1, y1, x2, y2) => {
    const e = document.createElement("div");
    e.style.position = "absolute";

    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;

    e.style.backgroundColor = `rgba(${red},${green},${blue},0.7)`;
    e.style.border = `1px solid rgba(${red},${green},${blue},0.7)`;

    let auxmin = 0;
    let auxmax = 0;

    auxmin = Math.min(x1, x2);
    auxmax = Math.max(x1, x2);

    x1 = auxmin;
    x2 = auxmax;

    auxmin = Math.min(y1, y2);
    auxmax = Math.max(y1, y2);

    y1 = auxmin;
    y2 = auxmax;

    var w = x2 - x1;
    var h = y2 - y1;

    e.style.left = x1 + "px";
    e.style.top = y1 + "px";

    console.log(w);
    e.style.width = w + "px";

    console.log(h);
    e.style.height = h + "px";

    document.body.appendChild(e);
  };

  const handleClickImage = (e) => {
    var PosX = 0;
    var PosY = 0;
    var ImgPos;
    ImgPos = FindPosition(document.getElementById("imgCoord"));
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
      PosX = e.pageX;
      PosY = e.pageY;
    } else if (e.clientX || e.clientY) {
      PosX =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      PosY =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    PosX = PosX - ImgPos[0];
    PosY = PosY - ImgPos[1];

    console.log("x:", PosX);
    console.log("y:", PosY);

    if (!isSecondClick) {
      setCoordenada([PosX, PosY]);
      setRealCoordenada([e.pageX, e.pageY]);
      setIsSecondClick(true);
    } else {
      placeImage(realCoordenada[0], realCoordenada[1], e.pageX, e.pageY);
      setCoordenadas([
        ...coordenadas,
        [coordenada[0], coordenada[1], PosX, PosY],
      ]);
      setIsSecondClick(false);
    }

    console.log(coordenadas);
  };

  const addHandle = () => {};

  const removeHandle = () => {
    let tempCoord = coordenadas.map((coord) => coord);

    setCoordenadas(tempCoord.slice(0, tempCoord.length - 1));
  };

  return (
    <>
      <Background>
        <div className="container-img">
          <img
            onClick={(e) => {
              handleClickImage(e);
            }}
            alt="Imagem da placa"
            id="imgCoord"
            src={imgCoord}
          />
        </div>
        <div className="container-coord">
          <div className="container-control">
            <button onClick={addHandle}>+</button>
            <button onClick={removeHandle}>-</button>
          </div>
          <div className="container-coord-input">
            {coordenadas &&
              coordenadas.map((coord, index) => {
                return (
                  <>
                    <div className="title-coord">
                      <h3>{index}-Coordenada</h3>
                    </div>
                    <div className="first-input-coord">
                      <p>x1: {coord[0]}</p>
                      <p>y1: {coord[1]}</p>
                    </div>
                    <div className="second-input-coord">
                      <p>x2: {coord[2]}</p>
                      <p>y2: {coord[3]}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </Background>
    </>
  );
};

export default Coordenadas;
