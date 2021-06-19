import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS } from '../types/authTypes';

import { LOGIN_USER_MUTATION } from '../../graphql/mutations/user/loginUser';
import { client } from '../../graphql/client';

export const authenticate = (isLoggedIn) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  try {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: isLoggedIn,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error,
    });
  }
};

export const loginUser = ({ username, password }) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  console.log('username: ', username);
  console.log('password: ', password);
  try {
    const {
      data: { loginUser },
    } = await client.mutate({
      mutation: LOGIN_USER_MUTATION,
      variables: {
        username,
        password,
      },
    });

    console.log('token: ', loginUser.token);
    await dispatch({
      type: LOGIN_SUCCESS,
      payload: loginUser.token,
    });

    localStorage.setItem('token', loginUser.token);
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error });
    console.log(error);
  }
};
