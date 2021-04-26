import { gql } from '@apollo/client';

const ALBUMS = gql`
  query {
    albums {
      data {
        id
        title
        photos(options: { paginate: { limit: 1 } }) {
          data {
            thumbnailUrl
          }
        }
      }
    }
  }
`;

export default ALBUMS;
