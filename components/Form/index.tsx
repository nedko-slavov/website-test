import { FC } from 'react';
import PropTypes from 'prop-types';
import { FromProps } from '../../types';

const Form: FC<FromProps> = ({ onSubmit, children, className }) => (
  <form onSubmit={onSubmit} className={className ? className : ''}>
    {children}
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export default Form;
