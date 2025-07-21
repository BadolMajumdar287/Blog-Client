import { RootReducer } from "./root.reducer";
import { configureStore } from "@reduxjs/toolkit";


export const makeUserStore = () => {

    return configureStore({

     reducer: RootReducer

    });
} 