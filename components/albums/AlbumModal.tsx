import { FC } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '../../hooks';
import { ALBUM } from '../../graphql/queries';
import { Column, Row } from '../grid';
import Modal from '../Modal';
import Thumbnail from '../Thumbnail';
import { FullPageLoader } from '../Loaders';
import { AlbumModalProps, ThumbnailProps, QueryFindByIdVars } from '../../types';

type Album = {
  album: {
    title: string;
    user: { name: string };
    photos: { data: ThumbnailProps[] };
  };
};

const AlbumModal: FC<AlbumModalProps> = ({ isOpen, onClose, selectedAlbumId }) => {
  const { loading, data } = useQuery<Album, QueryFindByIdVars>(ALBUM, {
    variables: { id: selectedAlbumId },
  });

  if (loading) return <FullPageLoader />;

  if (!data?.album) return null;

  const album = data.album;
  const {
    title,
    user: { name },
    photos,
  } = album;

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
