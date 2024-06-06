import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const staffUrl =""
const affairsUrl=""

export const getLoans = createAsyncThunk("school/staff", async (id) => {
    const res = await axios.get(`${staffUrl}/${id}`);
  
    return res.data;
  });    
  export const login = createAsyncThunk("school/newAsset", async (item) => {
    const res = await axios.post(`${affairsUrl}/asset`, item);
    return res;
  });
  export const register = createAsyncThunk("school/newAsset", async (item) => {
    const res = await axios.post(`${affairsUrl}/asset`, item);
    return res;
  });

export const apiSlice=createSlice({
    name:"dsacco",
    initialState:{age:2},
    reducers:{
        add:(state)=>{
            state.age+=1
            console.log("add" + state.age)
        }},extraReducers:(builder)=>{  builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);
        
        
        });
        builder.addCase(getLoans.fulfilled, (state, action) => {
          state.guardians.length = 0;
          state.guardians = action.payload;
        });}
})

export const {add} = apiSlice.actions;
export default apiSlice.reducer;