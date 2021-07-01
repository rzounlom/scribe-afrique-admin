// import successReducer from '../successReducer';
// import {
//   SUCCESS_REQUEST,
//   SUCCESS_SUCCESS,
//   SUCCESS_FAIL,
// } from '../../types/successTypes';

// it('handles actionsof type SUCCESS_REQUEST', () => {
//   const action = {
//     type: SUCCESS_REQUEST,
//   };

//   const newState = successReducer({}, action);

//   expect(newState).toEqual({ loading: true });
// });

// it('handles actionsof type SUCCESS_SUCCESS', () => {
//   const action = {
//     type: SUCCESS_SUCCESS,
//     payload: true,
//   };

//   const newState = successReducer({}, action);

//   expect(newState).toEqual({ loading: false, success: true });
// });

// it('handles actionsof type SUCCESS_FAIL', () => {
//   const action = {
//     type: SUCCESS_FAIL,
//     payload: 'something went wrong',
//   };

//   const newState = successReducer({}, action);

//   expect(newState).toEqual({
//     loading: false,
//     error: 'something went wrong',
//   });
// });
