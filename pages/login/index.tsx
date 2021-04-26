import { FC } from 'react';
import { Column, Container, Row } from '../../components/grid';
import LoginForm from '../../components/forms/LoginForm';

const LoginPage: FC = () => {
  return (
    <Container className="spacing-top-lg">
      <div className="spacing-bottom">
        <h3>Login</h3>
      </div>

      <Row>
        <Column colWidth="4">
          <LoginForm />
        </Column>
      </Row>
    </Container>
  );
};

export default LoginPage;
