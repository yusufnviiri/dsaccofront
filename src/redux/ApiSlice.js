import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"
import axios from 'axios'
const staffUrl =""
const affairsUrl=""
const URL ="https://localhost:7146/api/Login/register";

export const getLoans = createAsyncThunk("school/staff", async (id) => {
    const res = await axios.get(`${staffUrl}/${id}`);
  
    return res.data;
  });    
  export const login = createAsyncThunk("school/newAsset", async (item) => {
    const res = await axios.post(`${affairsUrl}/asset`, item);
    return res;
  });
  export const register = createAsyncThunk("dsacco/register", async (item) => {
    const res = await axios.post(`${URL}`, item);
    return res;
  });

export const apiSlice=createSlice({
    name:"dsacco",
    initialState:{age:2,notification:" "},
    reducers:{
        add:(state)=>{
            state.age+=1
        }},extraReducers:(builder)=>{  builder.addCase(login.fulfilled, (state, action) => {
            console.log(action.payload);});
            builder.addCase(register.fulfilled, (state, action) => {
            if(action.payload==="Accepted"){

            } else{
              state.notification=action.payload
            }



              console.log(action.payload)});
        builder.addCase(getLoans.fulfilled, (state, action) => {
          state.guardians.length = 0;
          state.guardians = action.payload;
        });}
})

export const {add} = apiSlice.actions;
export default apiSlice.reducer;