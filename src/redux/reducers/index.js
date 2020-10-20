import {combineReducers} from 'redux'
import Auth from './Auth'
import Users from './Users';
import Topup from './Topup';

const reducers = combineReducers({
    Auth,
    Users,
    Topup
    // other: otherReducer,
  })

  export default reducers