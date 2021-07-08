import auth from './authReducer';
import { combineReducers } from 'redux';
import dashboard from './dashboardReducer';
import post from './postReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  auth,
  user,
  dashboard,
  post,
});

export default rootReducer;
