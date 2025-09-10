import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
}

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {

  }
});


export default commentSlice.reducer;