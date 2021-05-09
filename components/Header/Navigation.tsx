import { FC } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Navigation: FC = () => {
  return (
    <div className="navigation">
      <Link href="/albums">
        <a>Albums</a>
      </Link>

      <Link href="/">
        <a>Photos</a>
      </Link>
    </div>
  );
};

Navigation.propTypes = {
  userId: PropTypes.string,
};

export default Navigation;
