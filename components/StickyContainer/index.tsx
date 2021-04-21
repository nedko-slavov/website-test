import { FC } from 'react';
import PropTypes from 'prop-types';
import { HtmlNode } from '../../types';

const StickyContainer: FC<HtmlNode> = ({ children, className }) => (
  <div className={`sticky-container ${className ? className : ''}`}>{children}</div>
);

StickyContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default StickyContainer;
