import { configureStore } from "@reduxjs/toolkit";
import { scrollReducer } from "../reducer/scroll_reducer";

const store = configureStore({
  reducer: {
    scrollY: scrollReducer,
  },
});

export default store;
