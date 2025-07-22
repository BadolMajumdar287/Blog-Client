import ApiManager from "@/config/api.config";
import { createAsyncThunk } from "@reduxjs/toolkit";


export class AdminAction{
    
     static Register = createAsyncThunk(

         "api/admin/register",

            async (payload,{rejectWithValue, fulfillWithValue }) => {
          
              try {

                const {data} = await ApiManager.post("api/admin/register",payload);
             
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
           


     )




      static Login = createAsyncThunk(

         "api/admin/login",

            async (payload,{rejectWithValue, fulfillWithValue }) => {
          
              try {

                const {data} = await ApiManager.post("api/admin/login",payload);
             
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
           


     )


     
      static Session = createAsyncThunk(

         "api/admin/session",

            async (payload,{rejectWithValue, fulfillWithValue }) => {
          
              try {

                const {data} = await ApiManager.get("api/admin/session",payload);
             
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
           


     )


     
      static Logout = createAsyncThunk(

         "api/admin/logout",

            async (payload,{rejectWithValue, fulfillWithValue }) => {
          
              try {

                const {data} = await ApiManager.get("api/admin/logout",payload);
             
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
           


     )
}