import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null
}

export const fetchPosts = createAsyncThunk("posts", async (subreddit = 'popular') => {
  try {
    const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);

    // console.log(response.data);

    return response.data.data.children;
    
  } catch (error) {
    console.log(error);
    throw new Error("Failed to load posts or bad network");
  }
})


const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.error = null;
        state.status = "loading";
      })

      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.error = null;
        state.status = "successed";
        state.items = action.payload;
      })

      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || 'Unknow error';
      })
  }
});


export default postSlice.reducer;

export const selectPosts = state => state.posts.items;
// export const selectPosts = state => state.posts;
export const selectPostsStatus = state => state.posts.status;
export const selectPostsError = state => state.posts.error;
