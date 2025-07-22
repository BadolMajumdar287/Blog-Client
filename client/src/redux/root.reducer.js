import { AdminSlice } from "./slice/admin.slice";
import { combineReducers } from "@reduxjs/toolkit";
import { BlogSlice } from "./slice/blog.slice";

export const RootReducer = combineReducers({
  
    admin: AdminSlice.reducer,
    blog: BlogSlice.reducer

})