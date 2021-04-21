import { memo, FC } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/ui';

interface AlbumProps {
  id: string;
  title: string;
  photo: string;
  onSelect: (id: string) => void;
  selectedAlbum: string;
}

const Album: FC<AlbumProps> = ({ id, title, onSelect, selectedAlbum, photo }) => {
  const handleSelect = (): void => {
    onSelect(id);
  };

  const isSelected = selectedAlbum === id;
  const selectedStyles = isSelected ? { backgroundColor: 'green', color: 'white' } : {};

  return (
    <div className="thumbnail-wrapper" style={selectedStyles}>
      <img src={photo} alt="" />

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
  photo: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selectedAlbum: PropTypes.string.isRequired,
};

export default memo(Album, (oldProps, newProps) => {
  return newProps.id !== newProps.selectedAlbum && oldProps.id !== oldProps.selectedAlbum;
});
