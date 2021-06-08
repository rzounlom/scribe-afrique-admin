import { combineReducers } from 'redux';
import successs from './successReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  successs,
  auth,
});

export default rootReducer;
