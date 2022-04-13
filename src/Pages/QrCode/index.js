import React, { useCallback } from "react";
import { useSelector } from "react-redux";
import { Background } from "./styles";
import qrcode from "../../images/Untitled.svg";
import { useHistory } from "react-router-dom";
import { Button, TextField } from "@mui/material";

const Home = () => {
  const history = useHistory();
  const ipAuth = useSelector((state) => state.authReducer.ip);

  const loged = useCallback(() => {
    if (!ipAuth) {
      return history.push("/");
    }
  }, [ipAuth, history]);

  loged();

  return (
    <>
      <Background className="Background">
        <img width={"200px"} alt="QRCODE" src={qrcode} />

        <p>
          Leia o QR Code presente no forno de refusão e insira o código abaixo!
        </p>

        <TextField id="filled-basic" label="Filled" variant="filled" />

        <Button variant="contained">Contained</Button>
      </Background>
    </>
  );
};

export default Home;
