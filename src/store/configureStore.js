import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

export default function configureAppStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: [thunk],
  });
}
