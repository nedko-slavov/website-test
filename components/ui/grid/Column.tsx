import PropTypes from 'prop-types';
import { ColumnNode } from '../../../types';

const Column: React.FC<ColumnNode> = ({ children, colWidth, className }) => (
  <div className={`col-${colWidth} ${className}`}>{children}</div>
);

Column.defaultProps = {
  className: '',
};

Column.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  colWidth: PropTypes.string.isRequired,
};

export default Column;
