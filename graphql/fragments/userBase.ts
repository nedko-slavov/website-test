import { gql } from '@apollo/client';

const UserBase = gql`
  fragment UserBase on User {
    id
    name
    username
    email
    phone
    website
  }
`;

export default UserBase;
