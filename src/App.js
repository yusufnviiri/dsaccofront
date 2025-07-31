/* eslint-disable  */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './App.css';
import { useEffect } from 'react';

import {
  Route, Routes, useNavigate,
} from 'react-router-dom';
import Dashbord from './components/Dashbord';
import Notification from './components/Notification';
import Register from './components/access/Register';
import Login from './components/access/Login';
import NewAccount from './components/account/NewAccount';
import Home from './components/Home';
import MemberAccounts from './components/account/MemberAccounts';
import { UserLoggedIn } from './LoginStatus';
import Deposit from './components/account/Deposit';
import Deposits from './components/account/Deposits';
import Withdraw from './components/account/Withdraw';
import Withdraws from './components/account/Withdraws';
import LoanApplication from './components/loans/LoanApplication';
import MemberLoans from './components/loans/MemberLoans';
import AccessControl from './components/access/AccessControl';
import UpdateUserData from './components/access/UpdateUserData';
import Loan from './components/loans/Loan';

function App() {
  const navigate = useNavigate();

useEffect(() => {
  const loginStatus = () => {
    setTimeout(() => {
      if (UserLoggedIn === true) {
        console.log(UserLoggedIn);
        navigate('/user-control', { replace: true });
      }
    }, 3000);
  };

  loginStatus();
}, []);
  // const loginStatus = () => {
  //   setTimeout(() => {
  //     if (UserLoggedIn===true) {
  //       console.log(UserLoggedIn)
  //       navigate('/user-control', { replace: true });
  //     }
  //   }, 3000);
  // };

  return (
    <div className="App m-auto">
      <Notification />
      <Dashbord />

      <Routes>
        <Route path="/deposits" element={<Deposits />} />
        <Route path="/user-control" element={<AccessControl />} />

        <Route path="/" element={<Home />} />
        <Route path="/user-data" element={<UpdateUserData />} />


        <Route path="/dashboard" element={<Dashbord />} />
        <Route path="/new-account" element={<NewAccount />} />
        <Route path="/logins" element={<Login />} />
        <Route path="/deposit" element={<Deposit />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/withdraws" element={<Withdraws />} />
        <Route path="/loan-application" element={<LoanApplication />} />
        <Route path="/loans" element={<MemberLoans />} />
        <Route path="/loan" element={<Loan />} />

        <Route path="/accounts" element={<MemberAccounts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/da" element={<Notification />} />
      </Routes>
    </div>
  );
}

export default App;
