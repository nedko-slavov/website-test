import PropTypes from 'prop-types';
import { HtmlNode } from '../../types';

const Row: React.FC<HtmlNode> = ({ children, className }) => (
  <div className={`row ${className}`}>{children}</div>
);

Row.defaultProps = {
  className: '',
};

Row.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export default Row;
