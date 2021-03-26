import { Column, Container, Row } from '../../components/layout';
import LoginForm from '../../components/forms/LoginForm';

// Sincere@april.biz

const LoginPage: React.ReactNode = () => {
  return (
    <Container>
      <h3>Login</h3>

      <Row>
        <Column colWidth="6">
          <LoginForm />
        </Column>
      </Row>
    </Container>
  );
};

export default LoginPage;
