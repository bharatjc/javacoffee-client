import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const visitorSlice = createSlice({
  name: "visitor",
  initialState,
  reducers: {
    setVisitorName: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setVisitorName } = visitorSlice.actions;

export default visitorSlice.reducer;
