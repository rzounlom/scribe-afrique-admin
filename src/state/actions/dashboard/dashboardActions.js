import { SET_CURRENT_TAB } from '../../types/dashboardTypes';

export const setCurrentTabAction = (tab) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_TAB,
    payload: tab,
  });
};
