import Link from 'next/link';
import { FC } from 'react';
import Button from '../../../components/Button';
import { Column, Container, Row } from '../../../components/grid';
import { useUserContext } from '../../../providers/UserProvider';
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../../../graphql/mutations';
import { USERS } from '../../../graphql/queries';
import { useRouter } from 'next/router';
import { FullPageLoader } from '../../../components/Loaders';

const UserInfoPage: FC = () => {
  const router = useRouter();
  const { userid } = router.query;
  const { selectedUserContext, logoutUser } = useUserContext();
  const { name, username, email, phone, website } = selectedUserContext;

  const [deleteUser, { loading }] = useMutation(DELETE_USER, {
    onCompleted(data) {
      if (data.deleteUser) {
        logoutUser();
      }
    },
  });

  if (loading) return <FullPageLoader />;

  const handleDeleteUser = (): void => {
    deleteUser({
      variables: { id: userid },
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
      <Link href={`/user/edit/${userid}`}>
        <a className="btn-primary">Edit</a>
      </Link>

      <Button type="button" kind="warning" onClick={handleDeleteUser} label="Delete" />
    </Container>
  );
};

export default UserInfoPage;
