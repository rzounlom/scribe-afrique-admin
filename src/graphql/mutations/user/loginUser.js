import { gql } from '@apollo/client';

export const LOGIN_USER_MUTATION = gql`
  mutation loginUser($username: String!, $password: String!) {
    loginUser(data: { username: $username, password: $password }) {
      token
    }
  }
`;
