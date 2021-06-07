import {
  SUCCESS_REQUEST,
  SUCCESS_SUCCESS,
  SUCCESS_FAIL,
} from '../types/successTypes';

const initialState = { loading: false, success: false, error: null };

const successReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUCCESS_REQUEST:
      return { ...state, loading: true };
    case SUCCESS_SUCCESS:
      return { ...state, loading: false, success: payload };
    case SUCCESS_FAIL:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};

export default successReducer;
