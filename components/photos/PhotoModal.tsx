import { FC } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import Modal from '../Modal';
import { FullPageLoader } from '../Loaders';
import { PHOTO } from '../../graphql/queries';
import { PhotoModalProps } from '../../types';

const PhotoModal: FC<PhotoModalProps> = ({ isOpen, onClose, selectedPhotoId }) => {
  const { loading, error, data } = useQuery(PHOTO, { variables: { id: selectedPhotoId } });

  if (loading) return <FullPageLoader />;
  if (error) return <p>`Error! ${error.message}`</p>;

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
