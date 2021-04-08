import { memo } from 'react';
import PropTypes from 'prop-types';

interface AlbumProps {
  id: string;
  title: string;
  onSelect: (id: string) => void;
  selectedAlbum: string;
}

const Album = ({ id, title, onSelect, selectedAlbum }: AlbumProps): JSX.Element => {
  console.log('Render Album', id);

  const handleSelect = (): void => {
    onSelect(id);
  };

  const isSelected = selectedAlbum === id;
  const selectedStyles = isSelected ? { backgroundColor: 'green', color: 'white' } : {};

  return (
    <div className="album" style={selectedStyles}>
      {title}

      <button type="button" className="btn-primary" onClick={handleSelect}>
        select
      </button>
    </div>
  );
};

Album.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedAlbum: PropTypes.string.isRequired,
};

export default memo(Album, (oldProps, newProps) => {
  return newProps.id !== newProps.selectedAlbum && oldProps.id !== oldProps.selectedAlbum;
});
