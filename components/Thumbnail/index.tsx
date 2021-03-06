import { memo, FC } from 'react';
import PropTypes from 'prop-types';
import { ThumbnailProps } from '../../types';

const Thumbnail: FC<ThumbnailProps> = ({ thumbnailUrl, title, id, onSelect }) => {
  const handleSelect = (): void => {
    if (onSelect && id) onSelect(id);
  };

  return (
    <div className="thumbnail-wrapper">
      {onSelect ? (
        <div onClick={handleSelect}>
          <img src={thumbnailUrl} alt={thumbnailUrl} />
          {title && <h5>{title}</h5>}
        </div>
      ) : (
        <>
          <img src={thumbnailUrl} alt={thumbnailUrl} />
          {title && <h5>{title}</h5>}
        </>
      )}
    </div>
  );
};

Thumbnail.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  id: PropTypes.string,
  onSelect: PropTypes.func,
};

export default memo(Thumbnail);
