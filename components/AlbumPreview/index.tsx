import { FC } from 'react';
import PropTypes from 'prop-types';
import { Column, Row } from '../../components/grid';
import { AlbumPreviewProps } from '../../types';

const AlbumPreview: FC<AlbumPreviewProps> = ({ title, photos }) => (
  <div className="user-albums">
    <h5 className="title">{title}</h5>
    <Row>
      {photos.map((photo) => (
        <Column colWidth="2" key={photo.id}>
          <img src={photo.thumbnailUrl} alt="" />
        </Column>
      ))}
    </Row>
  </div>
);

AlbumPreview.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired,
};

export default AlbumPreview;
