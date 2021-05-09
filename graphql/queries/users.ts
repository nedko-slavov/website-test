import { gql } from '@apollo/client';
import { UserBase } from '../fragments';

const USERS = gql`
  query {
    users {
      data {
        ...UserBase
      }
    }
  }
  ${UserBase}
`;

export default USERS;
