import { createStore, applyMiddleware } from "redux"; // Import from redux package
import { thunk } from "redux-thunk"; // Import from redux-thunk package
import rootReducer from "../_reducers"; // Adjusted to use index.js for simplicity

// Create the store with thunk middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
