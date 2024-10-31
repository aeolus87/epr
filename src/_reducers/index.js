import { combineReducers } from "redux";
import { homepageReducer } from "./homepage.reducers";
import { applicationReducer } from "./application.reducers";

const rootReducer = combineReducers({
  homepageData: homepageReducer,
  applicationReducer: applicationReducer,
});

export default rootReducer;
