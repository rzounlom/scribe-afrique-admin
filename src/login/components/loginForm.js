import {
  LoginFormContainer,
  LoginFormHeading,
  LoginFormInput,
  LoginFormInputGroup,
  LoginFormSubHeading,
} from './styles';
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
    <LoginFormContainer>
      <LoginFormInputGroup>
        <LoginFormHeading>Scribe Afrique</LoginFormHeading>
        <LoginFormSubHeading>Admin Login</LoginFormSubHeading>
        <LoginFormInput
          name='username'
          type='text'
          placeholder='username'
          onChange={onInputChange}
        />
        <LoginFormInput
          name='password'
          type='password'
          placeholder='password'
          onChange={onInputChange}
        />
        <Button text='Login' submit={onSubmit} />
      </LoginFormInputGroup>
    </LoginFormContainer>
  );
};

export default withRouter(LoginForm);
