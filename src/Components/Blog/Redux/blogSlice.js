import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    addBlog: (state, action) => {
      console.log("Adding blog:", action.payload);
      state.push(action.payload);
    },
   deleteBlog: (state, action) => {
      return state.filter((_, index) => index !== action.payload);
    }
  },
});

export const { addBlog, deleteBlog } = blogSlice.actions;
export default blogSlice.reducer;
