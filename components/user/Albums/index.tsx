import { FC } from 'react';
import PropTypes from 'prop-types';
import { Column, Row } from '../../grid';
import { AlbumPreviewProps } from '../../../types';

const AlbumPreview: FC<AlbumPreviewProps> = ({ title, photos }) => {
  return (
    <div className="user-albums">
      <h5 className="title">{title}</h5>

      <Row>
        {photos.data.map((photo) => (
          <Column colWidth="2" key={photo.id}>
            <img src={photo.thumbnailUrl} alt="" />
          </Column>
        ))}
      </Row>
    </div>
  );
};

AlbumPreview.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.shape({ thumbnailUrl: PropTypes.string })),
  }).isRequired,
};

export default AlbumPreview;
