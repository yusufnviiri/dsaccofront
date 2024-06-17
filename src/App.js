import './App.css';
import { Route,Routes } from 'react-router-dom';
import Dashbord from './components/Dashbord';
import Notification from './components/Notification';
import Register from './components/access/Register'
import Login from './components/access/Login';
import NewAccount from './components/account/NewAccount';
import Home from './components/Home';
import MemberAccounts from './components/account/MemberAccounts';
import Deposit from './components/account/Deposit';
import Deposits from './components/account/Deposits';
import Withdraw from './components/account/Withdraw';
import Withdraws from './components/account/Withdraws';
import LoanApplication from './components/loans/LoanApplication';
import MemberLoans from './components/loans/MemberLoans';
import AccessControl from './components/access/AccessControl';
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function App() {
  const navigate = useNavigate();
  var isLoggedIn = JSON.stringify(localStorage.getItem("isLoggedIn"));

  let nullValue= JSON.stringify(localStorage.getItem("token"))
  var userToken = JSON.stringify(localStorage.getItem("bearer"));
const loginStatus=()=>{  
  if(userToken !==nullValue){
  }
  setTimeout(() => {
    if(userToken===nullValue){
      navigate("/user-control", { replace: true });
    } 
  }, 3000);
}
loginStatus()



  return (
    <div className="App font-mul w-full m-auto">
      <Notification/>
      <Dashbord/>
    {isLoggedIn!==nullValue?(
        <Home/>):""}

      <Routes>
      <Route path='/' element={<Deposits/>}/>
      <Route path='/user-control' element={<AccessControl/>}/>


<Route path='/' element={<Home/>}/>
<Route path='/dashboard' element={<Dashbord/>}/>
<Route path='/new-account' element={<NewAccount/>}/>
<Route path='/logins' element={<Login/>}/>
<Route path='/deposit' element={<Deposit/>}/>
<Route path='/withdraw' element={<Withdraw/>}/>
<Route path='/withdraws' element={<Withdraws/>}/>
<Route path='/loan-application' element={<LoanApplication/>}/>
<Route path='/loans' element={<MemberLoans/>}/>
<Route path='/accounts' element={<MemberAccounts/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/da' element={<Notification/>}/>
      </Routes>
    </div>
  );
}

export default App;
