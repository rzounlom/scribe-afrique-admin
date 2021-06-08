import {
  CHANGE_AUTH_REQUEST,
  CHANGE_AUTH_SUCCESS,
  CHANGE_AUTH_FAIL,
} from '../types/authTypes';

const initialState = {
  loading: false,
  authenticated: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_AUTH_REQUEST:
      return { ...state, loading: true };
    case CHANGE_AUTH_SUCCESS:
      return { ...state, loading: false, authenticated: payload };
    case CHANGE_AUTH_FAIL:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};

export default authReducer;
