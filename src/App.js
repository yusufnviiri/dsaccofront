import './App.css';
import { Route,Routes } from 'react-router-dom';
import Dashbord from './components/Dashbord';
import Notification from './components/Notification';
import Register from './components/Register'
import Login from './components/Login';
import NewAccount from './components/account/NewAccount';
import Home from './components/Home';
import MemberAccounts from './components/account/MemberAccounts';
import Deposit from './components/account/Deposit';
import Deposits from './components/account/Deposits';

function App() {
  return (
    <div className="App font-mul w-full m-auto">
      <Notification/>
      <Dashbord/>

      <Routes>
<Route path='/dashboard' element={<Dashbord/>}/>
<Route path='/new-account' element={<NewAccount/>}/>
<Route path='/logins' element={<Login/>}/>
<Route path='/deposit' element={<Deposit/>}/>
<Route path='/deposits' element={<Deposits/>}/>


<Route path='/' element={<Home/>}/>
<Route path='/accounts' element={<MemberAccounts/>}/>
<Route path='/register' element={<Register/>}/>
<Route path='/da' element={<Notification/>}/>



      </Routes>
    </div>
  );
}

export default App;
