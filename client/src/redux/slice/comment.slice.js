import { createSlice } from "@reduxjs/toolkit";
import { CommentAction } from "../action/comment.action";

export const CommentSlice = createSlice({
  name: "comment",
  initialState: {
    comment: null,
    loading: false,
    error: null,
    allcomment: []
  },
  
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(CommentAction.Register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CommentAction.Register.fulfilled, (state, action) => {
        state.loading = false;
        state.comment = action.payload.comment;
      })
      .addCase(CommentAction.Register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(CommentAction.GetAll.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(CommentAction.GetAll.fulfilled, (state, action) => {
         

        state.loading = false;
        state.allcomment = action.payload.allComment;
      })
      .addCase(CommentAction.GetAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
