import { LoginContainer, LoginContent, LoginImageContainer } from './styles';

import LoginForm from '../components/loginForm';
import React from 'react';
import loginImage from '../../images/login/login-image.jpg';

const Login = () => {
  return (
    <LoginContainer>
      <LoginContent>
        <LoginImageContainer>
          <img src={loginImage} alt='afrian woman' />
        </LoginImageContainer>
        <LoginForm />
      </LoginContent>
    </LoginContainer>
  );
};

export default Login;
