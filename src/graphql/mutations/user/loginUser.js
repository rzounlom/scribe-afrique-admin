import { gql } from '@apollo/client';

export const LOGIN_USER_MUTATION = gql`
mutation loginUser(data: LoginUserInput) {
    token: loginuser(data: $data){
        token
    }
}`;
