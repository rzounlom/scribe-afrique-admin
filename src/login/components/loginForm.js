import {
  LoginFormContainer,
  LoginFormHeading,
  LoginFormInput,
  LoginFormInputGroup,
  LoginFormSubHeading,
} from './styles';
import React, { useState } from 'react';

import Button from '../../common/components/button/button';
import { LOGIN_USER_MUTATION } from '../../graphql/mutations/user/loginUser';
import { loginUserAction } from '../../state/actions/auth/authActions';
import { useDispatch } from 'react-redux';
import { useMutation } from '@apollo/client';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [loginCreds, setLoginCreds] = useState({ username: '', password: '' });
  const { username, password } = loginCreds;

  const [error, setError] = useState('');
  const removeError = () => {
    setTimeout(() => {
      setError('');
    }, 8000);
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setLoginCreds({ ...loginCreds, [name]: value });
  };

  const [loginUserMutation] = useMutation(LOGIN_USER_MUTATION);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (username.length === 0 || password.length === 0) {
      setError('Username / Password fields cannot be blank');
      return;
    }

    try {
      const {
        data: {
          loginUser: { token },
        },
      } = await loginUserMutation({
        variables: { username, password },
      });

      dispatch(loginUserAction(token));
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoginCreds({
        username: '',
        password: '',
      });
      removeError();
    }
  };

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
        {error && <span style={{ color: 'red' }}>{error}</span>}
        <Button text='Login' clickEvent={onSubmit} />
      </LoginFormInputGroup>
    </LoginFormContainer>
  );
};

export default LoginForm;
