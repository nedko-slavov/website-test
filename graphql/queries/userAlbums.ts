import { gql } from '@apollo/client';

const USER_ALBUMS = gql`
  query PhotothumbnailAndTitle($id: ID!) {
    user(id: $id) {
      albums {
        data {
          id
          title
          photos {
            data {
              id
              thumbnailUrl
            }
          }
        }
      }
    }
  }
`;

export default USER_ALBUMS;
