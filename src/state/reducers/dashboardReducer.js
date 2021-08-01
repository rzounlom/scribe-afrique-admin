import {
  REMOVE_MESSAGE,
  SET_CURRENT_TAB,
  SET_MESSAGE,
} from '../types/dashboardTypes';
const initialState = {
  currentTab: 0,
  messageShow: false,
  alertMessage: null,
  alertType: null,
};

const dashboardReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CURRENT_TAB:
      return {
        ...state,
        currentTab: payload,
      };
    case SET_MESSAGE:
      return {
        ...state,
        messageShow: true,
        alertMessage: payload.message,
        alertType: payload.type,
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        messageShow: false,
        alertMessage: null,
        alertType: null,
      };

    default:
      return state;
  }
};

export default dashboardReducer;
