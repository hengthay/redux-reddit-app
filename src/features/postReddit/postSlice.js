import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null
}

export const fetchPosts = createAsyncThunk("posts", async () => {
  try {
    const response = await axios.get('https://www.reddit.com/r/popular.json');

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't be fetch from the external source. (Please double check your spelling or maybe resource is not exist)");
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
export const selectPostsStatus = state => state.posts.status;
export const selectPostsError = state => state.posts.error;
