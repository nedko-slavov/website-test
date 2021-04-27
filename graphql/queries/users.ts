import { gql } from '@apollo/client';

const USERS = gql`
  query {
    users {
      data {
        id
        name
        username
        email
        phone
        website
      }
    }
  }
`;

export default USERS;
