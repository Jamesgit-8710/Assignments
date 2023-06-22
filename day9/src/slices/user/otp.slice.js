import { createSlice } from "@reduxjs/toolkit";

const otpSlice = createSlice({
  name: "otp",
  initialState: {
    otpp: false,
  },
  reducers: {
    verify(state, action) {
      state.otpp = true
    },
  },
});

export default otpSlice.reducer;
export const { verify } = otpSlice.actions;
