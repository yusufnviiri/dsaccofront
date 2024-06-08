import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const staffUrl = "https://localhost:7146/api/Login";
const affairsUrl = "";
const URL = "https://localhost:7146/api/Login/register";

export const getLoans = createAsyncThunk("school/staff", async (id) => {
  const res = await axios.get(`${staffUrl}/${id}`);

  return res.data;
});

export const getUsers = createAsyncThunk("school/staff", async () => {
  const res = await axios.get(`${staffUrl}`);

  return res.data;
});
export const login = createAsyncThunk("school/newAsset", async (item) => {
  const res = await axios.post(`${affairsUrl}/asset`, item);
  return res.data;
});
export const register = createAsyncThunk("dsacco/register", async (item) => {
  const result = await axios.post(`${URL}`, item)
  return result.data;
});

export const apiSlice = createSlice({
  name: "dsacco",
  initialState: { age: 2, notification: " ", users: {}, logginError: "" },
  reducers: {
    add: (state) => {
      state.age += 1;
    },
    setLoginError: (state, action) => {
      state.logginError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
   
      if (action.payload === "Accepted") {
        state.logginError = "success!!";

      } else {
        state.logginError = "Invalid User Name or Password";
      }
    });
    builder.addCase(register.pending, (state, action) => {
      state.notification = "waiting......";

    });
    builder.addCase(register.fulfilled, (state, action) => {   

      if (action.payload === "Accepted") {
        state.logginError = "success!!";

      } else {
        state.logginError = "Email already taken";
      }
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log("devol");

      console.log(action.payload);
      state.users = action.payload;
    });
  },
});

export const { add, setLoginError } = apiSlice.actions;
export default apiSlice.reducer;
