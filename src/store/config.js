import { configureStore } from "@reduxjs/toolkit";
import { scrollReducer } from "../reducer/scroll_reducer";
import { readmeReducer } from "../reducer/readme_reducer";

const store = configureStore({
  reducer: {
    scrollY: scrollReducer,
    isReadme: readmeReducer,
  },
});

export default store;
