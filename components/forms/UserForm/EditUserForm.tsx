import { FC } from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { UPDATE_USER } from '../../../graphql/mutations';
import { USERS } from '../../../graphql/queries';
import UserForm from './UserForm';
import { useUserContext } from '../../../providers/UserProvider';
import { useRouter } from 'next/router';
import { IFormValues, User } from '../../../types';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';
import { initialUserValues } from '../../../defaults';

const localStorageUser = (): User => {
  const localStorageUser = localStorage.getItem('selectedUserContext');
  if (localStorageUser !== null) {
    return JSON.parse(localStorageUser);
  }

  return initialUserValues;
};

const userData = (): User => {
  const { id, name, username, email, phone, website } = localStorageUser();

  return {
    id,
    name,
    username,
    email,
    phone,
    website,
  };
};

const EditUserForm: FC = () => {
  const { setUserContext } = useUserContext();
  const router = useRouter();
  const { pid } = router.query;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ defaultValues: userData(), resolver: yupResolver(schema) });

  const [updateUser, { loading, error }] = useMutation(UPDATE_USER, {
    onCompleted(user) {
      if (user) {
        setUserContext(user.updateUser);
        router.push(`/user/${user.updateUser.id}`);
      }
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  const onSubmit = (data: IFormValues): void => {
    const { name, username, email, phone, website } = data;
    const fields = {
      name,
      username,
      email,
      phone,
      website,
    };

    updateUser({
      variables: { id: pid, input: fields },
      refetchQueries: [{ query: USERS }],
    });
  };

  return (
    <UserForm
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      submitButonLabel="Edit"
      errors={errors}
    />
  );
};

export default EditUserForm;
