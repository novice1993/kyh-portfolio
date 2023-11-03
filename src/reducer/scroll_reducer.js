import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

const scrollSlice = createSlice({
  name: "scrollSlice",
  initialState: initialState,
  reducers: {
    setScrollY: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setScrollY } = scrollSlice.actions;
export const scrollReducer = scrollSlice.reducer;
