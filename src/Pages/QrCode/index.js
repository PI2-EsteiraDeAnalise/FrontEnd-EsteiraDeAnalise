import React from "react";
import { Background } from "./styles";
import qrcode from "../../images/Untitled.svg";

const Home = () => {
  return (
    <>
      <Background className="Background">
        <img alt="QRCODE" src={qrcode} />

        <p>
          Leia o QR Code para ser redirecionado ao dashboard do forno de
          refusão!
        </p>
      </Background>
    </>
  );
};

export default Home;
