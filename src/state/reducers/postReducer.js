import { RESET_CURRENT_POST, SET_CURRENT_POST } from '../types/postTypes';

const initialState = {
  currentPost: null,
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: payload,
      };
    case RESET_CURRENT_POST:
      return {
        ...state,
        currentPost: null,
      };

    default:
      return state;
  }
};

export default postReducer;
