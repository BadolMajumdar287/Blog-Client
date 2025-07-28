import { LikeAction } from "../action/like.action";
import { createSlice } from "@reduxjs/toolkit";



export const LikeSlice = createSlice({

   name: "like",
 
   initialState: {
    like: null,
    loading: false,
    error: null,
    allLike: []
  },
  
  reducers: {},

  extraReducers: (builder) => {

                   builder
                         .addCase(LikeAction.CreateLike.pending, (state) => {
                           state.loading = true;
                           state.error = null;
                         })
                         .addCase(LikeAction.CreateLike.fulfilled, (state, action) => {
                           state.loading = false;
                           state.like = action.payload.createLike;
                         })
                         .addCase(LikeAction.CreateLike.rejected, (state, action) => {
                           state.loading = false;
                           state.error = action.payload;
                         })




                         
                         .addCase(LikeAction.AllLikeGet.pending, (state) => {
                           state.loading = true;
                           state.error = null;
                         })
                         .addCase(LikeAction.AllLikeGet.fulfilled, (state, action) => {
                           state.loading = false;
                           state.allLike = action.payload.allLike;
                         })
                         .addCase(LikeAction.AllLikeGet.rejected, (state, action) => {
                           state.loading = false;
                           state.error = action.payload;
                         })

  }

})