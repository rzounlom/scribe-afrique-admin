import './loginForm.scss';

import React, { useState } from 'react';

import Button from '../../common/components/button/button';

const LoginForm = () => {
  const [loginCreds, setLoginCreds] = useState({ username: '', password: '' });

  return (
    <div className='login-form-container'>
      <div className='login-form__inputs'>
        <h1>Scribe Afrique</h1>
        <h2>Admin Login</h2>
        <input name='username' type='text' placeholder='username' />
        <input nname='password' type='password' placeholder='password' />
        <Button text='Login' />
      </div>
    </div>
  );
};

export default LoginForm;
