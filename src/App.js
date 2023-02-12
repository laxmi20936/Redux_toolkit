import logo from './logo.svg';
import './App.css';
import CakeView from './features/cake/CakeView';
import IcecreamView from './features/icecream/IcecreamView';
import UserView from './features/user/UserView';
// import {cakeSlice} from './features/cake/cakeSlice'; Do this

function App() {
  return (
    <div className="App">
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  );
}

export default App;
