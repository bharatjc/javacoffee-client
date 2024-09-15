import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      let matchedCartItem = state.value.find((el) => {
        return el._id == action.payload._id;
      });
      if (matchedCartItem) {
        matchedCartItem.quantity += 1;
      } else {
        state.value.push({ ...action.payload, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      let { _id, type } = action.payload;
      let matchedCartItem = state.value.find((el) => {
        return el._id == _id;
      });
      if (type == "increment") {
        matchedCartItem.quantity += 1;
      } else if (type == "decrement") {
        if (matchedCartItem.quantity > 1) {
          matchedCartItem.quantity -= 1;
        }
      }
    },
    removeCartItem: (state) => {
      state.value = [];
    },
  },
});

export const { addCartItem, changeQuantity, removeCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
