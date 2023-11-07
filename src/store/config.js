import { configureStore } from "@reduxjs/toolkit";
import { scrollReducer } from "../reducer/scroll_reducer";
import { readmeReducer } from "../reducer/readme_reducer";
import { stockReviewReducer } from "../reducer/stockReview_reducer";

const store = configureStore({
  reducer: {
    scrollY: scrollReducer,
    isReadme: readmeReducer,
    stockReviewNum: stockReviewReducer,
  },
});

export default store;
