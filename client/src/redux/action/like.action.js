import ApiManager from "@/config/api.config";
import { createAsyncThunk } from "@reduxjs/toolkit";


export class LikeAction{
    
           static CreateLike = createAsyncThunk(
           "api/likes/create",

         async (payload,{rejectWithValue, fulfillWithValue }) => {
            
              try {

                const {data} = await ApiManager.post("api/likes/create",payload);
             
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
    )


       


     static AllLikeGet = createAsyncThunk(
           "api/likes/getall",

         async (payload,{rejectWithValue, fulfillWithValue }) => {
            
              try {

                const {data} = await ApiManager.get("api/likes/getall",payload);
             
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
    )

}