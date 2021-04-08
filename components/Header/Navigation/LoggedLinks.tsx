import { FC, useContext, MouseEvent } from 'react';
import Link from 'next/link';
import router from 'next/router';
import PropTypes from 'prop-types';
import { UserContext } from '../../../providers/UserProvider';

const iniState = {
  id: '',
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
};

interface NavigationProps {
  userInfo: string;
}

const LoggedLinks: FC<NavigationProps> = ({ userInfo }) => {
  const { setUserContext } = useContext(UserContext);

  const handleLogut = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setUserContext({
      id: '',
      email: '',
      name: '',
      website: '',
      username: '',
      phone: '',
    });
    localStorage.setItem('selectedUserContext', JSON.stringify(iniState));
    router.push('/login');
  };

  return (
    <>
      <Link href={`/user/${userInfo}`}>
        <a>User Info</a>
      </Link>

      <a href="#" onClick={handleLogut}>
        Logout
      </a>
    </>
  );
};

LoggedLinks.propTypes = {
  userInfo: PropTypes.string.isRequired,
};

export default LoggedLinks;
