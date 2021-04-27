import { gql } from '@apollo/client';

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      name
      username
      email
      phone
      website
    }
  }
`;

export default UPDATE_USER;
