import './header.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

const Header = () => {
  const authButton = () => {
    return <button>SignIn</button>;
  };

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
