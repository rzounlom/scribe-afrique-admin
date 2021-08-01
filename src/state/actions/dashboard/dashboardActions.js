import {
  REMOVE_MESSAGE,
  SET_CURRENT_TAB,
  SET_MESSAGE,
} from '../../types/dashboardTypes';

export const setCurrentTabAction = (tab) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_TAB,
    payload: tab,
  });
};

export const setMessage = (type, message) => (dispatch) => {
  dispatch({
    type: SET_MESSAGE,
    payload: { type, message },
  });

  setTimeout(() => dispatch(removeMessage()), 5000);
};

export const removeMessage = () => (dispatch) => {
  dispatch({
    type: REMOVE_MESSAGE,
    payload: false,
  });
};
