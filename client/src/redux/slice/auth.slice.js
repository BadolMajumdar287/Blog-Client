import { createSlice } from "@reduxjs/toolkit";
import { AuthAction } from "../action/auth.action";

export const AuthSlice = createSlice({

      
  name: "auth",


  initialState: {

     user: "",
     searchQuery: '',
     message: "",
     error: "",
     loading: false,

  },

  reducers:{
      
    setSearchQuery: (state, { payload }) => {
    
         state.searchQuery = payload;
        },
    
  },


    extraReducers: (builder) => {

                    
                   builder
                               .addCase(AuthAction.Register.pending, (state, action) => {
                                   state.loading = true;
                   
                               })
                               .addCase(AuthAction.Register.fulfilled, (state, action) => {
                                state.user = action.payload.user;
                                state.loading = false;
                                state.message = action.payload.message;
                                state.error = "";
                   
                               })
                               .addCase(AuthAction.Register.rejected, (state, action) => {
                                   state.loading = false;
                                   state.error = action.payload.error;
                                   state.message = "";
                                  
                               })





                               
                               .addCase(AuthAction.Login.pending, (state, action) => {
                                   state.loading = true;
                   
                               })
                               .addCase(AuthAction.Login.fulfilled, (state, action) => {
                                state.user = action.payload.user;
                                state.loading = false;
                                state.message = action.payload.message;
                                state.error = "";
                   
                               })
                               .addCase(AuthAction.Login.rejected, (state, action) => {
                                   state.loading = false;
                                   state.error = action.payload.error;
                                   state.message = "";
                                  
                               })





                               
                               .addCase(AuthAction.Session.pending, (state, action) => {
                                   state.loading = true;
                   
                               })
                               .addCase(AuthAction.Session.fulfilled, (state, action) => {
                                state.user = action.payload.user;
                                state.loading = false;
                                state.message = action.payload.message;
                                state.error = "";
                   
                               })
                               .addCase(AuthAction.Session.rejected, (state, action) => {
                                   state.loading = false;
                                   state.error = action.payload.error;
                                   state.message = "";
                                  
                               })















                               
                               .addCase(AuthAction.Logout.pending, (state, action) => {
                                   state.loading = true;
                   
                               })
                               .addCase(AuthAction.Logout.fulfilled, (state, action) => {
                                state.user = action.payload.user;
                                state.loading = false;
                                state.message = action.payload.message;
                                state.error = "";
                   
                               })
                               .addCase(AuthAction.Logout.rejected, (state, action) => {
                                   state.loading = false;
                                   state.error = action.payload.error;
                                   state.message = "";
                                  
                               })

    }


})