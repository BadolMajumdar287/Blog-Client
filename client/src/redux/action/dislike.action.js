import ApiManager from "@/config/api.config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export class DislikeAction {

      static CreateDislike = createAsyncThunk(
           "api/dislikes/create",

         async (payload,{rejectWithValue, fulfillWithValue }) => {
            
              try {

                const {data} = await ApiManager.post("api/dislikes/create",payload);
             
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
    )




    static GetAllDisLike = createAsyncThunk(
           "api/dislikes/getall",

         async (payload,{rejectWithValue, fulfillWithValue }) => {
            
              try {

                const {data} = await ApiManager.get("api/dislikes/getall",payload);
                 
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
    )
   
}