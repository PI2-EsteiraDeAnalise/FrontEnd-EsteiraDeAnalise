import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Pages/QrCode";
import { ProtectedRoute } from "./protectedRoutes";

function Routes() {
  return (
    <Router>
      <ProtectedRoute path="/" exact component={Home} />
    </Router>
  );
}

export default Routes;
