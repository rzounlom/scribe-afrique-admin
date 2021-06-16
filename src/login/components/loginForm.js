import './loginForm.scss';

import React from 'react';

const LoginForm = () => {
  return (
    <div className='login-form-container'>
      <div className='login-form__inputs'>
        <h2>Login</h2>
        <input name='username' type='text' />
        <input nname='password' type='password' />
      </div>
    </div>
  );
};

export default LoginForm;
