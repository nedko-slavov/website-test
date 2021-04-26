import { memo, FC } from 'react';
import PropTypes from 'prop-types';
import { ThumbnailProps } from '../../types';

const Thumbnail: FC<ThumbnailProps> = ({ thumbnailUrl, title }) => (
  <div className="col-3 thumbnail-wrapper">
    <img src={thumbnailUrl} alt="" />
    <h5>{title}</h5>
  </div>
);

Thumbnail.propTypes = {
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default memo(Thumbnail);
