import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/QrCode";
import Coordenadas from "./Pages/Coordenadas";

function Routes() {
  return (
    <Router>
      <Route path="/QRCode" exact component={Home} />
      <Route path="/Coordenadas" exact component={Coordenadas} />
    </Router>
  );
}

export default Routes;
