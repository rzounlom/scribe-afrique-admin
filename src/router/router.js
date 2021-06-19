import { HOME_URL, LOGIN_URL } from './urls';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from '../dashboard/containers/dashboard';
import Login from '../login/container/login';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.auth.authenticated);
  if (!isLoggedIn) {
    return <Redirect to={LOGIN_URL} />;
  }

  return children;
};

const AppRouter = () => {
  const isLoggedIn = useSelector((state) => state.auth.authenticated);

  return (
    <Switch>
      <Route
        exact
        path={LOGIN_URL}
        render={() => {
          return isLoggedIn ? <Redirect to={HOME_URL} /> : <Login />;
        }}
      />

      <RequireAuth>
        <Route exact path={HOME_URL} component={Dashboard} />
      </RequireAuth>
    </Switch>
  );
};

export default AppRouter;
