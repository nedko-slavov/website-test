import { ApolloError, useQuery } from '@apollo/client';
import { USERS } from '../../../graphql/queries';

interface UsersType {
  error?: ApolloError;
  users?: [];
  loading: boolean;
}

const Users = (): UsersType => {
  const { loading, error, data } = useQuery(USERS);

  if (loading) return { loading };

  if (error) {
    return {
      error,
      loading,
    };
  }

  const users = data && data.users.data;

  return {
    users,
    loading,
  };
};

export default Users;
