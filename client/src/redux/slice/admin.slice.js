import { AdminAction } from "../action/admin.action";
import { createSlice } from "@reduxjs/toolkit";


export const AdminSlice = createSlice({

  name: "admin",


  initialState: {

     admin:null,
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
            .addCase(AdminAction.Register.pending, (state, action) => {
                state.loading = true;

            })
            .addCase(AdminAction.Register.fulfilled, (state, action) => {
             state.admin = action.payload.admin;
             state.loading = false;
             state.message = action.payload.message;
             state.error = "";

            })
            .addCase(AdminAction.Register.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
                state.message = "";
               
            })


            
            .addCase(AdminAction.Login.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(AdminAction.Login.fulfilled, (state, action) => {
              state.loading = false;
              state.admin = action.payload.admin;
              state.message = action.payload.message;
              state.error = "";
            })
            .addCase(AdminAction.Login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
                state.message = "";
            })


            .addCase(AdminAction.Session.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(AdminAction.Session.fulfilled, (state, action) => {
              state.loading = false;
              state.admin = action.payload.admin;
              state.message = action.payload.message;
              state.error = "";
            })
            .addCase(AdminAction.Session.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
                state.message = "";
            })



            .addCase(AdminAction.Logout.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(AdminAction.Logout.fulfilled, (state, action) => {
              state.loading = false;
              state.admin = action.payload.admin;
              state.message = action.payload.message;
              state.error = "";
            })
            .addCase(AdminAction.Logout.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.error;
                state.message = "";
            })
        }

})