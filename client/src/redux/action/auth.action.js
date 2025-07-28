import ApiManager from "@/config/api.config";
import { createAsyncThunk } from "@reduxjs/toolkit";




export class AuthAction{
   
    
     static Register = createAsyncThunk(

         "api/users/create",

            async (payload,{rejectWithValue, fulfillWithValue }) => {
          
              try {

                const {data} = await ApiManager.post("api/users/create",payload);
             
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
           


     )

}