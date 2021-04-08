import { gql } from '@apollo/client';
import { UserBase } from '../fragments';

const USER = gql`
  query($id: ID!) {
    user(id: $id) {
      ...UserBase
    }
  }
  ${UserBase}
`;

export default USER;
