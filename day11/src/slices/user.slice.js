import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: null
  },
  reducers: {
    signIn(state, action){
        console.log("jjjjjjjjjjjjjj")
        state.data=action.payload
    },
    signOut(state, action){
        state.data=null
    }
  }  
});

export default userSlice.reducer;

export const { signIn , signOut } = userSlice.actions;
