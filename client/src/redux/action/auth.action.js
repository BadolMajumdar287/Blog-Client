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


     static Login = createAsyncThunk(

         "api/users/login",

            async (payload,{rejectWithValue, fulfillWithValue }) => {
          
              try {

                const {data} = await ApiManager.post("api/users/login",payload);
                      
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
           


     )





     static Session= createAsyncThunk(

         "api/users/session",

            async (payload,{rejectWithValue, fulfillWithValue }) => {
          
              try {
              console.log(payload)
                const {data} = await ApiManager.get("api/users/session",payload);
                      
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
           


     )





     static Logout = createAsyncThunk(

         "api/users/logout",

            async (payload,{rejectWithValue, fulfillWithValue }) => {
          
              try {

                const {data} = await ApiManager.get("api/users/logout",payload);
             
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
           


     )

}