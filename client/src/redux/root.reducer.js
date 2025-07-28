import { AdminSlice } from "./slice/admin.slice";
import { combineReducers } from "@reduxjs/toolkit";
import { BlogSlice } from "./slice/blog.slice";
import { CommentSlice } from "./slice/comment.slice";
import { AuthSlice } from "./slice/auth.slice";
import { LikeSlice } from "./slice/like.slice";

export const RootReducer = combineReducers({
  
    admin: AdminSlice.reducer,
    blog: BlogSlice.reducer,
    comment: CommentSlice.reducer,
    auth: AuthSlice.reducer,
    like: LikeSlice.reducer
    

})