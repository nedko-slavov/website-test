import { gql } from '@apollo/client';

const PHOTOS = gql`
  query PhotothumbnailAndTitle($options: PageQueryOptions) {
    photos(options: $options) {
      data {
        id
        title
        thumbnailUrl
      }
      links {
        first {
          page
        }
        next {
          page
        }
        last {
          page
        }
      }
      meta {
        totalCount
      }
    }
  }
`;

export default PHOTOS;
