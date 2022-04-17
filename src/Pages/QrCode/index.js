import React from "react";
import { Background } from "./styles";
import { QRCodeSVG } from "qrcode.react";

const QRCode = () => {
  return (
    <>
      <Background className="Background">
        <QRCodeSVG size={200} value="https://reactjs.org/" />

        <p>
          Leia o QR Code para ser redirecionado ao dashboard do forno de
          refusão!
        </p>
      </Background>
    </>
  );
};

export default QRCode;
