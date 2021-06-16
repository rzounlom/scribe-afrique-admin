import './app.scss';

import React, { useEffect } from 'react';
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from '../../dashboard/containers/dashboard';
import Login from '../../login/container/login';
import PropTypes from 'prop-types';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.authenticated);
  useEffect(() => {});
  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={() => {
            return !isLoggedIn ? <Redirect to='/login' /> : <Dashboard />;
          }}
        />
        <Route
          exact
          path='/login'
          render={() => {
            return isLoggedIn ? <Redirect to='/' /> : <Login />;
          }}
        />
      </Switch>
    </Router>
  );
};

App.propTypes = {};

export default App;
