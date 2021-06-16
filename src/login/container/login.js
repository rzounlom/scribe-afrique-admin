import './login.scss';

import LoginForm from '../components/loginForm';
import PropTypes from 'prop-types';
import React from 'react';
import loginImage from '../../images/login/login-image.jpg';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login__content'>
        {' '}
        <LoginForm />
        <div className='login__image-container'></div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
