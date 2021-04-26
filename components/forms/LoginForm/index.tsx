import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';
import { useForm } from 'react-hook-form';
import { USERS } from '../../../graphql/queries';
import { UserContext } from '../../../providers/UserProvider';
import router from 'next/router';
import { SelectInput } from '../../inputsFields';
import Form from '../../Form';
import Button from '../../Button';
import { IFormValues, User } from '../../../types';
import { initialUserValues } from '../../../defaults';

const LoginForm: React.FC = () => {
  const { loading, error, data } = useQuery(USERS);
  const { setUserContext } = useContext(UserContext);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ defaultValues: initialUserValues });

  if (loading) return <div>Loading...</div>;
  if (error) return <p>`Error! ${error.message}`</p>;

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
