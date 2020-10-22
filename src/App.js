import React from 'react';
import './App.css';
import Login from './pages/login';
import Signup from './pages/signup';
import CreatePin from './pages/createPin';
import PinSuccess from './pages/createPin/pinSuccess';
import ResetPassword from './pages/resetPassword';
import NewPassword from './pages/resetPassword/newPassword';
import Home from './pages/home';
import HomeAdmin from './pages/homeAdmin';
import History from './pages/History';
import Transfer from './pages/Transfer';
import InputAmount from './pages/Transfer/InputAmount';
import Confirmation from './pages/Transfer/Confirmation';
import TransferStatus from './pages/Transfer/TransferStatus';
import Topup from './pages/Topup';
import Profile from './pages/Profile';
import ChangePassword from './pages/Profile/ChangePassword';
import ChangePin from './pages/Profile/ChangePin';
import NewPin from './pages/Profile/NewPin';
import PersonalInfo from './pages/Profile/PersonalInfo';
//Redux Configure Import
import configureStore from './redux/store';
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from 'react-redux'
//Routing
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import PublicRoute from './Components/PublicRoute';
import PrivateRoute from './Components/PrivateRoute';

const Routes=(props)=>{
  return (
    <Router>
      <Switch>
        <PublicRoute component={Login} restricted={true} path='/' exact />
        <PublicRoute component={Signup} restricted={true} path='/signup' exact />
        <PublicRoute component={CreatePin} restricted={true} path='/create-pin' />
        <PublicRoute component={PinSuccess} restricted={true} path='/create-pin-success' />
        <PublicRoute component={ResetPassword} restricted={true} path='/reset-password' exact />
        <PublicRoute component={NewPassword} restricted={false} path='/new-password' exact />
        <PrivateRoute component={Home} path='/dashboard' />
        <PrivateRoute component={HomeAdmin} path='/admin' />
        <PrivateRoute component={History} path='/history' />
        <PrivateRoute component={Transfer} path='/transfer' exact />
        <PrivateRoute component={InputAmount} path='/transfer/input-amount' />
        <PrivateRoute component={Confirmation} path='/transfer/confirmation' />
        <PrivateRoute component={TransferStatus} path='/transfer/success' />
        <PrivateRoute component={Topup} path='/topup' />
        <PrivateRoute component={Profile} path='/profile' exact/>
        <PrivateRoute component={PersonalInfo} path='/profile/personal' />
        <PrivateRoute component={NewPin} path='/profile/change-pin/new-pin' />
        <PrivateRoute component={ChangePin} path='/profile/change-pin' />
        <PrivateRoute component={ChangePassword} path='/profile/change-password' />
      </Switch>
    </Router>
  );
}


const App = ()=>{
  const {store, persistor} = configureStore()
  return(
    <Provider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App;
