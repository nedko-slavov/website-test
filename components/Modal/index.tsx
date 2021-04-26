import { FC } from 'react';
import PropTypes from 'prop-types';
import ModalHeader from './ModalHeader';
import ContentWrapper from './ContentWrapper';
import { ModalProps } from '../../types';

const Modal: FC<ModalProps> = ({ isOpen, title, onClose, children }) => {
  return (
    <div className={`modal-wrapper ${isOpen ? 'visible' : ''}`}>
      <div className="modal">
        <ModalHeader title={title} onClose={onClose} />
        <ContentWrapper>{children}</ContentWrapper>
      </div>
      <div className="modal-overlay" onClick={onClose} />
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Modal;
