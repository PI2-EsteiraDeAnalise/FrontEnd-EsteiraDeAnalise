import React from "react";
import { useSelector } from "react-redux";
import qrcode from "../../images/Untitled.svg";

const Home = () => {
  const ipAuth = useSelector((state) => state.authReducer.ip);

  return (
    <>
      <div>
        <img width={"200px"} alt="QRCODE" src={qrcode} />

        {ipAuth ? <p>logado</p> : <p>não logado</p>}
      </div>
    </>
  );
};

export default Home;
