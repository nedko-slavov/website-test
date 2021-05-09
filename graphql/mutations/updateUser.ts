import { gql } from '@apollo/client';
import { UserBase } from '../fragments';

const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      ...UserBase
    }
  }
  ${UserBase}
`;

export default UPDATE_USER;
