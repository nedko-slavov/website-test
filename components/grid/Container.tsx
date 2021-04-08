import PropTypes from 'prop-types';
import { HtmlNode } from '../../types';

const Container: React.FC<HtmlNode> = ({ children, className }) => (
  <div className={`container ${className}`}>{children}</div>
);

Container.defaultProps = {
  className: '',
};

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
};

export default Container;
