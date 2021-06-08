import {
  CHANGE_AUTH_REQUEST,
  CHANGE_AUTH_SUCCESS,
  CHANGE_AUTH_FAIL,
} from '../types/authTypes';

export const authenticate = (isLoggedIn) => async (dispatch) => {
  dispatch({ type: CHANGE_AUTH_REQUEST });

  try {
    dispatch({
      type: CHANGE_AUTH_SUCCESS,
      payload: isLoggedIn,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_AUTH_FAIL,
      payload: error.message,
    });
  }
};
