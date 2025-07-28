import { createSlice } from "@reduxjs/toolkit";
import { AuthAction } from "../action/auth.action";

export const AuthSlice = createSlice({

      
  name: "auth",


  initialState: {

     user:null,
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

    }


})