import { FC } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '../../hooks';
import Modal from '../Modal';
import { FullPageLoader } from '../Loaders';
import { PHOTO } from '../../graphql/queries';
import { PhotoModalProps, QueryFindByIdVars } from '../../types';

type PhotoQuery = {
  photo: {
    title: string;
    url: string;
  };
};

const PhotoModal: FC<PhotoModalProps> = ({ isOpen, onClose, selectedPhotoId }) => {
  const { loading, data } = useQuery<PhotoQuery, QueryFindByIdVars>(PHOTO, {
    variables: { id: selectedPhotoId },
  });

  if (loading) return <FullPageLoader />;

  if (!data?.photo) return null;

  const { title, url } = data.photo;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="photo-modal">
        <img src={url} alt={url} />
      </div>
    </Modal>
  );
};

PhotoModal.propTypes = {
  selectedPhotoId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PhotoModal;
