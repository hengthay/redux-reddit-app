import { configureStore } from "@reduxjs/toolkit";
import postReducer from "../features/postReddit/postSlice.js";
import commentReducer  from "../features/commentReddit/commentSlice.js";

const store = configureStore({
  reducer: {
    post: postReducer,
    comment: commentReducer
  }
});

export default store;