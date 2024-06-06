import { configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import ApiSlice from "./ApiSlice";


export default configureStore({
    reducer:{
        ApiSlice
    }
})