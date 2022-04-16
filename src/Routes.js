import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/QrCode";
import Coordenadas from "./Pages/Coordenadas";
import Menu from "./Components/Menu";
import Dashboard from "./Pages/Dashboard";

function Routes() {
  return (
    <Router>
      <Menu />
      <Route path="/" exact component={Dashboard} />
      <Route path="/QRCode" exact component={Home} />
      <Route path="/Coordenadas" exact component={Coordenadas} />
    </Router>
  );
}

export default Routes;
