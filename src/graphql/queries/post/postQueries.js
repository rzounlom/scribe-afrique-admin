import { gql } from '@apollo/client';

export const USER_POSTS_QUERY = gql`
  query userPosts($type: String!) {
    userPosts(type: $type) {
      id
      title
      description
      image
      published
    }
  }
`;
