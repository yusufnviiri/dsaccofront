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
  return res;
});
export const register = createAsyncThunk("dsacco/register", async (item) => {
  console.log(item);
  const res = await axios.post(`${URL}`, item);
  console.log(res);

  return res.data;
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
      console.log(action.payload);
    });
    builder.addCase(register.fulfilled, (state, action) => {
      console.log("done");

      console.log(action.payload);
      console.log("done deal");

      state.logginError = "success!!";
      if (action.payload === "Accepted") {
      } else {
        state.notification = action.payload;
      }
      console.log(action.payload);
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
