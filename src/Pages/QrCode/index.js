import React from "react";
import { Background, Image } from "./styles";
import { QRCodeSVG } from "qrcode.react";
import Logo from "../../images/logo.png";

import Menu from "../../Components/Menu";

const QRCode = () => {
  return (
    <>
      <Menu />
      <Background className="Background">
        <QRCodeSVG
          data-testid="qrcode"
          size={200}
          value={"https://esteiradeanalise.netlify.app/"}
        />

        <Image>
          <img alt="Logo" id="logo" src={Logo} />
        </Image>

        <p>
          Leia o QR Code para ser redirecionado ao dashboard do forno de
          refusão!
        </p>
      </Background>
    </>
  );
};

export default QRCode;
