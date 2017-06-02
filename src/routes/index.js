import React from "react";
import { Switch, Route } from "react-router";

import Home from "../Components/Home";

function createRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default createRoutes;
