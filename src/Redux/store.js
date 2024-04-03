import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice.js";
import urlReducer from "./features/urlSlice.js";

export const store = configureStore({
  reducer: combineReducers({
    url: urlReducer,
    user: authReducer,
  }),
});
