import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Dashbord from './components/Dashbord';
import Notification from './components/Notification';
import Register from './components/Register'

function App() {
  return (
    <div className="App font-mul w-full m-auto">
      <Notification/>
      <Dashbord/>

      <Routes>
<Route path='/' component={<Dashbord/>}/>
<Route path='/register' component={<Register/>}/>


      </Routes>
    </div>
  );
}

export default App;
