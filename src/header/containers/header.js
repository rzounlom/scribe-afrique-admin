import './header.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { authenticate } from '../../state/actions/authActions';

import { useSelector, useDispatch } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);

  const authButton = () =>
    authenticated ? (
      <button onClick={() => dispatch(authenticate(false))}>Sign Out</button>
    ) : (
      <button onClick={() => dispatch(authenticate(true))}>Sign In</button>
    );

  return (
    <Router>
      <nav className='header'>
        <ul className='nav-item-containeer'>
          <li className='nav-item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/resources'>Resources</Link>
          </li>
          <li className='nav-item'>{authButton()}</li>
        </ul>
      </nav>
    </Router>
  );
};

Header.propTypes = {};

export default Header;
