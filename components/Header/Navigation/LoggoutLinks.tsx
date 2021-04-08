import { FC } from 'react';
import Link from 'next/link';

const LoggoutLinks: FC = () => (
  <>
    <Link href="/user/new">
      <a>Create User</a>
    </Link>
    <Link href="/login">
      <a>Login</a>
    </Link>
  </>
);

export default LoggoutLinks;
