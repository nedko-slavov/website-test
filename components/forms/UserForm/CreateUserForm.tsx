import { FC, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { CREATE_USER } from '../../../graphql/mutations';
import { USERS } from '../../../graphql/queries';
import UserForm from './UserForm';
import { IFormValues } from '../../../types';
import { UserContext } from '../../../providers/UserProvider';
import router from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';

type UserBaseTypes = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const CreateUserForm: FC = () => {
  const { setUserContext } = useContext(UserContext);
  const [addUser, { loading, error }] = useMutation(CREATE_USER, {
    onCompleted(user) {
      if (user) {
        setUserContext(user.createUser);
        router.push(`/user/${user.createUser.id}`);
      }
    },
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ resolver: yupResolver(schema) });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  const onSubmit = (data: UserBaseTypes): void => {
    addUser({
      variables: { input: data },
      refetchQueries: [{ query: USERS }],
    });
  };

  return (
    <UserForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      submitButonLabel="Create"
      errors={errors}
    />
  );
};

export default CreateUserForm;
