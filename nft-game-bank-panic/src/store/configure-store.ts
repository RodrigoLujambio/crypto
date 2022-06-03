import {
  combineReducers,
  configureStore
} from "@reduxjs/toolkit";
import counterReducer from "./counter-slice";
import eventsReducer from "./events-slice";

// Combine reducers
const reducer = combineReducers({
  counter: counterReducer,
  events: eventsReducer,
});

// Create Store equivalent
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()//.concat(logger),
});

export default store;
