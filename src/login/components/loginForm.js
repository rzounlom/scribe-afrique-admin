import {
  LoginFormContainer,
  LoginFormHeading,
  LoginFormInput,
  LoginFormInputGroup,
  LoginFormSubHeading,
} from './styles';
import React, { useState } from 'react';

import Button from '../../common/components/button/button';
import { loginUser } from '../../state/actions/authActions';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [loginCreds, setLoginCreds] = useState({ username: '', password: '' });
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(loginCreds));
    setLoginCreds({
      username: '',
      password: '',
    });
  };

  const { username, password } = loginCreds;

  return (
    <LoginFormContainer>
      <LoginFormInputGroup>
        <LoginFormHeading>Scribe Afrique</LoginFormHeading>
        <LoginFormSubHeading>Admin Login</LoginFormSubHeading>
        <LoginFormInput
          name='username'
          type='text'
          value={username}
          placeholder='username'
          onChange={onInputChange}
        />
        <LoginFormInput
          name='password'
          type='password'
          value={password}
          placeholder='password'
          onChange={onInputChange}
        />
        <Button text='Login' clickEvent={onSubmit} />
      </LoginFormInputGroup>
    </LoginFormContainer>
  );
};

export default LoginForm;
