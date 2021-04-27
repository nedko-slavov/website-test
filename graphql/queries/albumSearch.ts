import { gql } from '@apollo/client';

const ALBUM_SEARCH = gql`
  query AlbumSearch($options: PageQueryOptions) {
    albums(options: $options) {
      data {
        id
        title
      }
    }
  }
`;

export default ALBUM_SEARCH;
