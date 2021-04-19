import { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/ui';

interface AlbumProps {
  id: string;
  title: string;
  onSelect: (id: string) => void;
  selectedAlbum: string;
}

const Album = ({ id, title, onSelect, selectedAlbum }: AlbumProps): JSX.Element => {
  // console.log('Render Album', id);

  const handleSelect = (): void => {
    onSelect(id);
  };

  const isSelected = selectedAlbum === id;
  const selectedStyles = isSelected ? { backgroundColor: 'green', color: 'white' } : {};

  return (
    <div className="album" style={selectedStyles}>
      {title}

      <Button type="button" kind="primary" onClick={handleSelect}>
        Select
      </Button>
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
