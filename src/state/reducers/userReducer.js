import {
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
} from '../types/userTypes';

const initialState = {
  loading: false,
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CURRENT_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        currentUser: payload,
      };
    case GET_CURRENT_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
