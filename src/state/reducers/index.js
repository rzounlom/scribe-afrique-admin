import auth from './authReducer';
import { combineReducers } from 'redux';
import dashboard from './dashboardReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  auth,
  user,
  dashboard,
});

export default rootReducer;
