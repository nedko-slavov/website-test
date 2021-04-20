import { gql } from '@apollo/client';

const ALBUMS = gql`
  query {
    albums {
      data {
        id
        title
        photos(options: { slice: { start: 1, end: 2 } }) {
          data {
            id
            thumbnailUrl
          }
        }
      }
    }
  }
`;

export default ALBUMS;
