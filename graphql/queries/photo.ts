import { gql } from '@apollo/client';

const PHOTO = gql`
  query($id: ID!) {
    photo(id: $id) {
      id
      url
      title
    }
  }
`;

export default PHOTO;
