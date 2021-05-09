import { FC } from 'react';
import { Container } from '../../../../components/grid';
import { useQuery } from '@apollo/client';
import { USER_ALBUMS } from '../../../../graphql/queries';
import { FullPageLoader } from '../../../../components/Loaders';
import { useUserContext } from '../../../../providers/UserProvider';
import Pagination from '../../../../components/paginate';
import AlbumPreview from '../../../../components/user/Albums';

const UserAlbumsPage: FC = () => {
  const {
    selectedUserContext: { id },
  } = useUserContext();

  const { loading, error, data } = useQuery(USER_ALBUMS, {
    variables: { id },
  });

  if (loading) return <FullPageLoader />;
  if (error) return <p>`Error! ${error}`</p>;

  const albums = data.user.albums.data;

  return (
    <Container className="spacing-both-lg">
      <h3>User Albums</h3>

      <Pagination data={albums} pageSize={1} Component={AlbumPreview} />
    </Container>
  );
};

export default UserAlbumsPage;
