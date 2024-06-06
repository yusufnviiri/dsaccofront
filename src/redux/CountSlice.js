import { createAsyncThunk,createSlice } from "@reduxjs/toolkit"


export const countSlice = createSlice({
    name:"counter",
    initialState:{age:0},
    reducers:{
        add:(state)=>{
            state+=1
        },
        sub:(state)=>{
            state-=1
        }
    }
    
})
export const { add, sub } = countSlice.actions;
export default countSlice.reducer;