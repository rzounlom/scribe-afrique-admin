import './loginForm.scss';

import React, { useState } from 'react';

import Button from '../../common/components/button/button';
import { withRouter } from 'react-router-dom';

const LoginForm = ({ history }) => {
  const [loginCreds, setLoginCreds] = useState({ username: '', password: '' });
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(history);
    history.push('/');
  };

  return (
    <div className='login-form-container'>
      <div className='login-form__inputs'>
        <h1>Scribe Afrique</h1>
        <h2>Admin Login</h2>
        <input
          name='username'
          type='text'
          placeholder='username'
          onChange={onInputChange}
        />
        <input
          name='password'
          type='password'
          placeholder='password'
          onChange={onInputChange}
        />
        <Button text='Login' submit={onSubmit} />
      </div>
    </div>
  );
};

export default withRouter(LoginForm);
