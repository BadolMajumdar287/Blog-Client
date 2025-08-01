import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiManager from "@/config/api.config";


export class CommentLikeAction{
    

   static Register = createAsyncThunk(
    "api/commentlikes/create",
    async (payload, { rejectWithValue, fulfillWithValue }) => {
    
      try {
        
        const { data } = await ApiManager.post("api/commentlikes/create", payload);
           
        return fulfillWithValue(data);
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );



  static GetAll = createAsyncThunk(
    "api/commentlikes/getall",
    async (payload, { rejectWithValue, fulfillWithValue }) => {
        
      try {
        const { data } = await ApiManager.get("api/commentlikes/getall");
        
        return fulfillWithValue(data);
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );



}