import React, { FC, useState, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { ALBUMS } from '../../graphql/queries';
import AlbumsSearch from './AlbumsSearch';
import { Container } from '../grid';
import AlbumModal from './AlbumModal';
import AlbumsList from './AlbumsList';
import { GetId } from '../../types';
import { FullPageLoader } from '../Loaders';

const Albums: FC = () => {
  const [selectedAlbumId, setSelectedAlbum] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleAlbumSelect = useCallback<GetId>(
    (id) => {
      setSelectedAlbum(id);
      setModalOpen(true);
    },
    [setSelectedAlbum]
  );

  const handleModalClose = (): void => {
    setModalOpen(false);
  };

  const { loading, error, data } = useQuery(ALBUMS);

  if (loading) return <FullPageLoader />;
  if (error) return <p>`Error! ${error}`</p>;

  const albums = data.albums.data;

  return (
    <>
      <AlbumsSearch onAlbumSelect={handleAlbumSelect} />

      <Container>
        <AlbumsList albums={albums} onSelect={handleAlbumSelect} />

        <AlbumModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          selectedAlbumId={selectedAlbumId}
        />
      </Container>
    </>
  );
};

export default Albums;
