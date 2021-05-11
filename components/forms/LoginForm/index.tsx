import React from 'react';
import { useQuery } from '../../../hooks';
import { useForm } from 'react-hook-form';
import { USERS } from '../../../graphql/queries';
import { useUserContext } from '../../../providers/UserProvider';
import router from 'next/router';
import { SelectInput } from '../../inputsFields';
import Form from '../../Form';
import Button from '../../Button';
import { IFormValues, User } from '../../../types';
import { initialUserValues } from '../../../defaults';
import { FullPageLoader } from '../../Loaders';

const LoginForm: React.FC = () => {
  const { loading, data } = useQuery(USERS);
  const { setUserContext } = useUserContext();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ defaultValues: initialUserValues });

  if (loading) return <FullPageLoader />;

  const users = data && data.users.data;

  const onSubmit = (data: IFormValues): void => {
    const user = users.find((user: User) => user.id === data.userId);

    setUserContext(user);
    router.push(`/user/${user.id}/albums`);
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

      <Button type="submit" kind="primary" label="Login" />
    </Form>
  );
};

export default LoginForm;
