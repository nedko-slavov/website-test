import { FC, useEffect, useState } from 'react';
import { Container } from '../../../../components/grid';
import { useQuery } from '../../../../hooks';
import { USER_ALBUMS } from '../../../../graphql/queries';
import { FullPageLoader } from '../../../../components/Loaders';
import { useUserContext } from '../../../../providers/UserProvider';
import Pagination from '../../../../components/paginate';
import AlbumPreview from '../../../../components/user/Albums';
import { AlbumPreviewProps, QueryFindByIdVars } from '../../../../types';

type UserAlbumsQuery = {
  user: {
    albums: {
      data: {
        id: string;
        title: string;
        photos: {
          data: { id: string; thumbnailUrl: string }[];
        };
      }[];
    };
  };
};

type AlbumsPaginationData = AlbumPreviewProps[];

const UserAlbumsPage: FC = () => {
  const [albumPage, setAlbumPage] = useState<AlbumPreviewProps | null>(null);

  const {
    selectedUserContext: { id },
  } = useUserContext();

  const { loading, data } = useQuery<UserAlbumsQuery, QueryFindByIdVars>(USER_ALBUMS, {
    variables: { id },
  });

  const handlePageChange = (pageData: AlbumsPaginationData): void => {
    setAlbumPage(pageData[0]);
  };

  useEffect(() => {
    if (data && data.user.albums.data) {
      setAlbumPage(data.user.albums.data[0]);
    }
  }, [data]);

  if (loading) return <FullPageLoader />;

  if (!data?.user?.albums?.data) return null;

  const albums = data.user.albums.data;

  return (
    <Container className="spacing-both-lg">
      <h3>User Albums</h3>

      {albumPage && <AlbumPreview title={albumPage.title} photos={albumPage.photos} />}

      <Pagination<AlbumsPaginationData>
        data={albums}
        pageSize={1}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

export default UserAlbumsPage;
