import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: []
}

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {

  }
});


export default commentSlice.reducer;