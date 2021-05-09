import { FC } from 'react';

import { Container } from '../grid';
import Toolbar from './Toolbar';
import Navigation from './Navigation';

const Header: FC = () => {
  return (
    <header className="header">
      <Container>
        <div className="wrapper">
          <Navigation />

          <Toolbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
