import { gql } from '@apollo/client';
import { UserBase } from '../fragments';

const CREATE_USER = gql`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      ...UserBase
    }
  }
  ${UserBase}
`;

export default CREATE_USER;
