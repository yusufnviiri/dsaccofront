import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"


export const apiSlice=createSlice({
    name:"dsacco",
    initialState:{age:2},
    reducers:{
        add:(state)=>{
            state+=1
        },
        sub:(state)=>{
            state-=1
        }, multi:(state)=>{
            state=state*state
        }
    }
})

export const {add,sub,multi} = apiSlice.actions;
export default apiSlice.reducer;