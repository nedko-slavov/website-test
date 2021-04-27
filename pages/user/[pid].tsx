import Link from 'next/link';
import { FC, useContext } from 'react';
import Button from '../../components/Button';
import { Column, Container, Row } from '../../components/grid';
import { UserContext } from '../../providers/UserProvider';
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../../graphql/mutations';
import { USERS } from '../../graphql/queries';
import { useRouter } from 'next/router';
import { initialUserValues } from '../../defaults';

const UserInfoPage: FC = () => {
  const router = useRouter();
  const { pid } = router.query;
  const { selectedUserContext, setUserContext } = useContext(UserContext);
  const { name, username, email, phone, website } = selectedUserContext;

  const [deleteUser, { loading, error }] = useMutation(DELETE_USER, {
    onCompleted(data) {
      if (data.deleteUser) {
        setUserContext(initialUserValues);
        localStorage.setItem('selectedUserContext', JSON.stringify(initialUserValues));
      }
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  const handleDeleteUser = (): void => {
    deleteUser({
      variables: { id: pid },
      refetchQueries: [{ query: USERS }],
    });

    router.push('/login');
  };

  return (
    <Container className="spacing-top-lg">
      <h3>User Info</h3>

      <Row className="spacing-both">
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
      <Link href={`/user/edit/${pid}`}>
        <a className="btn-primary">Edit</a>
      </Link>

      <Button type="button" kind="warning" onClick={handleDeleteUser}>
        Delete
      </Button>
    </Container>
  );
};

export default UserInfoPage;
