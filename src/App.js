import logo from './logo.svg';
import './App.css';
import Dashbord from './components/Dashbord';
import Notification from './components/Notification';

function App() {
  return (
    <div className="App font-mul w-1/2 m-auto">
      <Notification/>
      <Dashbord/>
    </div>
  );
}

export default App;
