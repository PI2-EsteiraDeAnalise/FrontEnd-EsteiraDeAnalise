import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/QrCode";

function Routes() {
  return (
    <Router>
      <Route path="/QRCode" exact component={Home} />
    </Router>
  );
}

export default Routes;
