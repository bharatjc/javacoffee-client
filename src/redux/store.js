import { configureStore } from "@reduxjs/toolkit";
import visitorSlice from "./Slices/visitorSlice";

const store = configureStore({
  reducer: {
    visitor: visitorSlice,
  },
});

export default store;
