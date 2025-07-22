import { BlogAction } from "../action/blog.action";
import { createSlice } from "@reduxjs/toolkit";


export const BlogSlice = createSlice({
    
    name: "blog",

    initialState: {
        blog: "",
        allblog: [],
        message: "",
        error: "",
        loading: false
    },

    reducers: {
        setBlog: (state, { payload}) => {
            state.blog = payload;
        }
    },

     
    extraReducers: (builder) => {
               
        builder
                    .addCase(BlogAction.CreateBlog.pending, (state, action) => {
                        state.loading = true;
        
                    })
                    .addCase(BlogAction.CreateBlog.fulfilled, (state, action) => {
                     state.blog = action.payload.blog;
                     state.loading = false;
                     state.message = action.payload.message;
                     state.error = "";
        
                    })
                    .addCase(BlogAction.CreateBlog.rejected, (state, action) => {
                        state.loading = false;
                        state.error = action.payload.error;
                        state.message = "";
                       
                    })
        



                    .addCase(BlogAction.GetAllBlog.pending, (state, action) => {
                     state.loading = true;
        
                    })
                    .addCase(BlogAction.GetAllBlog.fulfilled, (state, action) => {
                       
                     state.allblog = action.payload.allblog;
                     state.loading = false;
                     state.message = action.payload.message;
                     state.error = "";
        
                    })
                    .addCase(BlogAction.GetAllBlog.rejected, (state, action) => {
                     state.loading = false;
                     state.error = action.payload.error;
                     state.message = "";
                       
                    })


                   .addCase(BlogAction.BlogGetById.pending, (state, action) => {
                     state.loading = true;
        
                    })
                    .addCase(BlogAction.BlogGetById.fulfilled, (state, action) => {
                         
                     state.blog = action.payload.blog;
                     state.loading = false;
                     state.message = action.payload.message;
                     state.error = "";
        
                    })
                    .addCase(BlogAction.BlogGetById.rejected, (state, action) => {
                     state.loading = false;
                     state.error = action.payload.error;
                     state.message = "";
                       
                    })
                    

                      .addCase(BlogAction.UpdateBlog.pending, (state, action) => {
                     state.loading = true;
        
                    })
                    .addCase(BlogAction.UpdateBlog.fulfilled, (state, action) => {
                       
                     state.blog = action.payload.updatedBlog;
                     state.loading = false;
                     state.message = action.payload.message;
                     state.error = "";
        
                    })
                    .addCase(BlogAction.UpdateBlog.rejected, (state, action) => {
                     state.loading = false;
                     state.error = action.payload.error;
                     state.message = "";
                       
                    })



                      .addCase(BlogAction.DeleteBlog.pending, (state, action) => {
                     state.loading = true;
        
                    })
                    .addCase(BlogAction.DeleteBlog.fulfilled, (state, action) => {
                       
                   
                     state.loading = false;
                     state.message = action.payload.message;
                     state.error = "";
        
                    })
                    .addCase(BlogAction.DeleteBlog.rejected, (state, action) => {
                     state.loading = false;
                     state.error = action.payload.error;
                     state.message = "";
                       
                    })





    }




})