import { CommentLikeAction } from "../action/comment.like.action";
import { createSlice } from "@reduxjs/toolkit";

export const CommentLikeSlice = createSlice({
 
    name: "commentlike",
 
   initialState: {
    commentlike: null,
    loading: false,
    error: null,
    allCommentLike: []
  },
  
  reducers: {},

 extraReducers: (builder) => {

  
    builder
          // CommnetLike craete
          .addCase(CommentLikeAction.Register.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(CommentLikeAction.Register.fulfilled, (state, action) => {
            state.loading = false;
            state.commentlike = action.payload.createcommentlike;
          })
          .addCase(CommentLikeAction.Register.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
    



          // CommnetLike getall
          .addCase(CommentLikeAction.GetAll.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(CommentLikeAction.GetAll.fulfilled, (state, action) => {
            state.loading = false;
            state.allCommentLike = action.payload.allcommentlike;
          })
          .addCase(CommentLikeAction.GetAll.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })




 }


})