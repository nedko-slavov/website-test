import React, { FC, memo, useState, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { ALBUMS } from '../../graphql/queries';
import Album from './Album';
import AlbumsSearch from './AlbumsSearch';
import { Row, Column, Container } from '../ui/grid';
import AlbumModal from './AlbumModal';

type ThumbnailUrl = { thumbnailUrl: string };

type PhotosData = {
  data: ThumbnailUrl[];
};

type Album = {
  id: string;
  title: string;
  photos: PhotosData;
};

const Albums: FC = () => {
  const [selectedAlbumId, setSelectedAlbum] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSelecdAlbum = useCallback(
    (id: string): void => {
      setSelectedAlbum(id);
    },
    [setSelectedAlbum]
  );

  const { loading, error, data } = useQuery(ALBUMS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error! ${error}`</p>;

  const albums = data.albums.data;

  const handleAlbumSelect = (id: string): void => {
    setSelectedAlbum(id);
    setModalOpen(true);
  };

  const handleModalClose = (): void => {
    setModalOpen(false);
  };

  return (
    <>
      <AlbumsSearch onAlbumSelect={handleAlbumSelect} />

      <Container>
        <Row>
          {albums.map((album: Album) => (
            <Column colWidth="3" key={album.id}>
              <Album
                id={album.id}
                title={album.title}
                photo={album.photos.data[0].thumbnailUrl}
                onSelect={handleSelecdAlbum}
                selectedAlbum={selectedAlbumId}
              />
            </Column>
          ))}
        </Row>

        <AlbumModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          selectedAlbumId={selectedAlbumId}
        />
      </Container>
    </>
  );
};

export default memo(Albums);
