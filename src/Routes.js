import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/QrCode";
<<<<<<< Updated upstream
=======
import Coordenadas from "./Pages/Coordenadas";
import Menu from "./Components/Menu";
import Dashboard from "./Pages/Dashboard";
import Informacoes from "./Pages/Informacao";
>>>>>>> Stashed changes

function Routes() {
  return (
    <Router>
<<<<<<< Updated upstream
      <Route path="/" exact component={Home} />
=======
      <Menu />
      <Route path="/" exact component={Dashboard} />
      <Route path="/QRCode" exact component={Home} />
      <Route path="/Coordenadas" exact component={Coordenadas} />
      <Route path="/Informacoes" exact component={Informacoes} />
>>>>>>> Stashed changes
    </Router>
  );
}

export default Routes;
