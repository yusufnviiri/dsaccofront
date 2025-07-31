/* eslint-disable  */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const debployed ="https://localhost:5001/api"
const baseUrl = 'https://sacco.monorib.com/api';


const URL = 'https://sacco.monorib.com/api/Login/register';
let toke = 'token';
const getToken = async () => {
  toke = await JSON.parse(localStorage.getItem('bearer'));

  return toke;
};

// get loanTypes
export const loanTypes = createAsyncThunk('dsacco/loanTypes', async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.get(`${baseUrl}/Loan/loantypes`, config);
  return res.data;
});

// get loans
export const getMemberLoans = createAsyncThunk('dsacco/loans', async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.get(`${baseUrl}/Loan/loans`, config);
  return res.data;
});

// get all loans
export const getAllLoans = createAsyncThunk('dsacco/allloans', async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.get(`${baseUrl}/Loan/allloans`, config);
  return res.data;
});

// get member accounts
export const getMemberAccounts = createAsyncThunk('dsacco/accounts', async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.get(`${baseUrl}/Account/accounts`, config);
  return res.data;
});
// get withdraws
export const getMemberWithdraws = createAsyncThunk('dsacco/withdraws', async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };

  const res = await axios.get(`${baseUrl}/Account/withdraws`, config);
  return res.data;
});

// get shares
export const getMemberShares = createAsyncThunk('dsacco/shares', async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.get(`${baseUrl}/Account/membershares`, config);
  return res.data;
});

// get deposits
export const getMemberDeposits = createAsyncThunk('dsacco/deposits', async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };

  const res = await axios.get(`${baseUrl}/Account/deposits`, config);
  return res.data;
});

// get user data
export const getUserData = createAsyncThunk('dsacco/users', async () => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.get(`${baseUrl}/Login`, config);
  return res.data;
});
// user login
export const login = createAsyncThunk('dsacco/login', async (item) => {
  const res = await axios.post(`${baseUrl}/Login/login`, item);
  return res.data;
});
// register user
export const register = createAsyncThunk('dsacco/register', async (item) => {
  const result = await axios.post(`${URL}`, item);
  return result.data;
});
// user details
export const userData = createAsyncThunk('dsacco/userdata', async (item) => {
  
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Login/userdata`, item, config);
  return res.data;
});

// user account
export const createAccount = createAsyncThunk('dsacco/createAccount', async (item) => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Account/openaccount`, item, config);
  return res.data;
});

// deposit on account
export const memberDeposit = createAsyncThunk('dsacco/deposit', async (item) => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Account/deposit`, item, config);
  return res.data;
});
// buy shares
export const buyshares = createAsyncThunk('dsacco/buyShares', async (item) => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Account/buyshares`, item, config);
  return res.data;
});
// sell shares
export const sellShares = createAsyncThunk('dsacco/sellShares', async (item) => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Account/sellshares`, item, config);
  return res.data;
});
// approve loan
export const approveLoan = createAsyncThunk('dsacco/loanApproval', async (item) => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  // console.log(item)
  const res = await axios.post(`${baseUrl}/Loan/approveloan`,item, config);
  return res.data;
});

// pay loan

export const payLoan = createAsyncThunk('dsacco/loanPayment', async (item) => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Loan/loanpayment`, item, config);
  return res.data;
});
// withdraw from account
export const memberWithdraw = createAsyncThunk('dsacco/withdraw', async (item) => {
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Account/withdraw`, item, config);
  return res.data;
});
// loan application
export const loanSubmission = createAsyncThunk('dsacco/loanApplication', async (item) => {
  // console.log(item);
  toke = await getToken();
  const config = {
    headers: { Authorization: `Bearer ${toke}` },
  };
  const res = await axios.post(`${baseUrl}/Loan/loan`, item, config);
  return res.data;
});
export const apiSlice = createSlice({
  name: 'dsacco',
  initialState: {
    age: 2, notification: ' ', user: [], logginError: '', loans: [], loanTypes: [],allLoans:[], userData: {}, accounts: [], withdraws: [], deposits: [], shares: [],
  },
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
        // console.log(action.payload)
        localStorage.clear();
        sessionStorage.clear();
        localStorage.setItem('bearer', JSON.stringify(action.payload.tokenString));
        localStorage.setItem('isLoggedIn', JSON.stringify('true'));
        state.logginError = 'success!!';
        window.location.reload();
      } else {
        state.logginError = 'Invalid User Name or Password';
      }
    });  
    builder.addCase(register.fulfilled, (state, action) => {
      if (action.payload === 'Accepted') {
        state.logginError = 'success!!';
      } else {
        state.logginError = 'Email already taken';
      }
    });
    builder.addCase(createAccount.fulfilled, (state, action) => {
      if (action.payload === 'Accepted') {
        state.logginError = 'success!!';
        state.notification = 'Created well';
      } else {
        state.logginError = 'Not Successful';
      }
    });
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.user = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(getMemberLoans.fulfilled, (state, action) => {
      state.loans = action.payload;
    });
    builder.addCase(getAllLoans.fulfilled, (state, action) => {
      state.allLoans = action.payload;
    });
    builder.addCase(loanTypes.fulfilled, (state, action) => {
      state.loanTypes = action.payload;
    });

    builder.addCase(getMemberAccounts.fulfilled, (state, action) => {
      state.accounts = action.payload;
    });
    builder.addCase(getMemberDeposits.fulfilled, (state, action) => {
      state.deposits = action.payload;
    });
    builder.addCase(memberDeposit.fulfilled, (state, action) => {
      if (action.payload === 'Accepted') {
        state.logginError = 'success!!';
        state.notification = 'Created well';
      } else {
        state.logginError = 'Not Successful';
      }
    });
    builder.addCase(getMemberWithdraws.fulfilled, (state, action) => {
      state.withdraws = action.payload;
      // console.log(action.payload);
    });
    builder.addCase(memberWithdraw.fulfilled, (state, action) => {
      if (action.payload === 'Accepted') {
        state.logginError = 'success!!';
        state.notification = 'Created well';
      } else {
        state.logginError = 'Not Successful';
      }
    });
    builder.addCase(payLoan.fulfilled, (state, action) => {
      if (action.payload === 'Accepted') {
        state.logginError = 'success!!';
        state.notification = 'Created well';
      } else {
        state.logginError = 'Not Successful';
      }
    });
    builder.addCase(loanSubmission.fulfilled, (state, action) => {
      // console.log(action.payload);

      if (action.payload === 'Accepted') {
        state.logginError = 'success!!';
        state.notification = 'Created well';
      } else {
        state.logginError = 'Not Successful';
      }
    });
    builder.addCase(buyshares.fulfilled, (state, action) => {
      // console.log(action.payload);
      if (action.payload === 'Accepted') {
        state.logginError = 'success!!';
        state.notification = 'Created well';
      } else {
        state.logginError = 'Not Successful';
      }
    });
    builder.addCase(sellShares.fulfilled, (state, action) => {
      // console.log(action.payload);

      if (action.payload === 'Accepted') {
        state.logginError = 'success!!';
        state.notification = 'Created well';
      } else {
        state.logginError = 'Not Successful';
      }
    });
    builder.addCase(approveLoan.fulfilled, (state, action) => {
      if (action.payload === 'Accepted') {
        state.logginError = 'success!!';
        state.notification = 'Created well';
      } else {
        state.logginError = 'Not Successful';
      }
    });
    builder.addCase(getMemberShares.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.shares = action.payload;
    });
   
  },
});

export const { add, setLoginError } = apiSlice.actions;
export default apiSlice.reducer;
