import { combineReducers } from "redux";
import { homepageReducer } from "./homepage.reducers";

const rootReducer = combineReducers({
  homepageData: homepageReducer,
});

export default rootReducer;
