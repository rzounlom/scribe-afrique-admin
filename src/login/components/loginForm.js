import './loginForm.scss';

import React from 'react';

const LoginForm = () => {
  return (
    <div className='login-form-container'>
      <div className='login-form__inputs'>
        <h1>Scribe Afrique</h1>
        <h2>Admin Login</h2>
        <input name='username' type='text' placeholder='username' />
        <input nname='password' type='password' placeholder='password' />
      </div>
    </div>
  );
};

export default LoginForm;
