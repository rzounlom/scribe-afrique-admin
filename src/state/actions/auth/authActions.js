import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from '../../types/authTypes';

export const loginUserAction = (token) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  try {
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: token,
    });

    localStorage.setItem('token', token);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
    console.log(error);
    return error.message;
  }
};

export const logoutUserAction = () => async (dispatch) => {
  await dispatch({
    type: LOGOUT_REQUEST,
  });

  try {
    await dispatch({
      type: LOGOUT_SUCCESS,
      payload: null,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGOUT_FAIL,
      error: error.message,
    });
  }
};
