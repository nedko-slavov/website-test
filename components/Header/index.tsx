import { useContext, FC } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { Container } from '../ui/grid';
import UserInfo from './UserInfo';
import Navigation from './Navigation';

const Header: FC = () => {
  const {
    selectedUserContext: { name, id },
  } = useContext(UserContext);

  return (
    <header className="header">
      <Container>
        <div className="wrapper">
          <Navigation userInfo={id} />

          {name ? <UserInfo name={name} /> : null}
        </div>
      </Container>
    </header>
  );
};

export default Header;
