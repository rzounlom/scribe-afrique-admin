import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './state/reducers';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const Root = ({ initialState, children }) => (
  <Provider
    store={createStore(
      rootReducer,
      initialState,
      applyMiddleware(...middlewares)
    )}
  >
    {children}
  </Provider>
);

export default Root;
