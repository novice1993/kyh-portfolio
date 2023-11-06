import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const readmeSlice = createSlice({
  name: "readmeSlice",
  initialState: initialState,
  reducers: {
    setReadme: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setReadme } = readmeSlice.actions;
export const readmeReducer = readmeSlice.reducer;
