import {
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";

// Combine reducers
const reducer = combineReducers({
  counter: counterReducer
});

// Create Store equivalent
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()//.concat(logger),
});

export default store;
