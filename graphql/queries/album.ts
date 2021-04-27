import { gql } from '@apollo/client';

const ALBUM = gql`
  query($id: ID!) {
    album(id: $id) {
      id
      title
      user {
        name
      }
      photos {
        data {
          id
          title
          thumbnailUrl
        }
      }
    }
  }
`;

export default ALBUM;
