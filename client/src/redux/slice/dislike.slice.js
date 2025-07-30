import { DislikeAction } from "../action/dislike.action";
import { createSlice } from "@reduxjs/toolkit";


export const DislikeSlice = createSlice({

       name: "dislike",
 
   initialState: {
    dislike: null,
    loading: false,
    error: null,
    alldislike: []
  },
  
  reducers: {},

   extraReducers: (builder) => {

              builder
                                      .addCase(DislikeAction.CreateDislike.pending, (state) => {
                                        state.loading = true;
                                        state.error = null;
                                      })
                                      .addCase(DislikeAction.CreateDislike.fulfilled, (state, action) => {
                                        state.loading = false;
                                        state.like = action.payload.createLike;
                                      })
                                      .addCase(DislikeAction.CreateDislike.rejected, (state, action) => {
                                        state.loading = false;
                                        state.error = action.payload;
                                      })
                                




                                      
                                      .addCase(DislikeAction.GetAllDisLike.pending, (state) => {
                                        state.loading = true;
                                        state.error = null;
                                      })
                                      .addCase(DislikeAction.GetAllDisLike.fulfilled, (state, action) => {
                                        state.loading = false;
                                        state.alldislike = action.payload.alldislike;
                                      })
                                      .addCase(DislikeAction.GetAllDisLike.rejected, (state, action) => {
                                        state.loading = false;
                                        state.error = action.payload;
                                      })
          

   }

})