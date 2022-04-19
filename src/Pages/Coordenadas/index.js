import { Button } from "@mui/material";
import React from "react";
import imgCoord from "../../images/download.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import { Background } from "./styles";

import Menu from "../../Components/Menu";

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

  const placeImage = (realC, imgC) => {
    let x1 = realC[0];
    let y1 = realC[1];
    let x2 = realC[2];
    let y2 = realC[3];

    const e = document.createElement("div");

    e.style.position = "absolute";

    const red = Math.random() * 155 + 100;
    const green = Math.random() * 155 + 100;
    const blue = Math.random() * 155 + 100;

    e.style.backgroundColor = `rgba(${red},${green},${blue},0.0)`;
    e.style.border = `4px solid rgba(${red},${green},${blue},1)`;

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

    e.setAttribute(
      "id",
      "coord-" +
        imgC[0].toString() +
        imgC[1].toString() +
        imgC[2].toString() +
        imgC[3].toString()
    );
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
      let realC = [realCoordenada[0], realCoordenada[1], e.pageX, e.pageY];
      let imgC = [coordenada[0], coordenada[1], PosX, PosY];
      placeImage(realC, imgC);
      setCoordenadas([
        ...coordenadas,
        [coordenada[0], coordenada[1], PosX, PosY],
      ]);
      setIsSecondClick(false);
    }

    console.log(coordenadas);
  };

  const removeHandle = (index) => {
    if (coordenadas.length > 0) {
      console.log(index);

      let tempCoord = coordenadas.map((coord) => coord);

      let id =
        "coord-" +
        tempCoord[index][0].toString() +
        tempCoord[index][1].toString() +
        tempCoord[index][2].toString() +
        tempCoord[index][3].toString();

      console.log(id);

      document.getElementById(id).remove();

      tempCoord.splice(index, 1);
      console.log(tempCoord);

      setCoordenadas(tempCoord);
    }
  };

  return (
    <>
      <Menu coords={coordenadas} />
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
          <p>Clique em dois pontos na imagem para adicionar uma coordenada.</p>
          <div className="container-coord-input">
            {coordenadas &&
              coordenadas.map((coord, index) => {
                return (
                  <>
                    <div className="title-coord">
                      <p>{index + 1}-Coordenada</p>
                      <Button
                        sx={{
                          padding: "0",
                          width: "20px",
                          height: "20px",
                          backgroundColor: "white",
                          color: "black",
                        }}
                        onClick={() => {
                          removeHandle(index);
                        }}
                        variant="contained"
                      >
                        <DeleteIcon />
                      </Button>
                    </div>
                    <div className="container-coord-input-item">
                      <div className="first-input-coord">
                        <p className="coord-text">x1: {coord[0]}</p>
                        <p className="coord-text">y1: {coord[1]}</p>
                      </div>
                      <div className="second-input-coord">
                        <p className="coord-text">x2: {coord[2]}</p>
                        <p className="coord-text">y2: {coord[3]}</p>
                      </div>
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
