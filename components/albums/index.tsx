import React, { memo, useState, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { ALBUMS } from '../../graphql/queries';
import Album from './Album';
import AlbumsSearch from './AlbumsSearch';
import { Row, Column } from '../ui/grid';

type ThumbnailUrl = { thumbnailUrl: string };

type PhotosData = {
  data: ThumbnailUrl[];
};

type Album = {
  id: string;
  title: string;
  photos: PhotosData;
};

const Albums = (): JSX.Element => {
  const [selectedAlbum, setSelectedAlbum] = useState('');

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

  const selectedAlbumText = (): string => {
    if (selectedAlbum) {
      const albumTitle = albums.find(
        (album: { id: string; title: string }) => album.id === selectedAlbum
      ).title;

      return `Selected Album: ${albumTitle}`;
    }

    return 'Album no selected';
  };

  return (
    <>
      <Row>
        <Column colWidth="5" className="spacing-bottom">
          <AlbumsSearch />
        </Column>
      </Row>
      <h4>{selectedAlbumText()}</h4>
      <Row>
        {albums.map((album: Album) => (
          <Column colWidth="3" key={album.id}>
            <Album
              id={album.id}
              title={album.title}
              photo={album.photos.data[0].thumbnailUrl}
              onSelect={handleSelecdAlbum}
              selectedAlbum={selectedAlbum}
            />
          </Column>
        ))}
      </Row>
    </>
  );
};

export default memo(Albums);
