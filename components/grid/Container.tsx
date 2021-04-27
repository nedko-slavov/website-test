import PropTypes from 'prop-types';
import { HtmlNode } from '../../types';

const Container: React.FC<HtmlNode> = ({ children, className, id }) => (
  <div id={id} className={`container ${className}`}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Container;
