import { RESET_CURRENT_POST, SET_CURRENT_POST } from '../../types/postTypes';

export const setCurrentPost = (currentPost) => async (dispatch) => {
  await dispatch({
    type: SET_CURRENT_POST,
    payload: currentPost,
  });
};

export const resetCurrentPost = () => async (dispatch) => {
  await dispatch({
    type: RESET_CURRENT_POST,
  });
};
