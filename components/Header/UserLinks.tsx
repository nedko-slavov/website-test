import { FC, MouseEvent } from 'react';
import Link from 'next/link';
import router from 'next/router';
import { useUserContext } from '../../providers/UserProvider';
import { initialUserValues } from '../../defaults';

const UserLinks: FC = () => {
  const {
    selectedUserContext: { username, id },
    setUserContext,
  } = useUserContext();

  const handleLogut = (e: MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setUserContext(initialUserValues);
    localStorage.setItem('selectedUserContext', JSON.stringify(initialUserValues));
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
