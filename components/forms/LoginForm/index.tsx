import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { USERS } from '../../../graphql/queries';
import { UserContext } from '../../../providers/UserProvider';
import router from 'next/router';
import { Button, Form, SelectInput } from '../../ui';
import { IFormValues } from '../../../types';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const iniState = {
  id: '',
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
};

const LoginForm: React.FC = () => {
  const { loading, error, data } = useQuery(USERS);
  const { setUserContext } = useContext(UserContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ defaultValues: iniState });

  if (loading) return <div>Loading...</div>;
  if (error) return <p>`Error! ${error}`</p>;

  const users = data && data.users.data;

  const onSubmit = (data: IFormValues): void => {
    const user = users.find((user: User) => user.id === data.userId);

    setUserContext(user);
    router.push('/photos');
  };

  const selectOptions = users.map((user: User) => ({ value: user.id, label: user.name }));

  return (
    <Form className="login" onSubmit={handleSubmit(onSubmit)}>
      <SelectInput
        name="userId"
        errors={errors}
        register={register}
        required
        options={selectOptions}
      />

      <Button type="submit" kind="primary">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
