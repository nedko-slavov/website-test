import { FC } from 'react';
import Header from '../Header';
import PropTypes from 'prop-types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
