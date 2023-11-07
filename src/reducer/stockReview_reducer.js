import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const stockReviewSlice = createSlice({
  name: "stockReviewSlice",
  initialState: initialState,
  reducers: {
    changeStockReview: (_, action) => action.payload,
  },
});

export const { changeStockReview } = stockReviewSlice.actions;
export const stockReviewReducer = stockReviewSlice.reducer;
