import {
  CHANGE_AUTH_FAIL,
  CHANGE_AUTH_REQUEST,
  CHANGE_AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from '../types/authTypes';

import { LOGIN_USER_MUTATION } from '../../graphql/mutations/user/loginUser';
import { client } from '../../graphql/client';

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

export const loginUser = ({ username, password }) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });

  try {
    const res = await client.mutate({
      mutation: LOGIN_USER_MUTATION,
      variables: {
        username,
        password,
      },
    });
    console.log(res);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.message });
    console.log(error);
    throw new Error(error.message);
  }
};
