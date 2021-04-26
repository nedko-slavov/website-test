import { memo, useCallback, FC } from 'react';
import PropTypes from 'prop-types';
import Button from '../../components/Button';
import { AlbumProps } from '../../types';

const Album: FC<AlbumProps> = ({ id, title, onSelect, cover }) => {
  const handleSelect = useCallback((): void => {
    onSelect(id);
  }, [id, onSelect]);

  return (
    <div className="thumbnail-wrapper">
      <img src={cover} alt={cover} />
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
  cover: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default memo(Album);
