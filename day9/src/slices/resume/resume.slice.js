import { createSlice } from "@reduxjs/toolkit";

const resumeSlice = createSlice({
  name: "resumes",
  initialState: [
    {
        id : 1,
        data : [
            {}
        ]
    },
    {
        id : 2,
        data : [
            {}
        ]
    }
  ],
  reducers: {
    log(state, action){
      state.push(action.payload)
    },
    addResume(state, action) {
        state[action.payload.i].data.push(action.payload.d)
    },
  },
});

export const { addResume , log } = resumeSlice.actions;

export default resumeSlice.reducer;
