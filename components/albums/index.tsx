import { memo, useState, useCallback } from 'react';
import { useQuery } from '@apollo/client';
import { ALBUMS } from '../../graphql/queries';
import Album from './Album';

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
      <h4>{selectedAlbumText()}</h4>
      {albums.map((album: { id: string; title: string }) => (
        <Album
          key={album.id}
          id={album.id}
          title={album.title}
          onSelect={handleSelecdAlbum}
          selectedAlbum={selectedAlbum}
        />
      ))}
    </>
  );
};

export default memo(Albums);
