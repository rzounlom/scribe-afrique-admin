import { gql } from '@apollo/client';

export const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $title: String!
    $description: String!
    $published: Boolean!
    $image: String!
  ) {
    loginUser(
      data: {
        title: $title
        description: $description
        published: $published
        image: $image
      }
    ) {
      message
    }
  }
`;
