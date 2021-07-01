import { SET_CURRENT_TAB } from '../types/dashboardTypes';
const initialState = {
  currentTab: 0,
};

const dashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: payload,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
