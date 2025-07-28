import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiManager from "@/config/api.config";

export class CommentAction {
 
    static Register = createAsyncThunk(
    "api/comments/create",
    async (payload, { rejectWithValue, fulfillWithValue }) => {
      try {
        const { data } = await ApiManager.post("api/comments/create", payload);
        return fulfillWithValue(data);
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );



  static GetAll = createAsyncThunk(
    "api/comments/getall",
    async (payload, { rejectWithValue, fulfillWithValue }) => {
      try {
        const { data } = await ApiManager.get("api/comments/getall", payload);
         
        return fulfillWithValue(data);
        
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

}
