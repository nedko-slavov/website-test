import { FC, useContext } from 'react';
import { Container } from '../../../../components/grid';
import { useQuery } from '@apollo/client';
import { USER_ALBUMS } from '../../../../graphql/queries';
import { FullPageLoader } from '../../../../components/Loaders';
import { UserContext } from '../../../../providers/UserProvider';
import { UserPageAlbum } from '../../../../types';
import AlbumPreview from '../../../../components/AlbumPreview';

const UserAlbumsPage: FC = () => {
  const {
    selectedUserContext: { id },
  } = useContext(UserContext);

  const { loading, error, data } = useQuery(USER_ALBUMS, {
    variables: { id },
  });

  if (loading) return <FullPageLoader />;
  if (error) return <p>`Error! ${error}`</p>;

  const albums = data.user.albums.data;

  return (
    <Container className="spacing-top-lg">
      <h3>User Albums</h3>

      {albums.map((album: UserPageAlbum) => (
        <AlbumPreview key={album.id} title={album.title} photos={album.photos.data} />
      ))}
    </Container>
  );
};

export default UserAlbumsPage;
