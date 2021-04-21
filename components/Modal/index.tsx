import { FC } from 'react';
import PropTypes from 'prop-types';

type Modal = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const Modal: FC<Modal> = ({ isOpen, title, onClose, children }) => {
  return (
    <div className={`modal-wrapper ${isOpen ? 'visible' : ''}`}>
      <div className="modal">
        <div className="modal-header">
          {title && <h4>{title} </h4>}
          <button type="button" onClick={onClose}>
            close
          </button>
        </div>

        {children}
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
