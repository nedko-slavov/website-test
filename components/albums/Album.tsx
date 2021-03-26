import { memo } from 'react';
import PropTypes from 'prop-types';

interface AlbumProps {
  album: { id: string; title: string };
  onSelect: (id: string) => void;
  selectedAlbum: string;
}

const Album = ({ album, onSelect, selectedAlbum }: AlbumProps): JSX.Element => {
  console.log('Render Album', album.id);

  const handleSelect = (): void => {
    onSelect(album.id);
  };

  const isSelected = selectedAlbum === album.id;
  const selectedStyles = isSelected ? { backgroundColor: 'green', color: 'white' } : {};

  return (
    <div className="album" style={selectedStyles}>
      {album.title}

      <button type="button" className="btn-primary" onClick={handleSelect}>
        select
      </button>
    </div>
  );
};

Album.propTypes = {
  album: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedAlbum: PropTypes.string.isRequired,
};

export default memo(Album, (oldProps, newProps) => {
  return (
    newProps.album.id !== newProps.selectedAlbum && oldProps.album.id !== oldProps.selectedAlbum
  );
});
