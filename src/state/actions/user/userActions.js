import {
  GET_CURRENT_USER_FAIL,
  GET_CURRENT_USER_REQUEST,
  GET_CURRENT_USER_SUCCESS,
} from '../../types/userTypes';

import { ME_QUERY } from '../../../graphql/queries/user/userQueries';
import { client } from '../../../graphql/client';
import { logoutUserAction } from '../../actions/auth/authActions';

export const getCurrentUser = () => async (dispatch) => {
  dispatch({
    type: GET_CURRENT_USER_REQUEST,
  });

  try {
    const {
      data: { me },
    } = await client.query({
      query: ME_QUERY,
    });
    await dispatch({
      type: GET_CURRENT_USER_SUCCESS,
      payload: me,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_CURRENT_USER_FAIL,
      payload: error.message,
    });
    dispatch(logoutUserAction());
  }
};
