import {combineReducers} from 'redux'
import Auth from './Auth'
import Users from './Users';
import {UpdateUser, DeleteUser} from './Users';
import Topup from './Topup';
import Transfer from './Transfer';
import {History} from './Transfer';

const reducers = combineReducers({
    Auth,
    Users,
    UpdateUser,
    DeleteUser,
    Topup,
    Transfer,
    History
    // other: otherReducer,
  })

  export default reducers