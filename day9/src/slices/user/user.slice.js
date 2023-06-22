import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    isLogin: false,
    // exist: false,
    data: null,
  },
  reducers: {
    addUser(state, action) {
      state.data = action.payload
      state.isLogin = true
    },
    verify(state, action) {
      state.isLogin = true
    },
    logout(state, action) {
      state.data = null
      // state.exist = false
    }
  },
});

export default userSlice.reducer;
export const { addUser , verify , logout } = userSlice.actions;
