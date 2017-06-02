import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

const reducer = (state = { replaceMe: "nothx" }, action) => {
  switch (action.type) {
    case "YESPLS":
      return { ...state, replaceMe: "yespls" };
    default:
      return state;
  }
};

export default combineReducers({
  router: routerReducer,
  thisWorks: reducer
});
