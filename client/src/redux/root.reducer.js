import { AdminSlice } from "./slice/admin.slice";
import { combineReducers } from "@reduxjs/toolkit";

export const RootReducer = combineReducers({
  
    admin: AdminSlice.reducer,

})