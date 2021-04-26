import { FC } from 'react';

import { Container } from '../grid';
import UserActions from './UserActions';
import Navigation from './Navigation';

const Header: FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="wrapper">
          <Navigation />

          <UserActions />
        </div>
      </Container>
    </header>
  );
};

export default Header;
