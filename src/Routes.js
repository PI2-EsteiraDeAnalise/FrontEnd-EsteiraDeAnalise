import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Menu from "./Components/Menu";

import QRCode from "./Pages/QrCode";
import Coordenadas from "./Pages/Coordenadas";
import Dashboard from "./Pages/Dashboard";
import Informacoes from "./Pages/Informacao";

function Routes() {
  return (
    <Router>
      <Menu />
      <Route path="/" exact component={Dashboard} />
      <Route path="/QRCode" exact component={QRCode} />
      <Route path="/Coordenadas" exact component={Coordenadas} />
      <Route path="/Informacoes" exact component={Informacoes} />
    </Router>
  );
}

export default Routes;
