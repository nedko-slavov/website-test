import { gql } from '@apollo/client';

const ALBUMS = gql`
  query {
    albums {
      data {
        id
        title
      }
    }
  }
`;

export default ALBUMS;
