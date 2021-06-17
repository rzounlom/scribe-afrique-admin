import './login.scss';

import Image from '../../common/image/image';
import LoginForm from '../components/loginForm';
import React from 'react';
import loginImage from '../../images/login/login-image.jpg';

const Login = () => {
  const image = {
    height: '100%',
    width: '100%',
    alt: 'african woman',
    src: loginImage,
    camption: '',
    effect: 'blur',
  };
  return (
    <div className='login-container'>
      <div className='login__content'>
        <div className='login__image-container'>
          <img src={loginImage} alt='afrian woman' />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
