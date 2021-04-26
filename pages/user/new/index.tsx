import { Container } from '../../../components/grid';
import { FC } from 'react';
import { CreateUserForm } from '../../../components/forms/UserForm';

const CreateUserPage: FC = () => {
  return (
    <Container className="spacing-top-lg">
      <div className="spacing-bottom">
        <h3>Create User</h3>
      </div>

      <CreateUserForm />
    </Container>
  );
};

export default CreateUserPage;
