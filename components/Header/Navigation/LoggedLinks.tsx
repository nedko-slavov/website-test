import { FC, useContext, MouseEvent } from 'react';
import Link from 'next/link';
import router from 'next/router';
import PropTypes from 'prop-types';
import { UserContext } from '../../../providers/UserProvider';
import { initialUserValues } from '../../../defaults';
import { NavigationProps } from '../../../types';

const LoggedLinks: FC<NavigationProps> = ({ userId }) => {
  const { setUserContext } = useContext(UserContext);

  const handleLogut = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setUserContext({ ...initialUserValues, id: '' });
    localStorage.setItem('selectedUserContext', JSON.stringify(initialUserValues));
    router.push('/login');
  };

  return (
    <>
      <Link href={`/user/${userId}`}>
        <a>User Info</a>
      </Link>

      <a href="#" onClick={handleLogut}>
        Logout
      </a>
    </>
  );
};

LoggedLinks.propTypes = {
  userId: PropTypes.string.isRequired,
};

export default LoggedLinks;
