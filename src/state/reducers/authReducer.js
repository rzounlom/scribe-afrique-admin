import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types/authTypes';

const initialState = {
  loading: false,
  authenticated: false,
  token: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, authenticated: true, token: payload };
    case LOGIN_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default authReducer;
