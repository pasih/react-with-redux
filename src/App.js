import React from "react";
import { ConnectedRouter } from "react-router-redux";

import "./App.css";

const App = ({ routes, history }) => (
  <ConnectedRouter history={history} routes={routes}>
    <div>
      <h1>My app</h1>
      {routes}
    </div>
  </ConnectedRouter>
);

export default App;
