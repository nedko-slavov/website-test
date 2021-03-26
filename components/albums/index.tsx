import { memo, useState, useCallback, useMemo } from 'react';
import { useQuery } from '@apollo/client';
import { ALBUMS } from '../../graphql/queries';
import Album from './Album';

const Albums = (): JSX.Element => {
  console.log('Render Albums wrapper');

  const [selectedAlbum, setSelectedAlbum] = useState('');

  const handleSelecdAlbum = useCallback(
    (id: string): void => {
      setSelectedAlbum(id);
    },
    [setSelectedAlbum]
  );

  const { loading, error, data } = useQuery(ALBUMS);

  const albums = data && data.albums.data;

  const selectedAlbumText = useMemo((): string => {
    if (selectedAlbum) {
      const albumTitle = albums.find(
        (album: { id: string; title: string }) => album.id === selectedAlbum
      ).title;

      return `Selected Album: ${albumTitle}`;
    }

    return 'Album no selected';
  }, [selectedAlbum, albums]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>`Error! ${error}`</p>;

  return (
    <>
      <h4>{selectedAlbumText}</h4>
      {albums.map((album: { id: string; title: string }) => (
        <Album
          key={album.id}
          album={album}
          onSelect={handleSelecdAlbum}
          selectedAlbum={selectedAlbum}
        />
      ))}
    </>
  );
};

export default memo(Albums);
