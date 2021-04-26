import { FC } from 'react';
import PropTypes from 'prop-types';

const ContentWrapper: FC = ({ children }) => {
  return <div className="content">{children}</div>;
};

ContentWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default ContentWrapper;
