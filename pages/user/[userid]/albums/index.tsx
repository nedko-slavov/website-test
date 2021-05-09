import { FC, useState } from 'react';
import { Container } from '../../../../components/grid';
import { useQuery } from '@apollo/client';
import { USER_ALBUMS } from '../../../../graphql/queries';
import { FullPageLoader } from '../../../../components/Loaders';
import { useUserContext } from '../../../../providers/UserProvider';
import Pagination from '../../../../components/paginate';
import AlbumPreview from '../../../../components/user/Albums';
import { AlbumPreviewProps } from '../../../../types';

const UserAlbumsPage: FC = () => {
  const [albumPage, setAlbumPage] = useState<AlbumPreviewProps | null>(null);

  const {
    selectedUserContext: { id },
  } = useUserContext();

  const { loading, data } = useQuery(USER_ALBUMS, {
    variables: { id },
  });

  const handlePageChange = (pageData: AlbumPreviewProps): void => {
    console.log('pageData', pageData);
    setAlbumPage(pageData);
  };

  if (loading) return <FullPageLoader />;

  const albums = data.user.albums.data;

  return (
    <Container className="spacing-both-lg">
      <h3>User Albums</h3>

      {albumPage && <AlbumPreview title={albumPage.title} photos={albumPage.photos} />}

      <Pagination<AlbumPreviewProps> data={albums} pageSize={1} onPageChange={handlePageChange} />
    </Container>
  );
};

export default UserAlbumsPage;
