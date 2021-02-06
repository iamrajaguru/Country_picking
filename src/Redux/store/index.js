// import { createBrowserHistory } from "history";
import CountryDetails from "../Reducers/SelectReducer";
import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
export default createStore(
  combineReducers({ CountryDetails}),
  applyMiddleware(thunk)
);
