import { FC, useContext } from 'react';
import { Column, Container, Row } from '../../components/grid';
import { UserContext } from '../../providers/UserProvider';

const UserInfoPage: FC = () => {
  const { selectedUserContext } = useContext(UserContext);

  const { name, username, email, phone, website } = selectedUserContext;

  return (
    <Container className="spacing-top-lg">
      <h3>User Info</h3>

      <Row className="spacing-top">
        <Column colWidth="6">
          <h5>name: {name}</h5>
        </Column>
        <Column colWidth="6">
          <h5>user name: {username}</h5>
        </Column>
        <Column colWidth="6">
          <h5>email: {email}</h5>
        </Column>
        <Column colWidth="6">
          <h5>phone: {phone}</h5>
        </Column>
        <Column colWidth="6">
          <h5>website: {website}</h5>
        </Column>
      </Row>
    </Container>
  );
};

export default UserInfoPage;
