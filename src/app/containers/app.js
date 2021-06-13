import './app.scss';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../../header/containers/header';
import Home from '../../home/containers/home';
import Dashboard from '../../dashboard/containers/dashboard';
import Login from '../../login/container/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const App = () => {
  const isLoggedIn = useSelector((state) => state.auth.authenticated);
  useEffect(() => {});
  return (
    <Router>
      <Route
        exact
        to='/'
        render={() => (!isLoggedIn ? <Redirect to='/login' /> : <Dashboard />)}
      />
      <Route
        path='/login
      '
        component={Login}
      />
    </Router>
  );
};

App.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default App;
