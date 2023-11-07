import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const previousScrollSlice = createSlice({
  name: "previousScrollSlice",
  initialState: initialState,
  reducers: {
    setPreviousScroll: (_, action) => action.payload,
  },
});

export const { setPreviousScroll } = previousScrollSlice.actions;
export const previousScrollReducer = previousScrollSlice.reducer;
