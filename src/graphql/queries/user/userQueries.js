import { gql } from '@apollo/client';

export const ME_QUERY = gql`
  query meQuery {
    me {
      id
      username
      role
      posts {
        author {
          id
        }
        title
        description
        image
        published
      }
    }
  }
`;
