import React, { useEffect } from "react";
import { api } from "../../services/api";
import {
  Button,
  Box,
  InputLabel,
  FormControl,
  NativeSelect,
} from "@mui/material";
import withoutImg from "../../images/NoBoardImage.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { Background } from "./styles";
import { BrowserView, MobileView } from "react-device-detect";

import Menu from "../../Components/Menu";

const Coordenadas = () => {
  const [haveImage, setHaveImage] = React.useState(false);
  const [tags, setTags] = React.useState([]);
  const [coordenada, setCoordenada] = React.useState([]);
  const [realCoordenada, setRealCoordenada] = React.useState([]);
  const [coordenadas, setCoordenadas] = React.useState([]);
  const [isSecondClick, setIsSecondClick] = React.useState(false);
  const [picture, setPicture] = React.useState(null);

  useEffect(() => {
    api
      .get("/tags")
      .then((response) => {
        setTags(response.data);
      })
      .catch((err) => {});

    api
      .get("/coordinates")
      .then((response) => {
        console.log(response.data);
        const data = response.data;
        let dataCoordenadas = [];

        data.forEach((coordenada) => {
          const dataCoordenada = [
            coordenada.coordinates.x1,
            coordenada.coordinates.y1,
            coordenada.coordinates.x2,
            coordenada.coordinates.y2,
            coordenada.tag,
            coordenada.id,
          ];

          dataCoordenadas.push(dataCoordenada);
        });

        setCoordenadas(dataCoordenadas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

    e.style.width = w + "px";

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

    if (!isSecondClick) {
      setCoordenada([PosX, PosY]);
      setRealCoordenada([e.pageX, e.pageY]);
      setIsSecondClick(true);
    } else {
      let realC = [realCoordenada[0], realCoordenada[1], e.pageX, e.pageY];
      let imgC = [coordenada[0], coordenada[1], PosX, PosY];
      placeImage(realC, imgC);
      console.log("realc", realC);
      console.log("imgC", imgC);
      setCoordenadas([
        ...coordenadas,
        [
          coordenada[0].toString(),
          coordenada[1].toString(),
          PosX.toString(),
          PosY.toString(),
          "",
          "-1",
        ],
      ]);
      setIsSecondClick(false);
    }
  };

  const handleClickInputImage = () => {
    document.getElementById("UpImage").click();
  };

  const handleInputImage = async (tempPicture) => {
    window.scrollTo(0, 0);

    const newFile = {
      file: tempPicture[0],
      url: URL.createObjectURL(tempPicture[0]),
    };

    setPicture(newFile);

    const localImagePage = document
      .querySelector("#imgCoord")
      .getBoundingClientRect();

    console.log(localImagePage);

    coordenadas.forEach((coordenada) => {
      let x1 = localImagePage.x + parseFloat(coordenada[0]);
      let y1 = localImagePage.y + parseFloat(coordenada[1]);
      let x2 = localImagePage.x + parseFloat(coordenada[2]);
      let y2 = localImagePage.y + parseFloat(coordenada[3]);

      let realC = [x1, y1, x2, y2];
      let imgC = [coordenada[0], coordenada[1], coordenada[2], coordenada[3]];

      placeImage(realC, imgC);
    });

    setHaveImage(true);
  };

  const handleInsertTag = (e, index) => {
    let tempCoord = coordenadas.map((coord) => coord);

    tempCoord[index][4] = e.target.value;

    setCoordenadas(tempCoord);
  };

  const handleSubmit = () => {
    const postCoordenadas = async () => {
      if (coordenadas.length === 0) {
        alert("Deve haver ao menos uma coordenada!");
        return;
      } else if (
        coordenadas.filter((coord) => coord[4] === "" && coord[5] === "-1")
          .length > 0
      ) {
        alert("Preencha todas as tags");
        return;
      }

      await coordenadas.forEach(async (coord) => {
        if (coord[5] === "-1") {
          const data = {
            tag: coord[4],
            coordinates: {
              x1: coord[0],
              y1: coord[1],
              x2: coord[2],
              y2: coord[3],
            },
          };

          await api.post("/coordinates", data);
        }
      });

      console.log(coordenadas);
    };

    postCoordenadas();

    document.location.reload();
  };

  const removeHandle = (index) => {
    if (coordenadas.length > 0) {
      let tempCoord = coordenadas.map((coord) => coord);

      let id =
        "coord-" +
        tempCoord[index][0].toString() +
        tempCoord[index][1].toString() +
        tempCoord[index][2].toString() +
        tempCoord[index][3].toString();

      document.getElementById(id).remove();

      const removedCoord = tempCoord.splice(index, 1);

      console.log(removedCoord);

      if (removedCoord[0][5] !== "-1") {
        api.delete(`/coordinate/${removedCoord[0][5]}`);
      }

      setCoordenadas(tempCoord);
    }
  };

  return (
    <>
      <BrowserView>
        <Menu coords={coordenadas} />
        <Background>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 0) {
                handleInputImage(e.target.files);
              }
            }}
            id="UpImage"
            type="file"
            hidden
          />
          <div className="container-img">
            <div className="container-border">
              {picture ? (
                <img
                  onClick={(e) => {
                    handleClickImage(e);
                  }}
                  alt={picture.file.name}
                  id="imgCoord"
                  src={picture.url}
                />
              ) : (
                <img
                  onClick={handleClickInputImage}
                  alt="Imagem da placa"
                  id="imgCoord"
                  src={withoutImg}
                />
              )}
            </div>
          </div>
          <div className="container-coord">
            <p>
              Clique em dois pontos na imagem para adicionar uma coordenada.
            </p>
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
                            "&:hover": {
                              backgroundColor: "#fff",
                              color: "#3c52b2",
                            },
                          }}
                          disabled={haveImage ? false : true}
                          onClick={() => {
                            removeHandle(index);
                          }}
                          variant="contained"
                        >
                          <DeleteIcon />
                        </Button>
                      </div>
                      <div className="container-coord-input-item">
                        <div className="text-input-coord">
                          <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                              <InputLabel
                                variant="standard"
                                htmlFor="uncontrolled-native"
                                sx={{ color: "whitesmoke" }}
                              >
                                Tag
                              </InputLabel>
                              <NativeSelect
                                onChange={(e) => {
                                  handleInsertTag(e, index);
                                }}
                                disabled={coord[5] !== "-1"}
                                defaultValue={coord[4]}
                                sx={{
                                  border: "1px solid black",
                                  borderRadius: "5px",
                                  paddingLeft: "8px",
                                  backgroundColor: "white",
                                  color: "black",
                                  fontWeight: "bold",
                                }}
                              >
                                <option value="">Selecione uma tag</option>
                                {tags &&
                                  tags.map((tag) => {
                                    return (
                                      <option value={tag.name}>
                                        {tag.name}
                                      </option>
                                    );
                                  })}
                              </NativeSelect>
                            </FormControl>
                          </Box>
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
                      </div>
                    </>
                  );
                })}
            </div>
            <Button
              sx={{
                padding: "0",
                width: "200px",
                height: "30px",
                backgroundColor: "white",
                color: "black",
                position: "absolute",
                bottom: "10px",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#3c52b2",
                },
              }}
              onClick={handleSubmit}
              variant="contained"
            >
              salvar
            </Button>
          </div>
        </Background>
      </BrowserView>
      <MobileView>Para visualizamento, acesse na plataforma web</MobileView>
    </>
  );
};

export default Coordenadas;
