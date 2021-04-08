import { FC } from 'react';
import PropTypes from 'prop-types';
import LoggedLinks from './LoggedLinks';
import LoggoutLinks from './LoggoutLinks';

interface NavigationProps {
  userInfo: string;
}

const Navigation: FC<NavigationProps> = ({ userInfo }) => {
  return (
    <div className="navigation">
      {!userInfo ? <LoggoutLinks /> : null}
      {userInfo ? <LoggedLinks userInfo={userInfo} /> : null}
    </div>
  );
};

Navigation.propTypes = {
  userInfo: PropTypes.string.isRequired,
};

export default Navigation;
