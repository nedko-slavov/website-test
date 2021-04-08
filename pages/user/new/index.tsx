import { Container } from '../../../components/grid';
import { FC } from 'react';
import UserForm from '../../../components/forms/UserForm';

const CreateUserPage: FC = () => {
  return (
    <Container className="spacing-top-lg">
      <div className="spacing-bottom">
        <h3>Create User</h3>
      </div>

      <UserForm />
    </Container>
  );
};

export default CreateUserPage;
