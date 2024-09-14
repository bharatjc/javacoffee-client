import { configureStore } from "@reduxjs/toolkit";
import visitorSlice from "./Slices/visitorSlice";
import cartReducer from "./Slices/cartSlice";

const store = configureStore({
  reducer: {
    visitor: visitorSlice,
    cart: cartReducer,
  },
});

export default store;
