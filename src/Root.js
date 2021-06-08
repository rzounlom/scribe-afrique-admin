import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './state/reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const Root = ({ initialState, children }) => (
  <Provider
    store={createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    )}
  >
    {children}
  </Provider>
);

export default Root;
