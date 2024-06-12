import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const baseUrl = "https://localhost:5001/api"
const staffUrl = "https://localhost:7146/api/Login";
const affairsUrl = "";
const URL = "https://localhost:5001/api/Login/register";
// https://localhost:5001/api/Account/deposits

let toke = "token";
const getToken = async () => {
  toke = await JSON.parse(localStorage.getItem("bearer"));

  return toke;
};

//get users
export const getMemberLoans = createAsyncThunk("dsacco/loans", async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.get(`${baseUrl}/Loan/loans`, config);
  console.log(res)
  return res.data;
});
//get member accounts
export const getMemberAccounts = createAsyncThunk("dsacco/accounts", async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.get(`${baseUrl}/Account/accounts`, config);
  return res.data;
});
//get deposits
export const getMemberDeposits = createAsyncThunk("dsacco/withdraws", async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };

  const res = await axios.get(`${baseUrl}/Account/withdraws`, config);
  return res.data;
});

export const getMemberWithdraws = createAsyncThunk("dsacco/deposits", async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };

  const res = await axios.get(`${baseUrl}/Account/deposits`, config);
  return res.data;
});

//get users
export const getUsers = createAsyncThunk("dsacco/users", async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.get(`${baseUrl}/Login`, config);
  return res.data;
});
//user login
export const login = createAsyncThunk("dsacco/login", async (item) => {
  const res = await axios.post(`${baseUrl}/Login/login`, item);
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
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Account/openaccount`, item, config);
  return res.data;
});

//deposit on account
export const memberDeposit = createAsyncThunk("dsacco/deposit", async (item) => {
  console.log(item)
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Account/deposit`, item, config);
  return res.data;
});
//withdraw from account
export const memberWithdraw = createAsyncThunk("dsacco/withdraw", async (item) => {
  console.log(item)
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Account/withdraw`, item, config);
  return res.data;
});

export const apiSlice = createSlice({
  name: "dsacco",
  initialState: { age: 2, notification: " ", users: [], logginError: "", loans: [], accounts: [], withdraws: [], deposits: [], shares: [] },
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

      if (action.payload.status === true) {

        localStorage.clear();
        localStorage.setItem("bearer", JSON.stringify(action.payload.tokenString
        ));
        state.logginError = "success!!";
        window.location.reload()

      } else {
        console.log(action.payload)

        state.logginError = "Invalid User Name or Password";

      }
    });
    builder.addCase(register.pending, (state, action) => {
      state.logginError = "waiting......";

    });
    builder.addCase(register.fulfilled, (state, action) => {

      if (action.payload === "Accepted") {
        state.logginError = "success!!";

      } else {
        state.logginError = "Email already taken";
      }
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {

      if (action.payload === "Accepted") {
        state.logginError = "success!!";
        state.notification = "Created well"
      } else {
        state.logginError = "Not Successful";
      }
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload
      console.log(action.payload);
    });
    builder.addCase(getMemberLoans.fulfilled, (state, action) => {
      state.loans = action.payload
    });
    builder.addCase(getMemberAccounts.fulfilled, (state, action) => {
      state.accounts = action.payload
    });
    builder.addCase(getMemberDeposits.fulfilled, (state, action) => {
      state.deposits = action.payload

    });
    builder.addCase(memberDeposit.fulfilled, (state, action) => {

      if (action.payload === "Accepted") {
        state.logginError = "success!!";
        state.notification = "Created well"
      } else {
        state.logginError = "Not Successful";
      }
    });
    builder.addCase(getMemberWithdraws.fulfilled, (state, action) => {
      state.withdraws = action.payload
      console.log(action.payload);

    });
    builder.addCase(memberWithdraw.fulfilled, (state, action) => {

      if (action.payload === "Accepted") {
        state.logginError = "success!!";
        state.notification = "Created well"
      } else {
        state.logginError = "Not Successful";
      }
    });
  },
});

export const { add, setLoginError } = apiSlice.actions;
export default apiSlice.reducer;
