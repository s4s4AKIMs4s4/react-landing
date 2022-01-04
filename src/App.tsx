import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages';
import Signin from './pages/signin';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route path = '/' component ={Home} exact ></Route>
        <Route path = '/signin' component ={Signin} exact ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
