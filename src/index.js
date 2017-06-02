import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";

import createStore from "./store/createStore";
import registerServiceWorker from "./registerServiceWorker";
import createRoutes from "./routes";

import App from "./App";

import "./index.css";

const history = createHistory();
const store = createStore({}, history);
const routes = createRoutes(store);

store.dispatch({ type: "YESPLS" });

ReactDOM.render(
  <Provider store={store}>
    <App routes={routes} history={history} />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
