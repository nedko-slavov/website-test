import { FC, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { UPDATE_USER } from '../../../graphql/mutations';
import { USERS } from '../../../graphql/queries';
import UserForm from './UserForm';
import { UserContext } from '../../../providers/UserProvider';
import { useRouter } from 'next/router';
import { IFormValues } from '../../../types';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from './schema';

type Inputs = {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const initialState: Inputs = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
};

const localStorageUser = (): Inputs => {
  const localStorageUser = localStorage.getItem('selectedUserContext');
  if (localStorageUser !== null) {
    return JSON.parse(localStorageUser);
  }

  return initialState;
};

const userData = (): Inputs => {
  const { name, username, email, phone, website } = localStorageUser();

  return {
    name,
    username,
    email,
    phone,
    website,
  };
};

const EditUserForm: FC = () => {
  const { setUserContext } = useContext(UserContext);
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
