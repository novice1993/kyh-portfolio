import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const readmeSlice = createSlice({
  name: "readmeSlice",
  initialState: initialState,
  reducers: {
    setReadme: (_, action) => action.payload,
  },
});

export const { setReadme } = readmeSlice.actions;
export const readmeReducer = readmeSlice.reducer;
