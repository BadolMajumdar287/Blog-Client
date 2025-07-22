import ApiManager from "@/config/api.config";
import { createAsyncThunk } from "@reduxjs/toolkit";


export class BlogAction {

    static CreateBlog = createAsyncThunk(
        "api/blog/create",

         async (payload,{rejectWithValue, fulfillWithValue }) => {
              
              try {

                const {data} = await ApiManager.post("api/blog/create",payload);
             
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
    )





     static GetAllBlog = createAsyncThunk(
        "api/blog/getall",

         async (payload,{rejectWithValue, fulfillWithValue }) => {
             
              try {

                const {data} = await ApiManager.get("api/blog/getall",payload);
                  
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
    )



    static BlogGetById = createAsyncThunk(
        "api/blog/getbyid",

         async (payload,{rejectWithValue, fulfillWithValue }) => {
             
              try {

                const {data} = await ApiManager.get(`api/blog/getbyid/${payload}`);
                  
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
    )





    static UpdateBlog = createAsyncThunk(
        "api/blog/update",

         async (payload,{rejectWithValue, fulfillWithValue }) => {
             
              try {

                const {data} = await ApiManager.get("api/blog/update",payload);
                  
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
    )




    static DeleteBlog = createAsyncThunk(
        "api/blog/delete",

         async (payload,{rejectWithValue, fulfillWithValue }) => {
             
              try {

                const {data} = await ApiManager.get("api/blog/delete",payload);
                  
                return fulfillWithValue(data)
                   
              } catch (error) {
             
                return rejectWithValue(error.response.data);

              }


        }
    )




}