import { FC } from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';

const Layout: FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
