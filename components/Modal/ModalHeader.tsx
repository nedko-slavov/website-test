import { FC } from 'react';
import PropTypes from 'prop-types';
import { ModalHeaderProps } from '../../types';

const ModalHeader: FC<ModalHeaderProps> = ({ title, onClose }) => {
  return (
    <div className="modal-header">
      {title && <h4 className="title">{title} </h4>}

      <button type="button" className="close" onClick={onClose} />
    </div>
  );
};

ModalHeader.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
