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
    
    addResume(state, action) {
        
    },
  },
});

export const { addResume } = resumeSlice.actions;

export default resumeSlice.reducer;
