import auth from './authReducer';
import { combineReducers } from 'redux';
import user from './userReducer';

const rootReducer = combineReducers({
  auth,
  user,
});

export default rootReducer;
