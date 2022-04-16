import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/QrCode";
import Dashboard from "./Pages/Dashboard";

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Dashboard} />
      <Route path="/QRCode" exact component={Home} />
    </Router>
  );
}

export default Routes;
