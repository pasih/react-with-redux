import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "react-router-redux";

import rootReducer from "../reducers/";

export default function(initialState = {}, history) {
  const middleware = [routerMiddleware(history)];
  const enhancers = [];

  let composeEnhancers = compose;

  if (process.env.NODE_ENV === "development") {
    const composeWithDevToolsExtension =
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; // eslint-disable-line no-underscore-dangle
    if (typeof composeWithDevToolsExtension === "function") {
      composeEnhancers = composeWithDevToolsExtension;
    }
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
  );

  return store;
}
