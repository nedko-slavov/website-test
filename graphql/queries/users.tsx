import { gql } from '@apollo/client';

const USERS = gql`
  query {
    users {
      data {
        id
        name
        email
        phone
        website
      }
    }
  }
`;

export default USERS;
