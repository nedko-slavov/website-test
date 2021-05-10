import { FC, MouseEvent } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { useUserContext } from '../../providers/UserProvider';

const UserLinks: FC = () => {
  const {
    selectedUserContext: { username, id },
    logoutUser,
  } = useUserContext();

  const handleLogut = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    logoutUser();
    router.push('/login');
  };

  return (
    <div className="submenu">
      <Link href={`/user/${id}`}>
        <a>{username}</a>
      </Link>

      <div className="items">
        <Link href={`/user/${id}/albums`}>
          <a className="item">Your albums</a>
        </Link>

        <a href="#" className="item" onClick={handleLogut}>
          Logout
        </a>
      </div>
    </div>
  );
};

export default UserLinks;
