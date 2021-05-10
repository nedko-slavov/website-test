import { FC } from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { CREATE_USER } from '../../../graphql/mutations';
import { USERS } from '../../../graphql/queries';
import UserForm from './UserForm';
import { IFormValues, User } from '../../../types';
import { useUserContext } from '../../../providers/UserProvider';
import router from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import { FullPageLoader } from '../../Loaders';

const CreateUserForm: FC = () => {
  const { setUserContext } = useUserContext();

  const [addUser, { loading }] = useMutation(CREATE_USER, {
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

  if (loading) return <FullPageLoader />;

  const onSubmit = (data: User): void => {
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
