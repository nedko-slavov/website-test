import { FC } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { ALBUM } from '../../graphql/queries';
import { Column, Row } from '../grid';
import Modal from '../Modal';
import Thumbnail from '../Thumbnail';
import Loader from '../Loader';
import { AlbumModalProps, ThumbnailProps } from '../../types';

const AlbumModal: FC<AlbumModalProps> = ({ isOpen, onClose, selectedAlbumId }) => {
  const { loading, error, data } = useQuery(ALBUM, { variables: { id: selectedAlbumId } });

  if (loading) return <Loader />;
  if (error) return <p>`Error! ${error.message}`</p>;
  const {
    title,
    user: { name },
    photos,
  } = data.album;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <h5>Author: {name}</h5>

      <Row>
        {photos.data.map((photo: ThumbnailProps) => (
          <Column colWidth="3" key={photo.id}>
            <Thumbnail thumbnailUrl={photo.thumbnailUrl} title={photo.title} />
          </Column>
        ))}
      </Row>
    </Modal>
  );
};

AlbumModal.propTypes = {
  selectedAlbumId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AlbumModal;
