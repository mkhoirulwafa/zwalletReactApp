import {combineReducers} from 'redux'
import Auth from './Auth'
import Users from './Users';
import {UpdateUser, DeleteUser} from './Users';
import Topup from './Topup';
import Transfer from './Transfer';

const reducers = combineReducers({
    Auth,
    Users,
    UpdateUser,
    DeleteUser,
    Topup,
    Transfer
    // other: otherReducer,
  })

  export default reducers