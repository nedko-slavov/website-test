import { FC } from 'react';
import { Container } from '../../../components/ui/grid';
import { EditUserForm } from '../../../components/forms/UserForm';

const EditUserPage: FC = () => (
  <Container className="spacing-top-lg">
    <h3>User Edit</h3>

    <EditUserForm />
  </Container>
);

export default EditUserPage;
