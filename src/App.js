import React from 'react';
import './App.css';
import Login from './pages/login'
import Signup from './pages/signup'
import CreatePin from './pages/createPin'
import PinSuccess from './pages/createPin/pinSuccess'
import ResetPassword from './pages/resetPassword'
import NewPassword from './pages/resetPassword/newPassword'
import Home from './pages/home'
import History from './pages/History'
import Transfer from './pages/Transfer'
import InputAmount from './pages/Transfer/InputAmount'
import Confirmation from './pages/Transfer/Confirmation'
import TransferStatus from './pages/Transfer/TransferStatus'
import Topup from './pages/Topup'
import Profile from './pages/Profile'
// import { Login, Signup, TransferSearch, TransferAmount, TransferConfirmation } from "./page";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/create-pin' component={CreatePin}/>
        <Route path='/create-pin-success' component={PinSuccess}/>
        <Route path='/reset-password' component={ResetPassword}/>
        <Route path='/new-password' component={NewPassword}/>
        <Route path='/home' component={Home}/>
        <Route path='/history' component={History}/>
        <Route path='/transfer' component={Transfer}/>
        <Route path='/input-amount' component={InputAmount}/>
        <Route path='/confirmation' component={Confirmation}/>
        <Route path='/transfer-status' component={TransferStatus}/>
        <Route path='/topup' component={Topup}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/profile' component={Profile}/>
      </Switch>
    </Router>
  );
}

export default App;
