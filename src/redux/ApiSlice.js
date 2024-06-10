import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://localhost:5001/api"
const staffUrl = "https://localhost:7146/api/Login";
const affairsUrl = "";
const URL = "https://localhost:5001/api/Login/register";

let toke = "token";
const getToken = async () => {
  toke = await JSON.parse(localStorage.getItem("bearer"));

  return toke;
};

//get users
export const getUsers = createAsyncThunk("dsacco/staff", async () => {
  const res = await axios.get(`${baseUrl}/Login`);
  return res.data;
});
//user login
export const login = createAsyncThunk("dsacco/login", async (item) => {
  const res = await axios.post(`${baseUrl}/Login/login`, item);
  console.log(res)

  return res.data;
});
// register user
export const register = createAsyncThunk("dsacco/register", async (item) => {
  const result = await axios.post(`${URL}`, item)
  return result.data;
});

//user login
export const createAccount = createAsyncThunk("dsacco/createAccount", async (item) => {

  toke = await getToken();

  let response = [{ data: "notAuthorized" }];
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };


  const res = await axios.post(`${baseUrl}/Account/openaccount`, item);
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
      localStorage.clear();
      localStorage.setItem("bearer", JSON.stringify(action.payload.token));
      if (action.payload === "Accepted") {
        state.logginError = "success!!";


      } else {
        console.log(action.payload)

        state.logginError = "Invalid User Name or Password";

      }
    });
    builder.addCase(register.pending, (state, action) => {
      state.logginError= "waiting......";

    });
    builder.addCase(register.fulfilled, (state, action) => {   

      if (action.payload === "Accepted") {
        state.logginError = "success!!";

      } else {
        state.logginError = "Email already taken";
      }
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      console.log(action.payload);    
    });

    builder.addCase(createAccount.fulfilled, (state, action) => {   

      if (action.payload === "Accepted") {
        state.logginError = "success!!";
      } else {
        state.logginError = "Not Authorized!!";
      }
    });

  },
});

export const { add, setLoginError } = apiSlice.actions;
export default apiSlice.reducer;
